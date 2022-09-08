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
import Profile from 'pages/Profile';
import Grade from 'pages/Grade';
import ClassRoom from 'pages/ClassRoom';
const indexRoutes = [
  {
    path: `*`,
    component: <Main />,
  },
  {
    path: `auth/register`,
    component: <Register />,
  },
  {
    path: `auth/login`,
    component: <Login />,
  },
  {
    path: `auth/forgot`,
    component: <Forgot />,
  },
  {
    path: `auth/reset`,
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
  {
    path: `profile`,
    component: <Profile />,
    requireLogin: true,
  },
  {
    path: 'profile/grade',
    component: <Grade />,
    requireLogin: true,
  },
  {
    path: 'myclass',
    component: <ClassRoom />,
    requireLogin: true,
  },
];

export default indexRoutes;
