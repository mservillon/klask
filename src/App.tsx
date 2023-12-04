import React, { useEffect, useState } from 'react';

import './App.css';

import { Home } from './Home';
import { Play } from './Play';
import { Setup } from './Setup';
import { GameResult, getWinningPercentageDisplay, getGeneralGameTimeFacts, getLeaderboardData, getPreviousPlayers } from './game-results';
import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SettingsOutlined, TableBarOutlined } from '@mui/icons-material';
import { Stats } from './Stats';

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

import localforage from 'localforage';
import { loadGamesFromCloud, saveGameToCloud } from './tca-cloud-api';

/*
const dummyGameResults: GameResult[] = [
  {
      //won: true
      winner: "Tom"
      ,players: ["Tom", "taylor"]

      , start: "2023-10-01T17:40:46.333Z"
      , end: "2023-10-01T17:53:27.123Z"
  }
  , {
      winner: "Troy"
      , players: ["Troy", "Jonah", "Sheldon", "Tom"]
      , start: "2023-10-09T17:55:46.333Z"
      , end: "2023-10-09T18:00:27.123Z"
  }
  , {
      winner: "Troy"
      , players: ["Troy", "Mack"]
      , start: "2023-10-09T17:55:46.333Z"
      , end: "2023-10-09T18:00:27.123Z"
  }
  , {
      winner: "Mack"
      , players: ["Troy", "Mack"]
      , start: "2023-10-09T17:55:46.333Z"
      , end: "2023-10-09T18:00:27.123Z"
  }
  , {
      winner: "Mack"
      , players: ["Troy", "Mack"]
      , start: "2023-10-09T17:55:46.333Z"
      , end: "2023-10-09T18:00:27.123Z"
  }
];
*/

const App = () => {

  const [num, setNum] = useState(1);
  const [gameResults, setGameResults] = useState<GameResult[]>([]);
  const [title, setTitle] = useState<string>("Klask Companion App")
  const [chosenPlayers, setChosenPlayers] = useState<string[]>([]);

  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [emailAddress, setEmailAddress] = React.useState("")
  const [emailAddressUpdatedCount, setEmailAddressUpdatedCount] = React.useState(0)

  useEffect(
    () => {

      const init = async() => {
        if (!ignore) {

          const email = await localforage.getItem<string>('email') ?? ""

          // If we have an email, load results from the cloud
          if (email.length > 0) {
            setEmailAddress(email)

            const cloudGameResults = await loadGamesFromCloud(
              email
              , 'tca-klask-fall-2023'
            );

            setGameResults(cloudGameResults);
          }
        }
      };

      let ignore = false;
      init();

      return(
        // return a cleanup func
        () => {
          ignore = true;
        }
      )


    }
    , [emailAddressUpdatedCount]
  )

  const addNewGameResult = async (newGameResult: GameResult) => {
  
  // If we have an email address, save the game result to the cloud
    if (emailAddress.length > 0) {
      await saveGameToCloud(
        emailAddress
        , 'tca-klask-fall-2023'
        , newGameResult.end // new Date.toISOString()
        , newGameResult
      );
    }
  // Update the lifted state
    setGameResults(
      [
        ...gameResults
        , newGameResult
      ]
    );
  }
  const router = createHashRouter([
    {
      path: "/",
      element: <Home 
        winningPercentageDisplay = {getWinningPercentageDisplay(gameResults)}
        generalGameTimeFacts={ getGeneralGameTimeFacts(gameResults, Date.now())}
        setTitle={setTitle}
        />
    },
    {
      path: "/setup",
      element: <Setup 
        num={num}
        setNum={setNum}
        setTitle={setTitle}
        previousPlayers={getPreviousPlayers(gameResults)}
        setChosenPlayers={setChosenPlayers}
        />
    },
    {
      path: "/play",
      element: <Play 
        addNewGameResult={addNewGameResult}
        setTitle={setTitle}
        chosenPlayers={chosenPlayers}
      />
    },
    {
      path: "/stats",
      element: <Stats 
      winningPercentageDisplay = {getWinningPercentageDisplay(gameResults)}
      leaderboard={getLeaderboardData(gameResults)}
      generalGameTimeFacts={ getGeneralGameTimeFacts(gameResults, Date.now())}
        setTitle={setTitle}
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
            {/*
            <TableBarOutlined
              color={"primary"}
              sx={{
                mr: 1
                , fontSize: '1.5em'
                , opacity: 0.5
              }}
              />
            */}
              <Typography
                variant='h6'
                color='primary'
                sx={{
                  opacity: 0.75
                  , flexGrow: 1
                  , textAlign: 'left'
                }}
              >
                {title}
              </Typography>
              <IconButton
                size='small'
                onClick={
                  () => setSettingsOpen(true)
                }
              >
                <SettingsOutlined />
              </IconButton>
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

        <Dialog
        fullScreen={fullScreen}
        open={settingsOpen}
        onClose={
          () => setSettingsOpen(false)
        }
      >
        <DialogTitle>
          Settings
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your email address will be used to save/load results
            <TextField
                label="Enter your email NOW!!!!!"
                variant="outlined"
                fullWidth
                value={emailAddress}
                onChange={
                    (e) => setEmailAddress(e.target.value)
                }
                sx={{
                  mt: 3
                }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            variant={emailAddress.length > 0 ? 'contained' : 'outlined'}
            autoFocus
            onClick={
            async() => {
              await localforage.setItem('email', emailAddress);
              setEmailAddressUpdatedCount(emailAddressUpdatedCount + 1);
              setSettingsOpen(false)
            }
          }>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
