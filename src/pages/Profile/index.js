/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Text, Flex, Button, Icon } from '@chakra-ui/react';
import TitlePage from 'components/TitlePage';
import Title from 'components/TitlteForm';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useNavigate } from 'react-router';
import ModalEditProfile from './ModalEditProfile';
import ModalChangePassword from './ModalChangePassword';
import { MdVpnKey, MdEdit } from 'react-icons/md';
const containerStyle = {
  mt: '22px',
  border: '1px solid #e3e3e3',
};
const KEYS = ['role', 'firstName', 'lastName', 'email', '_id'];
const LABELS = {
  role: 'Account Type',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  _id: 'User Id',
};
function ContainerBox({ children, title }) {
  return (
    <Box {...containerStyle}>
      <Title text={title} />
      <Box p="12px" overflow="auto">
        {children}
      </Box>
    </Box>
  );
}
export default function Profile(props) {
  const { userInfo } = useShallowEqualSelector((state) => {
    return { userInfo: state.user.user };
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
  let name = userInfo.firstName + ' ' + userInfo.lastName;
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
      <ContainerBox title="USER INFOMATION">
        {KEYS.map((key, index) => {
          return (
            <Flex gap="22px" key={index} py="12px">
              <Text w="30%" maxW="300px" minW="120px" fontWeight="bold">
                {LABELS[key]}:
              </Text>
              <Text>{userInfo[key]}</Text>
            </Flex>
          );
        })}
      </ContainerBox>
      <ContainerBox title="Classroom"></ContainerBox>
      <ContainerBox title="Grading Summary"></ContainerBox>
      <ContainerBox title="Certification Status"></ContainerBox>
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
