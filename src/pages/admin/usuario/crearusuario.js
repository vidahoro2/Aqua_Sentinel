import './crearusuario.css'
import {useState} from 'react'
import NavbarAdmin from '../../admin/navbadmin'
import { Button, TextField, Grid, IconButton, Typography } from '@material-ui/core';
import {  CloudUpload } from '@mui/icons-material';
import { Box } from '@mui/system';


function UsuarioForm() {
    const [nombreuser, setnombreUser] = useState('');
    const [correouser, setCorreo] = useState('');
    const [contrauser, setContra] = useState('');
    const [userType, setUserType] = useState('');
    const [image, setImage] = useState(null);
  
    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí iría la lógica para enviar el formulario al backend
    };
  
    return (
      <Box>  
      <NavbarAdmin/>  
      <Box sx={{width:"800px", mt:"80px", ml:"300px"}}>
      <Typography>
        <h1 className='title-crear-leccion'>
          Crear Usuario
        </h1>
        <h6 className='subtitle-crear-leccion'>
          
          Llena el formulario con los datos del usuario
        </h6>
      </Typography>
      
      <form onSubmit={handleSubmit}>
      <div className="grid-container">

      <div className="componente146">
      <h6 className='subtitle-components'>
           Tipo de Usuario
      </h6>
      <select
          className='form-container-comp'
          value={userType}
          onChange={(event) => setUserType(event.target.value)}
        >
          <option className='subtitle-components' value="colegio_agremiado">Colegio Agremiado</option>
          <option className='subtitle-components' value="colegio">Colegio</option>
          <option className='subtitle-components' value="docente">Docente</option>
          <option className='subtitle-components' value="padre_familia">Padre de Familia</option>
           </select>
          </div>
        <div className="componente145">

        <h6 className='subtitle-components'>
                Nombre Completo
              </h6>
            <TextField className='form-container-comp'
              placeholder="Andres Orodoñez"
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              value={nombreuser}
              onChange={(event) => setnombreUser(event.target.value)}
            />

        </div>
        <div className="componente15">

        <h6 className='subtitle-components'>
                Correo
              </h6>
            <TextField className='form-container-comp'
              placeholder="correo@creserfeliz.com"
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              value={correouser}
              onChange={(event) => setCorreo(event.target.value)}
            />

        </div>
        <div className="componente16">

        <h6 className='subtitle-components'>
                Contraseña
              </h6>
            <TextField className='form-container-comp'
              placeholder="**********"
              focused={false}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ shrink: false }}
              value={contrauser}
              onChange={(event) => setContra(event.target.value)}
            />

        </div>
       
          
        
        <div className='componente17'>
        <h6 className='subtitle-components-image'>
                Imagen del Usuario
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
          <p className="pi-button">Crear Usuario</p>
          </Button>
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

export default UsuarioForm;