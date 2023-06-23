import * as React from 'react';
import { Box, Typography } from '@mui/joy';
import Logo from '../assets/img/group2.png';
import log2 from '../assets/img/10.png';
import log3 from  '../assets/img/111.png';
import './image_text.css'

export default function BasicCardtext() {
  return (
    <>
      <Box className='container-all'
      component="ul"
      sx={{ display: 'flex', flexDirection:"row-reverse", gap: 20, flexWrap: 'wrap', p: 5, m: 10 }}

    > 
        <Box sx={{ flex: 1 , mt: 0 }}>
                  <div >
                    <img className='imagen-texto2' src={Logo} alt="Descripción de la imagen" style={{ borderRadius: "5%", height:"100%", width: "100%" }}/>
                  </div>
        </Box>
        
          <Box sx={{ flexShrink: 30, ml: 0 }}>
          <Typography 
              variant="h1" 
              fontSize={40} 
              mt={2} 
              mb={1} 
              sx={{ color: '#84007B', fontWeight: 'bold' }}>
              ¿Cómo lo hacemos?
            </Typography>
           <Typography variant="body1" fontSize={23} mt={4} mb={0} sx={{ textAlign: "justify", color:"#81807d"}}>
              <p style={{fontWeight: "normal", color: '#84007B'}}>
              1. Elevando el nivel de competencia docente:<br/>     
                <p style={{marginTop:"10",marginLeft:"10",fontWeight: "normal", fontSize:"18", color:"#81807d"}}> Mediante nuestra academia de docentes brindamos<br/>  las herramientas a los educadores para liderarse a sí <br/> mismos y liderar el proceso de aprendizaje de sus estudiantes.</p> 
                <p style={{marginTop:"10",marginLeft:"10",fontWeight: "normal", fontSize:"12", color:"#84007B"}}> <a style={{marginTop:"10",marginLeft:"10",fontWeight: "normal", fontSize:"12", color:"#84007B"}} href='/academiadocentes'>Conoce más de nuestra Academia docente.</a></p>
              </p>
              </Typography>
            
            
        </Box>
    </Box>
    <Box className='container-all'
      component="ul"
      sx={{ display: 'flex', flexDirection:"row", gap: 20, flexWrap: 'wrap', p: 5, m: 10 }}

    > 
        <Box sx={{ flex: 1 , mt: 0 }}>
                  <div >
                    <img className='imagen-texto2' src={log2} alt="Descripción de la imagen" style={{ borderRadius: "5%", height:"100%", width: "100%" }}/>
                  </div>
        </Box>
        
          <Box sx={{ flexShrink: 30, ml: 0 }}>
          <Typography 
              variant="h1" 
              fontSize={40} 
              mt={12} 
              mb={1} 
              sx={{ color: '#84007B', fontWeight: 'bold' }}>
              ¿Cómo lo hacemos?
            </Typography>
            <Typography variant="body1" fontSize={23} mt={5} mb={0} sx={{ textAlign: "justify", color:"#81807d"}}>
              <p style={{fontWeight: "normal", color: '#84007B'}}>
                2.Brindando herramientas a los padres: <br/>
                <p style={{marginTop:"10",marginLeft:"10",fontWeight: "normal", fontSize:"18", color:"#81807d"}}>Estamos convencidos que para desarrollar<br/>  el liderazgo de nuestros niños y jóvenes <br/> es necesario potenciar el liderazgo de sus padres.</p> 
                <p style={{marginTop:"10",marginLeft:"10",fontWeight: "normal", fontSize:"12", color:"#84007B"}}> Conoce más de nuestra  escuela de padres.</p> 
              </p>
              </Typography>
        </Box>
    </Box>
    <Box className='container-all'
      component="ul"
      sx={{ display: 'flex', flexDirection:"row-reverse", gap: 20, flexWrap: 'wrap', p: 5, m: 10 }}

    > 
        <Box sx={{ flex: 1 , mt: 0 }}>
                  <div >
                    <img className='imagen-texto2' src={log3} alt="Descripción de la imagen" style={{ borderRadius: "5%", height:"100%", width: "100%" }}/>
                  </div>
        </Box>
        
          <Box sx={{ flexShrink: 30, ml: 0 }}>
          <Typography 
              variant="h1" 
              fontSize={40} 
              mt={10} 
              mb={1} 
              sx={{ color: '#84007B', fontWeight: 'bold' }}>
              ¿Cómo lo hacemos?
            </Typography>
            <Typography variant="body1" fontSize={23} mt={4} mb={0} sx={{ textAlign: "justify", color:"#81807d"}}>
              
              <p style={{fontWeight: "normal", color: '#84007B'}}>
                3.Desarrollando el potencial de niños y jóvenes:<br/> 
                <p style={{marginTop:"10",marginLeft:"10",fontWeight: "normal", fontSize:"18", color:"#81807d"}}> Mediante una estrategia de Aprendizaje significativo,<br/> los estudiantes toman el protagonismo de las clases<br/> y se convierten en constructores de su aprendizaje<br/> con el apoyo de su docente.</p>
                <p style={{marginTop:"10",marginLeft:"10",fontWeight: "normal", fontSize:"12", color:"#84007B"}}>Conoce cómo se implementa CreSer en el aula.</p> 

              </p>
              </Typography> 
            
        </Box>
    </Box>
    </>
  );
}