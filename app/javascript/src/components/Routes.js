import React from 'react';
import { useRoutes } from 'react-router-dom';
import Greeting from './Greeting';

export default function AppRoutes() {
  const elements = [
    {
      path: '/',
      element: <Greeting />,
      children: [],
    },
  ];

  const appRoutes = useRoutes(elements);
  return appRoutes;
}
