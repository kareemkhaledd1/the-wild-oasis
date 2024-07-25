import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../services/ApiAuth.ts";
import toast from "react-hot-toast";

export const useSignup = () => {
  const { isPending, mutate: signup } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success("Account created successfully! Please verify your email.");
      console.log(user);
    },
  });

  return { isPending, signup };
};
