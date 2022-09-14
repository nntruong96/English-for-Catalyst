/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState, useEffect } from 'react';
// import { Box, Text } from '@chakra-ui/react';
import Activities from 'pages/Activities';
import { useParams } from 'react-router';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import LoadingPage from 'components/LoadingPage';
export default function Index(props) {
  const [student, setStudent] = useState();
  let params = useParams();
  let { id } = params;
  let { classRoom } = useShallowEqualSelector((state) => ({
    classRoom: state.user.classRoom,
  }));
  useEffect(() => {
    let _student = classRoom?.students?.find((item) => item._id === id);
    if (_student) {
      setStudent(_student);
    }
  }, [classRoom]);
  return !student ? (
    <LoadingPage />
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
