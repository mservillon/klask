import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Alert, Box, Checkbox, FormControlLabel, Snackbar } from '@mui/material';
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

        const [showWarning, setShowWarning] = useState(false)

        setTitle("Choose players then start the game")

        const atLeastTwoPlayersChecked = availablePlayers
            .filter(x => x.checked)
            .length == 2
        ;

    const navigate = useNavigate();

    return (
        <Box
            sx={{ mt: 2 }}
        >

            <Snackbar
                anchorOrigin={{ 
                    vertical: "top"
                    , horizontal: "center" 
                }} 
                open={showWarning} 
                autoHideDuration={3000} 
                onClose={
                    () => setShowWarning(false)
                    }
                >
                <Alert 
                    severity="warning" 
                    sx={{ 
                        width: '100%' 
                    }}>
                    Choose at least two players
                </Alert>
            </Snackbar>
            <Button
                variant={atLeastTwoPlayersChecked ? "contained" : "outlined"}
                size="large"
                onClick={
                    () => {
                        
                        if (!atLeastTwoPlayersChecked) {
                            setShowWarning(true);
                            return;
                        }
                        navigate('/play')
                        setNum(num + 1);
                }
            }
            sx={{
                pt: 3
                , pb: 3
                , width: '100%'
                , md: 'inherit'
            }}
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
                            key={x.name}
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