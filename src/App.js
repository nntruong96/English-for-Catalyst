import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import indexRoutes from 'routes';
import Header from 'components/Header';
import theme from 'theme';
import 'app.css';
const switchRoutes = (
  <React.StrictMode>
    <Routes>
      <Route path={'*'} element={<Header />} key={0} />
    </Routes>
    <Routes>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} element={prop.component()} key={key} />;
      })}
    </Routes>
  </React.StrictMode>
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
