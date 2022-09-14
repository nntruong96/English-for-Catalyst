/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
export default function Index(props) {
  return (
    <Box
      w="100vw"
      h="100vh"
      position="absolute"
      left="0px"
      top="0px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner color="blue" />
    </Box>
  );
}
