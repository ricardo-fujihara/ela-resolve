import { APP_CONFIG } from "@/constants/app";
import {
  GuideStep,
  HomeGuideResponse,
  SafetyLevel
} from "@/interfaces";

const SAFETY_LEVELS: SafetyLevel[] = [
  "PODE_TENTAR",
  "ATENCAO",
  "CHAME_AJUDA"
];

const TEXT_LIMITS = {
  title: 40,
  summary: 120,
  stepTitle: 32,
  instruction: 160,
  reason: 90,
  checkQuestion: 70,
  caution: 70,
  outcome: 150
} as const;

function cleanJson(text: string): string {
  return text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
}

function fitText(value: string, maxLength: number): string {
  const normalized = value.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}

function isStep(step: Partial<GuideStep>): step is GuideStep {
  return (
    typeof step.step === "number" &&
    typeof step.title === "string" &&
    typeof step.instruction === "string" &&
    typeof step.reason === "string" &&
    typeof step.checkQuestion === "string" &&
    (typeof step.caution === "undefined" || typeof step.caution === "string")
  );
}

export function parseGeminiHomeGuide(text: string): HomeGuideResponse {
  const raw = JSON.parse(cleanJson(text)) as Partial<HomeGuideResponse>;

  if (
    typeof raw.title !== "string" ||
    typeof raw.summary !== "string" ||
    !raw.safetyLevel ||
    !SAFETY_LEVELS.includes(raw.safetyLevel) ||
    !Array.isArray(raw.steps) ||
    raw.steps.length === 0 ||
    !raw.steps.every((step) => isStep(step)) ||
    typeof raw.successMessage !== "string" ||
    typeof raw.helpMessage !== "string"
  ) {
    throw new Error("A IA retornou um formato inesperado.");
  }

  const maxSteps =
    raw.safetyLevel === "CHAME_AJUDA"
      ? APP_CONFIG.maxDangerSteps
      : APP_CONFIG.maxSteps;

  return {
    title: fitText(raw.title, TEXT_LIMITS.title),
    summary: fitText(raw.summary, TEXT_LIMITS.summary),
    safetyLevel: raw.safetyLevel,
    steps: raw.steps.slice(0, maxSteps).map((step, index) => ({
      step: index + 1,
      title: fitText(step.title, TEXT_LIMITS.stepTitle),
      instruction: fitText(step.instruction, TEXT_LIMITS.instruction),
      reason: fitText(step.reason, TEXT_LIMITS.reason),
      checkQuestion: fitText(step.checkQuestion, TEXT_LIMITS.checkQuestion),
      caution: step.caution
        ? fitText(step.caution, TEXT_LIMITS.caution)
        : undefined
    })),
    successMessage: fitText(raw.successMessage, TEXT_LIMITS.outcome),
    helpMessage: fitText(raw.helpMessage, TEXT_LIMITS.outcome)
  };
}
