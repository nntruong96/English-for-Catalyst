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
  Select,
} from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import TitleForm from 'components/TitlteForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser, gradeActivi } from 'redux/actions/userActions';
import ContainerForm from 'components/ContainerForm';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useNavigate } from 'react-router';
import Editor from 'components/Editor';
import Constants from 'util/Constants';
import { checkScorePass } from 'util/Constants';
const Core = Constants.SCORE;
const Grade = [{ text: 'Content' }, { text: 'Grammar/spelling' }];
export default function Speaking({
  data,
  userActiviti = {},
  unitNumber,
  isGrade,
  userId, //studentId
  classroomId,
}) {
  let { settings = {} } = useShallowEqualSelector(
    (state) => state.user.classRoom
  );
  let { min = 65, max = 400 } = settings?.writing;
  let { status = 0, data: { question, ans } = {}, grade } = userActiviti;
  const [inputAns, setAns] = useState('');
  const [comment, setComment] = useState(userActiviti.comment || '');
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);
  const [_grade, setGrade] = useState(grade || [0, 0]);
  const dispatch = useDispatch();
  const loggedIn = useShallowEqualSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  const [questionChoice, setChoice] = useState(() => {
    return [-1, 2, 1].includes(status)
      ? data?.data.findIndex((item) => item.question === question)
      : '';
  });
  const [choiced, setChoiced] = useState(
    [-1, 2, 1].includes(status) ? true : false
  );

  const onChoiceQuestion = () => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    setChoiced(true);
  };
  const onAnsChange = (e) => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    setError('');
    setAns(e.target.value);
  };
  const onSubmit = () => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    if (inputAns && inputAns.trim().length < min) {
      return setError(
        `Your answer is too short. It has to be more than ${min} words.`
      );
    }
    if (inputAns && inputAns.trim().length > max) {
      return setError(
        `Your answer is too long. It has to be less than ${max} words.`
      );
    }
    setUpdating(true);
    dispatch(
      updateUser(
        {
          data: {
            ...userActiviti,
            status: 1,
            description: `Your teacher has not graded your activity yet.`,
            data: {
              question: data?.data[questionChoice]?.question,
              ans: inputAns,
            },
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
  };
  const _gradeActivi = () => {
    if (!userId || !classroomId) {
      return setError('Grade Failed');
    }
    setUpdating(true);
    let score = Number.parseInt(_grade.reduce((a, b) => a + b) / _grade.length);
    dispatch(
      gradeActivi(
        {
          data: {
            ...userActiviti,
            status: checkScorePass(score, 100) ? 2 : -1,
            description: `Your grade on this activity is ${score}%`,
            gradeAt: new Date().getTime(),
            comment: comment,
            grade: _grade,
          },
          unitNumber: Number(unitNumber) - 1,
          type: userActiviti.type,
          userId,
          classroomId,
        },
        Number(userActiviti.status) !== 1,
        (err, res) => {
          setUpdating(false);
          if (err) {
            setError(err.error_message);
          }
        }
      )
    );
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
      {[-1, 2].includes(status) && !isGrade ? (
        <ContainerForm title="Your Grade">
          <Flex>
            <Text fontWeight="bold">Content grade: </Text>
            <Text ml="4px">{userActiviti.grade[0]}%</Text>
          </Flex>
          <Flex>
            <Text fontWeight="bold">Grammar grade: </Text>
            <Text ml="4px">{userActiviti.grade[1]}%</Text>
          </Flex>
          <Flex>
            <Text fontWeight="bold">Total grade: </Text>
            <Text ml="4px">
              {Number.parseInt(
                userActiviti.grade.reduce((a, b) => a + b) /
                  userActiviti.grade.length
              )}
              %
            </Text>
          </Flex>
          <Flex mt="12px">
            <Text fontWeight="bold">Teachers Comments:</Text>
            <Editor isView data={userActiviti.comment || 'No comment'} />
          </Flex>
        </ContainerForm>
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
          <Flex
            gap="12px"
            alignItems="center"
            flexWrap="wrap"
            justifyContent="flex-end"
          >
            {choiced ? (
              <>
                <Button
                  colorScheme="blue"
                  onClick={onSubmit}
                  isLoading={updating}
                  loadingText={'SUBMIT YOUR ANS'}
                  isDisabled={!Boolean(inputAns?.trim()) || updating}
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
            <TitleForm
              text={isGrade ? `Student's Answer` : 'Your answer'}
              mb="12px"
            />
            <Box px="22px" py="12px">
              <Text mt="12px">{ans}</Text>
            </Box>
          </Box>
          {isGrade ? (
            ''
          ) : (
            <Flex justifyContent="flex-end">
              <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
                GO TO UNIT MENU
              </Button>
            </Flex>
          )}
        </>
      )}
      {isGrade ? (
        <>
          <ContainerForm title="Please grade the student's pronunciation">
            {Grade.map((item, index) => {
              return (
                <Flex gap="12px" alignItems="center" key={index} mb="12px">
                  <Text fontWeight="bold" whiteSpace="nowrap" w="200px">
                    {item.text}:
                  </Text>
                  <Select
                    maxW="300px"
                    value={_grade[index]}
                    onChange={(e) => {
                      let __grade = [..._grade];
                      __grade[index] = Number(e.target.value);
                      console.log(__grade);
                      setGrade(__grade);
                    }}
                  >
                    <option value={0}>Chooice a grade</option>
                    {Core.map((item, index) => (
                      <option value={item.value} key={index}>
                        {item.text}
                      </option>
                    ))}
                  </Select>
                </Flex>
              );
            })}
          </ContainerForm>
          <ContainerForm title="Comments to student">
            <Box mt="22px" minH="150px">
              <Editor value={comment} onChange={setComment} />
            </Box>
            <Flex mt="22px" alignItems="flex-end" justifyContent="flex-end">
              <Button
                isDisabled={
                  !Boolean(_grade[0]) || !Boolean(_grade[1]) || updating
                }
                colorScheme="blue"
                isLoading={updating}
                loadingText={'Submit Grade'}
                onClick={_gradeActivi}
              >
                Submit Grade
              </Button>
            </Flex>
          </ContainerForm>
        </>
      ) : (
        ''
      )}
    </Box>
  );
}
