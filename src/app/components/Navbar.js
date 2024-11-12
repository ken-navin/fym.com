import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", backgroundColor: "#efeaea"}}>
        <Box sx={{ textAlign: "center",}}>
          <Typography sx={{ color: "#D58D70",fontWeight: "bold", fontSize: "36px", fontFamily: "Readex Pro"}} >
            FYM.COM
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#000000", fontFamily: "Readex Pro"}} >
            Find your match
          </Typography>
        </Box>
  
        <Typography sx={{ fontSize: "22px", color: "#000000", fontFamily: "Readex Pro"}} >
          Help
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

 

