import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <div style={{ position: "relative" }}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            <BsChevronDown />
            Order by: {currentSortOrder?.label || "Relevance"}
          </Button>
        </MenuTrigger>
        <MenuContent
          style={{
            position: "absolute",
            zIndex: 9999,
          }}
        >
          {sortOrders.map((o) => (
            <MenuItem
              onClick={() => onSelectSortOrder(o.value)}
              key={o.value}
              value={o.value}
            >
              {o.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default SortSelector;
