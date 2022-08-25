// import { lazy } from 'react';
// const Main = lazy(() => import('pages/Main'));
// const Register = lazy(() => import('pages/Auth/Register'));
// const Login = lazy(() => import('pages/Auth/Login'));
import Main from 'pages/Main';
import Register from 'pages/Auth/Register';
import Login from 'pages/Auth/Login';
import Forgot from 'pages/Auth/ForgotPassword';
import SetPassword from 'pages/Auth/SetPassword';
const indexRoutes = [
  {
    path: `/register`,
    component: (props) => <Register {...props} />,
  },
  {
    path: `/login`,
    component: (props) => <Login {...props} />,
  },
  {
    path: `/forgot`,
    component: (props) => <Forgot {...props} />,
  },
  {
    path: `/setPassword`,
    component: (props) => <SetPassword {...props} />,
  },
  {
    path: `/`,
    component: (props) => <Main {...props} />,
  },
];

export default indexRoutes;
