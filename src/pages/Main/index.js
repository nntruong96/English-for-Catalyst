/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import WelcomePage from 'pages/Welcome';
import Header from 'components/Header';
export default function Index(props) {
  return (
    <Box>
      <WelcomePage></WelcomePage>
    </Box>
  );
}
