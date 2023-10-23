import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';

interface SetupProps {
    num: number;
    setNum: any;
    setTitle: (t: string) => void;
}

export const Setup: FC<SetupProps> = ({
    num
    , setNum
    , setTitle
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
        </Box>
    );
}