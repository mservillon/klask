import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { GameResult } from './game-results';
import { FC, useState } from 'react';
import { Box, Input, TextField, styled } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from '@mui/material/ButtonGroup';
import { blueGrey } from '@mui/material/colors';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    setTitle: (t: string) => void;
    chosenPlayers: string[];
    gameTarget: number;
};

export const Play: FC<PlayProps> = ({
    addNewGameResult
    , setTitle
    , chosenPlayers
    , gameTarget
}) => {

    setTitle("Play Klask")

    const navigate = useNavigate();

    const [startTimestamp, _] = useState(new Date().toISOString());
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const inputNumber = (e: any) => {
        setCountOne(Math.max(Number(e.target.value), 1))
    }
    const gameOver = (winner: string) => {
        addNewGameResult({
            
            winner: winner
            , players: chosenPlayers
            , start: startTimestamp
            , end: new Date().toISOString()
        });
        navigate('/stats');
    }

    const hiddenMessage = () => {
        return <h1>I know you'd like to end in a tie but you can only have one winner!!!</h1>
    }

    const whoWon = () => {
        if (countOne == gameTarget) {
            return <h1>{chosenPlayers[0]} won!!!!</h1>
        } else if (countTwo == gameTarget) {
            return <h1>{chosenPlayers[1]} won!!!!</h1>
        }
    }

    console.log(chosenPlayers)

    const score = gameTarget;

    return (
        <>
            <h1>KLAAAAAAAAAAAAAAAASK</h1>
        
        {/* <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}
        >
            <h2 style={{ marginRight: "3em" }}>Mack</h2>
            <h2>Mineral</h2>
        </Box> */}
        <Box
        sx={{ 
            mb: 5, 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
            }}
        >
            <div>
                <h2>{chosenPlayers[0]}</h2>
                <ButtonGroup>
                    <Button
                    onClick={() => setCountOne((countOne) => countOne - 1)}
                    disabled={countOne == 0}
                    >
                        <RemoveIcon />
                    </Button>
                        <TextField style={{ fontSize: 13, width: 60, textAlign: "center" }} onChange={inputNumber} value={countOne} inputProps={{ readOnly: true }} />
                    <Button
                    onClick={() => setCountOne((countOne) => countOne + 1)} disabled={countOne == score}
                    >
                        <AddIcon />
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <h2>{chosenPlayers[1]}</h2>
                <ButtonGroup>
                    <Button
                    onClick={() => setCountTwo((countTwo) => countTwo - 1)}
                    disabled={countTwo == 0}
                    >
                        <RemoveIcon />
                    </Button>
                    <TextField style={{ fontSize: 13, width: 60, textAlign: "center" }} onChange={inputNumber} value={countTwo} inputProps={{ readOnly: true }} />
                    <Button
                    onClick={() => setCountTwo((countTwo) => countTwo + 1)}
                    disabled={countTwo == score}
                    >
                        <AddIcon />
                    </Button>
                </ButtonGroup>
            </div>
        </Box>
        <Box
        sx={{ 
            mb: 5, 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
            }}
        >
            <Box
                sx={{ 
                mb: 5, 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly'
                }}
            >
                <div>
                    <Button
                        disabled={countOne == score || countTwo == score} 
                        onClick={() => setCountOne((countOne) => countOne + 1)}>
                                    KLASK (OWN GOAL)
                    </Button>
                    <Button
                        disabled={countOne == score || countTwo == score} 
                        onClick={() => setCountOne((countOne) => countOne + 1)}>
                                    LOST CONTROL
                    </Button>
                    <Button
                        disabled={countOne == score || countTwo == score} 
                        onClick={() => setCountOne((countOne) => countOne + 1)}>
                                    MAGNET POINTS
                    </Button>
                </div>
            </Box>
                <div>
                <Button
                    disabled={countOne == score || countTwo == score}
                    onClick={() => setCountTwo((countTwo) => countTwo + 1)}>
                                    KLASK (OWN GOAL)
                    </Button>
                    <Button 
                        disabled={countOne == score || countTwo == score}
                        onClick={() => setCountTwo((countTwo) => countTwo + 1)}>
                                    LOST CONTROL
                    </Button>
                    <Button
                        disabled={countOne == score || countTwo == score} 
                        onClick={() => setCountTwo((countTwo) => countTwo + 1)}>
                                    MAGNET POINTS
                    </Button>
                </div>
        </Box>

            <Button
                variant={countOne >= score ? 'contained' : 'outlined'}
                onClick={
                    () => gameOver(chosenPlayers[0])}
                    disabled={countOne < score}
            >
                {chosenPlayers[0]} won
            </Button>
            <Button
                variant={countTwo >= score ? 'contained' : 'outlined'}
                onClick={
                    () => gameOver(chosenPlayers[1])}
                disabled={countTwo < score}
            >
                {chosenPlayers[1]} won
            </Button>
            
            <h2>{countOne == score && countTwo == score ? hiddenMessage() : ""}</h2>
            <h2>{countOne == score && countTwo == score ? "" : whoWon()}</h2>

            {/* {
                chosenPlayers.map(x => (
                    <Button
                        key={x}
                        variant={countOne == scoreLimit || countTwo == scoreLimit ? 'contained' : 'outlined'}
                        size="large"
                        onClick={
                            () => gameOver(x)
                         }
                    >
                        {x} Won
                    </Button>
                ))
            } */}
            {/* {
            chosenPlayers.map(players => (
                <h2>{players[1]}</h2>
            ))
            }
            {
            chosenPlayers.map(players => (
                <h2>{players[0]}</h2>
            ))
            } */}
        </>
        /*
        <Box
            sx={{ mt: 2 }}
        >
            {
                chosenPlayers.map(players => (
                    <ButtonGroup>
                        <Button
                        onClick={() => setCount((count) => count - 1)}
                        >
                            <RemoveIcon />
                        </Button>
                        <Input onChange={inputNumber} value={count} />
                        <Button
                        onClick={() => setCount((count) => count + 1)}
                        >
                            <AddIcon />
                        </Button>
                    </ButtonGroup>
                ))
            }
                {
                chosenPlayers.map(x => (
                    <Button
                        key={x}
                        variant="outlined"
                        size="large"
                        onClick={
                            () => gameOver(x)
                         }
                    >
                        {x} Won
                    </Button>
                ))
            }
        </Box>
    */
    );
}