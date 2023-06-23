import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const FormProf = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cumpleanos, setCumpleanos] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      body: {
        tp: "usuario",
        body: {
          body: {
            id_usuario:  localStorage.getItem("id_usuario"),
            id_institucion: "39ee65e4-3961-4d75-8b03-316f47d338b9",
            id_parametro_rol: "9e8d0a57-53f7-429c-9c06-c6f46b85c1b6",
            nombres_usuario: nombres,
            apellidos_usuario: apellidos,
            correo_usuario: email,
            clave_usuario: "12345678",
            activo_usuario: "si",
            imagen_usuario: "LUIS_SANCHEZ.png",
            eliminado_usuario: "-1"
          }
        }
      },
      httpMethod: "PUT",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };

    axios.put("https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/usuarios", body, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        // Realiza alguna acción después de actualizar los datos
      })
      .catch(error => {
        console.error(error);
        // Realiza alguna acción en caso de error
      });
  };

  return (
    <div className="form-container">
      <div className="form-container-grid">
        <form onSubmit={handleSubmit}>
          <h2>Tus Datos</h2>
          <div className="column-1 row-1">
            <h3 style={{ fontSize: '16px' }}>Nombres</h3>
            <input type="text" placeholder="Nombres" value={nombres} onChange={(event) => setNombres(event.target.value)} />
          </div>
          <div className="column-2 row-1">
            <h3 style={{ fontSize: '16px' }}>Apellidos</h3>
            <input type="text" placeholder="Apellidos" value={apellidos} onChange={(event) => setApellidos(event.target.value)} />
          </div>
          <div className="column-3 row-1">
            <h3 style={{ fontSize: '16px' }}>Email</h3>
            <input type="email" placeholder="Correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="column-1 row-2">
            <h3 style={{ fontSize: '16px' }}>Teléfono Móvil</h3>
            <input type="text" placeholder="Escribe tu número" value={telefono} onChange={(event) => setTelefono(event.target.value)} />
          </div>
          <div className="column-2 row-2">
            <h3 style={{ fontSize: '16px' }}>Cumpleaños</h3>
            <input type="date" placeholder="DD/MM/AA" value={cumpleanos} onChange={(event) => setCumpleanos(event.target.value)} />
          </div>
          <div className="column-1 row-3">
            <h3 style={{ fontSize: '16px', transform:"translate(0rem , -3rem)" }}>Género</h3>
            <div className='radio-container'>
              <label>
                <input type="radio" name="gender" value="masculino" checked={genero === "masculino"} onChange={(event) => setGenero(event.target.value)} />
                Masculino
              </label>
              <label>
                <input type="radio" name="gender" value="femenino" checked={genero === "femenino"} onChange={(event) => setGenero(event.target.value)} />
                Femenino
              </label>
              <label>
                <input type="radio" name="gender" value="no-binario" checked={genero === "no-binario"} onChange={(event) => setGenero(event.target.value)} />
                Otro
              </label>
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Guardar cambios</button>
            <button>Volver al Inicio</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProf;
  



/* import React from 'react';
import './form.css'


const FormProf = () => {
        return(
            <div className="form-container-grid">
                <form>
                    <h2>Conoce más</h2>
                        <input type="text" placeholder="Nombres" className="column-1" />
                        <input type="text" placeholder="Apellidos" className="column-2"/>
                        <input type="email" placeholder="Correo electrónico" className="column-3"/>
                        <input type="text" placeholder="Escribe tu número" className="column-1"/>
                        <input type="date" placeholder="DD/MM/AA" className="column-2"/>
                        <button>Comienza ahora</button>
                        <button>Volver al Inicio</button>
                </form>
            </div>
        );
}

export default FormProf; */
