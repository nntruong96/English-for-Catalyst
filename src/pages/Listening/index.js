/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Text, Button, Flex, Icon } from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import { Link } from 'react-router-dom';
import ButtonPlayAudio from 'components/ButtonPlayAudio';
import TitleForm from 'components/TitlteForm';
import Input from 'components/Input';
import { BsCheckCircle, BsFillXCircleFill } from 'react-icons/bs';
import { calculatePercentageScoreListening } from 'util/Constants';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/actions/userActions';
import { checkScorePass, isEmptyAns } from 'util/Constants';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useNavigate } from 'react-router';
const STATUS = {
  '-1': 'You scored {{score}}% correct on this activity.',
  0: `Please spell the pronounced <strong>vocabulary term</strong> or
  <strong>abbreviation</strong> correctly. Spaces, hyphens, and case are
  optional.`,
  2: 'You scored {{score}}% correct on this activity.',
  1: `Please spell the pronounced <strong>vocabulary term</strong> or
  <strong>abbreviation</strong> correctly. Spaces, hyphens, and case are
  optional.`,
};

export default function Listening({ data, unitNumber, userActiviti = {} }) {
  let { countSubmit = 0, status = 0, data: { ans = [] } = {} } = userActiviti;
  const ansRender = ans; //ansRender just will be test
  const [isSubmit, setIsSubmit] = useState(false);
  const [ansStatus, setAnsStatus] = useState(true);
  const [showAns, setShowAns] = useState(false);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const { settings = {}, loggedIn } = useShallowEqualSelector((state) => ({
    loggedIn: state.auth.loggedIn,
    settings: state.user.classRoom?.settings,
  }));
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const grenarateIndex = (defaultIndex = -1) => {
    let _index = Math.floor((defaultIndex + 1) % data.data.length);
    let count = 0;
    while (count < data.data.length) {
      if (['', null, undefined, NaN].includes(ansRender[_index])) {
        break;
      }
      count++;
      _index++;
    }
    return _index;
  };

  const [index, setIndex] = useState(grenarateIndex);
  const [inputValue, setInputValue] = useState(data?.data[index]?.ans[0]);
  const checkFitnished = (newAns) => {
    let fitnished = true;
    data.data.forEach((el, index) => {
      if (isEmptyAns(newAns[index])) {
        fitnished = false;
      }
    });
    return fitnished;
  };
  const onSubmit = () => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    let percentage = 0,
      rootAns = [];
    setIsSubmit(true);
    setUpdating(true);
    data.data.forEach((question, index) => {
      rootAns.push(question.ans);
    });
    if (inputValue.trim() === data?.data[index].ans) {
      let _ans = [...ansRender];
      _ans[index] = inputValue;

      percentage = calculatePercentageScoreListening({
        ans: rootAns,
        userAns: _ans,
        countSubmit: countSubmit + 1,
      });
      //true ans
      dispatch(
        updateUser(
          {
            data: {
              ...userActiviti,
              status: checkFitnished(_ans)
                ? checkScorePass(percentage, 100)
                  ? 2
                  : -1
                : 1,
              description: `Your grade on this activity is ${percentage}%.`,
              countSubmit: userActiviti.countSubmit + 1,
              data: {
                ans: _ans,
              },
              grade: percentage,
              updateAt: new Date().getTime(),
            },
            unitNumber: Number(unitNumber) - 1,
            type: userActiviti.type,
          },
          (err, res) => {
            setUpdating(false);
            if (err) {
              setError(err.error_message);
            }
          }
        )
      );

      return setAnsStatus(true);
    }
    percentage = calculatePercentageScoreListening({
      ans: rootAns,
      userAns: ansRender,
      countSubmit: countSubmit + 1,
    });
    //wrong ans
    dispatch(
      updateUser(
        {
          data: {
            ...userActiviti,
            description: `Your grade on this activity is ${percentage}%.`,
            countSubmit: countSubmit + 1,
            grade: percentage,
            updateAt: new Date().getTime(),
          },

          unitNumber: Number(unitNumber) - 1,
          type: userActiviti.type,
        },
        (err, res) => {
          setUpdating(false);
          if (err) {
            setError(err.error_message);
          }
        }
      )
    );

    setAnsStatus(false);
  };
  const nextIndex = () => {
    setIsSubmit(false);
    setShowAns(false);
    let _index = grenarateIndex(index);
    if (data?.data[_index]) {
      setInputValue(data?.data[_index].ans[0]);
      setIndex(_index);
    }
    //call api submit here
  };
  const onRedu = () => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    setUpdating(true);
    dispatch(
      updateUser(
        {
          data: {
            ...userActiviti,
            grade: 0,
            status: 0,
            description: data.description,
            data: {
              ans: data.data.map(() => ''),
            },
            countSubmit: 0,
            updateAt: new Date().getTime(),
          },
          unitNumber: Number(unitNumber) - 1,
          type: userActiviti.type,
        },
        (err, res) => {
          if (!err) {
            let _index = 0;
            setIndex(_index);
            setIsSubmit(false);
            setUpdating(false);
            setAnsStatus(false);
            setInputValue(data?.data[_index]?.ans[0]);
          }
          if (err) {
            setError(err.error_message);
          }
        }
      )
    );
  };
  const playAudio = (_audioUrl) => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    let audio = new Audio(_audioUrl);
    audio.play();
  };
  const onInputChange = (e) => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    setInputValue(e.target.value);
  };
  let percentage = '';
  let rootAns = [];
  let count = 0;
  data?.data?.forEach((item, i) => {
    rootAns.push(item.ans);
    if (ansRender[i]) {
      count++;
    }
  });
  percentage = calculatePercentageScoreListening({
    ans: rootAns,
    userAns: ansRender,
    countSubmit,
  });
  return (
    <Box mt="22px" pb="22px">
      <TitleWelComeActivity>
        <Box
          dangerouslySetInnerHTML={{
            __html: [-1, 2].includes(status)
              ? STATUS[status].replace(`{{score}}`, percentage)
              : STATUS[status],
          }}
        ></Box>
      </TitleWelComeActivity>
      {[0, 1].includes(status) ? (
        <Flex flexWrap="wrap" gap="22px">
          <Flex
            direction="column"
            gap="12px"
            mt="22px"
            mb="12px"
            flexWrap="wrap"
            flex={1}
            minW="400px"
          >
            <ButtonPlayAudio
              onClick={() => playAudio(data?.data[index]?.audioUrl)}
            />
            <Flex alignItems="center" mt="12px">
              <Input
                onChange={onInputChange}
                value={inputValue}
                maxW="500px"
                isDisabled={isSubmit || showAns}
                borderColor={isSubmit ? (ansStatus ? 'green' : 'red') : ''}
              />
              {isSubmit ? (
                ansStatus ? (
                  <Icon
                    as={BsCheckCircle}
                    color="green"
                    ml="12px"
                    width="30px"
                    height="30px"
                  />
                ) : (
                  <Icon as={BsFillXCircleFill} ml="12px" color="red" />
                )
              ) : (
                ''
              )}
            </Flex>
          </Flex>
          <Flex
            flexWrap="wrap"
            gap="12px"
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            {percentage ? (
              <Text>
                {count} of {data?.data?.length} complete {percentage}% correct
                so far
              </Text>
            ) : (
              ''
            )}
            {percentage && percentage !== 100 && !settings.restart ? (
              <Button onClick={onRedu}>Restart</Button>
            ) : (
              ''
            )}
          </Flex>
        </Flex>
      ) : (
        ''
      )}
      <Text mt="12px" color="red">
        {error}
      </Text>
      <Flex mt="22px" gap="22">
        {[0, 1].includes(status) ? (
          <>
            {isSubmit || showAns ? (
              <Box>
                {!ansStatus || showAns ? (
                  <Text mb="22px">
                    The correct answer was:{' '}
                    <strong>{data?.data[index]?.ans}</strong>
                  </Text>
                ) : (
                  ''
                )}
                <Button onClick={nextIndex} colorScheme="green">
                  continue
                </Button>
              </Box>
            ) : (
              <>
                <Button
                  onClick={onSubmit}
                  colorScheme="green"
                  isLoading={updating}
                  loadingText="Submit"
                  isDisabled={
                    !inputValue ||
                    inputValue === data?.data[index]?.ans[0] ||
                    updating
                  }
                >
                  Submit
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    if (!loggedIn) {
                      return navigate('/auth/login');
                    }
                    setShowAns(true);
                  }}
                >
                  HELP
                </Button>
              </>
            )}
            {/* <Button colorScheme="red">SAVE AND OUT</Button> */}
          </>
        ) : (
          <Box w="full" border="1px solid #e3e3e3" pb="22px">
            <TitleForm text={'Activity Complete'} mb="22px" />
            <Text px="22px">
              If you redo the activity, you can improve your grade.
            </Text>
            <Box px="22px" mt="22px">
              <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
                GO TO UNIT MENU
              </Button>
              <Button colorScheme="red" onClick={onRedu} ml="22px">
                REDO
              </Button>
            </Box>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
