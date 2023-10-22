import React from 'react';

import './App.css';

import { Home } from './Home';
import { Play } from './Play';
import { Setup } from './Setup';

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/setup",
      element: <Setup />
    },
    {
      path: "/play",
      element: <Play />
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
