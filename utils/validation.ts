import { HomeHelpRequest } from "@/interfaces";

export function validateHomeHelpRequest(request: HomeHelpRequest): string {
  if (!request.equipment.trim()) {
    return "Diga onde está o problema ou qual equipamento precisa de ajuda.";
  }

  if (request.symptom.trim().length < 8) {
    return "Conte um pouco mais sobre o que está acontecendo para eu conseguir ajudar.";
  }

  return "";
}
