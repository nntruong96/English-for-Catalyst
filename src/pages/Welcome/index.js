/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Button, Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UnitList from 'components/UnitTable';
import imageTop from 'images/avatar-round-e4it.jpeg';

const Title = function ({ text, ...styles }) {
  return (
    <Text
      fontWeight="bold"
      mt="22px"
      fontSize="20px"
      bg="blue.600"
      color="white"
      borderRightRadius="12px"
      p="4px 12px"
      {...styles}
    >
      {text}
    </Text>
  );
};
export default function Index(props) {
  return (
    <Box>
      <Text fontWeight="bold" mt="22px" fontSize="1.66em">
        ENGLISH FOR CATALYST
      </Text>
      <Flex
        alignItems="center"
        justifyContent="center"
        w="full"
        mt="22px"
        gap="40px"
        flexWrap="wrap"
      >
        <Image w="400px" alt="top" src={imageTop} />
        <Flex direction="column">
          <Link to="/auth/register">
            <Button mt="22px" w="200px" colorScheme="orange">
              Sign up Free
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button mt="12px" w="200px">
              or login
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Title text="What is English for Catalyst?" mt="40px" />
      <Flex alignItems="center" justifyContent="center" direction="column">
        <Text mt="22px" lineHeight="1.6">
          <strong> WE INFORMATION TECHNOLOGY.</strong> We really do. So
          naturally we do our best to offer a wide arrray of Information and
          Communications Technology (ICT) topics including: software, hardware,
          programming, engineering, networks, databases, tech support, and more.
          <br />
          <br /> Our custom-built platform, loved by students and teachers
          around the world, features a wide variety of American English and
          British English language learning activities including: Reading,
          Writing, Speaking, Multiple Choice, Spelling, and Listening
          Comprehension.
        </Text>
        <Image
          src="https://www.english4it.com/themes/english4it/images/fp-promotional5.jpg"
          alt="main"
          width="50%"
          mt="22px"
          maxW="500px"
        />
      </Flex>
      <Title text="How does it work?" mt="40px" />
      <Box mt="22px">
        <Text>
          We like to think of ourselves as an "interactive online textbook" with
          a built-in "certification program" that can be used in either 100%
          online or blended learning classrooms. The course is delivered through
          a standard web browser and works great on any desktop, laptop, tablet,
          or mobile phone with Internet connection. <br />
          <br /> The included subject matter and activities have been written
          and designed by TEFL (Teaching English as a Foreign Language)
          experts.The difficulty ranges from "Pre-intermediate" to "Advanced"
          level English according to the CEFR (Council of Europe Language Level)
          scale. <br />
          <br />
          This is technically classified as an ESP (English for Specific
          Purposes) course, teaching hundreds of relevant vocabulary terms.
        </Text>
      </Box>
      <Title text="What materials are included?" mt="40px" />
      <UnitList />
    </Box>
  );
}
