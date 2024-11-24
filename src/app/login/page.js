import { FoodBank, Login } from '@mui/icons-material';
import React from 'react'
import Footer from '../Components/Footer';
import Trust from '../Components/Trust';
import About from '../Components/About';
import SignIn from '../Components/SignIn';


const page = () => {
  return (
    <>
    <SignIn/>
    <Trust/>
    <About/>
    <Footer/>
    </>
  )
}

export default page;