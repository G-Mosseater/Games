import { HStack, Image,Text } from "@chakra-ui/react";
import logo from '@/assets/logo.webp'
import { ColorModeButton } from "../../components/ui/color-mode";
import { SearchInput } from "../SearchInput/SearchInput";

interface Props {
  onSearch:(searchText:string) => void;
}
const  NavBar = ({onSearch}:Props) =>  {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px'></Image>
      <SearchInput onSearch={onSearch}/>
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
