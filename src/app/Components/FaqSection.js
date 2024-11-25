import { Box, Typography } from '@mui/material'
import React from 'react'

const FaqSection = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '500px',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      margin: '50px auto'
    }}>
      <Box sx={{
        width: '100%',
        textAlign: "center",
        margin: "0px 50px",
        mb: 2
      }}>
        <Typography sx={{
          fontFamily: `"Readex Pro", sans-serif`,
          color: "#C24646",
          fontWeight: "bold",
          fontSize: "40px",
        }}>
          FAQ’s
        </Typography>

        <Box sx={{
          fontSize: "24px",
          padding: "10px 35px",
          backgroundColor: '#ECD4D436',
          boxShadow: '8px 11px 9px 0px #00000040',
          borderRadius: "20px",
          mb: 3
        }}>
          <Typography sx={{
            fontFamily: `"Readex Pro", sans-serif`,
            color: "#C24646",
            fontWeight: "bold",
            textAlign: "start"

          }}>
            How Long it takes to update my profile in FYM
          </Typography>

          <Typography sx={{
            textAlign: "start"
          }}>
            After completion of all payment you’re profile will <br /> updated within 24 hrs
          </Typography>
        </Box>
        <Box sx={{
          fontSize: "24px",
          padding: "10px 35px",
          backgroundColor: '#ECD4D436',
          boxShadow: '8px 11px 9px 0px #00000040',
          borderRadius: "20px",
          mb: 3
        }}>
          <Typography sx={{
            fontFamily: `"Readex Pro", sans-serif`,
            color: "#C24646",
            fontWeight: "bold",
            textAlign: "start"

          }}>
            Is there a free plan?
          </Typography>

          <Typography sx={{
            textAlign: "start"
          }}>
            No due to lot of fake identities we remove the free <br /> plan
          </Typography>
        </Box>
        <Box sx={{
          fontSize: "24px",
          padding: "10px 35px",
          backgroundColor: '#ECD4D436',
          boxShadow: '8px 11px 9px 0px #00000040',
          borderRadius: "20px"
        }}>
          <Typography sx={{
            fontFamily: `"Readex Pro", sans-serif`,
            color: "#C24646",
            fontWeight: "bold",
            textAlign: "start"

          }}>
            My Name is xxxx how long it take to get <br />
            married?
          </Typography>

          <Typography sx={{
            textAlign: "start"
          }}>
            It’s based on your skills xxxx...lol
          </Typography>
        </Box>

      </Box>
      <Box sx={{
        width: '100%',
        margin: "0px 50px",
        textAlign: "start"
      }}>
        <Typography sx={{
          fontFamily: `"Readex Pro", sans-serif`,
          fontWeight: "bold",
          color: "#C24646",
          fontSize: "24px",
          marginTop: "30px"
        }}>
          Our Match making algorithm
        </Typography>


        <Typography sx={{
          fontFamily: `"Readex Pro", sans-serif`,
          fontSize: "20px",
          
        }}>
          The matchmaking algorithm for FindYourMatch.com (FYM) connects users based on compatibility. It collects user data like interests, values, and preferences, assigns weights to key criteria, and calculates a compatibility score. Using machine learning and behavioral analysis, it refines matches over time and adapts dynamically to user interactions and updates.
        </Typography>

        <Typography sx={{
          fontFamily: `"Readex Pro", sans-serif`,
          fontWeight: "bold",
          color: "#C24646",
          fontSize: "24px",
        }}>
          Talk to our experts 
        </Typography>

        <Typography sx={{
           margin: "5px 45px"
        }}>
        +1800 465 465 / +1800 564 564
        </Typography>

        <Typography sx={{
          fontFamily: `"Readex Pro", sans-serif`,
          fontWeight: "bold",
          color: "#C24646",
          fontSize: "24px",
        }}>
          Chat Online
        </Typography>

        <Typography sx={{
           margin: "5px 45px"
        }}>
          +91 94452 43291
        </Typography>


      </Box>
    </Box>
  )
}

export default FaqSection