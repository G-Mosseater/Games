import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatform";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";



interface Props {

  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null
}


const PlatformSelector = ({onSelectPlatform,selectedPlatform}: Props) => {
  const { data , error} = usePlatforms();
    if (error) return null
  return (
    <MenuRoot >
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {" "}
          <BsChevronDown />
          {selectedPlatform?.name || 'Platforms'}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem key={platform.id} value="Platform Names" onClick={()=> onSelectPlatform(platform)}>
            {" "}
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
