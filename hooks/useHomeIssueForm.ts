import { HomeHelpRequest } from "@/interfaces";
import { validateHomeHelpRequest } from "@/utils/validation";
import { useState } from "react";

const INITIAL_FORM: HomeHelpRequest = {
  equipment: "",
  symptom: ""
};

export function useHomeIssueForm() {
  const [form, setForm] = useState<HomeHelpRequest>(INITIAL_FORM);

  const updateField = (field: keyof HomeHelpRequest, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const resetForm = () => setForm(INITIAL_FORM);

  return {
    form,
    updateField,
    resetForm,
    validationMessage: validateHomeHelpRequest(form)
  };
}
