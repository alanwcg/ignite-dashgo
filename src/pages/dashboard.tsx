import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Props } from 'react-apexcharts';
import { Can } from '../components/Can';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { Header } from "../components/Header";
import { SideBar } from '../components/Sidebar';
import { setupAPIClient } from '../services/authApi';
import { withSSRAuth } from '../utils/withSSRAuth';

const options: Props['options'] = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-08-23T00:00:00.000Z',
      '2021-08-24T00:00:00.000Z',
      '2021-08-25T00:00:00.000Z',
      '2021-08-26T00:00:00.000Z',
      '2021-08-27T00:00:00.000Z',
      '2021-08-28T00:00:00.000Z',
      '2021-08-29T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [
  {
    name: 'series1',
    data: [12, 120, 10, 28, 61, 18, 109],
  }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <SideBar />

        <Can permissions={['metrics.list']} roles={['administrator']}>
          <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
            <Box p={["6", "8"]} bgColor="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">Inscritos da semana</Text>

              <Chart options={options} series={series} type="area" height={160} />
            </Box>

            <Box p={["6", "8"]} bgColor="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">Taxa de abertura</Text>

              <Chart options={options} series={series} type="area" height={160} />
            </Box>
          </SimpleGrid>
        </Can>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  console.log(response.data);

  return {
    props: {}
  }
});
