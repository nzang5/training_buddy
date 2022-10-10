import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Z (8).png';



const Navbar = () => {
  return (
    <Stack 
    direction="row"
    justifyContent="space-around" sx={{gap: {sm: '122px', xs: '44px'}, mt: { sm: '17px', xs: '5px'}, justifyContent:'none'}} px='20px'>
      <Link to="/">
       <img src={Logo} alt="logo" className="navlogo"  />
      </Link>


      <Stack
      direction="row"
      gap="40px"
      fontSize="26px"
      alignItems="flex-end"
      >
        <Link to="/" className='link'>HOME</Link>
        <a href='#searchbox' className='link'>EXERCISES</a>
      </Stack>
    </Stack>
  )
}

export default Navbar