import { Box, Input, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import PhoneForwardedOutlinedIcon  from  '@mui/icons-material/PhoneForwardedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VideocamOutlinedIcon  from '@mui/icons-material/VideocamOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Register() {
  return (
    <>
    <Box sx={{
      marginTop: '0px',
      width: '100%',
      height: '400px',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#F6E8E8C4'
    }}>
      <Box sx={{
        paddingLeft: '60px',
        paddingTop: '40px',
        marginLeft: '20px',
      }}>
      <Typography variant='h4'>
        Connect with matches the<br/>way you like
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        marginTop: '40px'
      }}>
        <PhoneForwardedOutlinedIcon sx={{
          height: '40px',
          width: '40px',
          marginTop: '3px'
        }}/>
        <Typography>
          Voice call <br/> Talk to matches directly through voice calls
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}>
        <ChatBubbleOutlineOutlinedIcon sx={{
          height: '40px',
          width: '40px',
          marginTop: '3px'
        }}/>
         <Typography>
          Message <br/> Connect with matches instantly through messaging
         </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}>
        <VideocamOutlinedIcon sx={{
          height: '44px',
          width: '44px',
          marginTop: '3px'
        }}/>
         <Typography>
          Video call <br/> Meet your matches virtually with video calls
         </Typography>
      </Box>
      </Box>
      <Box sx={{
        borderRadius: '10px',
        padding: '30px',
        paddingTop: '10px',
        height: '320px',
        marginTop: '15px',
        marginRight: '80px',
        backgroundColor: '#E7D9D9',
        boxShadow: '8px 11px 9px 0px #00000040'

      }} >
      <Typography variant='h5' sx={{
        marginTop: '10px'
      }}>
        Find your perfect match
      </Typography>

      <TextField id="outlined-basic" label="Matrimony profile for" variant="outlined" sx={{
        "& .MuiInputBase-root": {
          height: "40px",
        },
        "& .MuiInputLabel-root": {
          top: '-6px'
        },
        marginTop: '20px',
        width: '250px',
        backgroundColor: 'white',
        borderRadius: '10px'
      }}/>
      <br/>
      <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" sx={{
        "& .MuiInputBase-root" : {
          height: '40px'
        },
        "& .MuiInputLabel-root": {
          top: '-6px'
        },
        marginTop: '20px',
        width: '250px',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '9px'
      }}/>
      <br/>
      <Box sx={{
        display: 'flex',
        gap: '20px'
      }}>
      <TextField id="outlined-basic" label="+91" variant="outlined" sx={{
        "& .MuiInputBase-root" : {
          height: '40px'
        },
        "& .MuiInputLabel-root": {
          top: '-6px'
        },
        marginTop: '20px',
        width: '50px',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '9px'
      }}/>
      <TextField id="outlined-basic" label="Enter Mobile Number" variant="outlined" sx={{
        "& .MuiInputBase-root" : {
          height: '40px'
        },
        "& .MuiInputLabel-root": {
          top: '-6px'
        },
        marginTop: '20px',
        width: '180px',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '9px'
      }}/>
      </Box>
      <TextField id="outlined-basic" label="Register Here" variant="outlined" 
       InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <ArrowForwardIcon sx={{
              color: 'black',
            }}/>
          </InputAdornment>
        ),
      }}
       sx={{
        "& .MuiInputBase-root": {
          height: "40px", // Adjust the overall height
        },
        "& .MuiInputLabel-root": {
          top: "-6px", // Move the label up or down
        },
        backgroundColor: 'white',
        marginTop: '20px',
        width: '250px',
        borderRadius: '10px'
      }}/>
      
      <Typography sx={{
        fontSize: '8px',
        marginTop: '25px',
        fontWeight: 'bold'
      }}>
        *By clicking register free, I agree to the <span style={{
          textDecoration: 'underline'
        }}>T&C</span> and <span  style={{
          textDecoration: 'underline'
        }}>Privacy Policy</span>
      </Typography>
      </Box>
    </Box>
    </>
  )
}