/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Flex, Checkbox } from '@chakra-ui/react';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useParams, Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import TitlePage from 'components/TitlePage';
import Constants from 'util/Constants';
const TYPE = Constants.ACTIVITES_NAME;
export default function UnitDefault(props) {
  let params = useParams();
  const { units, user, loggedIn } = useShallowEqualSelector((state) => ({
    units: state.documents.units,
    user: state.user,
    loggedIn: state.auth.loggedIn,
  }));
  let { unitNumber } = params;
  let index = Number(unitNumber - 1);
  const unit = units[index];
  if (!unit) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Box>
      <TitlePage title={`UNIT ${unitNumber}: ${unit.title}`} mt="22px" />
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
          if ([-1, 2].includes(userActitivies?.status)) {
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
              {loggedIn ? (
                <Checkbox {...checked} onChange={() => {}} mr="8px" />
              ) : (
                ''
              )}
              <Box>
                <Text>
                  {item.title}
                  {!item.required ? (
                    <Text as="span" ml="4px" color="gray" fontWeight="normal">
                      (optional to complete unit)
                    </Text>
                  ) : (
                    ''
                  )}
                </Text>
                <Text fontWeight="normal">
                  {loggedIn
                    ? user?.userUnits[index]?.actitivies[_index]?.description
                    : item.description}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
}
