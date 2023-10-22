import React, { useState } from 'react';

import './App.css';

import { Home } from './Home';
import { Play } from './Play';
import { Setup } from './Setup';
import { GameResult, getWinningPercentageDisplay } from './game-results';

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";


const dummyGameResults: GameResult[] = [
  true
  , false
  , true
  , true
];

const App = () => {

  const [num, setNum] = useState(1);
  const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);

  const addNewGameResult = (newGameResult: GameResult) => setGameResults([

    ...gameResults
    , newGameResult
  ])

  const router = createHashRouter([
    {
      path: "/",
      element: <Home 
        winningPercentageDisplay = {getWinningPercentageDisplay(gameResults)}/>
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
      element: <Play 
        addNewGameResult={addNewGameResult}
      />
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
