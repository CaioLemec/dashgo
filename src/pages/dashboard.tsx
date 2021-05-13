import { Header } from "../components/Header/index"
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Sidebar } from "../components/SideBar/index";
import React from "react";
const Chart = dynamic(()=> import('react-apexcharts'), {
    ssr:false,
});

const options= {
    colors: ['#D53F8C'],
    chart: {
        fontFamily: 'Roboto, Arial, sans-serif',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-04-08T00:00:00.000z',
            '2021-04-09T00:00:00.000z',
            '2021-04-10T00:00:00.000z',
            '2021-04-11T00:00:00.000z',
            '2021-04-12T00:00:00.000z',
            '2021-04-13T00:00:00.000z',
            '2021-04-14T00:00:00.000z',
        ],
    },
        fill: {
            colors: theme.colors.gray[600],
            type: 'gradient',
            gradient: {
            shade: 'dark',
            type: "vertical",
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    },
};

const series1= [
    { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109]}
]

const series2= [
    { name: 'series1', data: [21, 41, 20, 50, 61, 31, 39]}
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius="8"
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series1} type="area" height={160} />
                    </Box>
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius="8"
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={options} series={series2} type="area" height={160}/>
                    </Box>
                    
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}