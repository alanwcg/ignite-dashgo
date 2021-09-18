import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { useAuth } from '../../contexts/AuthContext';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  const { user } = useAuth();

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alan Cintra</Text>
          <Text
            color="gray.300"
            fontSize="sm"
          >
            {user?.email}
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