/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Container, Button, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import imageTop from 'images/avatar-round-e4it.jpeg';
const Title = function ({ text, ...styles }) {
  return (
    <Text
      fontWeight="bold"
      mt="22px"
      fontSize="20px"
      bg="blue.400"
      color="white"
      borderRightRadius="12px"
      p="4px 12px"
      {...styles}
    >
      {text}
    </Text>
  );
};
export default function Index(props) {
  return (
    <Container maxW="container.xl">
      <Text fontWeight="bold" mt="22px" fontSize="1.66em">
        ENGLISH FOR CATALYST
      </Text>
      <Flex
        alignItems="center"
        justifyContent="center"
        w="full"
        mt="22px"
        gap="40px"
        flexWrap="wrap"
      >
        <Image w="400px" alt="top" src={imageTop} />
        <Flex direction="column">
          <Link to="/register">
            <Button mt="22px" w="200px" colorScheme="orange">
              Sign up Free
            </Button>
          </Link>
          <Link to="/login">
            <Button mt="12px" w="200px">
              or login
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Title text=" What materials are included?" mt="40px" />
    </Container>
  );
}
