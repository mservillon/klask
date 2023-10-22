import React, { useState } from 'react';

import './App.css';

import { Home } from './Home';
import { Play } from './Play';
import { Setup } from './Setup';

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

const App = () => {

  const [num, setNum] = useState(1);

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/setup",
      element: <Setup 
        num={num}
        setNum={setNum}
        />
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
