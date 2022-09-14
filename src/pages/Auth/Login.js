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
import { login, resendEmail } from 'redux/actions/authActions';
import { useDispatch } from 'react-redux';
import Input from 'components/Input';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
export default function Login(props) {
  const { notVerified, requesting } = useShallowEqualSelector(
    (state) => state.auth
  );
  const bgForm = useColorModeValue('#f5f5f5', 'gray.700');
  const borderForm = useColorModeValue(
    '1px solid #e3e3e3',
    '1px solid gray.800'
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: 'nhuttruong6496@gmail.com',
    password: 'truong0604',
  });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    dispatch(
      login(data, (err) => {
        if (!err) {
          return navigate('/');
        }
        setError(err.error_message);
      })
    );
  };
  const resend = () => {
    dispatch(
      resendEmail(data.email, (err) => {
        if (err) {
          return setError(err.error_message);
        }
        setError('');
      })
    );
  };
  const isDisabled = () => {
    return !data.email || !data.password;
  };
  console.log('notVerified', notVerified);
  return (
    <Container maxW="container.sm" centerContent pt="22px">
      <Flex direction="column">
        <Text fontSize="1.66em" color="blue.400">
          Welcome to English for Catalyst
        </Text>
        <Text mt="22px" mb="22px" textAlign="center">
          New user? Please <Link to={'/auth/register'}>Create an Account.</Link>
        </Text>
        <Box
          bg={bgForm}
          border={borderForm}
          p="22px"
          borderRadius="12px"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isDisabled()) {
              submit();
            }
          }}
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
          {notVerified ? null : (
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
          )}
          <Text color="red" fontSize="12px" mt="12px">
            {error}
            {notVerified
              ? ' Please activate the link to verify your email.'
              : ''}
          </Text>
          {notVerified ? (
            <Button
              colorScheme="blue"
              mr="12px"
              flex={1}
              size="lg"
              mt="22px"
              onClick={resend}
              isDisabled={!data.email || requesting}
              isLoading={requesting}
              loadingText="Resend email verify"
            >
              Resend email verify
            </Button>
          ) : (
            <Flex alignItems="center" mt="22px">
              <Button
                colorScheme="blue"
                mr="12px"
                flex={1}
                size="lg"
                onClick={submit}
                isDisabled={isDisabled() || requesting}
                isLoading={requesting}
                loadingText="Login"
              >
                Login
              </Button>
              <Text as={Link} color="blue" to="/auth/forgot">
                Forgot password?
              </Text>
            </Flex>
          )}
        </Box>
      </Flex>
    </Container>
  );
}
