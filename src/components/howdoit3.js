import React from 'react';
import './textmob2.css'; // Archivo CSS para estilos personalizados
import logo2 from '../assets/img/111.png'
import { Grid } from '@mui/material';


const TextimgH3 = () => {
    return (
        <Grid container spacing={2} alignItems={'center'}>
        
            <Grid item xs={12} md={5} >
                <h2 className='ti-how1' >¿Cómo lo hacemos?</h2>
                <h3 className='ti-how2'  style={{fontWeight: "900", color: '#5B5A5A'}}>3.Desarrollando el potencial de niños y jóvenes:</h3>  <br/><p className='pa-how1'>Mediante una estrategia de Aprendizaje significativo, los estudiantes toman el protagonismo de las clases y se convierten en constructores de su aprendizaje con el apoyo de su docente.</p>
                <p style={{textAlign:'center',fontWeight: "normal", fontSize:"12", color:"#84007B"}}> <a style={{textAlign:'center', fontWeight: "normal", fontSize:"12", color:"#84007B"}} href='/academiadocentes'>Conoce cómo se implementa CreSer en el aula.</a></p>
                </Grid>
                <Grid item xs={12} md={7} >
                <img className="image_mobile-t" src={logo2} alt="Imagen" />
            </Grid>
        </Grid>
    )};

export default TextimgH3;