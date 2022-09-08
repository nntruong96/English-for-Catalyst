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
  InputGroup,
  Icon,
  InputRightElement,
  Select,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Input from 'components/Input';
import { authActions } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
export default function Register(props) {
  const [view, setView] = useState(false);
  const [sended, setSended] = useState(false);
  const [error, setError] = useState(false);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const bgForm = useColorModeValue('#f5f5f5', 'gray.700');
  const borderForm = useColorModeValue(
    '1px solid #e3e3e3',
    '1px solid gray.800'
  );
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 2,
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeRole = (e) => {
    setData({
      ...data,
      role: Number(e.target.value),
    });
  };
  const submit = () => {
    setUpdating(true);
    dispatch(
      authActions.register(data, (err, res) => {
        if (!err) {
          setSended(true);
        } else {
          setError(err.error_message);
        }
        setUpdating(false);
      })
    );
  };
  const isDisabled = () => {
    return (
      updating ||
      !data.email ||
      !data.password ||
      !data.firstName ||
      !data.lastName
    );
  };
  return (
    <Container maxW="container.sm" centerContent pt="22px" flex={1}>
      <Flex direction="column" width="500px" maxW="100%">
        {sended ? (
          <>
            <Text fontSize="1.66em" color="blue.400" textAlign="center">
              Verify Your Email
            </Text>
            <Box
              bg={bgForm}
              border={borderForm}
              p="22px"
              borderRadius="12px"
              mt="22px"
              textAlign="center"
            >
              <Text>
                We have sent an email to <strong>{data.email}</strong>
              </Text>
              <Text>Please activate the link to verify your email.</Text>
              <Button
                as={Link}
                to="/auth/login"
                colorScheme="blue"
                mt="12px"
                w="full"
              >
                Back to Login
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Text fontSize="1.66em" color="blue.400" textAlign="center">
              Register for a FREE TRIAL
            </Text>
            <Box
              bg={bgForm}
              border={borderForm}
              p="22px"
              borderRadius="12px"
              mt="22px"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !isDisabled()) {
                  submit();
                }
              }}
            >
              <Flex direction="column">
                <Text as="label" mb="12px" fontWeight="bold">
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
                <Text as="label" mb="12px" fontWeight="bold">
                  Password
                </Text>
                <InputGroup>
                  <Input
                    value={data.password}
                    name="password"
                    placeholder="Enter your password"
                    type={view ? 'text' : 'password'}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <Button onClick={() => setView(!view)} bg="transparent">
                      <Icon
                        as={view ? ViewIcon : ViewOffIcon}
                        color="black"
                        name="phone"
                      />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Flex direction="column" mt="22px">
                <Text as="label" mb="12px" fontWeight="bold">
                  Type Account
                </Text>
                <Select
                  value={data.role}
                  name="role"
                  onChange={handleChangeRole}
                >
                  <option value={2}>Student</option>
                  <option value={1}>Teacher</option>
                </Select>
              </Flex>
              <Flex direction="column" mt="22px">
                <Text as="label" mb="12px" fontWeight="bold">
                  First Name
                </Text>
                <Input
                  value={data.firstName}
                  name="firstName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
              </Flex>
              <Flex direction="column" mt="22px">
                <Text as="label" mb="12px" fontWeight="bold">
                  Last Name
                </Text>
                <Input
                  value={data.lastName}
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                />
              </Flex>
              <Text color="red" fontSize={12} mt="12px">
                {error}
              </Text>
              <Flex alignItems="center" mt="22px">
                <Button
                  colorScheme="blue"
                  mr="12px"
                  w="full"
                  onClick={submit}
                  isDisabled={isDisabled()}
                  isLoading={updating}
                  loadingText="Sign up FREE!*"
                >
                  Sign up FREE!*
                </Button>
              </Flex>
              <Text mt="22px">
                Already have an account?{' '}
                <Text as={Link} color="blue" to="/auth/login">
                  Login
                </Text>
              </Text>
            </Box>
          </>
        )}
      </Flex>
    </Container>
  );
}
