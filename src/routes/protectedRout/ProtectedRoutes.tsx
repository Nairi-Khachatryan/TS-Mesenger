import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes: React.FC = () => {
  const isAuth = false; 

  if (!isAuth) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};