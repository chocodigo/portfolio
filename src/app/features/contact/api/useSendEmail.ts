import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { sendEmail } from "./sendEmail";

export const useSendEmail = (onSuccess: () => void) => {
  return useMutation({ mutationFn: sendEmail, onSuccess });
};
