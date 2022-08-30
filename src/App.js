import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import indexRoutes from 'routes';
import Header from 'components/Header';
import theme from 'theme';
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
        <BrowserRouter>{switchRoutes}</BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
