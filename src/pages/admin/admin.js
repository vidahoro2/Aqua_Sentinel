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

const schools = [
  {
    id: 1,
    name: "Colegio A",
    students: 100,
    subscriptionDate: "2022-01-01",
    activeUntil: "2022-12-31",
    imageUrl: "https://via.placeholder.com/50x50",
  },
  {
    id: 2,
    name: "Colegio B",
    students: 150,
    subscriptionDate: "2022-02-01",
    activeUntil: "2022-11-30",
    imageUrl: "https://via.placeholder.com/50x50",
  },
  {
    id: 3,
    name: "Colegio C",
    students: 200,
    subscriptionDate: "2022-03-01",
    activeUntil: "2022-10-31",
    imageUrl: "https://via.placeholder.com/50x50",
  },
  {
    id: 4,
    name: "Colegio D",
    students: 250,
    subscriptionDate: "2022-04-01",
    activeUntil: "2022-09-30",
    imageUrl: "https://via.placeholder.com/50x50",
  },
  {
    id: 5,
    name: "Colegio E",
    students: 300,
    subscriptionDate: "2022-05-01",
    activeUntil: "2022-08-31",
    imageUrl: "https://via.placeholder.com/50x50",
  },
  {
    id: 6,
    name: "Colegio F",
    students: 350,
    subscriptionDate: "2022-06-01",
    activeUntil: "2022-07-31",
    imageUrl: "https://via.placeholder.com/50x50",
  },
];
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

export default function SchoolsPage() {

  
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [listUsers, setListUsers] = useState([]);

  const filteredSchools = listUsers.filter((school) =>
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
          tp: "usuario",
          body: {
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
      .post("https://84t1smcfke.execute-api.us-east-1.amazonaws.com/v1/usuarios", body, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          
        },
      })
    
    
     
      .then(response => {
       console.log( "Respuestaa",response);
       console.log( "usuarios", response.data.usuarios );
       const usuarios = []

       for (let user of response.data.usuarios){
        console.log(user);
        const newuser ={
          id: user.id,
          name: user.nombres_usuario +" "+ user.apellidos_usuario,
          correo: user.correo_usuario,
          subscriptionDate: "2022-06-01",
          activeUntil: "2022-07-31",
          imageUrl: "https://via.placeholder.com/50x50",
        }
        usuarios.push(newuser);
       }
       setListUsers(usuarios);
    
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
                <h1 className="colegios-title">Usuarios</h1>
                <p className="colegios-subtitle" style={{ whiteSpace: "nowrap" }}>Descarga aqui el informe de estadisticas de los Usuarios</p>
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
                {paginatedSchools.map((users) => (
                  <ListItem key={users.id}>
                    <ListItemAvatar>
                      <Avatar alt={users.name} src={users.imageUrl} />
                    </ListItemAvatar>
                    <ListItemText sx={{ textAlign: "center", alignItems: "center" }} secondary={users.name} />
                    <ListItemText secondary={users.correo} />
                    <ListItemText secondary={`activo hasta:${users.activeUntil}`} />
                    <ListItemAvatar>
                      <Avatar alt={users.name} src={checkicon} />
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
