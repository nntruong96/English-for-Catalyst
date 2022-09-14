/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import TitlePage from 'components/TitlePage';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import ContainerForm from 'components/ContainerForm';
import moment from 'moment';
import Constants from 'util/Constants';
import { calGrade } from 'util/Constants';
const HEADER_UNITS = [
  {
    text: 'Unit Name',
  },
  {
    text: 'Completed (UTC)',
  },
  {
    text: 'Unit Grade',
  },
];
const TYPE = Constants.ACTIVITES_NAME;
export default function Grade({
  user = {},
  userUnits,
  hideUnits,
  hideActivites,
  hideGrading,
  hideTitle,
  grade,
}) {
  const [teacherGrade, setTeacherGrade] = useState(0);
  const [computerGrade, setComputerGrade] = useState(0);
  const [numberUnitComplete, setNumberUnitcomplete] = useState(0);
  const [units, setUnits] = useState([]);
  const { rootUnits, userInfo } = useShallowEqualSelector((state) => {
    return {
      rootUnits: state.documents.units,
      userInfo: state.user.user,
    };
  });
  useEffect(() => {
    if (grade) {
      let {
        computerGrade,
        teacherGrade,
        numberUnitComplete: _numberUnitComplete,
        units: _units,
      } = grade;
      setUnits(_units);
      setNumberUnitcomplete(_numberUnitComplete);
      setTeacherGrade(teacherGrade);
      setComputerGrade(computerGrade);
      return;
    }
    let {
      computerGrade,
      teacherGrade,
      numberUnitComplete: _numberUnitComplete,
      units: _units,
    } = calGrade({ rootUnits, userUnits });

    setUnits(_units);
    setNumberUnitcomplete(_numberUnitComplete);
    setTeacherGrade(teacherGrade);
    setComputerGrade(computerGrade);
  }, [userUnits, rootUnits, grade]);
  const calOverallGrade = () => {
    if (teacherGrade && computerGrade) {
      return Number.parseInt((teacherGrade + computerGrade) / 2);
    }
    if (teacherGrade) {
      return teacherGrade;
    }
    if (computerGrade) {
      return computerGrade;
    }
    return 0;
  };
  const renderActiviteGrade = (activiti) => {
    if ([1].includes(activiti.type)) {
      return 'Complete';
    }
    if ([2, 3].includes(activiti.type)) {
      if (activiti.status === -1) {
        return 'Failed';
      }
      if (activiti.status === 2) {
        return 'Pass';
      }
      if (activiti.status === 1) {
        return 'Upgrade';
      }
    }
    if ([4, 5, 6].includes(activiti.type)) {
      if ([-1, 2].includes(activiti.status)) {
        return activiti.grade + '%';
      }
      if (activiti.status === 1) {
        return 'Upgrade';
      }
    }
    if ([7].includes(activiti.type)) {
      if ([-1, 2].includes(activiti.status)) {
        return (
          Number.parseInt(
            activiti.grade.reduce((a, b) => a + b) / activiti.grade.length
          ) + '%'
        );
      }
      if (activiti.status === 1) {
        return 'Upgrade';
      }
    }

    return 0;
  };
  return (
    <Box mt="22px">
      {!hideTitle ? (
        <TitlePage
          title={
            (user.firstName + ' ' + user.lastName || '').toUpperCase() +
            ' GRADE REPORT'
          }
        />
      ) : (
        ''
      )}
      {hideGrading ? (
        ''
      ) : (
        <ContainerForm title={'Grading Summary'}>
          <Flex
            gap="22px"
            justifyContent="space-between"
            px="22px"
            flexWrap="wrap"
          >
            <Box minW="100px">
              <Text fontWeight="bold">Overall Grade</Text>
              <Text mt="8px"> {calOverallGrade()}%</Text>
            </Box>
            <Box minW="100px">
              {computerGrade ? (
                <>
                  <Text fontWeight="bold">Computer Grade</Text>
                  <Text mt="8px"> {computerGrade}%</Text>
                </>
              ) : (
                ''
              )}
            </Box>
            <Box minW="100px">
              {teacherGrade ? (
                <>
                  <Text fontWeight="bold">Teacher Grade</Text>
                  <Text mt="8px"> {teacherGrade}%</Text>
                </>
              ) : (
                ''
              )}
            </Box>
          </Flex>
        </ContainerForm>
      )}
      {hideUnits ? (
        ''
      ) : (
        <ContainerForm title={numberUnitComplete + ' Units Completed'}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  {HEADER_UNITS.map((item, index) => (
                    <Th key={item.text} fontWeight="bold" color="black">
                      {item.text}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {units.map((item, index) => {
                  return (
                    <Tr key={index}>
                      <Td>
                        <Flex>
                          <Text fontSize="12px">{index + 1}. </Text>
                          <Text
                            as={Link}
                            color="blue"
                            textDecor="underline"
                            to={`/unit/${index + 1}`}
                            fontSize="12px"
                          >
                            {item.title}
                          </Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Text fontSize="12px">
                          {item.complete
                            ? moment(item.updateAt).format(
                                'YYYY-MM-DD hh:mm:ss'
                              )
                            : '--'}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize="12px">
                          {item.complete ? item.grade + '%' : '--'}
                        </Text>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </ContainerForm>
      )}
      {hideActivites ? (
        ''
      ) : (
        <ContainerForm title={'Activities Completed'}>
          {units.map((unit, index) => {
            if (!unit.actitivies.length) {
              return null;
            }
            return (
              <TableContainer key={index} mt="22px">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th fontWeight="bold" color="black" w="50%">
                        {unit.title}
                      </Th>
                      <Th fontWeight="bold" color="black">
                        Completed
                      </Th>
                      <Th fontWeight="bold" color="black">
                        Grade
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {unit.actitivies.map((item, _index) => {
                      return (
                        <Tr key={_index}>
                          <Td>
                            <Flex>
                              <Text
                                as={Link}
                                color="blue"
                                textDecor="underline"
                                to={
                                  Number(userInfo.role) === 2
                                    ? `/unit/${index + 1}/${
                                        TYPE[item.type - 1]
                                      }`
                                    : `/activiGrade/${index + 1}/${
                                        TYPE[item.type - 1]
                                      }/${user._id}`
                                }
                                fontSize="12px"
                              >
                                {
                                  Constants.ACTIVITES_NAME_TO_TITLE[
                                    TYPE[item.type - 1]
                                  ]
                                }
                              </Text>
                            </Flex>
                          </Td>
                          <Td>
                            <Text fontSize="12px">
                              {moment(item.updateAt).format(
                                'YYYY-MM-DD hh:mm:ss'
                              )}
                            </Text>
                          </Td>
                          <Td>
                            <Text>{renderActiviteGrade(item)}</Text>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            );
          })}
        </ContainerForm>
      )}
    </Box>
  );
}
