import React from 'react';
import './howdoit.css'; // Archivo CSS para estilos personalizados
import logo2 from '../assets/img/group2.png'
import { Grid } from '@mui/material';


const TextimgH = () => {
    return (
        <Grid container spacing={2} alignItems={'center'}>
        
            <Grid item xs={12} md={5} >
                <h2 className='ti-how1' >¿Cómo lo hacemos?</h2>
                <h3 className='ti-how2'  style={{fontWeight: "900", color: '#5B5A5A'}}>1.Elevando el nivel de competencia docente:</h3>
                <p className='pa-how1'>Mediante nuestra academia de docentes brindamos las herramientas a los educadores para liderarse a sí mismos y liderar el proceso de aprendizaje de sus estudiantes.</p>
                <p style={{textAlign:'center',fontWeight: "normal" , fontSize:"12", color:"#84007B"}}> <a style={{ fontWeight: "normal", fontSize:"12", color:"#84007B"}} href='/academiadocentes'>Conoce más de nuestra Academia docente.</a></p>
                </Grid>
                <Grid item xs={12} md={7} >
                <img className="image_mobile-t" src={logo2} alt="Imagen" />
            </Grid>
        </Grid>
    )};

export default TextimgH;