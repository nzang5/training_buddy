import React from 'react'
import { Box, Typography, Button } from '@mui/material'  
// import { positions } from '@mui/system'
import videobg from '../assets/images/videoplayback.mp4'


const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '112px', xs: '70px'},
        ml: {sm: '50px'}
    }} position="relative" px="10px">

    <Typography color="#D9CAB3" fontWeight="700" fontSize="40px">
    TrainingBuddy
    </Typography>

    <Typography fontWeight={700}
    sx={{fontSize: {lg: '34px', xs: '30px'}}}
    marginBottom="23px"
    marginTop="30px"
    color='#4C6793'>
        Sweat, Smile, <br/> and Repeat
    </Typography>

    <Typography fontSize="16px" color="#D9CAB3" lineHeight="35px" marginBottom={4}>
        ✨Check out the most effective exercises✨
    </Typography>

    <Button variant='contained' color="error" href='#searchbox'
    sx={{backgroundColor: '#4C6793', padding: "10px"}}>
        Explore Exercises
    </Button>

    <Typography 
    fontWeight={600} 
    color="#8BBCCC"
    fontSize="240px"
    paddingLeft="90px"
    sx={{
      opacity: 0.1,
      display: {lg: 'block', xs: 'none'}
    }}
    >
    EXERCISE

    </Typography>

    <video className="hero-banner-img" src={videobg} autoPlay loop muted />
    </Box>
  )
}

export default HeroBanner