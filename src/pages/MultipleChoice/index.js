/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import { Link } from 'react-router-dom';
import QuestionRadioList from 'components/QuestionRadioList';
import StatusQuizTest from 'components/StatusQuizTest';
import { updateUser } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { checkScorePass } from 'util/Constants';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useNavigate } from 'react-router';
import { isEmptyAns } from 'util/Constants';
export default function MultipleChoice({
  data,
  unitNumber,
  activiti = {},
  isGrade,
}) {
  const { data: { ans = [] } = {}, status = 0 } = activiti;
  const [ansRender, setAns] = useState(ans);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const loggedIn = useShallowEqualSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const onSubmit = () => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    let cnt = 0;
    data.data.forEach((question, index) => {
      if (question.ans === ansRender[index]) {
        cnt++;
      }
    });
    let isPass = checkScorePass(cnt, data.data.length);
    setUpdating(true);
    dispatch(
      updateUser(
        {
          data: {
            ...activiti,
            status: isPass ? 2 : -1,
            description: `Multiple choice finished. ${
              isPass ? 'You passed' : 'You failed'
            }`,
            data: {
              ans: ansRender,
            },
            updateAt: new Date().getTime(),
          },
          unitNumber: Number(unitNumber) - 1,
          type: activiti.type,
        },
        (err, res) => {
          setUpdating(false);
          if (err) {
            setError(err.error_message);
          }
        }
      )
    );
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
            ...activiti,
            status: 0,
            description: data.description,
            data: {
              ans: data.data.map(() => ''),
            },
            updateAt: new Date().getTime(),
          },
          unitNumber: Number(unitNumber) - 1,
          type: activiti.type,
        },
        (err, res) => {
          setUpdating(false);
          setAns([]);
          if (err) {
            setError(err.error_message);
          }
        }
      )
    );
  };
  const onAnsChange = (index, value) => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    let _ans = [...ansRender];
    _ans[index] = value;
    setAns(_ans);
  };
  const isDisabled = () => {
    let disabled = !Boolean(ansRender.length);
    for (let i = 0; i < data?.data?.length; i++) {
      let item = ansRender[i];
      if (isEmptyAns(item)) {
        disabled = true;
      }
    }
    return disabled || updating;
  };
  return (
    <Box mt="22px" pb="22px">
      <TitleWelComeActivity>
        Select the best definition of the word or phrase
      </TitleWelComeActivity>
      <Flex direction="column" gap="12px" mt="22px" mb="22px">
        <QuestionRadioList
          data={data.data}
          ans={ansRender}
          onChange={onAnsChange}
          isDisabled={Boolean(status === -1 || status === 2)}
          status={status}
        />
      </Flex>
      <StatusQuizTest
        status={status}
        text={{
          2: 'Congratulations... you passed the the quiz',
          '-1': 'Sorry.... you failed the quiz. Please try again.',
        }}
      />
      <Text mt="12px" color="red">
        {error}
      </Text>
      {isGrade ? (
        ''
      ) : (
        <Flex mt="22px" gap="22" justifyContent="flex-end">
          {status === 0 ? (
            <>
              <Button
                onClick={onSubmit}
                isDisabled={isDisabled()}
                colorScheme="blue"
              >
                Submit
              </Button>
              <Button as={Link} to={`/unit/${unitNumber}`}>
                CANCEL
              </Button>
            </>
          ) : (
            <>
              {' '}
              <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
                GO TO UNIT MENU
              </Button>
              <Button colorScheme="red" onClick={onRedu}>
                REDO
              </Button>
            </>
          )}
        </Flex>
      )}
    </Box>
  );
}
