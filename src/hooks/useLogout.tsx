import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../services/ApiAuth.ts";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { isPending, logout };
};
