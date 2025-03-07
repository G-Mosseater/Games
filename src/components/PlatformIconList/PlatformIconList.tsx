import { Platform } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (

    <>
<HStack marginY={"10px"}>
  {platforms?.map((platform) => {
    const IconComponent = iconMap[platform.slug];
    return IconComponent ? (
      <Icon key={platform.name} as={IconComponent} color="gray.500" />
    ) : (
      <Text key={platform.name}>No icon available</Text> 
    );
  })}
</HStack>

    </>
  );
};

export default PlatformIconList;
