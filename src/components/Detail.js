import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" color="white">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="white">
          Exercises makes you strong and healthy!<br/>
          <span style={{ textTransform: 'capitalize' }}> {name}</span> is one
          of the best exercises to target your {target}. <br/> 
          It will help you improve your {target}, mood, and energy. 💪
        </Typography>

        {extraDetail.map((item)=>(
            <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                
                <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '80px', height: '80px' }}>
                    <img src={item.icon} alt="icon" />
                </Button>

              <Typography textTransform="capitalize" variant='h5' color="white">
                    {item.name}
              </Typography>  
            </Stack>

        ))}
        </Stack>
        </Stack>
  )
      }

export default Detail;