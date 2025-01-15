import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { sendEmail } from "./sendEmail";

export const useSendEmail = (onSuccess: () => void, onError: () => void) => {
  return useMutation({ mutationFn: sendEmail, onSuccess, onError });
};
