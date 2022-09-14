/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ChakraProvider, Box, Spinner, Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import indexRoutes from 'routes';
import Header from 'components/Header';
import theme from 'theme';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { fetchUser, fetchClassRoom } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { getUnits } from 'redux/actions/documents';
import SnackBar from 'components/SnackBar';
import 'app.css';
const SwitchRoutes = () => {
  const { loggedIn } = useShallowEqualSelector((state) => {
    return {
      loggedIn: state.auth.loggedIn,
    };
  });
  return (
    <>
      <Routes>
        <Route path={'*'} element={<Header />} key={0} />
      </Routes>
      <Container maxW="container.lg">
        <Routes>
          {indexRoutes.map((prop, key) => {
            if (prop.requireLogin && !loggedIn) {
              return null;
            }
            return (
              <Route path={prop.path} element={prop.component} key={key} />
            );
          })}
        </Routes>
      </Container>
    </>
  );
};
function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ContainerApp>
          <BrowserRouter>
            <SwitchRoutes />
          </BrowserRouter>
        </ContainerApp>
        <SnackBar />
      </ChakraProvider>
    </Provider>
  );
}

function ContainerApp({ children }) {
  const dispatch = useDispatch();
  const {
    loggedIn,
    hasFetched,
    hasFetchedUnit,
    isFetchingUser,
    isFetchingUnit,
  } = useShallowEqualSelector((state) => {
    return {
      loggedIn: state.auth.loggedIn,
      isFetchingUser: state.user.isFetching,
      hasFetched: state.user.hasFetched,
      hasFetchedUnit: state.documents.hasFetched,
      isFetchingUnit: state.documents.isFetching,
      units: state.documents.units,
    };
  });
  useEffect(() => {
    if (loggedIn && !hasFetched && !isFetchingUser) {
      dispatch(fetchUser());
      dispatch(fetchClassRoom());
    }
    if (!hasFetchedUnit && !isFetchingUnit) {
      dispatch(getUnits());
    }
  }, [loggedIn]);
  if (isFetchingUnit || isFetchingUser) {
    //render spiner there
    return (
      <Box
        w="full"
        h="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner color="blue" />
      </Box>
    );
  }

  return (
    <Box h="full" overflow="auto">
      {children}
    </Box>
  );
}
export default App;
