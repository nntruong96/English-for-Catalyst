/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { BsFillPersonFill } from 'react-icons/bs';
import { updateCurrentUser } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
export default function Index({ isOpen, onClose }) {
  const { userInfo, isUpdating } = useShallowEqualSelector((state) => {
    return { userInfo: state.user.user, isUpdating: state.user.isUpdating };
  });
  const [info, setInfo] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
  });
  const [error, setError] = useState('');
  useEffect(() => {
    setError('');
    setInfo({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
    });
  }, [userInfo]);
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(
      updateCurrentUser(info, (err) => {
        console.log('err', err);
        if (!err) {
          return onClose();
        }
        setError(err.error_message);
      })
    );
  };
  const isDisabled = () => {
    return (
      !info.firstName ||
      !info.lastName ||
      !info.firstName.trim() ||
      !info.lastName.trim() ||
      isUpdating
    );
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isDisabled()) {
              submit();
            }
          }}
        >
          <Box mb="22px">
            <Text fontWeight="bold" mb="12px">
              First Name
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon as={BsFillPersonFill} color="black" name="phone" />
                }
              />
              <Input
                value={info.firstName}
                isDisabled={isUpdating}
                onChange={(e) => {
                  setInfo({ ...info, firstName: e.target.value });
                }}
                placeholder="Enter First Name"
              />
            </InputGroup>
          </Box>
          <Box>
            <Text fontWeight="bold" mb="12px">
              Last Name
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon as={BsFillPersonFill} color="black" name="phone" />
                }
              />
              <Input
                value={info.lastName}
                isDisabled={isUpdating}
                onChange={(e) => {
                  setInfo({ ...info, lastName: e.target.value });
                }}
                placeholder="Enter Last Name"
              />
            </InputGroup>
          </Box>
          <Text color="red" mt="12px" fontSize="12px">
            {error}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            isDisabled={isDisabled()}
            mr={3}
            isLoading={isUpdating}
            loadingText="SAVE"
            onClick={submit}
          >
            SAVE
          </Button>
          <Button variant="ghost" onClick={onClose}>
            CANCEL
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
