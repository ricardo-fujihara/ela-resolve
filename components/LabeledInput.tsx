import { componentStyles } from "@/styles/componentStyles";
import { theme } from "@/styles/theme";
import { Text, TextInput, View } from "react-native";

interface LabeledInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  multiline?: boolean;
  compact?: boolean;
}

export default function LabeledInput({
  label,
  placeholder,
  value,
  onChangeText,
  multiline = false,
  compact = false
}: LabeledInputProps) {
  return (
    <View style={componentStyles.fieldGroup}>
      <Text style={componentStyles.label}>{label}</Text>
      <TextInput
        style={[
          componentStyles.input,
          compact ? componentStyles.inputCompact : null,
          multiline ? componentStyles.symptomInput : null,
          multiline && compact ? componentStyles.symptomInputCompact : null
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        returnKeyType={multiline ? "default" : "next"}
      />
    </View>
  );
}
