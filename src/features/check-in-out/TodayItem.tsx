import styled from "styled-components";
import Tag from "../../ui/Tag.tsx";
import { Flag } from "../../ui/Flag.tsx";
import Button from "../../ui/Button.tsx";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton.tsx";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

const TodayItem = ({
  stay,
}: {
  stay: {
    id: number;
    guests: {
      countryFlag: string;
      country: string;
      fullName: string;
    };
    status: string;
    numNights: number;
  };
}) => {
  return (
    <StyledTodayItem>
      {stay.status === "unconfirmed" && <Tag $type={"green"}>Arriving</Tag>}
      {stay.status === "checked-in" && <Tag $type={"blue"}>Departing</Tag>}
      <Flag src={stay.guests.countryFlag} alt={`Flag`} />
      <Guest>{stay.guests.fullName}</Guest>
      <div>{stay.numNights} days</div>
      {stay.status === "unconfirmed" && (
        <Button
          size={"small"}
          $variation={"primary"}
          as={Link}
          to={`/checkin/${stay.id}`}
        >
          Check-in
        </Button>
      )}{" "}
      {stay.status === "checked-in" && <CheckoutButton bookingId={stay.id} />}
    </StyledTodayItem>
  );
};

export default TodayItem;
