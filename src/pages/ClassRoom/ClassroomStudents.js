/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { getName } from 'util/Constants';
import { calGrade } from 'util/Constants';
import UserName from 'components/UserName';
const HEADER = [
  {
    text: 'Name',
  },
  {
    text: 'Completed Units',
  },
  {
    text: 'Overall Grade',
  },
  {
    text: 'Computer Grade',
  },
  {
    text: 'Teacher Grade',
  },
];
export default function Index({ classRoom, units, user }) {
  let { students = [] } = classRoom;
  console.log('students', students);

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {HEADER.map((item, index) => (
                <Th key={item.text}>{item.text}</Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {students.map((item, index) => {
              let grade =
                Number(user.role) === 2
                  ? item.grade
                  : calGrade({ rootUnits: units, userUnit: item.userUnits });
              return (
                <Tr key={index}>
                  <Td>
                    <Box>
                      <UserName color="blue" user={item} />
                      <Text mt="4px">{item.email}</Text>
                    </Box>
                  </Td>
                  <Td>{grade.numberUnitComplete}</Td>
                  <Td>
                    {Number.parseInt(
                      grade.teacherGrade + grade.computerGrade / 2
                    )}
                    %
                  </Td>
                  <Td>{grade.computerGrade}%</Td>
                  <Td>{grade.teacherGrade}%</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
