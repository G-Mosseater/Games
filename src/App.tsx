import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector/SortSelector";
import { GameHeading } from "./components/GameHeading/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  //use state setting selected genre using the onSelectGenre prop from GenreList
  // onSelectGenre will cause the app to re render, in the next render we pass the selectedgenre to the GameGrid element
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  // const[selectedPlatform, setSelectedPlatform]=useState<Platform | null>(null)
  // deleting these to make code cleaner, we are going to use a state variable of type GameQuery
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav " "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery, searchText})}></NavBar>
        </GridItem>
        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }}
          paddingX="8px"
        >
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
        <GridItem area="main">
          <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}/>
          <HStack gap="10px"  marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            {/* <GameGrid selectedGenre={gameQuery.genre} selectedPlatform={gameQuery.platform}></GameGrid> */}
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
          <GameGrid gameQuery={gameQuery}></GameGrid>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
