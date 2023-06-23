import React from 'react';
import './Comentario.css'

const Comentario = ({ userImg, username, commentText, time }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin:'1rem 0rem' }}>
      <img
        src={userImg}
        alt="User profile"
        className='img-comment'
      />
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className='text-username'>{username}</span>
        </div>
        <div className='text-comment'>{commentText}</div>
        <div className='likes-cont'>
          <button>Me gusta</button>
          <button>Comentar</button>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Comentario;