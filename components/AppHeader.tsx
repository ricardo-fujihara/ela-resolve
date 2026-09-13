import { APP_CONFIG } from "@/constants/app";
import { APP_TEXTS } from "@/constants/texts";
import { componentStyles } from "@/styles/componentStyles";
import { theme } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface AppHeaderProps {
  compact?: boolean;
}

export default function AppHeader({ compact = false }: AppHeaderProps) {
  return (
    <View style={componentStyles.header}>
      <View style={componentStyles.brandRow}>
        <View style={componentStyles.logo}>
          <Ionicons name="home" size={23} color={theme.colors.black} />
        </View>
        <View style={componentStyles.brandText}>
          <Text style={componentStyles.title}>{APP_CONFIG.name}</Text>
          <Text style={componentStyles.subtitle}>{APP_CONFIG.subtitle}</Text>
        </View>
      </View>
      {!compact ? (
        <Text style={componentStyles.intro}>{APP_TEXTS.intro}</Text>
      ) : null}
    </View>
  );
}
