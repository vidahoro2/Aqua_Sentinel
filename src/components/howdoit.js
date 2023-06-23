import React from 'react';
import './howdoit2.css'; // Archivo CSS para estilos personalizados
import logo2 from '../assets/img/8.png'
import { Grid } from '@mui/material';


const TextimgH2 = () => {
    return (
        <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} >
                <img className="image_mobile-t" src={logo2} alt="Imagen" />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md:2 }}>
                <h2 className='ti-how21' >¿Cómo lo hacemos?</h2>
                <h3 className='ti-how22' style={{ fontWeight: "900", color: '#5B5A5A' }}>2.Brindando herramientas a los padres:</h3> <p className='pa-how21'>Estamos convencidos que para desarrollar el liderazgo de nuestros niños y jóvenes es necesario potenciar el liderazgo de sus padres.</p>
                <p style={{textAlign:'center', fontWeight: "normal", fontSize: "12", color: "#84007B"}}> <a style={{ fontWeight: "normal", fontSize: "12", color: "#84007B" }} href='/academiadocentes'>Conoce más de nuestra escuela de padres.</a></p>
            </Grid>
        </Grid>
    )};

export default TextimgH2;