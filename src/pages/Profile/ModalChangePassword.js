/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
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
import { updateCurrentUser } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { MdVpnKey } from 'react-icons/md';
export default function Index({ isOpen, onClose }) {
  const { isUpdating } = useShallowEqualSelector((state) => {
    return { isUpdating: state.user.isUpdating };
  });

  const [info, setInfo] = useState({
    currentPassword: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const submit = () => {
    if (info.password !== info.confirm) {
      return setError('The passwords you entered do not match!');
    }
    dispatch(
      updateCurrentUser(
        { password: info.password, currentPassword: info.currentPassword },
        (err) => {
          console.log('err', err);
          if (err) {
            return setError(err.error_message);
          }
          _onClose();
        }
      )
    );
  };
  const _onClose = () => {
    setInfo({
      currentPassword: '',
      password: '',
      confirm: '',
    });
    onClose();
  };
  const isDisabled = () =>
    !info.password || !info.confirm || error || isUpdating;
  return (
    <Modal isOpen={isOpen} onClose={_onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change Password</ModalHeader>
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
              Curren Password
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={MdVpnKey} color="black" name="phone" />}
              />
              <Input
                value={info.currentPassword}
                isDisabled={isUpdating}
                type="password"
                onChange={(e) => {
                  setInfo({ ...info, currentPassword: e.target.value });
                  setError('');
                }}
                placeholder="Enter Current Password"
              />
            </InputGroup>
          </Box>
          <Box mb="22px">
            <Text fontWeight="bold" mb="12px">
              New Password
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={MdVpnKey} color="black" name="phone" />}
              />
              <Input
                value={info.password}
                isDisabled={isUpdating}
                type="password"
                onChange={(e) => {
                  setInfo({
                    ...info,
                    confirm: '',
                    password: e.target.value,
                  });
                  setError('');
                }}
                placeholder="Enter Password"
              />
            </InputGroup>
          </Box>
          <Box>
            <Text fontWeight="bold" mb="12px">
              Cofirm Password
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={MdVpnKey} color="black" name="phone" />}
              />
              <Input
                value={info.confirm}
                isDisabled={isUpdating}
                type="password"
                onChange={(e) => {
                  setError('');
                  setInfo({ ...info, confirm: e.target.value });
                }}
                placeholder="Enter Confirm Password"
              />
            </InputGroup>
          </Box>
          <Text mt="12px" fontSize="12px" color="red">
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
          <Button variant="ghost" onClick={_onClose}>
            CANCEL
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
