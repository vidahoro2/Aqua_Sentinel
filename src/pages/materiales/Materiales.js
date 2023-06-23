import * as React from 'react';
import { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavbarDoc from '../../components/NavRsp/NavDoc';
import Btn from '../../components/Buttons/CustomBtn';
import InputAdornment from '@mui/material/InputAdornment';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import './Materiales.css'
import { Grid, IconButton, TextField } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import CardMaterial from '../../components/Card_Material/CardMaterial';

import PdfLogo from "../../assets/images/pdf.png";

const theme = createTheme();

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#8C8C8C',
        },
        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
});

export default function Materiales() {

    useEffect(() => {
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavbarDoc />
            <main>
                <div className="container-search">
                    <div className="search-field">
                        <CssTextField size="small" fullWidth placeholder="Busca aquí las herramientas para tu crecimiento" variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                style: {
                                    borderRadius: "1rem",
                                    borderBlockColor: "#8C8C8C"
                                }
                            }} />
                    </div>
                    <div className="search-btn">
                        <Button variant="contained">Buscar</Button>
                    </div>
                    <div className="filter">
                        <IconButton variant="outlined"><FilterListIcon /></IconButton>
                    </div>
                </div>

                <h1 className='text-3'>Cursos cuarto</h1>
                <div className="container-cards">
                    <Grid container spacing={12}>
                        <Grid item sm={4}>
                            <Link to="/materiales"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/materiales"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/materiales"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/materiales"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/materiales"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/materiales"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>

                    </Grid>

                </div>

                <h1 className='text-3'>Cursos quinto</h1>
                <div className="container-cards">
                    <Grid container spacing={12}>
                        <Grid item sm={4}>
                            <Link to="/modulo"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/modulo"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/modulo"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/modulo"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/modulo"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>
                        <Grid item sm={4}>
                            <Link to="/modulo"><CardMaterial titulo="Guía 10."
                                descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                iconDownload="30K" iconComments="100" image={PdfLogo} /></Link>
                        </Grid>

                    </Grid>

                </div>
            </main>

        </ThemeProvider>
    );
}
