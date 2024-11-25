import { Box, List, Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
    <>
    <Box sx={{
        width: '-webkit-fill-available',
        height: '230px',
        marginTop: '-10px',
        paddingTop: '50px',
        display: 'flex',
        justifyContent: 'space-around',
    }}>
        <Box sx={{
            marginRight: '50px'
        }}>
            <Typography variant='h5'>
                Regional Matrimony <br/> Services
            </Typography>
            <Box>
                <List>
                    <Typography sx={{
                        fontSize: '14px',
                    }}>Assamese Matrimony</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                    }}>Bengalil Matrimony</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                    }}>Bihari Matrimony</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                    }}>Gujarati Matrimony</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                    }}>Hindi Matrimony</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                    }}>Kannada Matrimony</Typography>
                </List>
            </Box>
        </Box>
        <Box sx={{
            marginRight: '50px'
        }}>
            <Typography variant='h5' >
                Help & Support
            </Typography>
            <Box>
                <Typography  sx={{
                        fontSize: '14px',
                    }}>
                    Contact Us
                </Typography>
                <Typography  sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}>
                    Feedback
                </Typography>
                <Typography  sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}>
                    FAQs
                </Typography>
            </Box>
            <Typography variant='h5' sx={{
                marginTop: '18px',
                marginRight: '4px'
            }}>
                Our Other Services
            </Typography>
            <Box>
                <Typography  sx={{
                        fontSize: '14px',
                    }}>
                    EliteMatrimony.com
                </Typography>
                <Typography  sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}>
                    Jodii
                </Typography>
                <Typography  sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}>
                    MatchAstro: Talk to Astrologer
                </Typography>
            </Box>
        </Box>
        <Box sx={{
                    marginTop: '4px',
                    marginRight: '100px'
                }}>
            <Typography variant='h5'>
                Information
            </Typography>
            <Box sx={{
                    marginTop: '20px'
                }}>
                <List >
                    <Typography
                    sx={{
                        fontSize: '14px',
                    }}> About Us</Typography>
                    <Typography
                    sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}> Awards</Typography>
                    <Typography
                    sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}> Register Free</Typography>
                    <Typography
                    sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}> Partner Search</Typography>
                    <Typography
                    sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}> Member Login</Typography>
                    <Typography
                    sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}> Success Stories</Typography>
                    <Typography
                    sx={{
                        fontSize: '14px',
                        marginTop: '-2px'
                    }}> Payment Options</Typography>
                </List>
            </Box>
        </Box>
    </Box>
    <Box sx={{
        width: '100%',
        height: '40px',
        textAlign: 'center',
        alignContent: 'center',
        backgroundColor: '#E7C1C1',
        fontSize: '14px',
    }}>
        @2024 FYM.com All Copyrights are Reserved
    </Box>
    </>
  )
}

export default Footer;