import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import ErrorPage from './ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'profile',
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
