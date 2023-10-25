import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { GeneralGameTimeFactsDisplay, WinningPercentageDisplay } from './game-results';
import { FC } from 'react';
import { Typography, Paper, Table, TableBody, TableRow, TableCell, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const appTitle = "Klask Companion App";

interface StatsProps {
    winningPercentageDisplay: WinningPercentageDisplay
    generalGameTimeFacts: GeneralGameTimeFactsDisplay
    setTitle: (t: string) => void;
}

export const Stats: FC<StatsProps> = ({
    
    winningPercentageDisplay
    , generalGameTimeFacts
    , setTitle
    }) => {
    
    setTitle(appTitle)
    const navigate = useNavigate();

    return (
        <>
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
                                                    Winning Percentage
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    fontSize={20}
                                                    color='#1976d2'
                                                >
                                                    {winningPercentageDisplay.winningPercentage}
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
                                                    {generalGameTimeFacts.lastPlayed} ago
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
            </Grid>
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