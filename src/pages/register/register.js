import React, { useState } from "react";
import "../register/register.css"; // Estilos CSS para la página
import CreserLogo from "../../assets/images/creserLogo2.png";
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../components/NewTheme/new-theme.js";
import { Link } from "react-router-dom"
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const id = uuidv4();
  const id_institucion = uuidv4();
  const id_parametro_rol = uuidv4();
  const [isLoading, setIsLoading] = useState(false);



  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setconfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    setIsLoading(true);


    event.preventDefault();
    let body = {
      body: {
        tp: "usuario",
        body: {
          body:{
          
            "id_usuario": id,
            "id_institucion": id_institucion,
            "id_parametro_rol": id_parametro_rol,
            "nombres_usuario": name,
            "apellidos_usuario": apellido,
            "correo_usuario": email,
            "clave_usuario": password,
            "activo_usuario": "si",
            "imagen_usuario": "img_user.png",
            "eliminado_usuario": "-1"
          } 
            
        }
      },
      httpMethod: "POST",
        headers: {
          "Authorization": ""
        }
      };
    axios
      .post("https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/usuarios", body, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })

      .then(response => {
       console.log( response);
      
        if (response.data.statusCode === 200) {
    
          setTimeout(function() {
            navigate("/login")
          }, 2000);
    
        } else {
          /** *****/
        }
    
      })
        .catch(err => {
          console.error(err);
        });
  };

  return (
    <div className="register-page">
      <div className="decorative-image-register"> 
      </div>
      <div className="register-form">
        <div className="company-logo">
          <h1 className="Welcome-header" >Bienvenido a</h1>
          <img src={CreserLogo} alt="Company logo" />
        </div>
        <form onSubmit={handleSubmit}>
        <label id="labelId" htmlFor="email">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Miguel"
            value={name}
            onChange={handleNameChange}
          />
          <label id="labelId" htmlFor="email">Apellido</label>
          <input
            type="text"
            id="lastname"
            placeholder="Romero"
            value={apellido}
            onChange={handleApellidoChange}
          />
          <label id="labelId" htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            placeholder="miguel@hotmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <label id="labelId" htmlFor="email">Nombre de institucion</label>
          <input
            type="text"
            id="school"
            placeholder="Nombre del colegio"
            value={school}
            onChange={handleSchoolChange}
          />
          <label id="labelId" htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
          <label id="labelId" htmlFor="password">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmpassword"
            placeholder="********"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <div className="newBtn">
          <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        type="submit"
                        id="idBtn"
                        color="primary"
                        disabled={isLoading} // Deshabilita el botón mientras se está cargando
                        >
                  {isLoading ? "Cargando..." : "Crear cuenta"}
                </Button>
          </ThemeProvider>
          </div>
        </form>
        <div className="newBtn">
            <Link to="/login">
            <p>¿Ya tienes una cuenta? Inicia sesión</p>
            </Link> 
          </div>
      </div>
    </div>
  );
}

export default Register;