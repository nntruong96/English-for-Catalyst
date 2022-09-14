/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useParams, useNavigate, Navigate } from 'react-router';
import TitlePage from 'components/TitlePage';
import Constants from 'util/Constants';
import Vocabulary from 'pages/Vocabulary';
import Reading from 'pages/Reading';
import MultipleChoice from 'pages/MultipleChoice';
import Listening from 'pages/Listening';
import Spelling from 'pages/Spelling';
import Speaking from 'pages/Speaking';
import Writing from 'pages/Writing';
import ContainerForm from 'components/ContainerForm';
import { getName } from 'util/Constants';
import moment from 'moment';
const Row = ({ label, value }) => {
  return (
    <Flex gap="12px">
      <Text fontWeight="bold">{label}:</Text>
      <Text>{value}</Text>
    </Flex>
  );
};
export default function Index({
  isGrade,
  studentUnits,
  userId,
  classroomId,
  studentInfo,
}) {
  let params = useParams();
  const { units, user } = useShallowEqualSelector((state) => ({
    units: state.documents.units,
    user: state.user,
  }));
  const { userUnits } = user;
  const navigate = useNavigate();
  const onBack = () =>
    !isGrade ? navigate('/unit/' + unitNumber) : navigate(-1);
  let { unitNumber, activityName } = params;
  let index = Number(unitNumber - 1);
  const unit = units[index];
  if (!unit) {
    return <Navigate to="/" replace={true} />;
  }
  const getUserUnitRender = () =>
    isGrade ? studentUnits[index] : userUnits[index];
  const getUserActiviti = () => {
    let userUnit = getUserUnitRender();
    switch (activityName) {
      case Constants.ACTIVITES_NAME[0]:
        return userUnit?.actitivies[0];
      case Constants.ACTIVITES_NAME[1]:
        return userUnit?.actitivies[1];
      case Constants.ACTIVITES_NAME[2]:
        return userUnit?.actitivies[2];
      case Constants.ACTIVITES_NAME[3]:
        return userUnit?.actitivies[3];
      case Constants.ACTIVITES_NAME[4]:
        return userUnit?.actitivies[4];
      case Constants.ACTIVITES_NAME[5]:
        return userUnit?.actitivies[5];
      case Constants.ACTIVITES_NAME[6]:
        return userUnit?.actitivies[6];

      default:
        return <div>doi xiu dang code</div>;
    }
  };
  const renderActivity = () => {
    let vocabularyData;
    let userUnit = getUserUnitRender(),
      ans,
      status = 0;
    switch (activityName) {
      case Constants.ACTIVITES_NAME[0]:
        vocabularyData = unit?.actitivies[0];
        return (
          <Vocabulary
            data={vocabularyData}
            unitNumber={unitNumber}
            activiti={userUnit?.actitivies[0]}
            isGrade={isGrade}
          />
        );
      case Constants.ACTIVITES_NAME[1]:
        vocabularyData = unit?.actitivies[0];
        const readingData = unit?.actitivies[1];
        ans = userUnit?.actitivies[1]?.data?.ans;
        return (
          <Reading
            data={readingData}
            ans={ans}
            vocabularyData={vocabularyData}
            unitNumber={unitNumber}
            activiti={userUnit?.actitivies[1]}
            isGrade={isGrade}
          />
        );
      case Constants.ACTIVITES_NAME[2]:
        const mutipleData = unit?.actitivies[2];
        return (
          <MultipleChoice
            data={mutipleData}
            unitNumber={unitNumber}
            activiti={userUnit?.actitivies[2]}
            isGrade={isGrade}
          />
        );
      case Constants.ACTIVITES_NAME[3]:
        const listeningData = unit?.actitivies[3];
        return (
          <Listening
            data={listeningData}
            status={status}
            ans={ans}
            unitNumber={unitNumber}
            userActiviti={userUnit?.actitivies[3]}
            isGrade={isGrade}
          />
        );
      case Constants.ACTIVITES_NAME[4]:
        const spellingData = unit?.actitivies[4];
        return (
          <Spelling
            data={spellingData}
            status={status}
            ans={ans}
            unitNumber={unitNumber}
            userActiviti={userUnit?.actitivies[4]}
            isGrade={isGrade}
          />
        );
      case Constants.ACTIVITES_NAME[5]:
        const speakingData = unit?.actitivies[5];
        return (
          <Speaking
            data={speakingData}
            status={status}
            ans={ans}
            unitNumber={unitNumber}
            userActiviti={userUnit?.actitivies[5]}
            isGrade={isGrade}
            userId={userId}
            classroomId={classroomId}
          />
        );
      case Constants.ACTIVITES_NAME[6]:
        const writingData = unit?.actitivies[6];
        return (
          <Writing
            data={writingData}
            status={status}
            ans={ans}
            unitNumber={unitNumber}
            userActiviti={userUnit?.actitivies[6]}
            isGrade={isGrade}
            userId={userId}
            classroomId={classroomId}
          />
        );
      default:
        return <div>doi xiu dang code</div>;
    }
  };
  let activiRender = getUserActiviti();
  return (
    <Box>
      <TitlePage
        title={
          isGrade
            ? `GRADE ${Constants.ACTIVITES_NAME_TO_TITLE[
                activityName
              ].toUpperCase()}`
            : `UNIT ${unitNumber}: ${Constants.ACTIVITES_NAME_TO_TITLE[activityName]}`
        }
        onBack={onBack}
        mt="22px"
      />
      {isGrade ? (
        <ContainerForm title="Student Information">
          <Row label="Name" value={getName(studentInfo)} />
          <Row label="Unit" value={units[index]?.title} />
          {activiRender?.updateAt ? (
            <Row
              label="Submission Date"
              value={moment(activiRender?.updateAt).format(
                'YYYY-MM-DD hh:mm:ss'
              )}
            />
          ) : (
            ''
          )}
          {activiRender?.gradeAt ? (
            <Row
              label="Last Grade Date"
              value={moment(activiRender?.gradeAt).format(
                'YYYY-MM-DD hh:mm:ss'
              )}
            />
          ) : (
            ''
          )}
        </ContainerForm>
      ) : (
        ''
      )}
      {renderActivity()}
    </Box>
  );
}
