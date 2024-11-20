'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import 'react-multi-carousel/lib/styles.css';





const FindYourMatch = () => {

  const slides = [
      '/images/image-1.svg',
      '/images/image-2.svg',
      '/images/image-3.svg',
      '/images/image-4.svg',
      '/images/image-5.svg',
  ];

  const responsive = {
    superLargeDesktop: {
      // screens greater than 1920px
      breakpoint: { max: 4000, min: 1921 },
      items: 5,
    },
    desktop: {
      // screens between 1024px and 1920px
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
    },
    tablet: {
      // screens between 464px and 1024px
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      // screens below 464px
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          padding: 3,
          marginTop: '13rem',
        }}>
        <Typography variant='h4' textAlign='center' gutterBottom sx={{ fontFamily: `"Readex Pro", sans-serif`, marginTop: '0px' }}>
          Millions have found their life partner at FindyourMatch!
        </Typography>
 

        <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        showDots
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item"
        arrows={false}
        

      >
        {slides.map((src, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={300}
              height={200}
              layout="responsive"
              style={{ borderRadius: '8px' }}
            />
          </Box>
        ))}
      </Carousel>


        <Box sx={{ textAlign: 'left', marginTop: '40px', fontFamily: `"Readex Pro", sans-serif`, }}>
          <Typography
            variant="h6"
            sx={{ fontFamily: `"Readex Pro", sans-serif`, marginBottom: '10px', }}
          >
            <span style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              fontStyle: 'italic'

            }}>"</span> During the conversation with the couple, I could clearly understand how bonded they are. Priyajit was so enthusiastic and energetic in the way he responded. I initiated the conversation to know how it all began, to which he says, "I had premium membership on BharatMatrimony, which helped me find her profile really soon and also get her contact details.<span style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              fontStyle: 'italic'

            }}>"</span>
          </Typography>
          <Typography variant="h6" sx={{ marginTop: '45px', fontFamily: `"Readex Pro", sans-serif` }}>
            Priyajit & Monisha
          </Typography>
          <Typography variant="h6" sx={{
            fontWeight: 'bold',
            fontFamily: `"Readex Pro", sans-serif`,
            color: "#D58D70"
          }}>
            FYM.COM
          </Typography>

        </Box>

      </Box>
    </>
  )
};

export default FindYourMatch