import { CheckBox } from '@mui/icons-material'
import { Box, Button, Typography, TextField, Link, List } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const SignIn = () => {
  return (
    <>
    <Box>
        <Box sx={{
            border: '1px solid grey',
            width: '100%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        }}>
            <Box sx={{
                marginLeft: '100px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
            }}>
            <Typography >Already a member?</Typography>
            <Button sx={{
                backgroundColor: '#C24646',
                color: 'white',
                height: '25px',
                fontSize: '10px'
            }}>Login</Button>
            </Box>
        </Box>
        <Box sx={{
            // border: '1px solid black',
            height: '375px',
            width: '-webkit-fill-available',
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#FFC1CC',
            paddingTop: '20px'
        }}>
            <Box>
                <List sx={{
                    columns: '155px',
                    marginLeft: '40px',
                }}>
                    <Image 
                    src="/images/image 5.png"
                    width={180}
                    height={120}></Image>
                    <Image 
                    src="/images/66b17c801813e934a1406b409b4d983f 1.png"
                    width={180}
                    height={210}></Image>
    
                    {/* <br/> */}
                    <Box sx={{
                        marginLeft: '3px'
                    }}>
                    <Image 
                    src="/images/image 6.png"
                    width={180}
                    height={200}></Image>
                    <Image 
                    src="/images/1051494_Wallpaper2 1.png"
                    width={180}
                    height={130}></Image>
                    </Box>
                </List>
            </Box>
            <Box>
            <Box sx={{
                // border: '1px solid black',
                width: '260px',
                height: '250px',
                borderRadius: '10px',
                boxShadow: '8px 11px 9px 0px #00000040',
                backgroundColor: 'white',
            }}>
                <Typography sx={{
                    paddingTop: '10px',
                    marginLeft: '14px'
                }}>
                    Existing Member? Login
                </Typography>
                <TextField id="outlined-basic" label="Enter Mobile No / E-mail ID" variant="outlined" sx={{
                "& .MuiInputBase-root": {
                height: "30px",
                },
                '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none', // Remove the border
                },
                },
                "& .MuiInputLabel-root" : {
                    fontSize: '12px',
                    top: '-10px',
                    left: '10px'
                },
                marginTop: '15px',
                width: '230px',
                backgroundColor: '#F6EDED',
                borderRadius: '10px',
                marginLeft: '15px',
            }}/>
            <TextField id="outlined-basic" label="Enter Password" variant="outlined" sx={{
                "& .MuiInputBase-root": {
                height: "30px",
                },
                '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none', // Remove the border
                },
                },
                "& .MuiInputLabel-root" : {
                    fontSize: '12px',
                    top: '-10px',
                    left: '10px'
                },
                marginTop: '20px',
                width: '230px',
                backgroundColor: '#F6EDED',
                borderRadius: '10px',
                marginLeft: '15px',
            }}/>
            <Box sx={{
                display: 'flex',
                marginTop: '10px',
                alignItems: 'center',
                gap: '8px',
                marginLeft: '20px'
            }}>
            <CheckBox  sx={{
                height: '12px',
                width: '12px',
            }}/>
            <Typography sx={{
                fontSize: '8px'
            }}>
                Keep Me Logged in
            </Typography>
            </Box>
            <Button sx={{
                backgroundColor: '#C24646',
                color: 'white',
                height: '25px',
                fontSize: '10px',
                marginLeft: '20px',
                marginTop: '10px',
                paddingX: '20px',
                borderRadius: '10px'
            }}>Login</Button>
             <Typography sx={{
                fontSize: '8px',
                marginTop: '10px',
                marginLeft: '20px',
            }}>
                Trouble Logging in?
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                gap: '10px'
            }}>
            <Link className="custom-link" sx={{
                fontSize: '9px',
                marginTop: '12px',
                marginLeft: '20px',
                color: 'black',
                textDecoration: 'none',
                cursor: 'pointer'
            }}>
            Login with OTP
            </Link>
            <Box sx={{
                height:'8px',
                border: '1px solid black',
                marginTop: '11px'
            }}> </Box>
            <Link className="custom-link" sx={{
                fontSize: '9px',
                marginTop: '12px',
                color: 'black',
                textDecoration: 'none',
                cursor: 'pointer'
            }}>
            Forget Password
            </Link>
            </Box>
            </Box>
            <Box sx={{
                // border: '1px solid black',
                marginTop: '10px',
                width: '260px',
                height: '35px',
                borderRadius: '10px',
                boxShadow: '8px 11px 9px 0px #00000040',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
            }}>
                <Typography sx={{
                    fontSize: '10px',
                    marginLeft: '20px'
                }}>
                    Not a member?
                </Typography>
                <Link className="custom-link" sx={{
                fontSize: '11px',
                color: 'black',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                }}>
                REGISTER FREE
                </Link>
            </Box>
            <Image 
            src="/images/image.png"
            width={270}
            height={60}
            style={{
                marginTop: '7px'
            }}
            ></Image>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default SignIn