import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greeting from './components/Greeting';
import getMessagesAPI from './apiFn/apiFn';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessagesAPI());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Greeting />,
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
