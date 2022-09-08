/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { BsExclamationTriangleFill, BsCheckCircle } from 'react-icons/bs';
const STATUS = {
  '-1': {
    text: 'Sorry.... you failed the quiz. Please try again.',
    icon: BsExclamationTriangleFill,
    styles: {
      border: '0px solid pink',
      padding: '0.5em',
      bg: '#f2dede',
      color: '#a94442',
    },
  },
  //   1: {
  //     text: 'Sorry.... you failed the quiz. Please try again.',
  //     icon: BsExclamationTriangleFill,
  //     styles: {
  //       border: '0px solid pink',
  //       padding: '0.5em',
  //     },
  //   },
  2: {
    text: 'Congratulations... you passed the quiz.',
    icon: BsCheckCircle,
    styles: {
      border: '0px solid pink',
      padding: '0.5em',
      color: '#3c763d',
      bg: '#dff0d8',
    },
  },
};
export default function StatusQuizTest({ status = 0, text, icon }) {
  if (status === 0) {
    return null;
  }
  let _status = STATUS[status];
  let _icon = icon ? icon[status] : _status.icon;
  let _text = text ? text[status] : STATUS[status].text;
  let styles = STATUS[status].styles;
  return (
    <Flex {...styles} alignItems="center" mb="22px" borderRadius="4px">
      <Icon as={_icon} w="50px" h="50px" mr="22px" />
      <Text>{_text}</Text>
    </Flex>
  );
}
