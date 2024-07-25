import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserData } from "../services/ApiAuth.ts";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: editUser, isPending: isUpdating } = useMutation({
    mutationFn: updateUserData,
    onSuccess: ({ user }) => {
      toast.success("User successfully Updated");

      queryClient.setQueryData(["user"], user);

      // queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
  return { editUser, isUpdating };
};

export default useUpdateUser;
