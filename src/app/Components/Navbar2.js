import React from 'react';
import { Toolbar, Typography, Box, Button } from '@mui/material';


const Navbar = () => {
  return (
  
      <Toolbar sx={{ justifyContent: "space-between", backgroundColor: "#ffffff"}}>
        <Box sx={{ textAlign: "center",justifyContent: "space-between", backgroundColor: "#ffffff",}}>
          <Typography sx={{ color: "#D58D70",fontWeight: "bold", fontSize: "36px", fontFamily: `"Readex Pro", sans-serif`}} >
            FYM.COM
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#000000", fontFamily: `"Readex Pro", sans-serif`, marginBottom: "10px"}} >
            Find your match
          </Typography>
        </Box>

        <Button 
        sx={{ color: "black", backgroundColor: "#C2464614", border: "2px solid black"}}>
           Call Now
        </Button>
  
        
      </Toolbar>
  );
};

export default Navbar;

 

