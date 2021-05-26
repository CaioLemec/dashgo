import { Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination/index";
import { Sidebar } from "../../components/SideBar/index";
import { useQuery } from 'react-query';

export default function UserList () {
    const { data, isLoading, error } = useQuery('users', async () => {
        const response = await fetch ('http://localhost:3000/api/users');
        const data = await response.json();
        return data;
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size ="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                        <Button 
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={ RiAddLine } fontSize="20"/>}
                        >
                            Criar novo
                        </Button>
                        </Link>

                    </Flex>
                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados</Text>
                        </Flex>
                    ) :
                    (
                        <>
                        <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" w="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                <Checkbox colorScheme="pink" /> 
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Caio Lemec</Text>
                                        <Text fontSize="sm" color="gray.300">caiolemec@gmail.com</Text>
                                    </Box>
                                </Td>
                                    { isWideVersion && <Td>29 de janeiro, 2021</Td> }
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                        </>
                    )}
                </Box>
            
            </Flex>
        </Box>
    );
}