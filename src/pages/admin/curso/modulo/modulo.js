import './modulo.css'
import NavbarAdmin from '../../navbadmin'
import addcourse from '../../../../assets/images/agregar_curse.png'
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

const modules = [
  {
    id: 1,
    name: "Modulo 1",
    image:"https://source.unsplash.com/random/?Girl/",
    description: "Aprende matemáticas desde cero",
  },
  {
    id: 2,
    name: "Modulo 2",
    image:"https://source.unsplash.com/random/?Girl/",
    description: "Aprende a programar en diferentes lenguajes",
  },
  {
    id: 3,
    name: "Modulo 3",
    image:"https://source.unsplash.com/random/?Girl/",
    description: "Aprende a diseñar gráficos y logos",
  },
 
];

const ModulesView = () => {
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
    <h1 className='title-crear'>
          Modulos
        </h1>
    <Box className="courses-container" sx={{ display: "flex", alignItems: "center", mb: 2, mt: "100", ml:"50"}}>
      <Grid container spacing={2}>
        <Grid><Box>
            <Link to="/private/admin/crear_modulo">
            <Card className="tittle-add">
            <CardHeader title="Agregar un nuevo Modulo" />
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
        {modules.map((module) => (
          <Grid key={module.id} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <CardMedia
                    component="img"
                    height="200"
                    image={module.image}
                    alt="imagen del curso"
                />
                <Typography gutterBottom variant="h5" component="div">
                  {module.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {module.description}
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

export default ModulesView;