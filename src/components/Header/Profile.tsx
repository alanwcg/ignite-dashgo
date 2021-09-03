import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alan Cintra</Text>
          <Text
            color="gray.300"
            fontSize="sm"
          >
            alancintra7@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Alan Cintra"
        src="https://github.com/alanwcg.png"
      />
    </Flex>
  );
}