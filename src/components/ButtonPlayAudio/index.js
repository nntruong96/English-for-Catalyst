/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
export default function Index({ audioUrl = '', onClick, ...style }) {
  const playAudio = () => {
    if (!audioUrl) {
      return;
    }
    let audio = new Audio(audioUrl);
    audio.play();
  };
  return (
    <Flex
      onClick={onClick ? onClick : playAudio}
      minW="30px"
      w="30px"
      h="20px"
      bg="#133877"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      borderRadius="4px"
      {...style}
    >
      <Icon as={BsFillPlayFill} color="white" />
    </Flex>
  );
}
