import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { GeneralGameTimeFactsDisplay, WinningPercentageDisplay, LeaderboardEntry } from './game-results';
import { FC } from 'react';
import { Typography, Paper, Table, TableBody, TableRow, TableCell, Box, TableHead } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { GameResult } from './game-results';

export const appTitle = "Klask Companion App";

interface StatsProps {
    winningPercentageDisplay: WinningPercentageDisplay
    leaderboard: LeaderboardEntry[]
    generalGameTimeFacts: GeneralGameTimeFactsDisplay
    setTitle: (t: string) => void;
}

export const Stats: FC<StatsProps> = ({
    
    winningPercentageDisplay
    , generalGameTimeFacts
    , leaderboard
    , setTitle
    }) => {
    
    setTitle(appTitle)
    const navigate = useNavigate();

    return (
        <>
        <Box

            sx={{
                mt: 8
            }}
        >

        
            <Grid
                container
                spacing={3}
                display='flex'
                justifyContent='center'
            >
                <Grid
                    xs={10}
                    md={6}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            overflow: 'hidden'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 20
                                , ml: 2
                                , mt: 3
                            }}
                            color='#1976d2'

                            >
                                GENERAL
                            </Typography>
                            <Box
                                sx={{
                                    pl: 1
                                    , pr: 1
                                }}
                                >
                                <Table
                                    sx={{
                                        mt: 0,
                                    }}
                                >
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                    Total Games
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                    {winningPercentageDisplay.totalGames}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow
                                            sx={{
                                                '&:last-child td, &:last-child th': {
                                                    border: 0
                                                }
                                            }}
                                        >
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                    Last Played
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                {
                                                    winningPercentageDisplay.totalGames > 0
                                                    ? `${generalGameTimeFacts.lastPlayed} ago`
                                                    : ''
                                                }                   
                                                </Typography>
                                            </TableCell>
                                            
                                        </TableRow>
                                        <TableRow
                                            sx={{
                                                '&:last-child td, &:last-child th': {
                                                    border: 0
                                                }
                                            }}
                                        >
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                    Shortest Game
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                    {generalGameTimeFacts.shortestGame}
                                                </Typography>
                                            </TableCell>
                                            
                                        </TableRow>
                                        <TableRow
                                            sx={{
                                                '&:last-child td, &:last-child th': {
                                                    border: 0
                                                }
                                            }}
                                        >
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                    Longest Game
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                    {generalGameTimeFacts.longestGame}
                                                </Typography>
                                            </TableCell>            
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Paper>
                </Grid>

                <Grid
                    xs={10}
                    md={6}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            overflow: 'hidden'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 20
                                , ml: 2
                                , mt: 3
                            }}
                            color='#1976d2'

                            >
                                LEADERBOARD
                            </Typography>
                            <Box
                                sx={{
                                    pl: 1
                                    , pr: 1
                                }}
                                >
                                <Table
                                    sx={{
                                        mt: 0,
                                    }}
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>PLAYER</TableCell>
                                            <TableCell>W</TableCell>
                                            <TableCell>L</TableCell>
                                            <TableCell>AVG</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            leaderboard.map(x => (
                                                <TableRow
                                                    key={x.name}
                                                >
                                                    <TableCell>{x.name}</TableCell>
                                                    <TableCell>{x.wins}</TableCell>
                                                    <TableCell>{x.losses}</TableCell>
                                                    <TableCell>{x.avg.toFixed(3)}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Box>
                        </Paper>
                </Grid>

            </Grid>
        </Box>
        <Box



        sx={{
            mt: 2
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
                () => navigate('/')
            }
            >
                <Typography
                    fontSize={20}
                >
                Back to Home
                </Typography>
            </Button>
        </Box>
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