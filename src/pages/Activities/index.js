/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
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
export default function Index(props) {
  let params = useParams();
  const { units, user } = useShallowEqualSelector((state) => ({
    units: state.documents.units,
    user: state.user,
  }));
  const { isLogged, userUnits } = user;
  console.log('params', params);
  const navigate = useNavigate();
  const onBack = () => navigate('/unit/' + unitNumber);
  let { unitNumber, activityName } = params;
  let index = Number(unitNumber - 1);
  const unit = units[index];
  if (!unit) {
    return <Navigate to="/" replace={true} />;
  }
  const renderActivity = () => {
    console.log('renderActivity');
    let vocabularyData;
    let userUnit = userUnits[index],
      ans,
      status = 0;
    switch (activityName) {
      case Constants.ACTIVITES_NAME[0]:
        vocabularyData = unit?.actitivies[0];
        status = userUnit?.actitivies[0]?.status;
        return (
          <Vocabulary
            data={vocabularyData}
            status={status}
            unitNumber={unitNumber}
          />
        );
      case Constants.ACTIVITES_NAME[1]:
        vocabularyData = unit?.actitivies[0];
        const readingData = unit?.actitivies[1];
        ans = userUnit?.actitivies[1]?.data?.ans;
        status = userUnit?.actitivies[1]?.status;
        return (
          <Reading
            data={readingData}
            ans={ans}
            status={status}
            vocabularyData={vocabularyData}
            unitNumber={unitNumber}
          />
        );
      case Constants.ACTIVITES_NAME[2]:
        const mutipleData = unit?.actitivies[2];
        ans = userUnit?.actitivies[2]?.data?.ans;
        status = userUnit?.actitivies[2]?.status;
        return (
          <MultipleChoice
            data={mutipleData}
            status={status}
            ans={ans}
            unitNumber={unitNumber}
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
          />
        );
      default:
        return <div>doi xiu dang code</div>;
    }
  };
  return (
    <Box>
      <TitlePage
        title={`UNIT ${unitNumber}: ${Constants.ACTIVITES_NAME_TO_TITLE[activityName]}`}
        onBack={onBack}
        mt="22px"
      />
      {renderActivity()}
    </Box>
  );
}
