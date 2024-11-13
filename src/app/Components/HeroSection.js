import { Button } from '@mui/material'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import React, { Fragment } from 'react'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
    <div className='container' >
        <main
        style={{
            backgroundImage: `url('https://s3-alpha-sig.figma.com/img/ef99/9eaa/32c4ede9df0bb36ee3404eaf4b1c2503?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZe8Puhbt67IW~w67pBkhU-lOsKXj2b7YkDnRTEWmvJiWLkSDoc1iwouhoTT6UZGBUQbcHZfoR~7XqkSEOtaHZZUTAu7ZifAi5FeKrwokJzCOTrus3WwaA6k9sAli7qTJtH-8PIRI6S2M4V1sy5~XOFWBdnMVjFVebbQxaEObrIKgoe9p5IMYHzuqLmKc8uyd3~FvxD2SVkYoTivvFMLtOV0FQR-MW2k20QugGUE0CTKGP~tNKfDlDoJDP2JXS5llI3OT0mxtI0wO8R4DaMjrkUJOeT1NPQzpD53AE0E-2TEOM0zPdcJAJXVoTIahYUFNKGBxOnM9dthQ2mZVjHpRw__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '500px',
            position: 'relative',
            marginTop: '-10px'
        }}>
            <div 
            style={{
            textAlign: 'center',
            fontSize: '44px', 
            top: '90px',
            left: '23%',
            position: 'absolute'
            }}>
                <h4>World's No.1 Matrimony service</h4>
            </div>
            <p style={{
                textAlign: 'center',
                fontSize: '26px',
                marginTop: '5px',
                position: 'absolute',
                top: '135px',
                left: '30%'
            }}>
            Search by City, Profession & Community</p>
            <div className='container' 
            style={{
                display: 'flex',
                gap: 20,
                width: '880px',
                padding: '10px',
                paddingLeft: '20px',
                paddingBottom: '15px',
                borderRadius: '10px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'absolute',
                top: '200px',
                left: '15%'
                
            }}>
                <div className='field1'>
                    <span 
                    style={{
                        color: 'white'
                    }}>I'm Looking for a</span>
                    <br></br>
                    <select 
                    style={{
                        height: '30px',
                        width: '120px',
                        marginTop: '5px',
                        border: 'none',
                        borderRadius: '5px'
                    }}>
                    <option>Select</option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Gay</option>
                        <option>Lesbian</option>
                    </select>
                </div>
                <div className='field2'>
                    <span
                    style={{
                        color: 'white'
                    }}>Aged</span>
                    <br/>
                    <select 
                    style={{
                        height: '30px',
                        width: '120px',
                        marginTop: '5px',
                        border: 'none',
                        borderRadius: '5px'
                    }}>
                    <option>Select</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                    </select>
                    <span
                    style={{
                        color: 'white'
                    }}> To</span>
                </div>
                <div className='field3'>
                    <span>  </span>
                    <br/>
                <select
                style={{
                    height: '30px',
                    width: '120px',
                    marginTop: '5px',
                    border: 'none',
                    borderRadius: '5px'
                }}>
                    <option>Select</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                    </select>
                </div>
                <div className='field4'>
                    <span
                    style={{
                        color: 'white'
                    }}>of Religion</span>
                    <br/>
                    <select
                    style={{
                        height: '30px',
                        width: '120px',
                        marginTop: '5px',
                        border: 'none',
                        borderRadius: '5px'
                    }}>
                        <option>Select</option>
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Christian</option>
                        <option>Jain</option>
                    </select>
                </div>
                <div className='field5'>
                    <span
                    style={{
                        color: 'white'
                    }}>and Mother Tongue</span>
                    <br/>
                    <select
                    style={{
                        height: '30px',
                        width: '120px',
                        marginTop: '5px',
                        border: 'none',
                        borderRadius: '5px'
                    }}>
                        <option>Select</option>
                        <option>Tamil</option>
                        <option>Telugu</option>
                        <option>Hindi</option>
                        <option>Malayalam</option>
                        <option>Kannada</option>
                    </select>
                </div>
                <Button 
                sx={{
                    backgroundColor: 'red',
                    height: '30px',
                    width: '100px',
                    marginTop: '23px',
                    color: 'white',
                    fontSize: '9px'
                }} >
                    Let's Begin
                </Button>
            </div>
            <div className='section2' 
            style={{
                height: '300px',
                width: '880px',
                margin: 'auto',
                marginTop: '50px',
                borderRadius: '10px',
                position: 'absolute',
                top: '280px',
                left: '15%',
                backgroundColor: 'white',
                boxShadow: '0px 4px 4px 0px #00000040'
            }}>
                <div className='box' 
                style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <div className='box1' 
                    style={{
                        // border: '1px solid black',
                        width: '200px',
                        paddingLeft: '20px',
                        textAlign: 'center',
                        marginTop: '50px'
                    }}>
                        <AssignmentIndOutlinedIcon 
                        sx={{
                            height: '40px',
                            width: '40px',
                        }}/>
                        <p 
                        style={{
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }}>100 %</p>
                        <p  
                        style={{
                            fontSize: '14px',
                            fontWeight: 500
                        }}>Mobile - Verified profiles</p>
                    </div>
                    <div className='vertical-line' 
                    style={{
                        borderLeft: '2px solid grey'/* Vertical line */,
                        marginTop: '20px',
                        height: '120px',
                        
                    }}></div>
                    <div className='box2' 
                    style={{
                        // border: '1px solid black',
                        width: '200px',
                        paddingLeft: '20px',
                        textAlign: 'center',
                        marginTop: '50px'
                    }}>
                         <VerifiedUserOutlinedIcon
                        sx={{
                            height: '40px',
                            width: '40px',
                        }}/>
                        <p 
                        style={{
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }}>4 crores +</p>
                        <p  
                        style={{
                            fontSize: '14px',
                            fontWeight: 500
                        }}>Customers are Served</p>
                    </div>
                    <div className='vertical-line' 
                    style={{
                        borderLeft: '2px solid grey'/* Vertical line */,
                        marginTop: '20px',
                        height: '120px',
                        
                    }}></div>
                    <div className='box3'
                    style={{
                        // border: '1px solid black',
                        width: '200px',
                        paddingLeft: '20px',
                        textAlign: 'center',
                        marginTop: '50px'
                    }}>
                         <HandshakeOutlinedIcon
                        sx={{
                            height: '40px',
                            width: '40px',
                        }}/>
                        <p 
                        style={{
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }}>24 Years</p>
                        <p  
                        style={{
                            fontSize: '13px',
                            fontWeight: 500
                        }}>Off Successfull Matchmaking</p>
                    </div>
                </div>
                <img 
                src='https://s3-alpha-sig.figma.com/img/a6e1/ae8d/4bd3a4a52ba504d1e6f46a1ed9c5b38a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZnQNeEG45S8gVNq3f5z~4BANKo3KlnG0mjW7t3DuTNkOWsUoGZj4QobtqnM3pByjrQvfkRwkrSou05J8i0MeJwjmHZpQE3l3w8jX3wv8C9di2zxF4GGUcTSXaYu9Cu9NOSmwoasm1v7fAfkAutc7JDJKWmneuTKMaztY9tbgQLgwr1LBVQ4dyc3f3xEMwyBZSeZ2JLHQKd14ZvnP~i3spcLM2Ld~ImLV3kHkhb2ubTXqQ1TkaAE5Ua6iY3wY645nKVGTI07T9B~pen6KNHMmkWE0Xms9bKtSh5Su6K3k1DS8RIzR740hai5418rHiBusxffkObiXTMGfppNmSDYdUg__' 
                style={{
                    height: '300px',
                    width: '400px',
                    objectFit: 'contain',
                    marginLeft: '25%',
                    marginTop: '-60px'

                }} ></img>
            </div>
        </main>
    </div>
    </>
  )
}

export default HeroSection