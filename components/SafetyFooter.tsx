import { APP_TEXTS } from "@/constants/texts";
import { componentStyles } from "@/styles/componentStyles";
import { Text } from "react-native";

export default function SafetyFooter() {
  return <Text style={componentStyles.footerText}>{APP_TEXTS.safetyFooter}</Text>;
}
