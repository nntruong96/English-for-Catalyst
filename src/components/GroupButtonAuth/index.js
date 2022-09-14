/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import {
  Box,
  Flex,
  Button,
  Icon,
  MenuButton,
  Menu,
  MenuList,
  Text,
  MenuItem,
} from '@chakra-ui/react';
import {
  BsFillPersonPlusFill,
  BsChevronDown,
  BsArrowBarRight,
  BsList,
  BsPersonFill,
} from 'react-icons/bs';
// import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { logout } from 'redux/actions/authActions';
import { Link } from 'react-router-dom';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { useDispatch } from 'react-redux';
import { getName, compact } from 'util/Constants';
const GroupButton = function ({ isLogged, user }) {
  const dispatch = useDispatch();

  return (
    <>
      {!isLogged ? (
        <Box as={Link} to="/auth/register" w="full">
          <Button mr="12px" size="lg" w="full">
            <Text display="flex" alignItems="center">
              <Icon as={BsFillPersonPlusFill} mr="12px" />
              SIGN UP
            </Text>
          </Button>
        </Box>
      ) : (
        <Box as={Link} to="/myclass" w="full">
          <Button mr="12px" size="lg" w="full">
            My Classroom
          </Button>
        </Box>
      )}
      {!isLogged ? (
        <Box as={Link} to="/auth/login" w="full">
          <Button colorScheme="blue" size="lg" w="full">
            <Text display="flex" alignItems="center">
              <Icon as={BsArrowBarRight} mr="12px" />
              Login
            </Text>
          </Button>
        </Box>
      ) : (
        <Box w="full">
          <Menu>
            <MenuButton
              as={Button}
              w="full"
              size="lg"
              rightIcon={<Icon as={BsChevronDown} />}
              display="flex"
              alignItems="center"
            >
              <Text display="flex" alignItems="center">
                <Icon as={BsPersonFill} mr="12px" />
                {compact(getName(user))}
              </Text>
            </MenuButton>
            <MenuList>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                p="0px 12px"
              >
                <MenuItem as={Link} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem as={Link} to="/profile/grade">
                  My Grade
                </MenuItem>
                <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
              </Flex>
            </MenuList>
          </Menu>
        </Box>
      )}
      {/* <ColorModeSwitcher w="full" h="50px" minW="50px" /> */}
    </>
  );
};
export default function GroupButtonAuth() {
  const { isLogged, user } = useShallowEqualSelector((state) => {
    return { isLogged: state.auth.loggedIn, user: state.user.user };
  });
  return (
    <Flex>
      <Flex
        gap="12px"
        display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
      >
        <GroupButton isLogged={isLogged} user={user} />
      </Flex>
      <Box display={{ md: 'none', lg: 'none', xl: 'none' }}>
        <Menu>
          <MenuButton as={Button}>
            <Icon as={BsList} />
          </MenuButton>
          <MenuList>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              gap="12px"
              p="0px 12px"
            >
              <GroupButton isLogged={isLogged} user={user} />
            </Flex>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
