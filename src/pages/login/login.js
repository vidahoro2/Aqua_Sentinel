import React, { useState } from "react";
import "../login/login.css"; // Estilos CSS para la página
import CreserLogo from "../../assets/images/creserLogo.png";
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../components/NewTheme/new-theme.js";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useAuthContext } from "../../context/authContext"
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();

  const {login }= useAuthContext(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('*********************** Aqui=====')

    // Agregar lógica de inicio de sesión aquí
    let body = {
      httpMethod: 'POST',
      body: {
        tp: 'login1',
        data: {
          correo_usuario: email,
          clave_usuario: password,
        },
      },
      headers: {
        Authorization: '',
      },
    }
    axios
      .post(
        'https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/usuarios',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )

      .then((response) => {
        console.log(response)
        const data = JSON.parse(response.data.body)

        if (data.user_data.status === 'success') {
          login();
          const user_dato = {nombre: data.user_data.user_data.nombres_usuario}
          const id_user = {id_usuario: data.user_data.user_data.id_usuario}
          const token = data.token
          window.localStorage.setItem("user_data", JSON.stringify(user_dato));
          window.localStorage.setItem("id_usuario", (id_user.id_usuario));
          window.localStorage.setItem("token", token);
          setTimeout(function() {
            //window.location.href = "/private/academiadocentes"
            navigate("/private/academiadocentes");
          }, 3000);
          

        } else {
          alert(data.message)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="company-logo">
          <img src={CreserLogo} alt="Company logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <label id="labelId" htmlFor="email">
            Correo
          </label>
          <input
            type="email"
            id="email"
            placeholder="miguel@hotmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <label id="labelId" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="newBtn">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div className="newBtn">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                type="submit"
                id="idBtn"
                color="primary"
              >
                Iniciar sesión
              </Button>
            </ThemeProvider>
          </div>
        </form>
        <div className="newBtn">
          <ThemeProvider theme={theme}>
            <Button
              component={Link}
              to={'/register'}
              variant="text"
              id="idBtn"
              color="primary"
            >
              Crear cuenta
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className="decorative-image"></div>
    </div>
  )
}

export default Login
