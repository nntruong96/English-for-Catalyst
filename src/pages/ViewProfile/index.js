/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import UserInformation from 'components/UserInformation';
import { useParams } from 'react-router';
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
  const [error, setError] = useState(false);
  let params = useParams();
  const dispatch = useDispatch();
  let { id } = params;
  useEffect(() => {
    setRequesting(true);
    dispatch(
      getUserById(id, (err, res) => {
        if (!err) {
          setUser(res);
        } else {
          console.log(err);
          setError(true);
        }
        setRequesting(false);
      })
    );
  }, [id]);
  console.log('user', user);
  if (requesting) {
    return <LoadingPage />;
  }
  if (error) {
    return (
      <Flex alignItems="center" justifyContent="center" h="full">
        Not found user
      </Flex>
    );
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
