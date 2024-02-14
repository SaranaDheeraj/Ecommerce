import React from "react";
import { FaStar } from "react-icons/fa";
import { HStack, Box } from "@chakra-ui/react";

interface StarRatingProps {
  rating: number;
  count?: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  count = 5,
  size = 20,
}) => {
  return (
    <HStack spacing={"2px"}>
      {[...Array(count)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            display="flex"
            as="label"
            key={index}
            color={ratingValue <= rating ? "yellow.500" : "gray.400"}
          >
            <FaStar cursor={"pointer"} size={size} transition="color 200ms" />
          </Box>
        );
      })}
    </HStack>
  );
};

export default StarRating;
