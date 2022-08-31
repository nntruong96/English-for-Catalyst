/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import indexRoutes from 'routes';
import Header from 'components/Header';
import theme from 'theme';
import useShallowEqualSelector from 'redux/customHook/useShallowEqualSelector';
import { fetchUser } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
import 'app.css';
const switchRoutes = (
  <>
    <Routes>
      <Route path={'*'} element={<Header />} key={0} />
    </Routes>
    <Container maxW="container.xl">
      <Routes>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} element={prop.component} key={key} />;
        })}
      </Routes>
    </Container>
  </>
);
function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ContainerApp>
          <BrowserRouter>{switchRoutes}</BrowserRouter>
        </ContainerApp>
      </ChakraProvider>
    </Provider>
  );
}

function ContainerApp({ children }) {
  const dispatch = useDispatch();
  const { loggedIn, hasFetched } = useShallowEqualSelector((state) => {
    return { loggedIn: state.auth.loggedIn, hasFetched: state.user.hasFetched };
  });
  useEffect(() => {
    if (loggedIn && !hasFetched) {
      console.log('fetchUser');
      dispatch(fetchUser());
    }
  }, [loggedIn, hasFetched]);
  return children;
}
export default App;
