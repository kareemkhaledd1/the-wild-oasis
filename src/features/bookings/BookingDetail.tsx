import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { TagType } from "../../utils/types.ts";
import { useBooking } from "../../hooks/useBooking.tsx";
import Spinner from "../../ui/Spinner.tsx";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../hooks/useCheckout.ts";
import { useDeleteBooking } from "../../hooks/useDeleteBooking.ts";
import Modal from "../../ui/Modal.tsx";
import ConfirmDelete from "../../ui/ConfirmDelete.tsx";
import Empty from "../../ui/Empty.tsx";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();

  const { booking, isPending } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();

  const moveBack = useMoveBack();

  if (isPending) return <Spinner />;

  if (!booking) return <Empty resourceName={"booking"} />;

  const { id: bookingId, status } = booking;

  const statusToTagName: { [key: string]: TagType } = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag $type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Modal>
        <ButtonGroup>
          {booking.status === "unconfirmed" && (
            <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
              check in
            </Button>
          )}

          {status === "checked-in" && (
            <Button
              onClick={() => checkout(bookingId)}
              disabled={isCheckingOut}
            >
              check out
            </Button>
          )}
          <Modal.Open opens={"delete"}>
            <Button $variation="danger">Delete</Button>
          </Modal.Open>
          <Modal.Window name={"delete"}>
            <ConfirmDelete
              resourceName={"booking"}
              disabled={isDeleting}
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>

          <Button $variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>
      </Modal>
    </>
  );
}

export default BookingDetail;
