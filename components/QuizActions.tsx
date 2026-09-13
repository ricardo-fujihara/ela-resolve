import { APP_TEXTS } from "@/constants/texts";
import { componentStyles } from "@/styles/componentStyles";
import { Pressable, Text, View } from "react-native";

interface QuizActionsProps {
  question: string;
  forceHelp?: boolean;
  onSolved: () => void;
  onNotYet: () => void;
  onCallHelp: () => void;
}

export default function QuizActions({
  question,
  forceHelp = false,
  onSolved,
  onNotYet,
  onCallHelp
}: QuizActionsProps) {
  if (forceHelp) {
    return (
      <View style={componentStyles.quizBox}>
        <Text style={componentStyles.quizQuestion}>{question}</Text>
        <Pressable
          style={[componentStyles.quizButton, componentStyles.quizSuccess]}
          onPress={onCallHelp}
        >
          <Text style={componentStyles.quizButtonTextDark}>
            {APP_TEXTS.understoodHelp}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={componentStyles.quizBox}>
      <Text style={componentStyles.quizQuestion}>{question}</Text>
      <View style={componentStyles.quizRow}>
        <Pressable
          style={[componentStyles.quizButton, componentStyles.quizSuccess]}
          onPress={onSolved}
        >
          <Text style={componentStyles.quizButtonTextDark}>
            {APP_TEXTS.solved}
          </Text>
        </Pressable>
        <Pressable
          style={[componentStyles.quizButton, componentStyles.quizNext]}
          onPress={onNotYet}
        >
          <Text style={componentStyles.quizButtonTextLight}>
            {APP_TEXTS.notYet}
          </Text>
        </Pressable>
      </View>
      <Pressable style={componentStyles.helpButton} onPress={onCallHelp}>
        <Text style={componentStyles.helpButtonText}>{APP_TEXTS.callHelp}</Text>
      </Pressable>
    </View>
  );
}
