import { APP_TEXTS } from "@/constants/texts";
import { componentStyles } from "@/styles/componentStyles";
import { Pressable, Text, View } from "react-native";

interface ErrorCardProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorCard({ message, onRetry }: ErrorCardProps) {
  return (
    <View style={componentStyles.errorCard}>
      <Text style={componentStyles.errorTitle}>{APP_TEXTS.errorTitle}</Text>
      <Text style={componentStyles.errorText}>{message}</Text>
      <Pressable style={componentStyles.secondaryButton} onPress={onRetry}>
        <Text style={componentStyles.secondaryButtonText}>{APP_TEXTS.retry}</Text>
      </Pressable>
    </View>
  );
}
