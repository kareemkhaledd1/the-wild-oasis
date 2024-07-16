import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../services/apiCabins.ts";
import toast from "react-hot-toast";

export const useCreateCabin = () => {
    const queryClient = useQueryClient();

    const { mutate: createCabin, isPending: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success('New Cabin successfully created');
            queryClient.invalidateQueries({ queryKey: ['cabins'] });
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },

    });
    return {createCabin, isCreating}
}