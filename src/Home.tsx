import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { GeneralGameTimeFactsDisplay, WinningPercentageDisplay, LeaderboardEntry } from './game-results';
import { FC } from 'react';
import { Typography, Paper, Table, TableBody, TableRow, TableCell, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const appTitle = "Klask Companion App";

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay
    generalGameTimeFacts: GeneralGameTimeFactsDisplay
    setTitle: (t: string) => void;
}

export const Home: FC<HomeProps> = ({
    
    winningPercentageDisplay
    , generalGameTimeFacts
    , setTitle
    }) => {
    
    setTitle(appTitle)
    const navigate = useNavigate();

    return (
        <>
        <br /><br />
        <Typography
            fontSize={50}
            color='#1976d2'
        >
            <img style={{ width: '30%' }} src='https://www.firstcomicsnews.com/wp-content/uploads/2017/11/KLASK-logo.png' />
        </Typography>
        <br/>
        <br/>
        <Button
            variant="contained"
            size="large"
            sx={{
                mt: 2
                , mb: 2
                , pt: 2
                , pb: 2
                , width: {
                    xs: '60%'
                    , md: 'inherit'
                }
            }}
            onClick={
                () => navigate('setup')
            }
            >
                <Typography
                    fontSize={20}
                >
                Start New Game
                </Typography>
            </Button>
            <Box
                sx={{
                    mt: 1
                }}
            >
                <Button
                variant="contained"
                size="large"
                sx={{
                    mt: 2
                    , mb: 2
                    , pt: 2
                    , pb: 2
                    , width: {
                        xs: '60%'
                        , md: 'inherit'
                    }
                }}
                onClick={
                    () => navigate('stats')
                }
                >
                    <Typography
                        fontSize={20}
                    >
                    Klask Stats
                    </Typography>
                </Button>
            </Box>
            <br />
            <img src='https://cdn.iconscout.com/icon/free/png-512/free-klask-3691886-3082362.png?f=webp&w=256' />
            <br />
{/*
            <h4>
                {`Total: ${winningPercentageDisplay.totalGames}`}
            </h4>
            <h4>
                {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
            </h4>
                                        */}
        </>
    );
};