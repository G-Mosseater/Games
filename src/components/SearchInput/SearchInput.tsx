import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";


interface Props {
    onSearch:(searchText:string) => void;
}
export const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form style={{width:'100%'}} onSubmit={(event) => {event.preventDefault();
        if (ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup startElement={<LuSearch />} width="100%">
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search..."
          _placeholder={{ color: "#30d5c8" }}
        />
      </InputGroup>
    </form>
  );
};
