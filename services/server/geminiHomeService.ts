import { HomePromptBuilder } from "@/classes/HomePromptBuilder";
import { HomeGuideResponse, HomeHelpRequest } from "@/interfaces";
import { parseGeminiHomeGuide } from "@/utils/parseGeminiJson";
import axios from "axios";

interface GeminiPart {
  text?: string;
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: GeminiPart[];
    };
  }>;
}

export class GeminiHomeService {
  private readonly apiKey: string;
  private readonly model: string;

  constructor() {
    this.apiKey = process.env.GEMINI_API_KEY ?? "";
    this.model = process.env.GEMINI_MODEL ?? "gemini-3.5-flash-lite";
  }

  async createGuide(request: HomeHelpRequest): Promise<HomeGuideResponse> {
    if (!this.apiKey) {
      throw new Error(
        "GEMINI_API_KEY não configurada no servidor. Consulte o README.md."
      );
    }

    const prompt = HomePromptBuilder.build(request);
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent`;

    const response = await axios.post<GeminiResponse>(
      endpoint,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.45
        }
      },
      {
        timeout: 30000,
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": this.apiKey
        }
      }
    );

    const text = response.data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("")
      .trim();

    if (!text) {
      throw new Error("A API de IA não retornou conteúdo.");
    }

    return parseGeminiHomeGuide(text);
  }
}
