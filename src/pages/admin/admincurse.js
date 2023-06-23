import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Pagination,
} from "@mui/material";
import deleteicon from "../../assets/icons/delete.png"
import checkicon from "../../assets/icons/check.png"
import NavbarAdmin from "./navbadmin";
import './admin.css'

const users = [
  {
    id: "1df42b30-9c08-4f53-ba0d-b4efbf4c16af",
    name: "Luis Santiago Sanchez",
    institucion: "Melvin Jones",
    correo: "lssnachez@gmail.com",
    activeUntil: "si",
    imageUrl: "https://via.placeholder.com/50x50",
  }
];

export default function CoursePage() {

  
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [listCourses, setListCourses] = useState([]);

  const filteredSchools = listCourses.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [page, setPage] = useState(1);
  

  const pageSize = 1000; // número de elementos por página
  const pageCount = Math.ceil(filteredSchools.length / pageSize); // número total de páginas
  
  
  const startIndex = (page - 1) * pageSize; // índice de inicio de la página actual
  const endIndex = startIndex + pageSize; // índice de finalización de la página actual
  const paginatedSchools = filteredSchools.slice(startIndex, endIndex); // escuelas para mostrar en la página actual
  

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  



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
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          
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
       setListCourses(cursos);
    
      })
        .catch(err => {
          console.error(err);
        });
    



  },[]);

  return (
    <Box>
      <Box sx={{ m: 3 }}>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <NavbarAdmin />  
        </Box>
          <Box  sx={{ display: "flex", alignItems: "center", mb: 2, mt: "100" }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                <h1 className="colegios-title">Cursos</h1>
                <p className="colegios-subtitle" style={{ whiteSpace: "nowrap" }}>Descarga aqui el informe de estadisticas de los Cursos</p>
              </Typography>
              <Button className="searchButton" variant="contained" sx={{ mr: "2", ml: "300px" }}>
                <p className="p-button">Buscar</p>
              </Button>
              <TextField className='search-btn-admin'
                label="Busca aquí las herramientas para tu crecimiento"
                value={searchTerm}
                focused={false}
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: false }}  
                onChange={handleSearchChange}
                sx={{ ml:"40px"}}
              />
            </Box>
          <Box sx={{ width: "100%", bgcolor: "background.paper", mt: 2 }}>
              <List>
                {paginatedSchools.map((curse) => (
                  <ListItem key={curse.id_curso}>
                    <ListItemAvatar>
                      <Avatar alt={curse.name} src={users.imageUrl} />
                    </ListItemAvatar>
                    <ListItemText sx={{ textAlign: "center", alignItems: "center" }} secondary={curse.name} />
                    <ListItemText secondary={curse.precio_curso} />
                    <ListItemText secondary={`activo hasta:${curse.activeUntil}`} />
                    <ListItemAvatar>
                      <Avatar alt={curse.name} src={checkicon} />
                    </ListItemAvatar>
                    <Button variant="text" sx={{ mr: 2, textDecoration: "underline" }}>
                      Descargar informe
                    </Button>
                    <IconButton sx={{ width: "10%" }}>
                      <img src={deleteicon} alt="icono de borrar" />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
          </Box>     
    </Box>
</Box>
  );
  
}