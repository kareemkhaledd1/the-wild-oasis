import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../services/apiBookings.ts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckin = () => {
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({
      bookingId,
      breakfast,
    }: {
      bookingId: number;
      breakfast: {};
    }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in successfully`);
      queryClient.invalidateQueries();
      navigate("/bookings");
    },
    onError: () => {
      toast.error("Error checking in the booking");
    },
  });

  return { checkin, isCheckingIn };
};
