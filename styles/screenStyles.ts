import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const screenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  keyboardArea: {
    flex: 1
  },
  screen: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.sm
  },
  feedbackArea: {
    flex: 1,
    minHeight: 0,
    marginTop: theme.spacing.sm
  }
});
