import { Box, Typography } from '@mui/material';
import React from 'react'

const About = () => {
  return (
    <>
    <Box sx={{
        paddingTop: '30px',
        paddingLeft: '80px',
        width: '-webkit-fill-available',
        height: '200px'
    }}>
        <Typography sx={{
            fontWeight: 'bold'
        }}>
            About FYM.COM
        </Typography>
        <Typography sx={{
            marginTop: '10px',
            fontSize: '17px'
        }}>
        FYM the pioneer in online matrimony, is the most trusted matrimony service for Lakhs of Tamils worldwide. BharatMatrimony has<br/>been recognised as the most trusted online matrimony service by the Brand Trust Report. We have also been featured in Limca Book<br/>of records for most number of documented marriages online. Our purpose is to build a better FYM through happy marriages.
        </Typography>
    </Box>
    <hr/>
    </>
  )
}

export default About;