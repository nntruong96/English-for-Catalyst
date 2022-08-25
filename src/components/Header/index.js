/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Flex, Image, Container } from '@chakra-ui/react';
import logo from 'images/site-logo.png';
import GroupButtonAuth from 'components/GroupButtonAuth';
import { Link } from 'react-router-dom';
export default function Index(props) {
  return (
    <Flex justifyContent="space-between" p="12px">
      <Link to={'/'}>
        <Image src={logo} alt="logo" />
      </Link>
      <GroupButtonAuth />
    </Flex>
  );
}
