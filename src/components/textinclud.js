import React from 'react';
import './textmob2.css'; // Archivo CSS para estilos personalizados
import logo2 from '../assets/img/8.png'
import { Grid } from '@mui/material';


const Textvidinclud = () => {
    return (
        <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} >
                <img className="image_mobile-t" src={logo2} alt="Imagen" />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <h2 className='ti-mobile1' >Creser incluye varios programas en uno:</h2>
                <h3 className='ti-mobile2'  style={{fontWeight: "900", color: '#5B5A5A'}}>CreSer en el AULA:</h3>  <p className='pa-mobile1'>Mediante sesiones de clase que se imparten para niños desde primaria hasta media.</p> 
                <h3 className='ti-mobile2' style={{fontWeight: "900", color: '#5B5A5A'}}>CreSer Academia Docente:</h3> <p className='pa-mobile1'>Formación especializada para cualificar el desempeño de los maestros. </p>  
                <h3 className='ti-mobile2' style={{fontWeight: "900", color: '#5B5A5A'}}>CreSer Escuela de padres:</h3> <p className='pa-mobile1'>Que brinda herramientas a los padres y cuidadores para desarrollar su propio liderazgo y acompañar el proceso de su hijo. </p>
            </Grid>
        </Grid>
    )};

export default Textvidinclud;