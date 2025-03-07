import useData from "@/hooks/useData";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { HStack, Link, List, Spinner, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";





// created this prop to pass it to App component
//this is done to connect both components and display the selected genre
// notifies the parent component that a new genre was selected
interface Props {

  onSelectGenre: (genre: Genre) => void;
  // selectedGenre: Genre | null
}

///

const GenreList = ({onSelectGenre} : Props) => {
  const { data, isLoading, error } = useData<Genre>("/genres");
  if (error) return null;
  if (isLoading) return <Spinner/>
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8"
              src={getCroppedImage(genre.image_background)}
            />
            <Link fontSize='lg'  href='#' onClick={()=> onSelectGenre(genre)}>{genre.name}</Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

// const GenreList = () => {
//   const { data } = useData<Genre>('/genres')

//   return (
//     <ul>
//       {data.map((d) => (
//         <li key={d.id}>{d.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default GenreList;
