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
import { resetPassword } from 'redux/actions/authActions';
import Input from 'components/Input';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
export default function SetPassword(props) {
  const bgForm = useColorModeValue('#f5f5f5', 'gray.700');
  const dispatch = useDispatch();
  const [pasrams] = useSearchParams();
  const borderForm = useColorModeValue(
    '1px solid #e3e3e3',
    '1px solid gray.800'
  );
  const [data, setData] = useState({
    confirmPassword: '',
    password: '',
    email: pasrams.get('email'),
    token: pasrams.get('token'),
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    dispatch(resetPassword(data));
  };
  return (
    <Container maxW="container.sm" centerContent pt="22px">
      <Flex direction="column" minW="350px" maxW="100%">
        <Text fontSize="1.66em" color="blue.400" textAlign="center" mb="22px">
          Set Password
        </Text>
        <Box bg={bgForm} border={borderForm} p="22px" borderRadius="12px">
          <Flex direction="column">
            <Text as="label" mb="12px">
              Your password
            </Text>
            <Input
              value={data.password}
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </Flex>
          <Flex direction="column" mt="22px">
            <Text mb="12px" as="label">
              Confirm password
            </Text>
            <Input
              value={data.confirmPassword}
              name="confirmPassword"
              placeholder="Enter your passwork"
              type="password"
              onChange={handleChange}
            />
          </Flex>
          <Flex alignItems="center" mt="22px">
            <Button colorScheme="blue" mr="12px" w="full" onClick={submit}>
              Submit
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
