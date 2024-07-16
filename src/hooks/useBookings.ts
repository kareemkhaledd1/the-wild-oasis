import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../services/apiBookings.ts";

export const useBookings = () => {
  const { isPending, data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return {
    isPending,
    bookings,
  };
};
