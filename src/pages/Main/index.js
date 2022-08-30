/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Box, Text, Icon, Flex } from '@chakra-ui/react';
import WelcomePage from 'pages/Welcome';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import UnitList from 'components/UnitList';
import { BsTrophy } from 'react-icons/bs';
export default function Main(props) {
  let isLogged = useShallowEqualSelector((state) => state.user.isLogged);
  return (
    <Box>
      {isLogged ? (
        <Box p="22px">
          <Text fontWeight="bold">Welcome to English for Catalyst. </Text>
          <UnitList />
          <Box>
            <Text
              fontWeight="bold"
              mt="22px"
              fontSize="20px"
              bg="blue.600"
              color="white"
              p="4px 12px"
            >
              Certification Progress: You are not certified
            </Text>
            <Flex border="1px solid gray" p="22px">
              <Icon as={BsTrophy} w="70px" h="70px" color="#1995CA" />
              <Text px="22px">
                To earn the English for Catalyst Units module certificate,
                students must complete all units with a minimum grade of{' '}
                <strong>85%</strong> or above. The certificate will
                automatically appear in this space when the above criteria are
                met.
              </Text>
            </Flex>
          </Box>
        </Box>
      ) : (
        <WelcomePage></WelcomePage>
      )}
    </Box>
  );
}
