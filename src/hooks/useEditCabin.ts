import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cabin } from "../utils/types.ts";
import { createEditCabin } from "../services/apiCabins.ts";
import toast from "react-hot-toast";

export const useEditCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }: { newCabinData: cabin; id: number }) =>
      createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
  return { editCabin, isEditing };
};
