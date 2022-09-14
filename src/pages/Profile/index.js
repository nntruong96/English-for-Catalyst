/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Flex, Button, Icon } from '@chakra-ui/react';
import TitlePage from 'components/TitlePage';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useNavigate } from 'react-router';
import ModalEditProfile from './ModalEditProfile';
import ModalChangePassword from './ModalChangePassword';
import { MdVpnKey, MdEdit } from 'react-icons/md';
import Grade from 'components/Grade';
import UserInformation from 'components/UserInformation';

export default function Profile(props) {
  const { userInfo, userUnits } = useShallowEqualSelector((state) => {
    return { userInfo: state.user.user, userUnits: state.user.userUnits };
  });
  const navigate = useNavigate();
  const [isOpenEdit, setOpenEdit] = useState(false);
  const [isOpenPassword, setOpenPassword] = useState(false);
  const onBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };
  let name = (userInfo.firstName || '') + ' ' + (userInfo.lastName || '');
  let title = name !== ' ' ? name : userInfo._id;
  return (
    <Box mt="22px">
      <TitlePage title={title} mb="22px" onBack={onBack} />
      <Flex gap="22px">
        <Button onClick={() => setOpenEdit(true)} colorScheme={'blue'}>
          <Icon as={MdEdit} mr="8px" color="#FFFF00" />
          EDIT PROFILE
        </Button>
        <Button colorScheme={'blue'} onClick={() => setOpenPassword(true)}>
          <Icon as={MdVpnKey} mr="8px" color="#FFFF00" />
          CHANGE PASSWORD
        </Button>
      </Flex>
      <UserInformation userInfo={userInfo}></UserInformation>
      {/* <ContainerForm title="Classroom"></ContainerForm> */}
      <Grade
        user={userInfo}
        userUnits={userUnits}
        hideTitle
        hideActivites
        hideUnits
      />
      {/* <ContainerForm title="Certification Status"></ContainerForm> */}
      <ModalEditProfile
        isOpen={isOpenEdit}
        onClose={() => setOpenEdit(false)}
      />
      <ModalChangePassword
        isOpen={isOpenPassword}
        onClose={() => setOpenPassword(false)}
      />
    </Box>
  );
}
