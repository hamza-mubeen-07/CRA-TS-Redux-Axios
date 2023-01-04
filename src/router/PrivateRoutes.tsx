import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_PATHS } from './routePaths';

const PrivateRoutes: FC = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to={ROUTE_PATHS.LOGIN} />;
};

export default PrivateRoutes;
