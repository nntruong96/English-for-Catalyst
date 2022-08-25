/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { useColorModeValue, Input } from '@chakra-ui/react';
export default function Index(props) {
  const bgInput = useColorModeValue('white', 'gray.800');
  const borderInput = useColorModeValue('1px solid #ccc', '1px solid gray.800');
  return <Input border={borderInput} bg={bgInput} {...props} />;
}
