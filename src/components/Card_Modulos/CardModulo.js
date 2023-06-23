import { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import './CardModulo.css'


export default function CardModulo(props) {

    return (
        <div className="card-modulo">
            <img src={props.imagen} alt="Imagen Módulo" />
            <h2>{props.titulo}</h2>

            <div className="o-progress-bar" data-value={props.percentage}>
                <div style={{ width: props.percentage }}>{props.percentage}</div>
            </div>
        </div>
    );
}