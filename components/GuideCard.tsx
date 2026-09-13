import { APP_TEXTS } from "@/constants/texts";
import { HomeGuideResponse } from "@/interfaces";
import { componentStyles } from "@/styles/componentStyles";
import { Text, View } from "react-native";
import NavigationControls from "./NavigationControls";
import QuizActions from "./QuizActions";

interface GuideCardProps {
  guide: HomeGuideResponse;
  pageIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSolved: () => void;
  onCallHelp: () => void;
}

function safetyLabel(level: HomeGuideResponse["safetyLevel"]) {
  if (level === "CHAME_AJUDA") return APP_TEXTS.safetyHelp;
  if (level === "ATENCAO") return APP_TEXTS.safetyAttention;
  return APP_TEXTS.safetyTry;
}

export default function GuideCard({
  guide,
  pageIndex,
  onPrevious,
  onNext,
  onSolved,
  onCallHelp
}: GuideCardProps) {
  const step = guide.steps[pageIndex];
  const total = guide.steps.length;
  const lastPage = pageIndex === total - 1;

  const handleNotYet = () => {
    if (lastPage) {
      onCallHelp();
      return;
    }
    onNext();
  };

  return (
    <View style={componentStyles.feedbackCard}>
      <View style={componentStyles.feedbackTopRow}>
        <View style={componentStyles.safetyBadge}>
          <Text style={componentStyles.safetyBadgeText}>
            {safetyLabel(guide.safetyLevel)}
          </Text>
        </View>
        <Text style={componentStyles.pageCounter}>
          {pageIndex + 1}/{total}
        </Text>
      </View>

      <Text style={componentStyles.guideTitle}>{guide.title}</Text>
      <Text style={componentStyles.guideSummary} numberOfLines={2}>
        {guide.summary}
      </Text>

      <View style={componentStyles.divider} />

      <Text style={componentStyles.stepTag}>
        {APP_TEXTS.stepLabel} {step.step}
      </Text>
      <Text style={componentStyles.stepTitle}>{step.title}</Text>
      <Text style={componentStyles.instruction}>{step.instruction}</Text>
      <Text style={componentStyles.reason}>
        <Text style={componentStyles.reasonStrong}>{APP_TEXTS.whyLabel}: </Text>
        {step.reason}
      </Text>

      {step.caution ? (
        <View style={componentStyles.cautionBox}>
          <Text style={componentStyles.cautionText}>
            {APP_TEXTS.cautionLabel}: {step.caution}
          </Text>
        </View>
      ) : null}

      <View style={componentStyles.guideSpacer} />

      <QuizActions
        question={step.checkQuestion}
        forceHelp={guide.safetyLevel === "CHAME_AJUDA"}
        onSolved={onSolved}
        onNotYet={handleNotYet}
        onCallHelp={onCallHelp}
      />
      <NavigationControls
        page={pageIndex + 1}
        total={total}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </View>
  );
}
