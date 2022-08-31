/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  RadioGroup,
  Radio,
  Stack,
  Flex,
  Textarea,
} from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import TitleForm from 'components/TitlteForm';
import { Link } from 'react-router-dom';
const MIN = 65,
  MAX = 400;
export default function Speaking({ data, userActiviti = {}, unitNumber }) {
  let { status = 0, data: { question, ans } = {} } = userActiviti;
  // const [isEdit, setIsEdit] = useState(false);
  const [inputAns, setAns] = useState('');
  const [error, setError] = useState('');
  console.log('question', question);
  const [questionChoice, setChoice] = useState(() => {
    return [-1, 2].includes(status)
      ? data?.data.findIndex((item) => item.question === question)
      : '';
  });
  console.log('questionChoice', questionChoice);
  const [choiced, setChoiced] = useState(
    [-1, 2].includes(status) ? true : false
  );

  const onChoiceQuestion = () => {
    setChoiced(true);
  };
  const onAnsChange = (e) => {
    setError('');
    setAns(e.target.value);
  };
  const onSubmit = () => {
    if (inputAns && inputAns.trim().length < MIN) {
      return setError(
        `Your answer is too short. It has to be more than ${MIN} words.`
      );
    }
    if (inputAns && inputAns.trim().length > MAX) {
      return setError(
        `Your answer is too long. It has to be less than ${MAX} words.`
      );
    }
    console.log('submit');
  };
  return (
    <Box mt="22px" pb="22px">
      {![-1, 2].includes(status) ? (
        <TitleWelComeActivity>
          {choiced
            ? `Please read the instructions and complete the activity based on this reading activity`
            : `Please choose a question to answer. You may want to review the reading
        activity first.`}
        </TitleWelComeActivity>
      ) : (
        ''
      )}
      <Box border="1px solid #e3e3e3" pb="12px" mt="22px" mb="22px">
        <TitleForm
          text={choiced ? 'Question' : 'Required Sentences'}
          mb="12px"
        />

        <Box px="22px" py="12px">
          {!choiced ? (
            <RadioGroup
              onChange={(value) => {
                console.log('value', value);
                setChoice(Number(value));
              }}
              value={questionChoice}
            >
              <Stack direction="column">
                {data?.data.map((item, index) => (
                  <Radio key={index} value={index}>
                    {item.question}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          ) : (
            <Text fontWeight="500">{data?.data[questionChoice]?.question}</Text>
          )}
        </Box>
      </Box>
      {[0].includes(status) ? (
        <>
          {data?.data[questionChoice] ? (
            <Box border="1px solid #e3e3e3" pb="12px" mt="22px" mb="22px">
              <TitleForm text={'Instructions'} mb="12px" />
              <Box px="22px" py="12px">
                {data?.data[questionChoice]?.instructions.map((item, index) => {
                  return (
                    <Text mt="4px" key={index}>
                      {index + 1}. {item}
                    </Text>
                  );
                })}
              </Box>
            </Box>
          ) : (
            ''
          )}
          {choiced ? (
            <Box border="1px solid #e3e3e3" pb="12px" mt="22px" mb="22px">
              <TitleForm text={'Your answer'} mb="12px" />
              <Box px="22px" py="12px">
                <Textarea
                  onChange={onAnsChange}
                  value={inputAns}
                  resize
                  rows={10}
                ></Textarea>
                <Text mt="12px" color="red">
                  {error}
                </Text>
              </Box>
            </Box>
          ) : (
            ''
          )}
          <Flex gap="12px" alignItems="center" flexWrap="wrap">
            {choiced ? (
              <>
                <Button
                  colorScheme="blue"
                  onClick={onSubmit}
                  isDisabled={!Boolean(inputAns?.trim())}
                >
                  SUBMIT YOUR ANS
                </Button>
                <Button onClick={() => setChoiced(false)}>CANCEL</Button>
              </>
            ) : (
              <Button
                colorScheme="blue"
                isDisabled={!Boolean(data?.data[questionChoice])}
                onClick={onChoiceQuestion}
              >
                CHOOSE A QUESTION
              </Button>
            )}
          </Flex>
        </>
      ) : (
        <>
          <Box border="1px solid #e3e3e3" pb="12px" mt="22px" mb="22px">
            <TitleForm text={'Your answer'} mb="12px" />
            <Box px="22px" py="12px">
              <Text mt="12px">{ans}</Text>
            </Box>
          </Box>
          <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
            GO TO UNIT MENU
          </Button>
        </>
      )}
    </Box>
  );
}
