import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const componentStyles = StyleSheet.create({
  header: {
    gap: 4,
    marginBottom: 10
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: theme.colors.yellow,
    alignItems: "center",
    justifyContent: "center"
  },
  brandText: {
    flex: 1
  },
  title: {
    color: theme.colors.white,
    fontSize: 25,
    fontWeight: "800"
  },
  subtitle: {
    color: theme.colors.yellow,
    fontSize: 12,
    fontWeight: "700"
  },
  intro: {
    color: theme.colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4
  },
  formCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.large,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    gap: theme.spacing.sm
  },
  formCardCompact: {
    padding: 10,
    gap: 7
  },
  fieldGroup: {
    gap: 5
  },
  label: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: "700"
  },
  input: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.medium,
    paddingHorizontal: 12,
    color: theme.colors.white,
    backgroundColor: theme.colors.surfaceAlt,
    fontSize: 13
  },
  inputCompact: {
    minHeight: 38,
    fontSize: 12
  },
  symptomInput: {
    minHeight: 72,
    maxHeight: 88,
    paddingTop: 11,
    textAlignVertical: "top"
  },
  symptomInputCompact: {
    minHeight: 50,
    maxHeight: 58,
    paddingTop: 9
  },
  primaryButton: {
    minHeight: 50,
    borderRadius: theme.radius.medium,
    backgroundColor: theme.colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8
  },
  primaryButtonCompact: {
    minHeight: 42
  },
  primaryButtonDisabled: {
    opacity: 0.55
  },
  primaryButtonText: {
    color: theme.colors.black,
    fontSize: 15,
    fontWeight: "900"
  },
  feedbackCard: {
    flex: 1,
    minHeight: 0,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.large,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md
  },
  feedbackTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8
  },
  safetyBadge: {
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.yellow,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  safetyBadgeText: {
    color: theme.colors.black,
    fontSize: 10,
    fontWeight: "900"
  },
  pageCounter: {
    color: theme.colors.yellow,
    fontSize: 14,
    fontWeight: "900"
  },
  guideTitle: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "900",
    marginTop: 8
  },
  guideSummary: {
    color: theme.colors.textMuted,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 3
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.borderSoft,
    marginVertical: 9
  },
  stepTag: {
    color: theme.colors.yellow,
    fontSize: 10,
    fontWeight: "900"
  },
  stepTitle: {
    color: theme.colors.white,
    fontSize: 17,
    fontWeight: "800",
    marginTop: 2
  },
  instruction: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 19,
    marginTop: 6
  },
  reason: {
    color: theme.colors.textMuted,
    fontSize: 11,
    lineHeight: 15,
    marginTop: 5
  },
  reasonStrong: {
    color: theme.colors.yellowSoft,
    fontWeight: "800"
  },
  cautionBox: {
    backgroundColor: theme.colors.surfaceAlt,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.yellow,
    borderRadius: theme.radius.small,
    paddingVertical: 7,
    paddingHorizontal: 9,
    marginTop: 7
  },
  cautionText: {
    color: theme.colors.yellowSoft,
    fontSize: 11,
    lineHeight: 14
  },
  guideSpacer: {
    flex: 1,
    minHeight: 4
  },
  quizBox: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderSoft,
    paddingTop: 8,
    gap: 7
  },
  quizQuestion: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center"
  },
  quizRow: {
    flexDirection: "row",
    gap: 8
  },
  quizButton: {
    flex: 1,
    minHeight: 38,
    borderRadius: theme.radius.medium,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8
  },
  quizSuccess: {
    backgroundColor: theme.colors.yellow
  },
  quizNext: {
    backgroundColor: theme.colors.surfaceAlt,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  quizButtonTextDark: {
    color: theme.colors.black,
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center"
  },
  quizButtonTextLight: {
    color: theme.colors.white,
    fontSize: 11,
    fontWeight: "800",
    textAlign: "center"
  },
  helpButton: {
    minHeight: 32,
    alignItems: "center",
    justifyContent: "center"
  },
  helpButtonText: {
    color: theme.colors.textMuted,
    fontSize: 11,
    fontWeight: "700"
  },
  navigationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8
  },
  navButton: {
    width: 54,
    height: 38,
    borderRadius: theme.radius.medium,
    backgroundColor: theme.colors.yellow,
    alignItems: "center",
    justifyContent: "center"
  },
  navButtonDisabled: {
    opacity: 0.25
  },
  navCenterText: {
    color: theme.colors.textMuted,
    fontSize: 10,
    fontWeight: "700"
  },
  outcomeCard: {
    flex: 1,
    minHeight: 0,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.large,
    borderWidth: 1,
    borderColor: theme.colors.yellow,
    padding: theme.spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  outcomeEmoji: {
    fontSize: 44
  },
  outcomeTitle: {
    color: theme.colors.yellow,
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center"
  },
  outcomeText: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center"
  },
  secondaryButton: {
    minHeight: 44,
    alignSelf: "stretch",
    borderRadius: theme.radius.medium,
    backgroundColor: theme.colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6
  },
  secondaryButtonText: {
    color: theme.colors.black,
    fontWeight: "900",
    fontSize: 14
  },
  errorCard: {
    flex: 1,
    minHeight: 0,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.large,
    borderWidth: 1,
    borderColor: theme.colors.yellow,
    padding: theme.spacing.lg,
    justifyContent: "center",
    gap: 10
  },
  errorTitle: {
    color: theme.colors.yellow,
    fontSize: 19,
    fontWeight: "900"
  },
  errorText: {
    color: theme.colors.text,
    fontSize: 13,
    lineHeight: 19
  },
  footerText: {
    color: theme.colors.textMuted,
    fontSize: 9,
    lineHeight: 12,
    textAlign: "center",
    marginTop: 7
  }
});
