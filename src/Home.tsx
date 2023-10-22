import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { WinningPercentageDisplay } from './game-results';
import { FC } from 'react';
import { Typography, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay
}

export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {
    
    const navigate = useNavigate();

    return (
        <>
        <h3>Klask</h3>
        <Button
            variant="contained"
            size="large"
            sx={{
                mt: 3
                , mb: 3
                , pt: 3
                , pb: 3
                , width: {
                    xs: '100%'
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
                Play Game
                </Typography>
            </Button>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    xs={12}
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
                            color='text.disabled'
                            gutterBottom
                            >
                                GENERAL
                            </Typography>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography
                                                fontSize={20}
                                            >
                                                Total Games
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                fontSize={20}
                                            >
                                                {winningPercentageDisplay.totalGames}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography
                                                fontSize={20}
                                            >
                                                Winning Percentage
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                fontSize={20}
                                            >
                                                {winningPercentageDisplay.winningPercentage}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                </Grid>
            </Grid>

            <h4>
                {`Total: ${winningPercentageDisplay.totalGames}`}
            </h4>
            <h4>
                {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
            </h4>
        </>
    );
};