import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../services/apiBookings.ts";

export const useTodayActivity = () => {
  const { isPending, data: stays } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });

  return { isPending, stays };
};
