import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CardModulo from '../../components/Card_Modulos/CardModulo';
import Btn from '../../components/Buttons/CustomBtn';
import Comentario from '../../components/Comments/Comentario';
import NavbarDoc from '../../components/NavRsp/NavDoc';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CursoView.css';

const cards = [1, 2, 3];
const theme = createTheme();

export default function CursoView() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('one');
  const [user_data, setUserData] = useState(JSON.parse(window.localStorage.getItem("user_data")));
  const [curse_data, setCurseData] = useState([]);
  const [module_data, setModuleData] = useState([]);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { id } = useParams();
  
  const handleEnroll = async () => {

    try {
      const enrollData = {
        body: {
          tp: "enrolar",
          body: {
            body: {
              id_usuario: localStorage.getItem("id_usuario"),
              id_curso: id
            }
          }
        },
        httpMethod: "POST",
        headers: {
          Authorization: ""
        }
      };
      console.log(enrollData)
      const response = await axios.post(
        "https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/cursos",
        enrollData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );

      // Hacer algo con la respuesta, si es necesario
      console.log(response.data);

      // Actualizar el estado isEnrolled a true
      setIsEnrolled(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log("ID:",id)
  },[])
  useEffect(() => {
    let isMounted = true; // Variable para verificar si el componente está montado

    const fetchCurso = async () => {
      try {
        const cursoResponse = await axios.post(
          "https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/cursos",
          {
            httpMethod: "GET",
            body: {
              tp: "curso",
              body: {
                id_curso: id,
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

        if (isMounted) {
          const cursoData = cursoResponse.data.body.curso[0];
          console.log("curso data:", cursoData);

          const curso = {
            id: cursoData.id_curso,
            name: cursoData.nombre_curso,
            precio_curso: cursoData.precio_curso,
            id_instructor: cursoData.id_instructor,
            description_curso: cursoData.descripcion_curso,
            subscriptionDate: "2022-06-01",
            activeUntil: "2022-07-31",
            imageUrl: "https://via.placeholder.com/50x50",
          };

          setCurseData(curso);
        }

        const modulosResponse = await axios.post(
          "https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/modulos",
          {
            httpMethod: "GET",
            body: {
              tp: "modulo",
              body: {
                id_curso: id,
              },
            },
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        console.log("Respuesta:",modulosResponse)

        if (isMounted) {
          const modulosData = modulosResponse.data.modulos;
          const modulos = [];

          for (let module of modulosData) {
            const newmodule = {
              id_modulo: module.id_modulo,
              nombre_modulo: module.nombre_modulo,
              description: module.descripcion_modulo,
              image: module.imagen_modulo,
              avance: "20%"
            };

            modulos.push(newmodule);
          }
          console.log("MODULOS:",modulos)
          setModuleData(modulos);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurso();

    // Función de limpieza para cancelar las solicitudes pendientes
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleModuleClick = (moduloId) => {
    localStorage.setItem("selected_modulo_id", moduloId);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarDoc />
      <main>
        <div className="container-image">
          <div className="cont-text">
            <p className='title-text text-1'>{curse_data.name}</p>
            <p className='title-text text-2'>Edisneth Salazar</p>
          </div>
          <img className="circle-img" src="https://source.unsplash.com/random/?Girl/" />
        </div>

        <div className='descripcion-curso'>{curse_data.description_curso}
         </div>

        <h1 className='text-3'>Módulos</h1>
        <div className="container-cards">
       
         {module_data.map((modulo) => (
            
            <Link
              to={`/private/modulo/${modulo.id_modulo}`}
              key={modulo.id_modulo}
              onClick={() => handleModuleClick(modulo.id_modulo)}
            >
              <CardModulo
                titulo={modulo.nombre_modulo}
                percentage={`${modulo.avance}%`}
                imagen="https://source.unsplash.com/random/?Computer/"
              />
            </Link>
          ))}
        </div>

        <div className='btn-cont-inscribe'>
          <Btn onClick={handleEnroll}>
            {isEnrolled ? "Ya estás inscrito en este curso" : "Inscribirse a este Curso"}
          </Btn>
        </div>

        <Divider variant="middle" />
        <h1 className='text-3'>Comentarios</h1>

        <div className='container-comentarios'>
          <div className='container-input'>
            <img className="circle-sm" src="https://source.unsplash.com/random/?Person/" />
            <div className='o-input'>
              <textarea style={{ width: "100%", height: "60%" }} placeholder="Agrega un comentario sobre el curso" />
              <div className='btn-cont-g'>
                <Btn onClick={() => { console.log("Publishing") }}>
                  Publicar
                </Btn>
              </div>
            </div>
          </div>

          <div className='container-list-comen'>
            <Divider variant="middle" />
            <Comentario
              userImg="https://source.unsplash.com/random/?Boy/"
              username="John Doe"
              commentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              time="6h"
            />
            <Divider variant="middle" />
            <Comentario
              userImg="https://source.unsplash.com/random/?Boy/"
              username="Jane Doe"
              commentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              time="20h"
            />
            <button className='custom-button disabled-button btn-2' disabled>Cargar 13 comentarios más</button>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
