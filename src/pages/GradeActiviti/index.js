/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState, useEffect } from 'react';
import Activities from 'pages/Activities';
import { useParams } from 'react-router';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import LoadingPage from 'components/LoadingPage';
import { getUserById } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { Flex } from '@chakra-ui/react';
export default function Index(props) {
  const [student, setStudent] = useState();
  const [requesting, setRequesting] = useState(true);
  const dispatch = useDispatch();
  let params = useParams();
  let { id } = params;
  let { classRoom } = useShallowEqualSelector((state) => ({
    classRoom: state.user.classRoom,
  }));
  useEffect(() => {
    setRequesting(true);
    dispatch(
      getUserById(id, (err, res) => {
        if (!err) {
          setStudent(res);
        } else {
          console.log(err);
        }
        setRequesting(false);
      })
    );
  }, [id]);
  return requesting ? (
    <LoadingPage />
  ) : !student ? (
    <Flex alignItems="center" justifyContent="center" h="full">
      Not found user
    </Flex>
  ) : (
    <Activities
      isGrade
      studentUnits={student.userUnits}
      userId={id}
      classroomId={classRoom._id}
      studentInfo={student}
    />
  );
}
