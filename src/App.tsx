import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import './App.css';

export const App = () => {
  return <RouterProvider router={router} />;
};
