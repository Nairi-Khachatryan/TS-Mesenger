import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../paths';

export const ProtectedRoutes: React.FC = () => {
  const { email } = useAuth();

  if (!email) {
    return <Navigate to={ROUTES.SIGN_IN_PATH} />;
  }

  return <Outlet />;
};
