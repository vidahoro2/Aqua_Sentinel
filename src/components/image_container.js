/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Typography } from '@mui/material';
import logo1 from '../assets/img/logo-ox.png';
import logo2 from '../assets/img/logo-mit.png';
import logo3 from '../assets/img/logo-auto.png';
import logo4 from '../assets/img/logo-andes.png';
import { Hidden } from '@material-ui/core';

export default function ImageContainer() {
    return (<Box>
      <Hidden mdUp>
      <Box
        sx={{
          backgroundColor: '#00902F',
          height: '140px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap:'0',
          mb: 15,
          mt:15
        }}
      >
        <Typography variant="h4" sx={{ fontFamily:'poppinsBlack', fontSize:"20", color: '#fff',mt:-2 ,mb: 1, fontWeight:'bold'}} textAlign="center">
          Colegios CreSer
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <div style={{marginLeft:"50"}} >
           <img src={logo1} alt="image" style={{ width:'60%'  }}/>
          </div>
          <div>
          <img src={logo2} alt="image" style={{  width: '60%'  }} />
          </div>
          <div>
          <img src={logo3} alt="image" style={{ width: '60%'  }} />
          
          </div>
          <div>
          <img src={logo4} alt="image" style={{width: '60%'  }} />
        
          </div>
          </Box>
      </Box>
    </Hidden>
      <Hidden smDown>
      <Box
        sx={{
          backgroundColor: 'green',
          height: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap:'40',
          mb: 15
        }}
      >
        <Typography variant="h4" sx={{ fontFamily:'poppinsBlack', color: '#fff',mt:1 ,mb: 1, fontWeight:'bold'}} textAlign="center">
          Colegios CreSer
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <div style={{marginLeft:"200"}} >
           <img src={logo1} alt="image" style={{ width:'50%'  }}/>
          </div>
          <div>
          <img src={logo2} alt="image" style={{  width: '50%'  }} />
          </div>
          <div>
          <img src={logo3} alt="image" style={{ width: '50%'  }} />
          
          </div>
          <div>
          <img src={logo4} alt="image" style={{width: '50%'  }} />
        
          </div>
          </Box>
      </Box>
    </Hidden>

    </Box>
    
    );
  }; 