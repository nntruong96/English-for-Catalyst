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
import { authActions } from 'redux/actions';
import { useDispatch } from 'react-redux';
export default function ForgotPassword() {
  const [sended, setSended] = useState(false);
  const [error, setError] = useState(false);
  const [updating, setUpdating] = useState(false);
  const bgForm = useColorModeValue('#f5f5f5', 'gray.700');
  const dispatch = useDispatch();
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
    setUpdating(true);
    setError('');
    dispatch(
      authActions.forgotPassword(data.email, (err, res) => {
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
    return updating || !data.email;
  };
  console.log(isDisabled());
  return (
    <Container maxW="container.sm" centerContent pt="22px">
      <Flex direction="column" width="500px" maxW="100%">
        <Text fontSize="1.66em" color="blue.400" textAlign="center">
          Forgot the password
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
              {sended ? (
                <>
                  We have sent an email to <strong>{data.email}</strong>
                  <br />
                  Please activate the link to reset passwork.
                </>
              ) : (
                `Enter the email address you used when you joined and we'll send you instructions to reset your password.`
              )}
            </Text>
            {sended ? (
              ''
            ) : (
              <Input
                value={data.email}
                name="email"
                placeholder="Enter your Email"
                onChange={handleChange}
              />
            )}
          </Flex>
          <Text color="red" fontSize="12px">
            {error}
          </Text>
          <Flex alignItems="center" mt="22px">
            {sended ? (
              <Button
                as={Link}
                to="/auth/login"
                colorScheme="blue"
                mt="12px"
                w="full"
              >
                Back to Login
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                mr="12px"
                w="full"
                onClick={submit}
                isDisabled={isDisabled()}
                isLoading={updating}
                loadingText={'Reset password'}
              >
                Reset password
              </Button>
            )}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
