import React, { useState } from 'react';

import './App.css';

import { Home } from './Home';
import { Play } from './Play';
import { Setup } from './Setup';
import { GameResult, getWinningPercentageDisplay, getGeneralGameTimeFacts } from './game-results';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { TableBarOutlined } from '@mui/icons-material';

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

const dummyGameResults: GameResult[] = [
    {
      won: true
      , start: "2023-10-01T17:40:46.333Z"
      , end: "2023-10-01T17:53:27.123Z"
  }
  , {
      won: false
      , start: "2023-10-09T17:55:46.333Z"
      , end: "2023-10-09T18:00:27.123Z"
  }
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
        winningPercentageDisplay = {getWinningPercentageDisplay(gameResults)}
        generalGameTimeFacts={ getGeneralGameTimeFacts(gameResults, Date.now())}
        />
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
      <Box
        sx={{
          flexGrow: 1
        }}
        >
        <AppBar
          position='static'
          sx={{
            overflow: 'hidden'
            , bgcolor: 'whitesmoke'
          }}
          >
          <Toolbar>
            <TableBarOutlined
              color={"primary"}
              sx={{
                mr: 1
                , fontSize: '1.5em'
                , opacity: 0.5
              }}
              />
              <Typography
                variant='h6'
                color='primary'
                sx={{
                  opacity: 0.75
                }}
              >
                Klask Companion App
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          sx={{
            pl: 2
            , pr: 2
            , textAlign: 'center'
          }}
        >
          <RouterProvider router={router} />
        </Box>
    </div>
  );
}

export default App;
