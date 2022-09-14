/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Text, Select, Button, Input, Flex } from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import TitleForm from 'components/TitlteForm';
import ButtonPlay from 'components/ButtonPlayAudio';
import { isValidUrl } from 'util/Constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser, gradeActivi } from 'redux/actions/userActions';
import ContainerForm from 'components/ContainerForm';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useNavigate } from 'react-router';
import Editor from 'components/Editor';
import { checkScorePass } from 'util/Constants';
import Constants from 'util/Constants';
const Pronunciation = Constants.SCORE;
export default function Speaking({
  data,
  userActiviti = {},
  unitNumber,
  isGrade,
  userId, //studentId
  classroomId,
}) {
  let { status = 0, audioUrl = '', comment: _comment } = userActiviti;
  const [link, setLink] = useState(audioUrl);
  const [comment, setComment] = useState(_comment || '');
  const [grade, setGrade] = useState(userActiviti.grade || 0);
  const [isEdit, setIsEdit] = useState(false);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const loggedIn = useShallowEqualSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  const [error, setError] = useState('');
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
    setLink(e.target.value);
  };
  const submit = () => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    setIsEdit(false);
    setUpdating(true);
    dispatch(
      updateUser(
        {
          data: {
            ...userActiviti,
            status: 1,
            description: `Your teacher has not graded your activity yet.`,
            audioUrl: link,
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
    dispatch(
      gradeActivi(
        {
          data: {
            ...userActiviti,
            status: checkScorePass(grade, 100) ? 2 : -1,
            description: `Your grade on this activity is ${grade}%`,
            gradeAt: new Date().getTime(),
            comment: comment,
            grade,
          },
          unitNumber: Number(unitNumber) - 1,
          type: userActiviti.type,
          userId,
          classroomId,
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
  return (
    <Box mt="22px" pb="22px">
      {status === 0 ? (
        <TitleWelComeActivity>
          Please listen to and practice the 5 sentences below. Then follow the
          instructions below.
        </TitleWelComeActivity>
      ) : (
        ''
      )}
      {[-1, 2].includes(status) && !isGrade ? (
        <ContainerForm title="Your Grade">
          <Flex>
            <Text fontWeight="bold">Grade: </Text>
            <Text ml="4px">{userActiviti.grade}</Text>
          </Flex>
          <Flex mt="12px">
            <Text fontWeight="bold">Teacher Comments:</Text>
            <Editor isView data={userActiviti.comment || 'No comment'} />
          </Flex>
        </ContainerForm>
      ) : (
        ''
      )}
      <Box border="1px solid #e3e3e3" pb="12px" mt="22px" mb="22px">
        <TitleForm text={'Required Sentences'} mb="12px" />
        {data?.data.map((item, index) => {
          return (
            <Flex gap="12px" p="12px" key={index}>
              <ButtonPlay mt="5px" onClick={() => playAudio(item.audioUrl)} />
              <Text>{item.question}</Text>
            </Flex>
          );
        })}
      </Box>
      <Text mb="12px" color="red">
        {error}
      </Text>
      {[0].includes(status) || isEdit ? (
        <Flex gap="12px" alignItems="center" flexWrap="wrap">
          <Text fontWeight="bold" whiteSpace="nowrap">
            Pate Link
          </Text>
          <Input value={link} maxW="500px" onChange={onInputChange}></Input>
          <Button
            colorScheme="blue"
            onClick={submit}
            isLoading={updating}
            loadingText={'SUBMIT'}
            isDisabled={!isValidUrl(link) || updating}
          >
            SUBMIT
          </Button>
          {isEdit ? (
            <Button onClick={() => setIsEdit(false)}>CANCEL</Button>
          ) : (
            ''
          )}
        </Flex>
      ) : !isGrade ? (
        <>
          <Flex gap="12px" alignItems="center">
            <Text fontWeight="bold" whiteSpace="nowrap">
              Youre Link:
            </Text>
            <Text color="blue" as="a" href={audioUrl} target="_blank">
              {audioUrl}
            </Text>
          </Flex>
          <Flex gap="12px" mt="22px" justifyContent="flex-end">
            <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
              GO TO UNIT MENU
            </Button>
            {/* <Button onClick={() => setIsEdit(true)} colorScheme="red">
              EDIT LINK
            </Button> */}
          </Flex>
        </>
      ) : (
        <>
          <ContainerForm title="Student's Alt Link (MP3, MP4, or other)">
            <Flex gap="12px" alignItems="center">
              <Text fontWeight="bold" whiteSpace="nowrap">
                Link:
              </Text>
              <Text color="blue" as="a" href={audioUrl} target="_blank">
                {audioUrl}
              </Text>
            </Flex>
          </ContainerForm>
          <ContainerForm title="Please grade the student's pronunciation">
            <Flex gap="12px" alignItems="center">
              <Text fontWeight="bold" whiteSpace="nowrap">
                Pronunciation
              </Text>
              <Select
                maxW="300px"
                value={grade}
                onChange={(e) => setGrade(Number(e.target.value))}
              >
                <option value={0}>Chooice a grade</option>
                {Pronunciation.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.text}
                  </option>
                ))}
              </Select>
            </Flex>
          </ContainerForm>
          <ContainerForm title="Comments to student">
            <Box mt="22px" minH="150px">
              <Editor value={comment} onChange={setComment} />
            </Box>
            <Flex mt="22px" alignItems="flex-end" justifyContent="flex-end">
              <Button
                isDisabled={!Boolean(grade) || updating}
                isLoading={updating}
                loadingText="Submit Grade"
                onClick={_gradeActivi}
                colorScheme="blue"
              >
                Submit Grade
              </Button>
            </Flex>
          </ContainerForm>
        </>
      )}
    </Box>
  );
}
