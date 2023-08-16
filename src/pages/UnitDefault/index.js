/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Flex, Checkbox } from '@chakra-ui/react';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useParams, useNavigate, Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import TitlePage from 'components/TitlePage';
import Constants from 'util/Constants';
import ContainerForm from 'components/ContainerForm';
const TYPE = Constants.ACTIVITES_NAME;
export default function UnitDefault(props) {
  let params = useParams();
  const navigate = useNavigate();
  const { units, user, loggedIn } = useShallowEqualSelector((state) => ({
    units: state.documents.units,
    user: state.user,
    loggedIn: state.auth.loggedIn,
  }));
  const { classRoom = {} } = user;
  let { unitNumber } = params;
  let index = Number(unitNumber - 1);
  const unit = units[index] || {};
  // if (!unit) {
  //   return <Navigate to="/" replace={true} />;
  // }
  const isDisabled = (type) => {
    if ([6, 7].includes(type)) {
      if (Number(type) === 6) {
        return classRoom?.settings?.speaking?.isDisabled;
      }
      return classRoom?.settings?.writing?.isDisabled;
    }
    return false;
  };
  return (
    <Box>
      <TitlePage
        title={`UNIT ${unitNumber}: ${unit.title}`}
        mt="22px"
        onBack={() => navigate('/')}
      />
      <ContainerForm title=" Complete the following activities:">
        {unit?.actitivies?.map((item, _index) => {
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
              to={
                isDisabled(item.type)
                  ? `/unit/${index + 1}`
                  : `/unit/${index + 1}/${TYPE[item.type - 1]}`
              }
              fontWeight="bold"
              mt="12px"
              opacity={isDisabled(item.type) ? 0.5 : 1}
              pointerEvents={isDisabled(item.type) ? 'none' : ''}
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
      </ContainerForm>
    </Box>
  );
}
