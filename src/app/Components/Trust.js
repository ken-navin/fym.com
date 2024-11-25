import { Box, Typography } from '@mui/material'
import React from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Image from 'next/image';

const Trust = () => {
  return (
    <>
    <Box sx={{
        width: '-webkit-fill-available',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#F2F2F2'
    }}>
        <Box sx={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            gap: '4px'
            
        }}>
            <Image 
            src="/images/guard 2.png" 
            width={40}
            height={40}>
            </Image>
            <Typography sx={{
                fontSize: '12px',
                lineHeight: '15px',
                wordSpacing: '2px'
            }}>
                Contact genuine profiles<br/>with 100% verified mobile<br/>numbers
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            padding: '5px'
        }}>
            <Image 
            src="/images/trophy 1.png" 
            width={40}
            height={40}>
            </Image>
            <Typography sx={{
                fontSize: '12px',
                lineHeight: '14px',
                wordSpacing: '2px'
            }}>
                Highest number of<br/>documented marriages online<br/><span style={{
                    fontSize: '9px',
                }}>-Limca Book of Records</span>
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            padding: '5px'
        }}>
            <Image 
            src="/images/good-quality 1.png" 
            width={40}
            height={35}>
            </Image>
            <Typography sx={{
                fontSize: '12px',
                lineHeight: '14px',
                wordSpacing: '2px'
            }}>
            The most trusted<br/>matrimony brand<br/><span style={{
                    fontSize: '9px',
                }}>-The Brand Trust Report</span>
            </Typography>
        </Box>
    </Box>
    </>
  )
}

export default Trust