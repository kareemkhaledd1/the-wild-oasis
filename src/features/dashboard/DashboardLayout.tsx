import styled from "styled-components";
import { useRecentBookings } from "../../hooks/useRecentBookings.ts";
import Spinner from "../../ui/Spinner.tsx";
import { useRecentStays } from "../../hooks/useRecentStays.ts";
import Stats from "./stats.tsx";
import { useCabins } from "../../hooks/useCabins.ts";
import SalesChart from "./SalesChart.tsx";
import DurationChart from "./DurationChart.tsx";
import TodayActivity from "../check-in-out/TodayActivity.tsx";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isPending: isPending1 } = useRecentBookings();
  const { confirmedStays, isPending: isPending2, numDays } = useRecentStays();

  const { cabins, isPending: isPending3 } = useCabins();

  if (isPending1 || isPending2 || isPending3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinsCount={cabins?.length || 0}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
