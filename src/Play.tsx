import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { GameResult } from './game-results';
import { FC, useState } from 'react';
import { Box } from '@mui/material';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    setTitle: (t: string) => void;
};

export const Play: FC<PlayProps> = ({
    addNewGameResult
    , setTitle }) => {

    setTitle("Play Klask")

    const navigate = useNavigate();

    const [startTimestamp, _] = useState(new Date().toISOString());

    const gameOver = (won: boolean) => {
        addNewGameResult({
            won: won
            , start: startTimestamp
            , end: new Date().toISOString()
        });
        navigate('/stats');
    }
    
    return (
        <Box
            sx={{ mt: 2 }}
        >
        
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => gameOver(true)
            }
            >
                I won
            </Button>
            <Button
            variant="outlined"
            size="large"
            onClick={
                () => gameOver(false)
            }
            >
                I lost
            </Button>
        </Box>
    );
}