import { HomeHelpRequest } from "@/interfaces";
import { GeminiHomeService } from "@/services/server/geminiHomeService";
import { validateHomeHelpRequest } from "@/utils/validation";
import axios from "axios";

function getGeminiErrorMessage(error: unknown) {
  if (!axios.isAxiosError(error)) {
    return null;
  }

  if (error.code === "ECONNABORTED") {
    return {
      status: 504,
      message:
        "A consulta demorou mais que o esperado. Confira a internet e tente novamente."
    };
  }

  if (!error.response) {
    return {
      status: 503,
      message:
        "Não consegui falar com a IA. Confira sua conexão com a internet e tente novamente."
    };
  }

  const status = error.response.status;

  if (status === 401 || status === 403) {
    return {
      status,
      message:
        "A chave da API Gemini foi recusada. Confira a GEMINI_API_KEY no .env.local."
    };
  }

  if (status === 404) {
    return {
      status,
      message:
        "O modelo de IA configurado não foi encontrado. Confira GEMINI_MODEL."
    };
  }

  if (status === 429) {
    return {
      status,
      message:
        "O limite de uso da IA foi atingido. Aguarde um pouco e tente novamente."
    };
  }

  const apiMessage = error.response.data?.error?.message;

  return {
    status,
    message:
      typeof apiMessage === "string" && apiMessage.trim()
        ? apiMessage
        : "A IA não conseguiu responder agora. Tente novamente em instantes."
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as HomeHelpRequest;
    const validationMessage = validateHomeHelpRequest(body);

    if (validationMessage) {
      return Response.json({ message: validationMessage }, { status: 400 });
    }

    const service = new GeminiHomeService();
    const guide = await service.createGuide(body);

    return Response.json(guide);
  } catch (error) {
    const geminiError = getGeminiErrorMessage(error);

    if (geminiError) {
      return Response.json(
        { message: geminiError.message },
        { status: geminiError.status }
      );
    }

    const message =
      error instanceof Error ? error.message : "Erro interno inesperado.";

    return Response.json({ message }, { status: 500 });
  }
}
