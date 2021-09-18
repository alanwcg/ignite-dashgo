import { Flex, Text } from "@chakra-ui/layout";
import { setupAPIClient } from "../services/authApi";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Forms() {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Text as="h1" fontSize="9xl">Forms</Text>
    </Flex>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  console.log(response.data);

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator'],
});
