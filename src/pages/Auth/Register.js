/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Input from 'components/Input';
export default function Register(props) {
  const bgForm = useColorModeValue('#f5f5f5', 'gray.700');
  const borderForm = useColorModeValue(
    '1px solid #e3e3e3',
    '1px solid gray.800'
  );
  const [data, setData] = useState({
    email: '',
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    console.log('submit', data);
  };
  return (
    <Container maxW="container.sm" centerContent pt="22px" flex={1}>
      <Flex direction="column" width="500px" maxW="100%">
        <Text fontSize="1.66em" color="blue.400" textAlign="center">
          Register for a FREE TRIAL
        </Text>
        <Box
          bg={bgForm}
          border={borderForm}
          p="22px"
          borderRadius="12px"
          mt="22px"
        >
          <Flex direction="column">
            <Text as="label" mb="12px">
              Your Email
            </Text>
            <Input
              value={data.email}
              name="email"
              placeholder="Enter your Email"
              onChange={handleChange}
            />
          </Flex>
          <Flex alignItems="center" mt="22px">
            <Button colorScheme="blue" mr="12px" w="full" onClick={submit}>
              Sign up FREE!*
            </Button>
          </Flex>
          <Text mt="22px">
            Already have an account? <Link to="/login">Login</Link>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}
