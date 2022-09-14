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
} from '@chakra-ui/react';
import { resetPassword } from 'redux/actions/authActions';
import Input from 'components/Input';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
export default function SetPassword(props) {
  const bgForm = useColorModeValue('#f5f5f5', 'gray.700');
  const [viewP, setViewP] = useState(false);
  const [viewCP, setViewCP] = useState(false);
  const [error, setError] = useState(false);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    setUpdating(true);
    setError('');
    dispatch(
      resetPassword(data, (err, res) => {
        setUpdating(false);
        if (err) {
          if (Number(err.error_code) === 11005) {
            navigate('/auth/forgot');
          }
          return;
        }
        navigate('/auth/login');
      })
    );
  };
  const isDisabled = () => {
    return (
      updating ||
      !data.password ||
      !data.confirmPassword ||
      data.password !== data.confirmPassword
    );
  };
  return (
    <Container maxW="container.sm" centerContent pt="22px">
      <Flex direction="column" w="350px" maxW="100%">
        <Text fontSize="1.66em" color="blue.400" textAlign="center" mb="22px">
          Set Password
        </Text>
        <Box bg={bgForm} border={borderForm} p="22px" borderRadius="12px">
          <Flex direction="column">
            <Text as="label" mb="12px">
              Your password
            </Text>

            <InputGroup>
              <Input
                value={data.password}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                type={viewP ? 'text' : 'password'}
              />
              <InputRightElement>
                <Button onClick={() => setViewP(!viewP)} bg="transparent">
                  <Icon
                    as={viewP ? ViewIcon : ViewOffIcon}
                    color="black"
                    name="phone"
                  />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex direction="column" mt="22px">
            <Text mb="12px" as="label">
              Confirm password
            </Text>

            <InputGroup>
              <Input
                value={data.confirmPassword}
                name="confirmPassword"
                placeholder="Enter your passwork"
                onChange={handleChange}
                type={viewCP ? 'text' : 'password'}
              />
              <InputRightElement>
                <Button onClick={() => setViewCP(!viewCP)} bg="transparent">
                  <Icon
                    as={viewCP ? ViewIcon : ViewOffIcon}
                    color="black"
                    name="phone"
                  />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Flex alignItems="center" mt="22px">
            <Button
              colorScheme="blue"
              mr="12px"
              w="full"
              onClick={submit}
              isDisabled={isDisabled()}
              isLoading={updating}
              loadingText={'Submit'}
            >
              Submit
            </Button>
          </Flex>
          {/* <Text color="red" fontSize="12px" mt="12px">
            {error}
          </Text> */}
        </Box>
      </Flex>
    </Container>
  );
}
