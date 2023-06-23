import './crearleccion.css'
import {useState} from 'react'
import NavbarAdmin from '../../navbadmin'
import { Button, TextField, Grid, IconButton, Typography } from '@material-ui/core';
import {  CloudUpload } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


function LeccionForm() {
    const { id_modulo } = localStorage.getItem('id_modulo');
    const [nombre_leccion, setNombreLeccion] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const id_leccion = uuidv4();
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
      const id_modulo = urlParams.get('id_modulo')
      console.log("ID_CURSO:",id_modulo);
      let body = {
        body: {
          tp: "leccion",
          body: {
            body:{
            
              "id_leccion": id_leccion,
              "id_modulo": localStorage.getItem('id_modulo'),
              "nombre_leccion": nombre_leccion,
              "descripcion_leccion": description,
              "imagen_leccion":"lecciona.jpg",
              "activo_leccion": "si",
              "eliminado_leccion": "-1"
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
      <Box sx={{width:"800px", mt:"80px", ml:"300px"}}>
      <Typography>
        <h1 className='title-crear-leccion'>
          Crear Lección
        </h1>
        <h6 className='subtitle-crear-leccion'>
          
          Sube el video de tu Lección para completar el curso
        </h6>
      </Typography>
      
      <form onSubmit={handleSubmit}>
      <div className="grid-container">
        <div className="componente15">

        <h6 className='subtitle-components'>
                Nombre Leccion
              </h6>
            <TextField className='form-container-comp'
              placeholder="Leccion 1"
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              value={nombre_leccion}
              onChange={(event) => setNombreLeccion(event.target.value)}
            />

        </div>
        <div className="componente16">
          <h6 className='subtitle-components'>
                Descripción Lección
              </h6>
            <TextField className='form-container-comp'
              placeholder="Descripción de la lección"
              multiline
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              rows={4}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

        </div>
          
        
        <div className='componente17'>
        <h6 className='subtitle-components-image'>
                Video Lección
              </h6>
        <Box sx={{transform:'translate(0px, 0px)'}}>
            <input
              type="file"
              accept="image/*"
              id="image"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />

            <div className='componente18'>
            <label htmlFor="image">
              <IconButton component="span">
                <CloudUpload />
              </IconButton>
              {image ? image.name : 'Seleccionar imagen'}
            </label>
            </div>
            </Box>

        </div>
        <div className="componente28">
          <Button className='nextButton' type="submit" color="primary" variant="contained">
          <p className="pi-button">Siguiente lección</p>
          </Button>
        </div>
        <div className="componente10">
          <Button className='cancelButton' type="submit" color="primary" variant="contained">
          <p className="pc-button">Crear Lección</p>
          </Button>
          <Snackbar open={showSuccessSnackbar} autoHideDuration={3000} onClose={handleSuccessSnackbarClose}>
                    <MuiAlert onClose={handleSuccessSnackbarClose} severity="success">
                      Leccion creada exitosamente.
                    </MuiAlert>
                  </Snackbar>

                  {/* Snackbar para notificación de error */}
                  <Snackbar open={showErrorSnackbar} autoHideDuration={3000} onClose={handleErrorSnackbarClose}>
                    <MuiAlert onClose={handleErrorSnackbarClose} severity="error">
                      Ocurrió un error. Por favor, inténtalo de nuevo.
                    </MuiAlert>
                  </Snackbar>
        </div>
        <div className="componente29">
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

export default LeccionForm;