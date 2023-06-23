import React from 'react';
import './form_text.css';
import { Hidden } from '@material-ui/core';
import { Grid } from '@mui/material';

const FormWithText = () => {
  return (
<div className="form-container">
    <Grid container spacing={2} alignItems={"center"}>
    <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} >
    
      <Hidden smDown>
      <h1 className='fomrm-text'>
        Porque nuestros niños y jóvenes <br/>
        lo merecen <br/> <h1 className='parte'>¡Sé parte de este<br/> 
        proyecto de transformación!<br/></h1>
      </h1>
     
      </Hidden>
    
            
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <form>
        <h2>Conoce más</h2>
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="text" placeholder="País" />
        <input type="text" placeholder="Teléfono de contacto" />
        <input type="text" placeholder="Región" />

        <select>
          <option value="">Selecciona una opción</option>
          <option value="patrocinador">Como patrocinador</option>
          <option value="colegio">Llevándolo a mi colegio</option>
          <option value="docente">Entrenándome como un docente CreSer</option>
        </select>

        <button>Comienza ahora</button>
      </form>
      
        </Grid>
    </Grid>
    </div>
  );
};

export default FormWithText;