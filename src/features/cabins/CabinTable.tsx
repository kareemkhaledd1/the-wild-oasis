import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "../../hooks/useCabins.ts";
import Table from "../../ui/Table.tsx";
import { cabin } from "../../utils/types.ts";
import Menus from "../../ui/Menus.tsx";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty.tsx";

function CabinTable() {
  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isPending) {
    return <Spinner />;
  }

  if (!cabins?.length) {
    return <Empty resourceName="cabins" />;
  }

  // 1) Filter

  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins: cabin[] = [];
  if (filterValue === "all") filteredCabins = cabins ?? [];
  if (filterValue === "Without-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0) ?? [];
  if (filterValue === "With-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0) ?? [];

  // 2) Sort

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin: cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
