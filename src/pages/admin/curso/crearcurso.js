import './crearcurso.css'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavbarAdmin from '../navbadmin'
import { Button, TextField, Grid, IconButton, Typography } from '@material-ui/core';
import {  CloudUpload } from '@mui/icons-material';
import { Box } from '@mui/system';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function CourseForm() {
    const [instructor, setInstructor] = useState('');
    const [nombre_curso, setNombreCurso] = useState('');
    const [keywords, setKeywords] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');
    const [discountPrice, setDiscountPrice] = useState('');
    
    const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
    const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
    const navigate = useNavigate();

    const id_curso = uuidv4();
    const id_instructor = uuidv4();
    const id_categoria = uuidv4();

  const handleSuccessSnackbarClose = () => {
    setShowSuccessSnackbar(false);
  };

  const handleErrorSnackbarClose = () => {
    setShowErrorSnackbar(false);
  };

  
    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let body = {
        body: {
          tp: "curso",
          body: {
            body:{
            
              "id_curso": id_curso,
              "id_instructor": id_instructor,
              "id_categoria": id_categoria,
              "slug_curso": "example.com/cursos?id=123",
              "palabras_clave_curso": keywords,
              "descripcion_curso": description,
              "duracion_curso": duration,
              "precio_curso": price,
              "precio_descuento": discountPrice,
              "activo_curso": "si",
              "publicado_curso": "publicado",
              "nombre_curso":nombre_curso,
              "imagen_curso":"imagen.jpg",
              "eliminado_curso": "-1"
            } 
              
          }
        },
        httpMethod: "POST",
          headers: {
            "Authorization": ""
          }
        };
      axios
        .post("https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/cursos", body, {
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
            navigate(`/private/admin/crear_modulo?id_curso=${id_curso}`);
      
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
        <h1 className='title-crear'>
          Crear Curso
        </h1>
        <h6 className='subtitle-crear'>
          Llena la información general del curso
        </h6>
      </Typography>
      
      <form onSubmit={handleSubmit}>
      <div className="grid-container">
              <div className="component-s1">

                <h6 className='subtitle-components'>
                  Nombre Curso
                </h6>
                <TextField className='form-container-comp'
                  placeholder="Nombre Curso"
                  focused={false}
                  InputProps={{ disableUnderline: true }}
                  InputLabelProps={{ shrink: false }}
                  value={nombre_curso}
                  onChange={(event) => setNombreCurso(event.target.value)}
                />

              </div>
        <div className="componente1">

        <h6 className='subtitle-components'>
                Instructor
              </h6>
            <TextField className='form-container-comp'
              placeholder="Instructor"
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              value={instructor}
              onChange={(event) => setInstructor(event.target.value)}
            />

        </div>
        <div className="componente2">
        <h6 className='subtitle-components'>
                Palabras clave del curso
              </h6>
            <TextField className='form-container-comp'
              placeholder="Palabras clave del curso"
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              value={keywords}
              onChange={(event) => setKeywords(event.target.value)}
            />
        </div>
        <div className="componente3">
          <h6 className='subtitle-components'>
                Descripción del curso
              </h6>
            <TextField className='form-container-comp'
              placeholder="Descripción del curso"
              multiline
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

        </div>
          
        <div className="componente4">
        <h6 className='subtitle-components'>
                Duración del curso
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
                Imagen del curso
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
        <div className="componente6">
        <h6 className='subtitle-components'>
              Precio del curso
              </h6>
            <TextField className='form-container-comp'
              placeholder="Ingrese el precio del curso"
              focused={true}
              InputProps={{ disableUnderline: true, style: { transform: 'translate(8px, -5px)', width: '97%', alignItems:"center"}}}
              InputLabelProps={{ 
                shrink: true, 
                style: { transform: 'translate(10px, 24px)'} 
              }}
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />

        </div>
        <div className="componente7">
        <h6 className='subtitle-components'>
              Precio con descuento
              </h6>
            <TextField className='form-container-comp'
              placeholder="Precio con descuento"
              focused={false}
              InputProps={{ disableUnderline: true, style: { transform: 'translate(8px, -5px)', width: '100%', alignItems:"center"}}}
              InputLabelProps={{ 
                shrink: true, 
                style: { transform: 'translate(10px, 24px)'} 
              }}
              type="number"
              value={discountPrice}
              onChange={(event) => setDiscountPrice(event.target.value)}
            />

        </div>
        <div className="componente8">
        <Link to="/private/admin/crear_modulo">
          <Button className='nextButton' type="submit" color="primary" variant="contained">
          <p className="pi-button">Siguiente</p>
          </Button>
          </Link>

                <Button className='nextButton' type="submit" color="primary" variant="contained">
                  <p className="pi-button">Crear</p>
                </Button>
          <Snackbar open={showSuccessSnackbar} autoHideDuration={3000} onClose={handleSuccessSnackbarClose}>
                    <MuiAlert onClose={handleSuccessSnackbarClose} severity="success">
                      Curso creado exitosamente.
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

export default CourseForm;