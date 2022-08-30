/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { BsArrowLeftShort } from 'react-icons/bs';
export default function TitlePage({ unitNumber, title, onBack, ...style }) {
  const navigate = useNavigate();
  return (
    <Flex alignItems="center" {...style}>
      <Box
        bg="#133877"
        w="32px"
        h="32px"
        cursor="pointer"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          if (onBack) {
            return onBack();
          }
          return unitNumber ? navigate('/unit/' + unitNumber) : navigate('/');
        }}
      >
        <Icon as={BsArrowLeftShort} w="36px" h="36px" color="white" />
      </Box>
      <Text as="h1" fontWeight="bold" ml="12px" fontSize="1.5rem">
        {title}
      </Text>
    </Flex>
  );
}
