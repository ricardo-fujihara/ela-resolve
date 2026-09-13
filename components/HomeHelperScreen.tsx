import { useHomeGuide } from "@/hooks/useHomeGuide";
import { useHomeIssueForm } from "@/hooks/useHomeIssueForm";
import { screenStyles } from "@/styles/screenStyles";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "./AppHeader";
import ErrorCard from "./ErrorCard";
import GuideCard from "./GuideCard";
import OutcomeCard from "./OutcomeCard";
import ProblemForm from "./ProblemForm";
import SafetyFooter from "./SafetyFooter";

type Outcome = "success" | "help" | null;

export default function HomeHelperScreen() {
  const { form, updateField, resetForm, validationMessage } = useHomeIssueForm();
  const { guide, error, loading, analyze, clear } = useHomeGuide();
  const [localError, setLocalError] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [outcome, setOutcome] = useState<Outcome>(null);

  const hasFeedback = Boolean(guide || error || localError);

  const handleAnalyze = async () => {
    Keyboard.dismiss();
    setOutcome(null);
    setPageIndex(0);
    setLocalError("");

    if (validationMessage) {
      clear();
      setLocalError(validationMessage);
      return;
    }

    try {
      await analyze(form);
    } catch {
      // O erro do SWR é mostrado no mesmo painel reutilizável abaixo do botão.
    }
  };

  const handleNewMission = () => {
    Keyboard.dismiss();
    clear();
    resetForm();
    setLocalError("");
    setPageIndex(0);
    setOutcome(null);
  };

  const errorMessage = localError || error?.message || "";

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <KeyboardAvoidingView
        style={screenStyles.keyboardArea}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={screenStyles.screen}>
          <AppHeader compact={hasFeedback} />
          <ProblemForm
            form={form}
            loading={loading}
            compact={hasFeedback}
            onChange={(field, value) => {
              updateField(field, value);
              clear();
              setLocalError("");
              setPageIndex(0);
              setOutcome(null);
            }}
            onSubmit={handleAnalyze}
          />

          {hasFeedback ? (
            <View style={screenStyles.feedbackArea}>
              {errorMessage ? (
                <ErrorCard message={errorMessage} onRetry={handleAnalyze} />
              ) : outcome && guide ? (
                <OutcomeCard
                  type={outcome}
                  message={
                    outcome === "success"
                      ? guide.successMessage
                      : guide.helpMessage
                  }
                  onNewMission={handleNewMission}
                />
              ) : guide ? (
                <GuideCard
                  guide={guide}
                  pageIndex={pageIndex}
                  onPrevious={() =>
                    setPageIndex((current) => Math.max(0, current - 1))
                  }
                  onNext={() =>
                    setPageIndex((current) =>
                      Math.min(guide.steps.length - 1, current + 1)
                    )
                  }
                  onSolved={() => setOutcome("success")}
                  onCallHelp={() => setOutcome("help")}
                />
              ) : null}
            </View>
          ) : null}

          <SafetyFooter />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
