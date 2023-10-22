import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface SetupProps {
    num: number;
    setNum: any;
}

export const Setup: FC<SetupProps> = ({num, setNum}) => {
    
    const navigate = useNavigate();

    return (
        <>
            <h3>
                Setup Game ({num});
            </h3>
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
        </>
    );
}