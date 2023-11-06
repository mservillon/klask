import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface SetupProps {
    num: number;
    setNum: any;
    setTitle: (t: string) => void;
    previousPlayers: string[];
}

export const Setup: FC<SetupProps> = ({
    num
    , setNum
    , setTitle
    , previousPlayers
    }) => {

        const [availablePlayers, setAvailablePlayers] = 
        useState(previousPlayers.map(x => ({
            name: x
            , checked: true
        })));
    
        setTitle("Game Setup")
    const navigate = useNavigate();

    return (
        <Box
            sx={{ mt: 2 }}
        >
            <Button
                variant="outlined"
                size="large"
                onClick={
                    () => { 
                        navigate('/play')
                        setNum(num + 1);
                }
            }
            >
                Start Game
            </Button>

            <Grid
                container
                spacing={2}
                sx={{
                    mt: 2
                    , mb: 2
                }}
            >
                {
                    availablePlayers.map(x => (
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2}
                        >
                            <FormControlLabel 
                                control={   
                                    <Checkbox
                                        checked={x.checked}
                                        onChange={
                                            (e) => setAvailablePlayers(
                                                [
                                                    ...availablePlayers.map(y => ({
                                                        name: y.name
                                                        , checked: y.name == x.name ? !y.checked : y.checked 
                                                }))
                                                ]
                                            )
                                        }
                                    />
                                    } 
                                    label={x.name} 
                                />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}