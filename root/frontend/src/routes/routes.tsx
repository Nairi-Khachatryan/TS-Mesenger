import { ProtectedRoutes } from './protectedRout/ProtectedRoutes';
import NotFoundComponent from '../components/notFoundPage';
import { AppLayout } from '../layout/appLayout/AppLayout';
import { createBrowserRouter } from 'react-router-dom';
import { Profile } from '../pages/profile/Profile';
import { SignIn } from '../pages/signIn/SignIn';
import { SignUp } from '../pages/signUp/SignUp';
import Home from '../pages/home/Home';
import { ROUTES } from './paths';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME_PATH,
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: ROUTES.PROFILE_PATH,
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.SIGN_IN_PATH,
    element: <SignIn />,
  },
  {
    path: ROUTES.SIGN_UP_PATH,
    element: <SignUp />,
  },
  {
    path: ROUTES.NOT_FOUND_PATH,
    element: <NotFoundComponent />,
  },
]);
