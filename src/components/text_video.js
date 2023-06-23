import * as React from 'react';
import Card from '@mui/joy/Card';
import Group from '../assets/img/group.jpeg'
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { Box, Typography} from '@mui/joy';
import { Hidden } from '@material-ui/core';
import './text_video.css'




export default function BasicCard() {
  return (
    <Box className='title-container' component="ul" sx={{ display: 'flex', gap: 20, flexWrap: 'wrap', p: 10, m: 0, mt: 0 }}>
          <Box sx={{ flexShrink: 30, ml: 0 }}>
          <Typography 
              variant="h2" 
              fontSize={40} 
              mt={10} 
              mb={1} 
              sx={{ color: '#84007B', fontWeight: 'bold' }}>
              ¿Qué es CreSer?
            </Typography>

          <Typography variant="body1" fontSize={18} mt={0} mb={0} sx={{color:"gray"}}>
            CreSer es un programa de transformación, que desarrolla el liderazgo de niños, jóvenes, docentes y padres de familia para que se conviertan en personas que generan un impacto positivo en su sociedad.
          </Typography>
          
           
        </Box>
      <Box className="video-container" sx={{ flex: 1 , mt:-5 , ml:-5 }}>
          <Card sx={{ height: '120%' }}>
            <CardCover>
              <video
                autoPlay
                loop
                muted
                poster={Group}
              >
                <source
                  src={Group}
                  type="video/mp4"
                />
              </video>
            </CardCover>
          </Card>
        </Box>
        
    </Box>
  );
}