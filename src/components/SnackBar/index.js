/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React, { useEffect } from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { alertActions } from 'redux/actions';
import {
  BsInfoCircle,
  BsCheckCircle,
  BsExclamationTriangle,
  BsExclamationCircle,
} from 'react-icons/bs';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
const TYPE = {
  success: {
    style: { bg: 'rgb(56, 142, 60)', color: 'white' },
    icon: BsCheckCircle,
  },
  error: {
    style: { bg: 'rgb(211, 47, 47)', color: 'white' },
    icon: BsExclamationTriangle,
  },
  warning: {
    style: { bg: 'rgb(245, 124, 0)', color: 'black' },
    icon: BsExclamationCircle,
  },
  info: {
    style: {
      color: 'white',
      bg: 'rgb(2, 136, 209)',
    },
    icon: BsInfoCircle,
  },
};
export default function Index(props) {
  const dispatch = useDispatch();
  const {
    message = '',
    title = '',
    subtitle = '',
    show = true,
    type = 'info',
    autoHideTime = 6000,
    action = [],
    timeCreate,
  } = useShallowEqualSelector((state) => state.alert);
  let timerAutoHide = React.useRef();
  const setAutoHideTimer = function (autoHideDurationParam) {
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, 'timeout');
    }, autoHideDurationParam);
  };
  const handleClose = () => {
    dispatch(alertActions.clear());
  };
  useEffect(() => {
    if (show) {
      setAutoHideTimer(autoHideTime);
    }
  }, [show, autoHideTime, title, message, timeCreate]);
  let data = TYPE[type] || TYPE['info'];
  return (
    <Box
      position="absolute"
      bottom={show ? '20px' : '-200px'}
      minW="200px"
      maxW="500px"
      minH="50px"
      p="6px 16px"
      fontWeight="500"
      boxShadow="rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px"
      borderRadius="4px"
      transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      left="8px"
      display="flex"
      alignItems="center"
      zIndex={100}
      {...data.style}
    >
      <Icon as={data.icon} mr="12px" />
      <Box>
        <Text>{title}</Text>
        <Text>{message}</Text>
      </Box>
    </Box>
  );
}
