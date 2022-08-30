/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Text } from '@chakra-ui/react';
const Title = function ({ text, ...styles }) {
  return (
    <Text
      fontWeight="bold"
      fontSize="20px"
      bg="blue.600"
      color="white"
      //   borderRightRadius="12px"
      p="4px 12px"
      {...styles}
    >
      {text}
    </Text>
  );
};
export default Title;
