 import { Box, Typography } from '@mui/material'
import React from 'react'
import { PhoneForwardedOutlinedIcon as Tele} from  '@mui/icons-material/PhoneForwardedOutlined';
import {ChatBubbleOutlineOutlinedIcon as Chat} from '@mui/icons-material/ChatBubbleOutlineOutlined';
import {VideocamOutlinedIcon as Video} from '@mui/icons-material/VideocamOutlined';
 
 
 <>
    <Box className="main">
        <Box className="section1">
            <Typography variant='h3'>
                Connect with matches the<br/>way you like
            </Typography>
            <Box className="b1">
                <Tele/>
                <Typography>
                    voice call <br/> Talk to matches directly through voice calls
                </Typography>
            </Box>
            <Box className="b1">
                <Chat/>
                <Typography>
                    Message <br/> Connect with matches instantly through messaging
                </Typography>
            </Box>
            <Box className="b1">
                <Video/>
                <Typography>
                    Video call <br/> Meet your matches virtually with video calls
                </Typography>
            </Box>
        </Box>
        <Box className="section2">

        </Box>
    </Box>
    </>