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
            KLASK
        </Typography>
        <br/>
        <br/>
        <Button
            variant="outlined"
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
                variant="outlined"
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