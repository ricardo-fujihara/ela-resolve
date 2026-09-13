import { APP_TEXTS } from "@/constants/texts";
import { componentStyles } from "@/styles/componentStyles";
import { Pressable, Text, View } from "react-native";

interface OutcomeCardProps {
  type: "success" | "help";
  message: string;
  onNewMission: () => void;
}

export default function OutcomeCard({
  type,
  message,
  onNewMission
}: OutcomeCardProps) {
  const success = type === "success";

  return (
    <View style={componentStyles.outcomeCard}>
      <Text style={componentStyles.outcomeEmoji}>{success ? APP_TEXTS.successEmoji : APP_TEXTS.helpEmoji}</Text>
      <Text style={componentStyles.outcomeTitle}>
        {success ? APP_TEXTS.successTitle : APP_TEXTS.helpTitle}
      </Text>
      <Text style={componentStyles.outcomeText}>{message}</Text>
      <Pressable style={componentStyles.secondaryButton} onPress={onNewMission}>
        <Text style={componentStyles.secondaryButtonText}>
          {APP_TEXTS.newMission}
        </Text>
      </Pressable>
    </View>
  );
}
