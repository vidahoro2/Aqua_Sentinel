import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faShieldAlt, faCookie, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import logo1 from  "../assets/img/ponits.png"
import './footer.css'


const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#943692', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <img src={logo1} alt="Logo" style={{ width: '15%', marginRight: '0.1rem' }} />
        <div style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
          <p className='parrfo'>Política de entrega y devolución</p>
        </div>
        <div style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
          <p className='parrfo'>Términos y condiciones</p>
        </div>
        <div style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
          <p className='parrfo'>Cookies</p>
        </div>
        <div style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
          <p className='parrfo2'>Política de Cancelación y Reembolso</p>
        </div>
      </div>
      <div style={{ backgroundColor: '#943692', color: '#fff', textAlign: 'center', padding: '1rem' }}>
        <p className='parrfo'>© 2022 Edisneth Salazar. Todos los derechos reservados.</p>
      </div>
    </footer>
    
  );
};

export default Footer;






