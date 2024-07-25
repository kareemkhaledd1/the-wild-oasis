import Stat from "./Stat.tsx";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { booking } from "../../utils/types.ts";
import { formatCurrency } from "../../utils/helpers.ts";

const Stats = ({
  bookings,
  confirmedStays,
  numDays,
  cabinsCount,
}: {
  bookings: any;
  confirmedStays: any;
  numDays: number;
  cabinsCount: number;
}) => {
  const numOfBookings = bookings.length;

  const sales = bookings.reduce(
    (acc: number, cur: booking) => acc + cur.totalPrice,
    0,
  );

  const checkIns = confirmedStays.length;

  const occupation =
    confirmedStays.reduce(
      (acc: number, cur: booking) => acc + cur.numNights,
      0,
    ) /
    (numDays * cabinsCount);

  const occupancyRate = Math.round(occupation * 100);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title={"Bookings"}
        value={numOfBookings.toString()}
        color={"blue"}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title={"Sales"}
        value={formatCurrency(sales)}
        color={"green"}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title={"Check-ins"}
        value={checkIns.toString()}
        color={"indigo"}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title={"Occupancy rate"}
        value={occupancyRate.toString() + "%"}
        color={"yellow"}
      />
    </>
  );
};

export default Stats;
