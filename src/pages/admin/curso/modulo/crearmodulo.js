import './crearmodulo.css'
import {useEffect, useState} from 'react'
import NavbarAdmin from '../../navbadmin'
import { Button, TextField, Grid, IconButton, Typography } from '@material-ui/core';
import {  CloudUpload } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function ModuleForm() {
    
    
    const [nombre_modulo, setNombreModulo] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [image, setImage] = useState(null);
    const id_modulo = uuidv4()
    const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
    const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);


    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
    };
    const handleSuccessSnackbarClose = () => {
      setShowSuccessSnackbar(false);
    };
  
    const handleErrorSnackbarClose = () => {
      setShowErrorSnackbar(false);
    };
   
      
    const handleSubmit = (event) => {
      event.preventDefault();
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id_curso = urlParams.get('id_curso')
      console.log("ID_CURSO:",id_curso);

      let body = {
        body: {
          tp: "modulo",
          body: {
            body:{
            
              "id_modulo": id_modulo,
              "id_curso": id_curso,
              "nombre_modulo": nombre_modulo,
              "descripcion_modulo": description,
              "activo_modulo": "si",
              "imagen_modulo":"teoria2.jpg",
              "eliminado_modulo": "-1"
            } 
              
          }
        },
        httpMethod: "POST",
          headers: {
            "Authorization": ""
          }
        };
      axios
        .post("https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/modulos", body, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        })
        
  
        .then(response => {
          console.log(response.data);
          localStorage.setItem('id_modulo', id_modulo);
        
          if (response.data.status === 'succes') {
            console.log(response.data.status)
      
            setShowSuccessSnackbar(true);
            /* navigate(`/private/admin/crear_modulo?id_curso=${id_curso}`); */
      
          } else {
            
          }
      
        })
          .catch(err => {
            console.error(err);
          });
        
    };
  
    return (
      <Box>  
      <NavbarAdmin/>  
      <Box sx={{width:"800px", mt:"80px", ml:"400px"}}>
      <Typography>
        <h1 className='title-crear-module'>
          Crear Modulo
        </h1>
        <h6 className='subtitle-crear'>
          Llena la información general del Modulo
        </h6>
      </Typography>
      
      <form onSubmit={handleSubmit}>
      <div className="grid-container">
        <div className="componente1">

        <h6 className='subtitle-components'>
                Nombre
              </h6>
            <TextField className='form-container-comp'
              placeholder="Modulo 1"
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              value={nombre_modulo}
              onChange={(event) => setNombreModulo(event.target.value)}
            />

        </div>
        <div className="componente3">
          <h6 className='subtitle-components'>
                Descripción del Módulo
              </h6>
            <TextField className='form-container-comp'
              placeholder="Descripción del curso"
              multiline
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              rows={4}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

        </div>
          
        <div className="componente4">
        <h6 className='subtitle-components'>
                Duración del Módulo
              </h6>
            <TextField className='form-container-comp'
              placeholder="Duración del curso"
              value={duration}
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              onChange={(event) => setDuration(event.target.value)}
            />

        </div>
        <div className='componente5'>
        <h6 className='subtitle-components-image'>
                Imagen del Módulo
              </h6>
        <Box sx={{transform:'translate(0px, 0px)'}}>
            <input
              type="file"
              accept="image/*"
              id="image"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />

            <div className='componente9'>
            <label htmlFor="image">
              <IconButton component="span">
                <CloudUpload />
              </IconButton>
              {image ? image.name : 'Seleccionar imagen'}
            </label>
            </div>
            </Box>

        </div>
        <div className="componente8">
        <Link to="/private/admin/crear_leccion">
          <Button className='nextButton' type="submit" color="primary" variant="contained">
          <p className="pi-button">Siguiente</p>
          </Button>
          </Link>
          <Button className='nextButton' type="submit" color="primary" variant="contained">
          <p className="pi-button">Crear</p>
          </Button>
          <Snackbar open={showSuccessSnackbar} autoHideDuration={3000} onClose={handleSuccessSnackbarClose}>
                    <MuiAlert onClose={handleSuccessSnackbarClose} severity="success">
                      Modulo creado exitosamente.
                    </MuiAlert>
                  </Snackbar>
          {/* Snackbar para notificación de error */}
          <Snackbar open={showErrorSnackbar} autoHideDuration={3000} onClose={handleErrorSnackbarClose}>
                    <MuiAlert onClose={handleErrorSnackbarClose} severity="error">
                      Ocurrió un error. Por favor, inténtalo de nuevo.
                    </MuiAlert>
                  </Snackbar>

        </div>
        <div className="componente9">
          <Button className="cancelButton" type="button" color="default" variant="contained">
          <p className="pc-button">Cancelar</p>
          </Button>
        </div>
        </div>
      </form>
   
</Box>
    </Box>
    );
  }

export default ModuleForm;