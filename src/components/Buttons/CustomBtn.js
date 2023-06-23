import { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';



export default function Btn(props) {

    return (
        <button className="custom-button" onClick={props.onClick}>
            {props.children}
        </button>
    );
}