import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile ({showProfileData=true}:ProfileProps) {
    return (
    <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>
                        Caio Lemec
                    </Text>
                    <Text color="gray.300" fontSize="small">
                        caiolemec@gmail.com
                    </Text>
                </Box>
            )}
        <Avatar size="md" name="Caio Lemec" src="https://avatars.githubusercontent.com/u/59886891?v=4"/>
    </Flex>
    );
}