/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import moment from 'moment';
import UserName from 'components/UserName';
const style = {
  gap: '4px',
};
export default function Index({ classRoom }) {
  let { teachers = [{}], name, createAt } = classRoom;
  return (
    <Box>
      <Flex {...style}>
        <Text>Teacher: </Text>
        <UserName color="blue" user={teachers[0]} />
      </Flex>
      <Flex {...style}>
        <Text>Classroom: </Text>
        <Text>{name}</Text>
      </Flex>
      <Flex {...style}>
        <Text>Create At: </Text>
        <Text>{moment(createAt).format('YYYY-MM-DD')}</Text>
      </Flex>
    </Box>
  );
}
