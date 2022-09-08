/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import GradeComponent from 'components/Grade';
import { Box } from '@chakra-ui/layout';
export default function Grade() {
  const { user = { firstName: '', lastName: '' }, userUnits } =
    useShallowEqualSelector((state) => {
      return {
        user: state.user.user,
        userUnits: state.user.userUnits,
      };
    });
  return (
    <Box pb="22px">
      <GradeComponent user={user} userUnits={userUnits} />
    </Box>
  );
}
