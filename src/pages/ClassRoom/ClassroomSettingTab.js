/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import moment from 'moment';
import EditClassroom from './EditClassroom';
import UserName from 'components/UserName';
import ContainerForm from 'components/ContainerForm';
import { getName } from 'util/Constants';
const style = {
  gap: '4px',
  mt: '12px',
};
export default function Index({ classRoom, user }) {
  const [isEdit, setEdit] = useState(false);
  let {
    teachers = [{}],
    name,
    createAt,
    classKey = '',
    description,
  } = classRoom;
  return !isEdit ? (
    <ContainerForm title={`Classroom: ${name}`}>
      <Flex {...style}>
        <Text>Teacher: </Text>
        <Text>{getName(teachers[0])}</Text>
      </Flex>
      <Flex {...style}>
        <Text>Aboute: </Text>
        <Text>{description}</Text>
      </Flex>
      <Flex {...style}>
        <Text>Create At: </Text>
        <Text>{moment(createAt).format('YYYY-MM-DD')}</Text>
      </Flex>
      <Flex {...style}>
        <Text>Class Key: </Text>
        <Text>{classKey}</Text>
      </Flex>
      <Flex mt="22px">
        <Button colorScheme="blue" onClick={() => setEdit(true)}>
          EDIT CLASSROOM
        </Button>
      </Flex>
    </ContainerForm>
  ) : (
    <EditClassroom
      classRoom={classRoom}
      user={user}
      onBack={() => setEdit(false)}
    />
  );
}
