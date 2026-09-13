import { componentStyles } from "@/styles/componentStyles";
import { theme } from "@/styles/theme";
import { ActivityIndicator, Pressable, Text } from "react-native";

interface PrimaryButtonProps {
  title: string;
  loadingTitle?: string;
  loading?: boolean;
  compact?: boolean;
  onPress: () => void;
}

export default function PrimaryButton({
  title,
  loadingTitle,
  loading = false,
  compact = false,
  onPress
}: PrimaryButtonProps) {
  return (
    <Pressable
      style={[
        componentStyles.primaryButton,
        compact ? componentStyles.primaryButtonCompact : null,
        loading ? componentStyles.primaryButtonDisabled : null
      ]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? <ActivityIndicator color={theme.colors.black} /> : null}
      <Text style={componentStyles.primaryButtonText}>
        {loading && loadingTitle ? loadingTitle : title}
      </Text>
    </Pressable>
  );
}
