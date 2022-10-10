import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { 
        background: '#4C6793', 
        width: '270px', 
        height: '282px', 
        cursor: 'pointer', 
        gap: '47px'
        } : { 
        background: '#4C6793', 
        width: '270px', 
        height: '282px', 
        cursor: 'pointer', 
        gap: '47px'
        }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="black" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;