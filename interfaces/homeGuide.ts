export type SafetyLevel = "PODE_TENTAR" | "ATENCAO" | "CHAME_AJUDA";

export interface HomeHelpRequest {
  equipment: string;
  symptom: string;
}

export interface GuideStep {
  step: number;
  title: string;
  instruction: string;
  reason: string;
  checkQuestion: string;
  caution?: string;
}

export interface HomeGuideResponse {
  title: string;
  summary: string;
  safetyLevel: SafetyLevel;
  steps: GuideStep[];
  successMessage: string;
  helpMessage: string;
}

export interface ApiErrorResponse {
  message: string;
}
