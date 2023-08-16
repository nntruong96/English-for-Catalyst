/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useEffect, useState } from 'react';
import {
  Box,
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
import { getGradeActivites } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import Pagination from 'components/Pagination';
import UserName from 'components/UserName';
import Constants from 'util/Constants';
import moment from 'moment';
import { Link } from 'react-router-dom';

const HEADER = [
  {
    text: 'Action',
  },
  {
    text: 'Student Name',
  },
  {
    text: 'Unit',
  },
  {
    text: 'Activity',
  },
  {
    text: 'Date',
  },
];
const TYPE = Constants.ACTIVITES_NAME;
export default function Index({ classRoom }) {
  const [requesting, setRequesting] = useState(false);
  const { gradeActivities, units } = useShallowEqualSelector((state) => ({
    gradeActivities: state.user.gradeActivities,
    units: state.documents.units,
  }));
  const { data, pageSize, pageNumber, hasFetched, total } = gradeActivities;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!hasFetched) {
      setRequesting(true);
      dispatch(
        getGradeActivites(
          { classroomId: classRoom._id, pageSize, pageNumber },
          () => {
            setRequesting(false);
          }
        )
      );
    }
  }, []);
  const handlePageClick = (pageNumber) => {
    if (requesting) {
      return;
    }
    setRequesting(true);
    dispatch(
      getGradeActivites(
        { classroomId: classRoom._id, pageNumber, pageSize },
        () => {
          setRequesting(false);
        }
      )
    );
  };
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
              return (
                <Tr key={index}>
                  <Td>
                    <Button
                      colorScheme="blue"
                      as={Link}
                      to={`/activiGrade/${item.unit}/${TYPE[item.type - 1]}/${
                        item.userInfo._id
                      }`}
                    >
                      Grade
                    </Button>
                  </Td>
                  <Td>
                    <UserName color="blue" user={item.userInfo} />
                  </Td>
                  <Td>{units[item.unit - 1]?.title}</Td>
                  <Td>{Constants.ACTIVITES_NAME[item.type - 1]}</Td>
                  <Td>
                    {moment(item.updateAt).format('DD-MM-YYYY, hh:mm:ss')}s
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
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
        <Pagination
          onPageChange={handlePageClick}
          pageSize={pageSize}
          total={total}
          pageNumber={Number(pageNumber)}
          disabled={requesting}
        />
      </TableContainer>
    </Box>
  );
}
