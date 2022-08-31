/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
} from '@chakra-ui/react';
import { BsCardList, BsBook, BsShuffle } from 'react-icons/bs';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { Link } from 'react-router-dom';
const HEADER = [
  {
    text: 'UNIT NAME',
  },
  {
    text: 'VOCAB',
  },
  {
    text: 'READING',
  },
  {
    text: 'ACTIVITIES',
  },
];
export default function Index(props) {
  const { units, user } = useShallowEqualSelector((state) => ({
    units: state.documents.units,
    user: state.user,
  }));
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            {HEADER.map((item, index) => (
              <Th key={item.text}>{item.text}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {units.map((item, index) => {
            return (
              <Tr
                key={index}
                sx={{
                  '&:hover': {
                    bg: 'gray.100',
                  },
                }}
              >
                <Td>
                  <Box
                    as={Link}
                    sx={{
                      cursor: 'pointer',
                    }}
                    to={`/unit/${index + 1}`}
                    fontWeight="bold"
                  >
                    {item.title}
                  </Box>
                </Td>
                <Td>
                  <Box
                    as={Link}
                    sx={{
                      cursor: 'pointer',
                    }}
                    to={`/unit/${index + 1}/vocabulary`}
                    fontWeight="bold"
                  >
                    <Icon
                      sx={{
                        cursor: 'pointer',
                      }}
                      as={BsCardList}
                      mr="12px"
                      h="40px"
                      w="30px"
                    />
                  </Box>
                </Td>
                <Td>
                  <Box
                    as={Link}
                    sx={{
                      cursor: 'pointer',
                    }}
                    to={`/unit/${index + 1}/reading`}
                    fontWeight="bold"
                  >
                    <Icon
                      sx={{
                        cursor: 'pointer',
                      }}
                      as={BsBook}
                      mr="12px"
                      h="40px"
                      w="30px"
                    />
                  </Box>
                </Td>
                <Td>
                  <Box
                    as={Link}
                    sx={{
                      cursor: 'pointer',
                    }}
                    to={`/unit/${index + 1}`}
                    fontWeight="bold"
                  >
                    <Icon
                      sx={{
                        cursor: 'pointer',
                      }}
                      as={BsShuffle}
                      mr="12px"
                      h="40px"
                      w="30px"
                    />
                  </Box>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
      </Table>
    </TableContainer>
  );
}
