import { useState } from "react";
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
];

export default function SchoolsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Colegios
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          label="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" sx={{ mr: 2 }}>
          Buscar
        </Button>
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {filteredSchools.map((school) => (
          <ListItem key={school.id}>
            <ListItemAvatar>
              <Avatar alt={school.name} src={school.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={school.name}
              secondary={`${school.students} estudiantes | ${school.activeUntil} activo hasta`}
            />
            <Button variant="outlined" sx={{ mr: 2 }}>
              Descargar informe
            </Button>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
