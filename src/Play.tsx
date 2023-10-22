import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Play = () => {

    const navigate = useNavigate();
    
    return (
        <>
        <h3>
            Play and Collect Data
        </h3>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => navigate(-2)
            }
            >
                Finished
            </Button>
        </>
    );
}