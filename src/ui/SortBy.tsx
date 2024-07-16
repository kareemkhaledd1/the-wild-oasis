import Select from "./Select.tsx";
import { useSearchParams } from "react-router-dom";

interface Option {
  value: string;
  label: string;
}

const SortBy = ({ options }: { options: Option[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || options[0].value;

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      $type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
};

export default SortBy;
