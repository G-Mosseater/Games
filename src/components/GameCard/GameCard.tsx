import React from "react";
import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";
import getCroppedImage from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root  borderRadius={10} overflow="hidden">
      <Image src={getCroppedImage(game.background_image)}/>
      <Card.Body>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize=""> {game.name}</Heading>

      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
