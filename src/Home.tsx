import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { WinningPercentageDisplay } from './game-results';
import { FC } from 'react';

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay
}

export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {
    
    const navigate = useNavigate();

    return (
        <>
        <h3>Klask</h3>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => navigate('setup')
            }
            >
                Play Game
            </Button>
            <h4>
                {`Total: ${winningPercentageDisplay.totalGames}`}
            </h4>
            <h4>
                {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
            </h4>
        </>
    );
};