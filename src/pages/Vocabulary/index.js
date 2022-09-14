/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import VocabularyItem from 'components/VocabylaryItem';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import { Link } from 'react-router-dom';
import { updateUser } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useNavigate } from 'react-router';
export default function Vocabulary({
  data,
  unitNumber,
  activiti = {},
  isGrade,
}) {
  const dispatch = useDispatch();
  const loggedIn = useShallowEqualSelector((state) => state.auth.loggedIn);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');
  const { status = 0 } = activiti;
  const navigate = useNavigate();
  const onSubmit = () => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    setUpdating(true);
    dispatch(
      updateUser(
        {
          data: {
            ...activiti,
            status: 2,
            description: 'You have finished this activity.',
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
    dispatch(
      updateUser(
        {
          data: {
            ...activiti,
            status: 0,
            description: 'Unit vocabulary, definitions, and example sentences.',
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
          console.log(err, res);
        }
      )
    );
  };
  return (
    <Box mt="22px" pb="22px">
      <TitleWelComeActivity>
        Please study the <strong>{data.data.length}</strong> vocabulary below
        and press the <strong>Mark Complete</strong> button to continue.
      </TitleWelComeActivity>
      <Flex direction="column" gap="12px" mt="22px">
        {data.data.map((item, index) => {
          return (
            <VocabularyItem
              bg="#f5f5f5"
              p="22px"
              border="1px solid #e3e3e3"
              vocabulary={item}
              key={index}
              loggedIn={loggedIn}
            />
          );
        })}
      </Flex>
      <Text mt="12px" color="red">
        {error}
      </Text>
      <Flex mt="22px" gap="22" justifyContent="flex-end">
        {isGrade ? (
          ''
        ) : status === 0 ? (
          <>
            <Button
              onClick={onSubmit}
              isDisabled={updating}
              isLoading={updating}
              loadingText="   Mark Activity Complete"
              colorScheme="blue"
            >
              Mark Activity Complete
            </Button>
            <Button as={Link} to={`/unit/${unitNumber}`} isDisabled={updating}>
              CANCEL
            </Button>
          </>
        ) : (
          <>
            <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
              GO TO UNIT MENU
            </Button>
            <Button colorScheme="red" onClick={onRedu}>
              REDO
            </Button>
          </>
        )}
      </Flex>
    </Box>
  );
}
