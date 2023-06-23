import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import NavDoc from '../../components/NavRsp/NavDoc';
import ResponsiveAppBar from '../../components/App Bar/AppBar';
import Btn from '../../components/Buttons/CustomBtn';
import MyStepper from '../../components/Stepper/customStepper';
import axios from "axios";

import './Modulo.css'

const theme = createTheme();

export default function ModuloView() {
  const [step, setStep] = useState(1);
  const maxSteps = 8;
  const [lectionData, setLectionData] = useState([]);
  const [courseName, setCourseName] = useState('');

  useEffect(() => {
    const fetchLecciones = async () => {
      try {
        const body = {
          httpMethod: "GET",
          body: { 
            "tp": "leccion",
            "body": {
              "id_modulo": localStorage.getItem("selected_modulo_id")
            }  
          },
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        };

        const response = await axios.post(
          "https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/modulos",
          body,
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
          }
        );
        console.log("REspuesta servidor:",response);

        const lecciones = response.data.Lecciones.map(lection => ({
          id: lection.id_leccion,
          name: lection.nombre_leccion,
          descripcion_leccion: lection.descripcion_leccion,
          subscriptionDate: "2022-06-01",
          activeUntil: "2022-07-31",
          imageUrl: "https://via.placeholder.com/50x50",
        }));

        setLectionData(lecciones);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCurso = async () => {
      try {
        const cursoResponse = await axios.post(
          "https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/cursos",
          {
            httpMethod: "GET",
            body: {
              tp: "curso",
              body: {
                id_curso: localStorage.getItem("selected_curso_id"),
              },
            },
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log("REspuesta_SErvidorr:", cursoResponse)
        const cursoName = cursoResponse.data.body.curso[0].nombre_curso
        setCourseName(cursoName);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLecciones();
    fetchCurso();
  }, []);

  const handleSig = () => {
    if (step < maxSteps) {
      setStep(step + 1);
    }
  };

  const handleAtr = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const currentLection = lectionData[step - 1];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavDoc />
      <main>
        <div className="container-modulo">
          <div className='l-r-cont'>
            <div className="left-modulo">
              <MyStepper step={step} />
            </div>
            <div className="right-modulo">
              <h2>{currentLection?.name}</h2>
              <p className='modulo-descp'>{currentLection?.descripcion_leccion}</p>
              <div className="img-cont-modulo">
                <img src="https://source.unsplash.com/random/?Girl/" alt="Avatar" />
                <p>{courseName}</p>
              </div>
            </div>
          </div>
          <div className="video-modulo">
            <video
              autoPlay
              loop
              className='video-el'
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="buttons-container-modulo">
            <Btn onClick={handleAtr}>
              Anterior
            </Btn>
            <Btn onClick={handleSig}>
              Siguiente
            </Btn>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}