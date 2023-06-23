import ImageWithText from '../../components/image'
import ImageContainer from '../../components/image_container'
import SliderComponent from '../../components/cards_container';
import SliderComponentvid from '../../components/cards_video';
import NavbarMui from '../../components/NavRsp/NavMui'
import SliderComponentmovil from '../../components/cardvidmovil';
import SliderComponentmv from '../../components/cards_containermv';
import '../../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import FormWithText from '../../components/form_text'
import Footer from '../../components/footer'
import Textvidmob from '../../components/textvidmob';
import './landing.css'
import React, { useState } from 'react';
import { useEffect } from 'react';
import MisionComponent from '../../components/gridtxt';
import Textvidinclud from 'components/textinclud';
import TextimgH from '../../components/howdoit2';
import TextimgH2 from '../../components/howdoit';
import TextimgH3 from '../../components/howdoit3';
import TextimgH4 from '../../components/howdoit4';
import '@fortawesome/fontawesome-free/css/all.css';
import { Grid } from '@mui/material';
import MyMapComponent from "../../components/mapa2"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Landing = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <Grid container spacing={2} alignItems={"center"}>
      <Grid item xs={12} md={2} >
        <li>
          <h1>hola</h1>
          <h1>hola</h1>
          <h1>hola</h1>
          <h1>hola</h1>
          <h1>hola</h1>
          <h1>hola</h1>
        </li>
      </Grid>
      <Grid item xs={12} md={5}>
        
          <MyMapComponent />
        
      </Grid>
      <Grid item xs={12} md={5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Landing;






