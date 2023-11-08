import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { GameResult } from './game-results';
import { FC, useState } from 'react';
import { Box } from '@mui/material';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    setTitle: (t: string) => void;
    chosenPlayers: string[];
};

export const Play: FC<PlayProps> = ({
    addNewGameResult
    , setTitle
    , chosenPlayers
}) => {

    setTitle("Play Klask")

    const navigate = useNavigate();

    const [startTimestamp, _] = useState(new Date().toISOString());

    const gameOver = (winner: string) => {
        addNewGameResult({
            
            winner: winner
            , players: chosenPlayers
            , start: startTimestamp
            , end: new Date().toISOString()
        });
        navigate('/stats');
    }
    
    return (
        <Box
            sx={{ mt: 2 }}
        >
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
    );
}