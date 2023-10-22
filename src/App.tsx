import React from 'react';

import './App.css';

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <div>Home</div>
    },
    {
      path: "/setup",
      element: <div>Setup</div>
    },
    {
      path: "/play",
      element: <div>Play</div>
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
