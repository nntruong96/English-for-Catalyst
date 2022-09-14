/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getName } from 'util/Constants';
export default function Index({ user, children, ...style }) {
  return (
    <Text {...style} as={Link} to={`/view/${user._id}`}>
      {getName(user)}
      {children}
    </Text>
  );
}
