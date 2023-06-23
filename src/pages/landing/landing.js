import ImageWithText from '../../components/image'
import ImageContainer from '../../components/image_container'
import SliderComponent from '../../components/cards_container';
import SliderComponentvid from '../../components/cards_video';
import NavbarMui from '../../components/NavRsp/NavMui'
import SliderComponentmovil from '../../components/cardvidmovil';
import SliderComponentmv from '../../components/cards_containermv';
import '../../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import FormWithText from '../../components/form_text'
import Footer from '../../components/footer'
import Textvidmob from '../../components/textvidmob';
import './landing.css'
import React, { useState } from 'react';
import { useEffect } from 'react';
import MisionComponent from '../../components/gridtxt';
import Textvidinclud from 'components/textinclud';
import  TextimgH  from '../../components/howdoit2';
import TextimgH2 from '../../components/howdoit';
import TextimgH3 from '../../components/howdoit3';
import TextimgH4 from '../../components/howdoit4';
import '@fortawesome/fontawesome-free/css/all.css';
import { Grid } from '@mui/material';
import MyMapComponent from "../../components/mapa2"

const Landing = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      
    <Grid container spacing={5} alignItems={"center"}>
        <Grid item xs={12} md={5} >
          <h2 className='ti-mobile'>¿Qué es CreSer?</h2>
          <p className='pa-mobile'>
            CreSer es un programa de transformación, que desarrolla el liderazgo de niños, jóvenes, docentes y padres de familia para que se conviertan en personas que generan un impacto positivo en su sociedad.
          </p>
        </Grid>
        <Grid item xs={12} md={7}>
          <MyMapComponent />
        </Grid>
  </Grid>   
    );
  };
  
  export default Landing;