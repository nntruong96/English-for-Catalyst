/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Icon, Flex } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import ButtonPlayAudio from 'components/ButtonPlayAudio';

export default function VocabularyItem({ vocabulary, ...orther }) {
  let {
    vocab: { text, orText, audioUrl },
    example,
    description,
  } = vocabulary;
  const playAudio = (_audioUrl) => {
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
