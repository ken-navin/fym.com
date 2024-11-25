import { Box, Typography } from "@mui/material";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';


const About = () => {
  return (
    <Box sx={{
      marginTop: '0px',
      marginBottom: '0px',
      width: '100%',
      height: '400px',
      display: 'flex',
      justifyContent: "space-between",
      gap: "70px",
      alignItems: "center",
      backgroundColor: '#F2F2F2'
    }}>
      <Box sx={{
        textAlign: "start",
        width: "100%"
      }}>
        <Typography sx={{
           fontFamily: `"Readex Pro", sans-serif`,
          color: "#C24646",
          fontWeight: "bold",
          fontSize: "24px",
          marginLeft: "75px",
          mb: 2
        }}>
          About FYM.COM
        </Typography>
        <Typography sx={{
          fontFamily: `"Readex Pro", sans-serif`,
          fontSize: "20px",
          marginLeft: "75px",
        }}>
        FYM the pioneer in online matrimony, is the most trusted matrimony service for Lakhs of Tamils worldwide. BharatMatrimony has been recognised as the most trusted online matrimony service by the Brand Trust Report. We have also been featured in Limca Book of records for most number of documented marriages online. Our purpose is to build a better FYM through happy marriages.
        </Typography>
      </Box>
      <Box sx={{
         width: "100%",
         marginLeft: "140px"
      }}>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
        }}>
        <EmojiEventsOutlinedIcon sx={{
          height: '72px',
          width: '85px',
        }} />
         <Typography sx={{
           fontFamily: `"Readex Pro", sans-serif`,
          color: "#C24646",
          fontWeight: "bold",
          textAlign: "start",
          fontSize: "24px",
          mb: 2
        }}>
          More then 500 <br/> marriages in 1 year
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
        }}>
        <VerifiedUserOutlinedIcon sx={{
          height: '72px',
          width: '85px',
        }} />
         <Typography sx={{
           fontFamily: `"Readex Pro", sans-serif`,
          color: "#C24646",
          fontWeight: "bold",
          textAlign: "start",
          fontSize: "24px",
          mb: 2
        }}>
          we value your privacy,<br/> you’re data is safe with us
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
        }}>
        <VerifiedOutlinedIcon sx={{
          height: '72px',
          width: '85px',
        }} />
         <Typography sx={{
           fontFamily: `"Readex Pro", sans-serif`,
          color: "#C24646",
          fontWeight: "bold",
          textAlign: "start",
          fontSize: "24px",
          mb: 2
        }}>
          Certified Event <br/> management team
        </Typography>
      </Box>

      </Box>
    </Box>
  )
}

export default About