import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { Box, Typography } from '@mui/joy';
import log2 from '../assets/img/4 (1).png'
import lo2 from '../assets/img/77.png';
import './text_vid2.css'
import { Hidden } from '@material-ui/core';

export default function BasicCard2() {
  return (
    <Box className='container-vid'
      component="ul"
      sx={{ display: 'flex',flexDirection:"row-reverse", gap: 20, flexWrap: 'wrap', p: 10, m: 0, mt: 10 }}
        >
          <Box sx={{ flexShrink: 30, ml: 10 }}>
          <Typography 
              variant="h2" 
              fontSize={40} 
              mt={2} 
              mb={1} 
              sx={{ color: '#84007B', fontWeight: 'bold' }}>
              ¿Quiénes Somos?
            </Typography>
          <Typography variant="body1" fontSize={16} mt={2} mb={7} sx={{color:"#84007B"}}>
            <h3 style={{fontWeight: "normal", color: '#84007B'}}>Un equipo de profesionales apasionados <br/>por la educación y el desarrollo humano <br/>INTEGRADO POR:</h3> 
            <p  style={{fontWeight: "normal", color: '#81807d' , fontSize:"14"}}>Pedagogos, neuro pedagogos, psicólogos, biólogos,<br/> sociólogos, diseñadores curriculares y didácticos,<br/> creativos y desarrolladores digitales educativos,<br/> con amplia experiencia y trayectoria.
           </p>
           </Typography>
        </Box>
      <Hidden smDown> 
      <Box sx={{ flex: 1 , mt: -5, }}>
          <Card sx={{ height: '120%' }}>
            <CardCover>
              <video
                autoPlay
                loop
                muted
                poster={ lo2 }
              >
                <source
                  src= { lo2 }
                  type="video/mp4"
                />
              </video>
            </CardCover>
          </Card>
        </Box>
        </Hidden>
        <Hidden mdUp>
        <Box sx={{ flex: 1 , mt: -6}}>
          <Card sx={{ mb:2, height: '300%', width:"420px"}}>
            <CardCover>
              <video
                autoPlay
                loop
                muted
                poster={ lo2 }
              >
                <source
                  src= { lo2 }
                  type="video/mp4"
                />
              </video>
            </CardCover>
          </Card>
        </Box>
        </Hidden>
        
    </Box>
  );
}