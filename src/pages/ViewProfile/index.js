/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import UserInformation from 'components/UserInformation';
import { useParams, Navigate } from 'react-router';
import { getUserById } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import Grade from 'components/Grade';
import TitlePage from 'components/TitlePage';
import { getName } from 'util/Constants';
import LoadingPage from 'components/LoadingPage';
// import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
export default function Index(props) {
  const [user, setUser] = useState({});
  const [requesting, setRequesting] = useState(true);
  //   const { loggedIn, userInfo } = useShallowEqualSelector((state) => {
  //     return {
  //       loggedIn: state.auth.loggedIn,
  //       userInfo: state.user.user,
  //     };
  //   });
  let params = useParams();
  const dispatch = useDispatch();
  let { id } = params;
  useEffect(() => {
    setRequesting(true);
    dispatch(
      getUserById(id, (err, res) => {
        if (!err) {
          setUser(res);
        }
        setRequesting(false);
      })
    );
  }, [id]);
  if (requesting) {
    return <LoadingPage />;
  }
  return (
    <Box mt="22px" pb="22px">
      <TitlePage
        title={
          getName(user).toUpperCase() +
          ' PROFILE' +
          (user.userUnits?.length || user.grade ? '& GRADE REPORT' : '')
        }
      />
      <UserInformation userInfo={user} />
      {user.grade ? (
        <Grade
          user={user}
          grade={user.grade}
          userUnits={{}}
          hideTitle
          hideActivites
          hideUnits
        />
      ) : user.userUnits?.length ? (
        <Grade user={user} userUnits={user.userUnits} hideTitle />
      ) : (
        ''
      )}
    </Box>
  );
}
