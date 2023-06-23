import { useState, useEffect } from 'react';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  CardActionArea  from '@mui/material/CardActionArea';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";
import poppins from '../../assets/fonts/Poppins/Poppins-Bold.ttf';
import './academia-docentes.css';
import NavbarDoc from 'components/NavRsp/NavDoc';
import { fontSize } from '@mui/system';



const theme = createTheme({
    typography: {
      fontFamily: poppins,

    },
  });

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" /* href="https://mui.com/" */>
                Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3];



export default function AcademiaDocentes() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [value, setValue] = useState('one');
    const [user_data, setUserData] = useState(JSON.parse(window.localStorage.getItem("user_data")));
    const [curse_data, setCurseData] = useState([]);


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const goProfile = () => {
        /** */
    }

    useEffect(() => {
    
    
    
        // Agregar lógica de inicio de sesión aquí
        let body = {
          
            httpMethod: "GET",
            body: { 
                "tp": "curso",
                "body": {
                        "limite": 300,
                        "offset": 1
                    }  
            },
            "headers": {
              "Authorization": localStorage.getItem("token")
            }
          }
          
    ;
        axios
          .post("https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/cursos", body, {
            headers: {
              
              
            },
          })
        
        
         
          .then(response => {
           console.log( "Respuestaa",response);
           console.log( "cursos", response.data.cursos );
           
           const cursos = []
    
           for (let curse of response.data.cursos){
            console.log(curse);
            const newcurse ={
              id: curse.id_curso,
              name: curse.nombre_curso,
              precio_curso: curse.precio_curso,
              subscriptionDate: "2022-06-01",
              activeUntil: "2022-07-31",
              imageUrl: "https://via.placeholder.com/50x50",
            }
            cursos.push(newcurse);
           }
           setCurseData(cursos);
        
          })
            .catch(err => {
              console.error(err);
            });
        
    
    
    
      },[]);
      const handleCourseClick = (cursoId) => {
        localStorage.setItem("selected_curso_id", cursoId);
      };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <NavbarDoc/>
               
                <Box position="relative" className='diag-cont'>

                    {/* <CameraIcon sx={{ mr: 2 }} /> */}
                    <Typography className="h6-1" color="inherit" noWrap>
                        Ya puedes acceder a tu diagnóstico
                    </Typography>

                </Box>
                {/* <Box className='options-cont'>
                    <Button color="inherit" sx={{ px: 3 }}><p className='text-options'>Padres</p></Button>
                    <Button color="inherit" sx={{ px: 3 }}><p className='text-options text-active'>Academia de docentes</p></Button>
                    <Button color="inherit" sx={{ px: 3 }}><p className='text-options'>Estudiantes</p></Button>
                </Box> */}

                <Box className='options-cont'>
                    <Tabs
                    value={value} 
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Padres" textColor="inherit" className='text-options'/>
                        <Tab value="two" label="Academia de docentes" />
                        <Tab value="three" label="Estudiantes" />
                    </Tabs>
                </Box>

                


                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 4,
                    }}
                >
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            className='h2-1'
                            align="center"
                            color="text.primary"
                            gutterBottom
                            fontSize={'2rem'}
                        >
                           {"Hola "+ user_data.nombre}
                        </Typography>
                        <Typography className='p-11' variant="h5" align="center" color="text.secondary" paragraph fontSize={'1.2rem'}>
                            Aquí encontrarás herramientas que te ayudarán a convertirte en el líder de tus estudiantes
                        </Typography>
                    </Container>

                    <Box
                            /* sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center" */
                            className = "o-stack"
                            sx={{ pt: 4 }}
                        >
                            <Box className="info-container-box">
                                <Box className="info-circle">
                                    <h1 className='info-text text-g'>
                                        50
                                    </h1>
                                </Box>
                                <Box>
                                    <h1 className='info-text'>
                                        Plan de estudios
                                    </h1>
                                    <h1 className='info-text o-regular o-sm-t'>
                                        % completado
                                    </h1>
                                </Box>
                            </Box>

                            
                            <Box className="info-container-box info-v2">
                                <Box className="info-circle">
                                    <h1 className='info-text text-g t-g2'>
                                        2
                                    </h1>
                                </Box>
                                <Box>
                                    <h1 className='info-text'>
                                        Meta diaria
                                    </h1>
                                    <h1 className='info-text o-regular o-sm-t'>
                                        Horas
                                    </h1>
                                </Box>
                            </Box>

                            <Box className="info-container-box">
                                <Box className="info-circle">
                                    <h1 className='info-text text-g'>
                                        20
                                    </h1>
                                </Box>
                                <Box>
                                    <h1 className='info-text'>
                                        Mi recorrido
                                    </h1>
                                    <h1 className='info-text o-regular o-sm-t'>
                                        Clases vistas
                                    </h1>
                                </Box>
                            </Box>

                            <Box className="info-container-box info-v2">
                                <Box className="info-circle">
                                    <h1 className='info-text text-g t-g2'>
                                        180
                                    </h1>
                                </Box>
                                <Box>
                                    <h1 className='info-text'>
                                        Puntos
                                    </h1>
                                    <h1 className='info-text o-regular o-sm-t'>
                                        
                                    </h1>
                                </Box>
                            </Box>
                            {/* <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button> */}
                    </Box>
                </Box>
                
                <Divider variant="middle" />

                <Typography align='left' className='tuscursos'>
                    Tus Cursos
                </Typography>
                <Container sx={{ py: 8 ,/*  maxWidth:"90%" */}} /* maxWidth="md" */>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>

                                {/* <Button sx={{ maxWidth: 340 }} className='button-card'>
                                    <img src="https://source.unsplash.com/random"/>

                                </Button> */}
                                
                                <Card sx={{ maxWidth: 345, borderRadius:'20px' }}>
                                    <CardActionArea >
                                        <CardMedia
                                            sx={{ height: 225 }}
                                            image="https://source.unsplash.com/random"
                                            title="green iguana"
                                        />
                                        <CardContent className='bottom-card'>
                                            <Typography variant="body2" color="text.secondary" sx={{color:'snow', /* fontSize:'1rem' */}}>
                                                Nombre curso
                                            </Typography>
                                            <Typography variant="h5" component="div" sx={{color:'snow', fontSize:'.75rem'}}>
                                                4000 alumnos
                                            </Typography>
                                            
                                        </CardContent>
                                    </CardActionArea>
                                   
                                    
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    
                </Container>

                

                <Divider variant="middle" />

                <Typography align='left' className='tuscursos'>
                    Todos los Cursos
                </Typography>


                <Container sx={{ py: 8 ,/*  maxWidth:"90%" */}} /* maxWidth="md" */>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {curse_data.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                


                                {/* <Button sx={{ maxWidth: 340 }} className='button-card'>
                                    <img src="https://source.unsplash.com/random"/>

                                </Button> */}
                                
                                <Card sx={{ maxWidth: 345, borderRadius:'20px' }}>
                                    <Link
                                        to={`/private/curso/${card.id}`}
                                        key={card.id}
                                        onClick={() => handleCourseClick(card.id)}
                                    >  
                                    <CardActionArea >
                                        <CardMedia
                                            sx={{ height: 225 }}
                                            image="https://source.unsplash.com/random"
                                            title="green iguana"
                                        />
                                        <CardContent className='bottom-card'>
                                            <Typography className="h5-1" variant="body2" color="text.secondary" sx={{color:'snow', /* fontSize:'1rem' */}}>
                                                {card.name}
                                            </Typography>
                                            <Typography className="h5-1" variant="h5" component="div" sx={{color:'snow', fontSize:'.75rem'}}>
                                                4000 alumnos
                                            </Typography>
                                            
                                        </CardContent>
                                        
                                    </CardActionArea>
                                   
                                    </Link>
                                </Card>
                                
                            </Grid>
                        ))}
                    </Grid>
                    
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: '#943692', p: 4, color: 'snow' }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}


            {/* Float button */}
            <a class="float">
                <i class=""></i>
            </a>
        </ThemeProvider>
    );
}


{/*<Grid item key={card} xs={12} sm={6} md={4}>
                                
<Card sx={{ maxWidth: 345 }}>
    <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title="green iguana"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
    </CardActions>
</Card>
</Grid>*/}