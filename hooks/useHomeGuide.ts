import { HomeHelpRequest } from "@/interfaces";
import { requestHomeGuide } from "@/services/homeHelpApi";
import useSWRMutation from "swr/mutation";

export function useHomeGuide() {
  const { data, error, isMutating, trigger, reset } = useSWRMutation(
    "/api/ajuda",
    requestHomeGuide
  );

  const analyze = async (request: HomeHelpRequest) => {
    reset();
    return trigger(request);
  };

  return {
    guide: data,
    error,
    loading: isMutating,
    analyze,
    clear: reset
  };
}
