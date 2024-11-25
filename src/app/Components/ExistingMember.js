import { Box, Checkbox, FormControlLabel, TextField, Typography, Button, Link } from "@mui/material"
import Image from 'next/image';


const ExistingMember = () => {

  return (
    <Box sx={{
      marginTop: '0px',
      marginBottom: '0px',
      width: '100%',
      height: '500px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: "center",
      backgroundColor: '#ECBFBF'
    }}>
      <Box>

        <Image
          src="/images/Existingmember.svg"
          alt="Matrimony Login page"
          width={600}
          height={450}
          sx={{
            borderRadius: "8px",
          }} />

      </Box>
      {/* borderRadius: '10px',
        padding: '30px',
        paddingTop: '10px',
        height: '320px',
        marginTop: '15px',
        marginRight: '80px',
        backgroundColor: '#f8f8f8',
        boxShadow: '8px 11px 9px 0px #00000040' */}

      <Box sx={{
        width: "100%",
        maxWidth: 400,
        margin: "auto",
        backgroundColor: '#f8f8f8',
        borderRadius: 4,
        boxShadow: '8px 11px 9px 0px #00000040',
        textAlign: "center"
      }}>

        <Typography variant="h5"
          sx={{
            marginTop: '10px'
          }}>
          Existing Member? Login
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter Mobile No / E-mail ID"
          variant="outlined"
          sx={{
            marginTop: '10px',
            mb: 2,
            width: '350px',
            "& .MuiOutlinedInput-root": {
              borderRadius: 15,
              backgroundColor: "#EC9393",
              "& fieldset": { border: "none" },
              "& input::placeholder": {
                color: "white",
                opacity: 1,
              },
            },
          }} />

        <TextField
          fullWidth
          placeholder="Enter Password"
          variant="outlined"
          type="password"
          sx={{
            marginTop: '10px',
            mb: 2,
            width: '350px',
            "& .MuiOutlinedInput-root": {
              borderRadius: 15,
              backgroundColor: "#EC9393",
              "& fieldset": { border: "none" },
              "& input::placeholder": {
                color: "#fff",
                opacity: 1,
              },
            },
          }}
        />

        <Typography sx={{
          fontFamily: "Original Surface",
          textAlign: "start",
          marginLeft: 5
        }}>Keep Me Logged</Typography>

        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#EC9393",
            padding: "5px 60px",
            color: "#fff",
            borderRadius: "15px",
            textTransform: "none",
            fontWeight: "bold",
            display: "flex",
            textAlign: "left",
            margin: "5px 32px",
            "&:hover": {
              backgroundColor: "#ff9eb0",
            },
          }}
        >
          Login
        </Button>

        {/* Links */}

        <Typography sx={{
          fontFamily: "Original Surface",
          textAlign: "start",
          marginLeft: 5
        }}>Trouble Logging in?</Typography>
        
        <Typography sx={{
          margin: "10px 0px"
        }} > 
          <Link href="#" underline="none" sx={{ 
            fontFamily: "Original Surface",
           color: "black" 
           }}>
            Login with OTP 
          </Link>
          {" "} |{" "}
          <Link href="#" underline="none" sx={{
             fontFamily: "Original Surface",
             color: "black" }}>
            Forgot Password
          </Link>
        </Typography>

        <Typography sx={{ 
          fontSize: "0.9rem",
          backgroundColor: "#EC9393",
          borderRadius: "15px",
          margin: "0px 38px",
          padding: "10px 20px",
          color: "white",
          boxShadow: '8px 11px 9px 0px #00000040' }}>
          Not a member?{" "}
          <Link href="#" underline="none" sx={{ fontWeight: "bold", 
            color: "#fff" }}>
            Register Free
          </Link>
        </Typography>

        {/* Footer Text */}
        <Typography
          sx={{
            fontFamily: `"Readex Pro", sans-serif`,
            color: "black",
            m: 2,
          }}
        >
          #BeChoosy with Biggest <br/> Matrimony Service for Tamils
        </Typography>


      </Box>

    </Box>
  )
}

export default ExistingMember