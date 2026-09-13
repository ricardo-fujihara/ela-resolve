import { APP_TEXTS } from "@/constants/texts";
import { HomeHelpRequest } from "@/interfaces";
import { componentStyles } from "@/styles/componentStyles";
import { View } from "react-native";
import LabeledInput from "./LabeledInput";
import PrimaryButton from "./PrimaryButton";

interface ProblemFormProps {
  form: HomeHelpRequest;
  loading: boolean;
  compact?: boolean;
  onChange: (field: keyof HomeHelpRequest, value: string) => void;
  onSubmit: () => void;
}

export default function ProblemForm({
  form,
  loading,
  compact = false,
  onChange,
  onSubmit
}: ProblemFormProps) {
  return (
    <View
      style={[
        componentStyles.formCard,
        compact ? componentStyles.formCardCompact : null
      ]}
    >
      <LabeledInput
        label={APP_TEXTS.equipmentLabel}
        placeholder={APP_TEXTS.equipmentPlaceholder}
        value={form.equipment}
        compact={compact}
        onChangeText={(value) => onChange("equipment", value)}
      />
      <LabeledInput
        label={APP_TEXTS.symptomLabel}
        placeholder={APP_TEXTS.symptomPlaceholder}
        value={form.symptom}
        compact={compact}
        onChangeText={(value) => onChange("symptom", value)}
        multiline
      />
      <PrimaryButton
        title={APP_TEXTS.analyze}
        loadingTitle={APP_TEXTS.analyzing}
        loading={loading}
        compact={compact}
        onPress={onSubmit}
      />
    </View>
  );
}
