import React from 'react';
import './howdoit2.css'; // Archivo CSS para estilos personalizados
import logo2 from '../assets/img/77.png'
import { Grid } from '@mui/material';


const TextimgH4 = () => {
    return (
        <Grid container spacing={2} alignItems={'center'}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} >
                <img className="image_mobile-t" src={logo2} alt="Imagen" />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md:2 }}>
                <h2 className='ti-how21' >¿Quiénes Somos?</h2>
                <h3 className='ti-how22' style={{ fontWeight: "900", color: '#5B5A5A' }}>Un equipo de profesionales apasionados por la educación y el desarrollo humano INTEGRADO POR:</h3>  <p className='pa-how21'>Pedagogos, neuro pedagogos, psicólogos, biólogos, sociólogos, diseñadores curriculares y didácticos,creativos y desarrolladores digitales educativos,con amplia experiencia y trayectoria.</p>
                     </Grid>
        </Grid>
    )};

export default TextimgH4;