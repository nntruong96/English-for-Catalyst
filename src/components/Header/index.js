/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Flex, Image, Container } from '@chakra-ui/react';
import logo from 'images/site-logo.png';
import GroupButtonAuth from 'components/GroupButtonAuth';
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <Flex p="12px" position="sticky" top="0" zIndex={10} bg="#f5f5f5">
      <Container
        maxW="container.xl"
        justifyContent="space-between"
        display="flex"
      >
        <Link to={'/'}>
          <Image src={logo} alt="logo" />
        </Link>
        <GroupButtonAuth />
      </Container>
    </Flex>
  );
}
