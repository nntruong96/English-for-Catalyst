/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box } from '@chakra-ui/react';
import Title from 'components/TitlteForm';
const containerStyle = {
  mt: '22px',
  border: '1px solid #e3e3e3',
};
export default function Index({ children, title }) {
  return (
    <Box {...containerStyle}>
      <Title text={title} />
      <Box p="12px" overflow="auto">
        {children}
      </Box>
    </Box>
  );
}
