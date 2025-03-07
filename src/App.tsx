import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Platform } from "./hooks/useGames";



function App() {

  //use state setting selected genre using the onSelectGenre prop from GenreList
  // onSelectGenre will cause the app to re render, in the next render we pass the selectedgenre to the GameGrid element
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const[selectedPlatform, setSelectedPlatform]=useState<Platform | null>(null)

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
          <NavBar></NavBar>
        </GridItem>
        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }}
          paddingX="8px"
        >
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}></GenreList>  
        
        </GridItem>
        <GridItem area="main">
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=> setSelectedPlatform(platform)}/>
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
