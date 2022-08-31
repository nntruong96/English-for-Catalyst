/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useState } from 'react';
import { Box, Text, Button, Input, Flex } from '@chakra-ui/react';
import TitleWelComeActivity from 'components/TitleWelcomeActivity';
import TitleForm from 'components/TitlteForm';
import ButtonPlay from 'components/ButtonPlayAudio';
import { isValidUrl } from 'util/Constants';
import { Link } from 'react-router-dom';
export default function Speaking({ data, userActiviti = {}, unitNumber }) {
  console.log('data', data);
  let { status = 0, audioUrl = '' } = userActiviti;
  const [link, setLink] = useState(audioUrl);
  const [isEdit, setIsEdit] = useState(false);
  const playAudio = (_audioUrl) => {
    let audio = new Audio(_audioUrl);
    audio.play();
  };
  const onInputChange = (e) => {
    setLink(e.target.value);
  };
  const submit = () => {
    setIsEdit(false);
    console.log('submit');
  };
  return (
    <Box mt="22px">
      {status === 0 ? (
        <TitleWelComeActivity>
          Please listen to and practice the 5 sentences below. Then follow the
          instructions below.
        </TitleWelComeActivity>
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
      {[0].includes(status) || isEdit ? (
        <Flex gap="12px" alignItems="center" flexWrap="wrap">
          <Text fontWeight="bold" whiteSpace="nowrap">
            Pate Link
          </Text>
          <Input value={link} maxW="500px" onChange={onInputChange}></Input>
          <Button
            colorScheme="blue"
            onClick={submit}
            isDisabled={!isValidUrl(link)}
          >
            SUBMIT
          </Button>
          {isEdit ? (
            <Button onClick={() => setIsEdit(false)}>CANCEL</Button>
          ) : (
            ''
          )}
        </Flex>
      ) : (
        <>
          <Flex gap="12px" alignItems="center">
            <Text fontWeight="bold" whiteSpace="nowrap">
              Youre Link:
            </Text>
            <Text color="blue" as="a" href={audioUrl} target="_blank">
              {audioUrl}
            </Text>
          </Flex>
          <Flex gap="12px" mt="22px">
            <Button as={Link} to={`/unit/${unitNumber}`} colorScheme="blue">
              GO TO UNIT MENU
            </Button>
            <Button onClick={() => setIsEdit(true)} colorScheme="red">
              EDIT LINK
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
}
