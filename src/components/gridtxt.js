import './gridtxt.css'
import { Grid, Typography } from '@mui/material'

export default function MisionComponent() {
    return (
<Grid container spacing={2}
    direction="column"
    justifyContent="center"
    alignItems="center"
    >
  <Grid item xs={6}>
  <Typography 
              variant="h2" 
              fontSize={52} 
              mt={2} 
              mb={1} 
              sx={{ color: '#84007B', fontWeight: 'bold', fontFamily:"poppinsBlack", textAlign:'center' }}>
        Nuestro Objetivo
    </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography 
              variant="body1" 
              fontSize={20} 
              mt={1} 
              mb={1} 
              sx={{ color: '#81807d', fontWeight: 'bold',fontFamily:"poppinsRegular", textAlign:'center'}}>
        Elevar la calidad educativa, cualificando el desempeño<br/> de los docentes y desarrollando competencias transversales<br/> en los estudiantes que eleven su nivel académico,<br/>felicidad y proyección profesional. 
    </Typography>
   
  </Grid>
  <Grid item xs={6}>
  <Typography 
              variant="h2" 
              fontSize={52} 
              mt={2} 
              mb={1} 
              sx={{ color: '#84007B', fontWeight: 'bold', fontFamily:"poppinsBlack", textAlign:'center' }}>
        Nuestro Propósito

    </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography 
              variant="body1" 
              fontSize={20} 
              mt={0} 
              mb={3} 
              sx={{ color: '#81807d', fontFamily:"poppinsRegular",fontWeight: 'bold', textAlign:'center'}}>
        Le apostamos a transformar el ambiente escolar y familiar <br/> de nuestros niños y jóvenes para generar un entorno de <br/> confianza y crecimiento que favorezca su desarrollo personal, <br/>éxito escolar y futuro profesional.
    </Typography>
   
  </Grid>
 
</Grid>
    )
}
