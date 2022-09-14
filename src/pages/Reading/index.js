/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import ModalVocabulary from 'components/ModalVocabulary';
import QuestionRadioList from 'components/QuestionRadioList';
import StatusQuizTest from 'components/StatusQuizTest';
import { Link } from 'react-router-dom';
import { isEmptyAns } from 'util/Constants';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/actions/userActions';
import { checkScorePass } from 'util/Constants';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useNavigate } from 'react-router';
const Title = function ({ text, ...styles }) {
  return (
    <Text
      fontWeight="bold"
      mt="22px"
      fontSize="20px"
      bg="blue.600"
      color="white"
      borderRightRadius="12px"
      p="4px 12px"
      {...styles}
    >
      {text}
    </Text>
  );
};
export default function Reading({
  data,
  vocabularyData,
  ans = [],
  unitNumber,
  activiti = {},
  isGrade,
}) {
  const [dataRender, setData] = useState({});
  const [vocabularySelected, setVocabulary] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [ansRender, setAns] = useState(ans);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const { status = 0 } = activiti;
  const loggedIn = useShallowEqualSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  let { audioUrl, questions, read } = data.data;
  useEffect(() => {
    if (JSON.stringify(dataRender) !== JSON.stringify(data)) {
      setData(data);
      let elements = document.getElementsByClassName('show-modal-vocab');
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('click', onVocabClick);
      }
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', onVocabClick, false);
      }
    }
  }, []);
  const onClose = () => {
    setIsOpen(false);
    setVocabulary(null);
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
    for (let i = 0; i < questions.length; i++) {
      let item = ansRender[i];
      if (isEmptyAns(item)) {
        disabled = true;
      }
    }
    return disabled || updating;
  };
  const onVocabClick = (event) => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    let text = event.target.innerText;
    let vocabulary = vocabularyData.data.find(
      (item) =>
        item.vocab.text.toUpperCase() === text.toUpperCase() ||
        item.vocab.orText?.toUpperCase() === text.toUpperCase()
    );
    if (vocabulary) {
      setVocabulary(vocabulary);
      setIsOpen(true);
    }
  };
  const onSubmit = () => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    let cnt = 0;
    questions.forEach((question, index) => {
      if (question.ans === ansRender[index]) {
        cnt++;
      }
    });
    let isPass = checkScorePass(cnt, questions.length);
    setUpdating(true);
    dispatch(
      updateUser(
        {
          data: {
            ...activiti,
            status: isPass ? 2 : -1,
            description: `Reading and questions finished. ${
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
              ans: questions.map(() => ''),
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
  const renderButtons = () => {
    switch (status) {
      case -1:
        return (
          <>
            <Button colorScheme="red" onClick={onRedu}>
              REDU READING
            </Button>
            <Button colorScheme="gray" as={Link} to={`/unit/${unitNumber}`}>
              CANCEL
            </Button>
          </>
        );
      case 0:
        return (
          <Button
            colorScheme="blue"
            onClick={onSubmit}
            isDisabled={isDisabled()}
          >
            SUBMIT QUESTIONS
          </Button>
        );
      case 2:
        return (
          <>
            <Button colorScheme="red" as={Link} to={`/unit/${unitNumber}`}>
              GO TO UNIT MENU
            </Button>
            <Button colorScheme="gray" onClick={onRedu}>
              REDO
            </Button>
          </>
        );
      default:
        break;
    }
  };

  return (
    <Box mt="22px" pb="22px">
      <TitleWelComeActivity>
        Listen to the audio recording while you read the text. When you
        understand everything, please continue to the next activity.
      </TitleWelComeActivity>
      <Flex direction="column" gap="12px" mt="22px">
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      </Flex>
      <Box
        dangerouslySetInnerHTML={{ __html: read }}
        mt="22px"
        p="12px"
        border="1px solid #ddd;"
        backgroundColor=" #fefef8"
        boxShadow=" 4px 4px 5px #888888"
      />
      <Title text="Quiz: Reading Questions" mt="22px" mb="22px" />
      <StatusQuizTest status={status} />
      <QuestionRadioList
        data={questions}
        ans={ansRender}
        onChange={onAnsChange}
        isDisabled={Boolean(status === -1 || status === 2)}
        status={status}
      />
      <Text mt="12px" color="red">
        {error}
      </Text>
      {isGrade ? (
        ''
      ) : (
        <Flex mt="22px" gap="22" justifyContent="flex-end">
          {renderButtons()}
        </Flex>
      )}
      <ModalVocabulary
        isOpen={isOpen}
        onClose={onClose}
        vocabulary={vocabularySelected}
      />
    </Box>
  );
}
