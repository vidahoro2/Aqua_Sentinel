import './cursos.css'
import NavbarAdmin from '../navbadmin'
import addcourse from '../../../assets/images/agregar_curse.png'
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';

import React, { useState } from "react";
import {
    Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Dialog,
  IconButton,
  CardActions,
  CardHeader,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const courses = [
  {
    id: 1,
    name: "Curso de Matemáticas",
    image:"https://source.unsplash.com/random/?Girl/",
    description: "Aprende matemáticas desde cero",
  },
  {
    id: 2,
    name: "Curso de Programación",
    image:"https://source.unsplash.com/random/?Girl/",
    description: "Aprende a programar en diferentes lenguajes",
  },
  {
    id: 3,
    name: "Curso de Diseño Gráfico",
    image:"https://source.unsplash.com/random/?Girl/",
    description: "Aprende a diseñar gráficos y logos",
  },
  {
    id: 4,
    name: "Curso de Diseño Visual",
    image:"https://source.unsplash.com/random/?Girl/",
    description: "Aprende a diseñar gráficos y logos",
  },
  {
    id: 5,
    name: "Curso de Game Desing",
    image:"https://source.unsplash.com/random/?Girl/",
    description: "Aprende a diseñar juegos",
  }
];

const CoursesView = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCourse = () => {
    // Handle adding a new course to the list
  };

  return (
    <>
    <Box>
        <NavbarAdmin/>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: "70", ml:"50" , marginBottom:"-70"}}>
    <h1 className='title-curso'>
         Cursos
    </h1>
    </Box>
    <Box className="courses-container" sx={{ display: "flex", alignItems: "center", mb: 2, mt: "100", ml:"50"}}>
    
      <Grid container spacing={2}>
      
      
        <Grid><Box>
            <Link to="/private/admin/crear_curso">
            <Card className="tittle-add">
            <CardHeader title="Agregar un nuevo curso" />
              <CardContent>
                <CardMedia
                    component="img"
                    height="200"
                    image={addcourse}
                    alt="imagen del curso">
                </CardMedia>
              </CardContent>
            </Card>
            </Link>
          </Box>
        </Grid>
        {courses.map((course) => (
          <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <CardMedia
                    component="img"
                    height="200"
                    image={course.image}
                    alt="imagen del curso"
                />
                <Typography gutterBottom variant="h5" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    </>
  );
};

export default CoursesView;