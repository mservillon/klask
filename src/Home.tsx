import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

export const Home = () => {
    
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
        </>
    );
};