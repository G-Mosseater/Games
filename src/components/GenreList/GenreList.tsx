import useData from "@/hooks/useData";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { HStack, List, Spinner, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const GenreList = () => {
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
            <Text fontSize='lg'>{genre.name}</Text>
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
