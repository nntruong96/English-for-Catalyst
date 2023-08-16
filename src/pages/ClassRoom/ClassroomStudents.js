/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useEffect, useState } from 'react';
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
  Button,
  Spinner,
} from '@chakra-ui/react';
import UserName from 'components/UserName';
import { useDispatch } from 'react-redux';
import { removeUser } from 'redux/actions/userActions';
import { getStudents } from 'redux/actions/userActions';
import Pagination from 'components/Pagination';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
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
  {
    text: 'Remove Student',
  },
];
export default function Index({ classRoom, units, user }) {
  const [requesting, setRequesting] = useState(false);
  const dispatch = useDispatch();
  const { students } = useShallowEqualSelector((state) => ({
    students: state.user.students,
  }));
  const { data, pageSize, pageNumber, hasFetched, total } = students;
  const remove = (studentId) => {
    dispatch(removeUser({ studentId, classRoomId: classRoom._id }));
  };
  const handlePageClick = (pageNumber) => {
    if (requesting) {
      return;
    }
    setRequesting(true);
    dispatch(
      getStudents({ classroomId: classRoom._id, pageNumber, pageSize }, () => {
        setRequesting(false);
      })
    );
  };
  useEffect(() => {
    if (!hasFetched) {
      setRequesting(true);
      dispatch(
        getStudents(
          {
            classroomId: classRoom._id,
            pageSize,
            pageNumber,
          },
          () => {
            setRequesting(false);
          }
        )
      );
    }
  }, []);
  return (
    <Box>
      <TableContainer position="relative">
        <Table variant="simple" mb="22px">
          <Thead>
            <Tr>
              {HEADER.map((item, index) => (
                <Th key={item.text}>{item.text}</Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {data.map((item, index) => {
              let grade = item.grade;
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
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        remove(item._id);
                      }}
                    >
                      Remove
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>

        <Pagination
          onPageChange={handlePageClick}
          pageSize={pageSize}
          total={total}
          pageNumber={Number(pageNumber)}
          disabled={requesting}
        />

        {requesting && (
          <Box
            position="absolute"
            w="full"
            h="full"
            top="0px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner />
          </Box>
        )}
      </TableContainer>
    </Box>
  );
}
