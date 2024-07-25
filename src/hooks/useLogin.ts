import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/ApiAuth.ts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isLogin, mutate: login } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.data.user);
      navigate("/dashboard", { replace: true });
      console.log(user);
    },
    onError: (error) => {
      console.log(`Error: ${error.message}`);
      toast.error("provided email or password is incorrect");
    },
  });
  return { isLogin, login };
};
