// import { lazy } from 'react';
// const Main = lazy(() => import('pages/Main'));
// const Register = lazy(() => import('pages/Auth/Register'));
// const Login = lazy(() => import('pages/Auth/Login'));
import Main from 'pages/Main';
import Register from 'pages/Auth/Register';
import Login from 'pages/Auth/Login';
import Forgot from 'pages/Auth/ForgotPassword';
import SetPassword from 'pages/Auth/SetPassword';
import UseDefault from 'pages/UnitDefault';
import Activities from 'pages/Activities';
const indexRoutes = [
  {
    path: `*`,
    component: <Main />,
  },
  {
    path: `/register`,
    component: <Register />,
  },
  {
    path: `/login`,
    component: <Login />,
  },
  {
    path: `/forgot`,
    component: <Forgot />,
  },
  {
    path: `/setPassword`,
    component: <SetPassword />,
  },
  {
    path: `/unit/:unitNumber`,
    component: <UseDefault />,
  },
  {
    path: `/unit/:unitNumber/:activityName`,
    component: <Activities />,
  },
];

export default indexRoutes;
