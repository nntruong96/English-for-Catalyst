/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Flex, Text, Checkbox } from '@chakra-ui/react';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { Link } from 'react-router-dom';
export default function UnitList(props) {
  const { units, user } = useShallowEqualSelector((state) => ({
    units: state.documents.units,
    user: state.user,
  }));
  return (
    <Box p="22px" border="1px solid gray" borderRadius="8px" mt="22px">
      {units?.map((item, index) => {
        let checked = {};
        let count = 0;
        let actitivies = user?.userUnits[index]?.actitivies;
        actitivies?.forEach((element) => {
          if ([-1, 2].includes(element.status)) {
            count++;
          }
        });
        if (actitivies?.length === count) {
          checked.defaultChecked = true;
        }
        return (
          <Flex
            key={item.title}
            as={Link}
            sx={{
              cursor: 'pointer',
            }}
            to={`/unit/${index + 1}`}
            fontWeight="bold"
          >
            <Checkbox {...checked} onChange={() => {}} />
            <Text ml="12px">{item.title}</Text>
          </Flex>
        );
      })}
    </Box>
  );
}
