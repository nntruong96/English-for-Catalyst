import React, { useEffect } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import indexRoutes from 'routes';
import Header from 'components/Header';
import theme from 'theme';
import 'app.css';
let added = false;
const switchRoutes = (
  <React.StrictMode>
    <Routes>
      <Route path={'*'} element={<Header />} key={0} />
    </Routes>
    <Routes>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} element={prop.component} key={key} />;
      })}
    </Routes>
  </React.StrictMode>
);
function App() {
  useEffect(() => {
    if (!added) {
      console.log('useEffect');
      document.addEventListener(
        'click',
        function (e) {
          console.log('click', e.target);
          // var tre = e.target.href || '';
          // if( tre.indexOf("link.php") > -1) {
          //     alert('it worked');
          // }
        },
        false
      );
      added = true;
    }
  }, []);
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Container maxW="container.xl">
          <BrowserRouter>{switchRoutes}</BrowserRouter>
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
