import React from 'react';
import './textmob2'; // Archivo CSS para estilos personalizados
import logroup from '../assets/img/group.jpeg'
import { Grid } from '@mui/material';

const Textvidmob = () => {
  return (

    <Grid container spacing={5} alignItems={"center"}>
      <Grid item xs={12} md={5} >
        <h2 className='ti-mobile'>¿Qué es CreSer?</h2>
        <p className='pa-mobile'>
          CreSer es un programa de transformación, que desarrolla el liderazgo de niños, jóvenes, docentes y padres de familia para que se conviertan en personas que generan un impacto positivo en su sociedad.
        </p>
      </Grid>
      <Grid item xs={12} md={7}>
        <img className="image_mobile" src={logroup} alt="Imagen" />
      </Grid>
    </Grid>   
  );
}

export default Textvidmob;
