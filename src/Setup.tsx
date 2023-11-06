import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
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
                    previousPlayers.map(x => (
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2}
                        >
                            {x}
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}