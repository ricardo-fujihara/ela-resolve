import {
  ApiErrorResponse,
  HomeGuideResponse,
  HomeHelpRequest
} from "@/interfaces";

interface MutationArgument {
  arg: HomeHelpRequest;
}

const CLIENT_CONNECTION_ERROR =
  "Não consegui acessar o serviço do app. Confira a conexão com a internet e tente novamente.";

export async function requestHomeGuide(
  url: string,
  { arg }: MutationArgument
): Promise<HomeGuideResponse> {
  let response: Response;

  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(arg)
    });
  } catch {
    throw new Error(CLIENT_CONNECTION_ERROR);
  }

  let payload: HomeGuideResponse | ApiErrorResponse;

  try {
    payload = (await response.json()) as HomeGuideResponse | ApiErrorResponse;
  } catch {
    throw new Error(
      "Recebi uma resposta inesperada. Espere alguns instantes e tente novamente."
    );
  }

  if (!response.ok) {
    const message =
      "message" in payload
        ? payload.message
        : "A Manu não conseguiu responder agora. Tente novamente em instantes.";
    throw new Error(message);
  }

  return payload as HomeGuideResponse;
}
