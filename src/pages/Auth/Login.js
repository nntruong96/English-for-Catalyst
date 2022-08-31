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
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from 'redux/actions/authActions';
import { useDispatch } from 'react-redux';
import Input from 'components/Input';
export default function Login(props) {
  const bgForm = useColorModeValue('#f5f5f5', 'gray.700');
  const borderForm = useColorModeValue(
    '1px solid #e3e3e3',
    '1px solid gray.800'
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: 'nhuttruong6496@gmail.com',
    password: '12345678',
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    console.log('submit', data);
    dispatch(
      login(data, (err) => {
        console.log(err);
        if (!err) {
          return navigate('/');
        }
      })
    );
  };
  return (
    <Container maxW="container.sm" centerContent pt="22px">
      <Flex direction="column">
        <Text fontSize="1.66em" color="blue.400">
          Welcome to English for Catalyst
        </Text>
        <Text mt="22px" mb="22px" textAlign="center">
          New user? Please <Link to={'/register'}>Create an Account.</Link>
        </Text>
        <Box bg={bgForm} border={borderForm} p="22px" borderRadius="12px">
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
          <Flex direction="column" mt="22px">
            <Text mb="12px" as="label">
              Password
            </Text>
            <Input
              value={data.password}
              name="password"
              placeholder="Enter your Passwork"
              type="password"
              onChange={handleChange}
            />
          </Flex>
          <Flex alignItems="center" mt="22px">
            <Button
              colorScheme="blue"
              mr="12px"
              flex={1}
              size="lg"
              onClick={submit}
            >
              Login
            </Button>
            <Link to="/forgot">Forgot password?</Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
