import * as React from 'react';
import { FC } from 'react';
import Login from '../pages/login/Login';
import { ROUTE_PATHS } from '../contants/routePaths';
import SignUp from '../pages/signup/SignUp';
import Home from '../pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

const { LOGIN, SIGNUP, HOME } = ROUTE_PATHS;

const Router: FC = () => {
  const routes = [
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: HOME,
          element: <Home />,
        },
      ],
    },
    {
      path: LOGIN,
      element: <Login />,
    },
    {
      path: SIGNUP,
      element: <SignUp />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
export default Router;
