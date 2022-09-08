/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Flex, Box, Icon } from '@chakra-ui/react';
import { BsExclamationOctagonFill } from 'react-icons/bs';
export default function Index({ children }) {
  return (
    <Flex bg="#d9edf7" borderRadius="4px" p="12px" alignItems="center">
      <Icon mr="12px" color="#31708f" as={BsExclamationOctagonFill} />
      <Box color="#31708f">{children}</Box>
    </Flex>
  );
}
