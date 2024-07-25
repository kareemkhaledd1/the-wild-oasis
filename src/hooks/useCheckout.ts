import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../services/apiBookings.ts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId: number) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked out successfully`);
      queryClient.invalidateQueries();
      navigate("/bookings");
    },
    onError: () => {
      toast.error("Error checking out the booking");
    },
  });

  return { checkout, isCheckingOut };
};
