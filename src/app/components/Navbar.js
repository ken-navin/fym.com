import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" >
      <Toolbar sx={{ justifyContent: "space-between", backgroundColor: "#ffffff",  }}>
        <Box sx={{ textAlign: "center",}}>
          <Typography sx={{ color: "#D58D70",fontWeight: "bold", fontSize: "36px", fontFamily: `"Readex Pro", sans-serif`}} >
            FYM.COM
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#000000", fontFamily: `"Readex Pro", sans-serif`, marginBottom: "10px"}} >
            Find your match
          </Typography>
        </Box>
  
        <Typography sx={{ fontSize: "22px", color: "#000000", fontFamily: `"Readex Pro", sans-serif` ,cursor: "pointer"}} >
          Help
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

 

