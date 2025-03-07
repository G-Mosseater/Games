import { Card, CardBody, Box, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "../ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="100%" borderRadius={10} overflow="hidden">
      {/* Image Placeholder */}
      <Box width="100%" height={{ base: "150px", sm: "180px", md: "200px", lg: "220px" }}>
        <Skeleton height="100%" width="100%" />
      </Box>

      {/* Card Body Placeholder */}
      <CardBody>
        <SkeletonText noOfLines={2}/>
        <Skeleton height="20px" width="50%" mt={4} />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
