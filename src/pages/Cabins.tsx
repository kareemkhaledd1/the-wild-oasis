import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabins from "../features/cabins/AddCabins.tsx";
import CabinTableOperations from "../features/cabins/CabinTableOperations.tsx";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
