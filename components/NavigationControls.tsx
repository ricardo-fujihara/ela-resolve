import { APP_TEXTS } from "@/constants/texts";
import { componentStyles } from "@/styles/componentStyles";
import { theme } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface NavigationControlsProps {
  page: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function NavigationControls({
  page,
  total,
  onPrevious,
  onNext
}: NavigationControlsProps) {
  const firstPage = page <= 1;
  const lastPage = page >= total;

  return (
    <View style={componentStyles.navigationRow}>
      <Pressable
        accessibilityLabel={APP_TEXTS.previous}
        style={[
          componentStyles.navButton,
          firstPage ? componentStyles.navButtonDisabled : null
        ]}
        onPress={onPrevious}
        disabled={firstPage}
      >
        <Ionicons name="arrow-back" size={25} color={theme.colors.black} />
      </Pressable>

      <Text style={componentStyles.navCenterText}>
        {page} {APP_TEXTS.pageOf} {total}
      </Text>

      <Pressable
        accessibilityLabel={APP_TEXTS.next}
        style={[
          componentStyles.navButton,
          lastPage ? componentStyles.navButtonDisabled : null
        ]}
        onPress={onNext}
        disabled={lastPage}
      >
        <Ionicons name="arrow-forward" size={25} color={theme.colors.black} />
      </Pressable>
    </View>
  );
}
