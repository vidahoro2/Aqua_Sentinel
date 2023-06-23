import { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import MessageIcon from '@mui/icons-material/Message';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Btn from '../../components/Buttons/CustomBtn';
import './CardMaterial.css'


export default function CardMaterial(props) {

    return (
        <div className="card-modulo">
            <div className="img-container">
                <img src={props.image} alt="Imagen Material" />
            </div>
            <div className="info-container">
                <h2 id='guide-title'>{props.titulo}</h2>
                <p className="card-prop">{props.descripcion}</p>
                <div className="icons">
                    <button id="download" className='material-btn'>30k <CloudDownloadIcon /></button>
                    <button id="comment" className='material-btn'>100 <MessageIcon /></button>
                </div>
            </div>
        </div>
    );
}