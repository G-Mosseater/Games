import useGames, { Platform } from "@/hooks/useGames";
import { Skeleton, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";
import GameCardContainer from "../GameCard/GameCardContainer";
import { Genre } from "@/hooks/useGenres";




// added a new prop, selectedGEnre
// we pass it to the game hook
interface Props {

  selectedGenre: Genre | null
  selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform} : Props) => {
  //rename games to data if using the useData hook
  const { data, error, isLoading } = useGames(selectedGenre,selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        justifyContent="center"
        placeItems='center'
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap="30px"
        width='100%'
        height='100%'
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
