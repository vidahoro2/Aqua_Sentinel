import * as React from 'react';
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(2),
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  searchField: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
}));

function SchoolList() {
  const classes = useStyles();

  // Dummy data for the list
  const schools = [
    {
      id: 1,
      name: 'Colegio 1',
      students: 200,
      subscriptionActiveUntil: '10/10/2023',
      image: 'https://source.unsplash.com/100x100/?school',
    },
    {
      id: 2,
      name: 'Colegio 2',
      students: 100,
      subscriptionActiveUntil: '05/01/2022',
      image: 'https://source.unsplash.com/100x100/?school',
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Colegios
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>
        Descarga aquí el informe de estadísticas de los colegios
      </Typography>
      <div className={classes.searchContainer}>
        <TextField label="Buscar" className={classes.searchField} />
        <Button variant="contained" color="primary">
          Buscar
        </Button>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Descargar informe
      </Button>
      <List>
        {schools.map((school) => (
          <ListItem key={school.id} className={classes.listItem}>
            <ListItemAvatar className={classes.listItemAvatar}>
              <Avatar src={school.image} />
            </ListItemAvatar>
            <ListItemText
              primary={school.name}
              secondary={`Estudiantes: ${school.students} - Suscripción activa hasta: ${school.subscriptionActiveUntil}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                {/* Icono de descargar informe */}
              </IconButton>
              <IconButton edge="end">
                {/* Icono de borrar */}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default SchoolList;
