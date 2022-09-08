/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import ButtonPlayAudio from 'components/ButtonPlayAudio';
import { useNavigate } from 'react-router';
export default function VocabularyItem({ loggedIn, vocabulary, ...orther }) {
  let {
    vocab: { text, orText, audioUrl },
    example,
    description,
  } = vocabulary;
  const navigate = useNavigate();
  const playAudio = (_audioUrl) => {
    if (!loggedIn) {
      return navigate('/auth/login');
    }
    let audio = new Audio(_audioUrl);
    audio.play();
  };
  return (
    <Box {...orther}>
      <Flex>
        <ButtonPlayAudio onClick={() => playAudio(audioUrl)} />
        <Text fontWeight="bold" ml="12px">
          {text} {orText ? `(${orText})` : ''}
        </Text>
      </Flex>
      <Text fontSize={12}>{description}</Text>
      <Flex mt="22px">
        <ButtonPlayAudio onClick={() => playAudio(example.audioUrl)} />
        <Text ml="12px" fontSize={14}>
          {example.text}
        </Text>
      </Flex>
    </Box>
  );
}
