import { Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/SideBar/index";

export default function UserList () {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size ="lg" fontWeight="normal">Usuários</Heading>

                        <Button 
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={ RiAddLine } fontSize="20"/>}
                        >
                            Criar novo
                        </Button>

                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" w="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="8">Botão</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                <Checkbox colorScheme="pink" /> 
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Caio Lemec</Text>
                                        <Text fontSize="sm" color="gray.300">caiolemec@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    31 de Janeiro, 2021
                                </Td>
                                <Td>
                                    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={ RiPencilLine } fontSize="16" />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            
            </Flex>
        </Box>
    );
}