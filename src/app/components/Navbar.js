import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between",}}>
        <Box sx={{ textAlign: "center",}}>
          <Typography style={{ color: "#D58D70",fontWeight: "bold", fontSize: "68px", }} >
            FYM.COM
          </Typography>
          <Typography style={{ fontSize: "24px", color: "#000000"}} >
            Find your match
          </Typography>
        </Box>
  
        <Typography style={{ fontSize: "32px", color: "#000000"}} >
          Help
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

 

