import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/6c.png'
import './image.css';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const ImageWithText = ({ imageUrl, title, text }) => {
  return (
  <>
    <div class="image-container">
    <img src={Logo} alt="imagen1" class="image"/>
    </div>
    <div class="overlay-container">
    <Grid container spacing={2} alignItems={"center"}>
    <Grid item xs={8} md={8}>
    </Grid>
    <Grid item xs={4} md={4}>
    
    
      <h1 class="title-image">La garantía de un mañana mejor es una mejor educación hoy.</h1>
     
      <Link to="/register">
      <button class="button-comienza">¡Comienza Ahora!</button>
      </Link> 
  </Grid>
  </Grid>
  </div>
  </>
  );
};

export default ImageWithText;