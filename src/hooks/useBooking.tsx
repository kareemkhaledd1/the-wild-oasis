import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../services/apiBookings.ts";
import { useParams } from "react-router-dom";

export const useBooking = () => {
  const { bookingId } = useParams();
  const id = Number(bookingId);

  const {
    isPending,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["bookings", id],
    queryFn: () => getBooking(id),
    retry: false,
  });

  return {
    isPending,
    booking,
    error,
  };
};
