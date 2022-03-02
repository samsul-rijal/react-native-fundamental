import * as React from "react";

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";
import { justifyContent } from "styled-system";

export default function FormNativeBase() {
  return(
    <Box
      safeArea
      bg="primary.100"
      flex={1}
      p={10}
      w="100%"
      mx="auto"
      justifyContent="center"
    >

      <Heading color="cyan.600" size="lg">
        Welcome
      </Heading>

      <Heading color="cyan.600" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={2} mt={5}>
 
        <FormControl>
          <FormControl.Label _text={{color: "primary.700", fontWeight: 'bold', fontSize: "sm"}}>
            Email
          </FormControl.Label>
          <Input />
        </FormControl>

        <FormControl>
          <FormControl.Label _text={{color: "primary.700", fontWeight: 'bold', fontSize: "sm"}}>
            Password
          </FormControl.Label>
          <Input type="password" />

          <Link _text={{fontSize: 'xs', fontWeight: '700', color: "cyan.600"}}>
            Forgot Password?
          </Link>
        </FormControl>

        <VStack space={2} mt={5}>
          <Button colorScheme="cyan" _text={{color: "white"}}>
            Login
          </Button>
        </VStack>
      </VStack>
    </Box>
  )
}
