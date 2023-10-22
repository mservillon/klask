import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { GameResult } from './game-results';
import { FC } from 'react';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
};

export const Play: FC<PlayProps> = ({addNewGameResult}) => {

    const navigate = useNavigate();

    const gameOver = (won: boolean) => {
        addNewGameResult(won);
        navigate(-2)
    }
    
    return (
        <>
        <h3>
            Play and Collect Data
        </h3>
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
        </>
    );
}