/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Flex, Icon, Checkbox } from '@chakra-ui/react';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useParams, Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
const TYPE = [
  'vocabulary',
  'reading',
  'choice',
  'listening',
  'spelling',
  'speaking',
  'wringting',
];
export default function Index(props) {
  let params = useParams();
  const { units, user } = useShallowEqualSelector((state) => ({
    units: state.documents.units,
    user: state.user,
  }));
  let { unitNumber } = params;
  let index = Number(unitNumber - 1);
  const unit = units[index];
  const navigate = useNavigate();
  console.log('unit', unit);
  if (!unit) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Box>
      <Flex alignItems="center">
        <Box
          bg="#133877"
          w="32px"
          h="32px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            return navigate('/');
          }}
        >
          <Icon as={BsArrowLeftShort} w="36px" h="36px" color="white" />
        </Box>
        <Text as="h1" fontWeight="bold" ml="12px" fontSize="1.5rem">
          UNIT
          {unitNumber}: {unit.title}
        </Text>
      </Flex>
      <Text
        fontWeight="bold"
        mt="22px"
        fontSize="14px"
        bg="blue.600"
        color="white"
        p="4px 12px"
      >
        Complete the following activities:
      </Text>
      <Box border="1px solid gray" p="22px">
        {unit.actitivies.map((item, _index) => {
          let checked = {};
          let userActitivies = user?.userUnits[index]?.actitivies[_index];
          if (userActitivies?.status === 2) {
            checked.defaultChecked = true;
          }
          return (
            <Flex
              key={item.title}
              as={Link}
              sx={{
                cursor: 'pointer',
              }}
              to={`/unit/${index + 1}/${TYPE[item.type - 1]}`}
              fontWeight="bold"
              mt="12px"
            >
              <Checkbox {...checked} onChange={() => {}} mr="8px" />
              <Box>
                <Text>{item.title}</Text>
                <Text fontWeight="normal">
                  {user?.userUnits[index]?.actitivies[_index]?.description}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
}
