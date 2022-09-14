/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import ContainerForm from 'components/ContainerForm';
const KEYS = ['role', 'firstName', 'lastName', 'email', '_id'];
const LABELS = {
  role: 'Account Type',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  _id: 'User Id',
};
const ACCOUNT_TYPE = ['Admin', 'Teacher', 'Student'];
export default function Index({ userInfo }) {
  return (
    <ContainerForm title="User Information">
      {KEYS.map((key, index) => {
        return (
          <Flex gap="22px" key={index} py="12px">
            <Text w="30%" maxW="300px" minW="120px" fontWeight="bold">
              {LABELS[key]}:
            </Text>
            <Text>
              {key === 'role'
                ? ACCOUNT_TYPE[Number(userInfo[key])]
                : userInfo[key]}
            </Text>
          </Flex>
        );
      })}
    </ContainerForm>
  );
}
