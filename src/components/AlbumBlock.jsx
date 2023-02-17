import React from 'react';
import { NavLink } from 'react-router-dom';



function AlbumBlock({ title,num,id }) {
  
    return (
    <div className='block'>
      <p className='text'>{title}</p>
      <div className='box'>
        <p className='text'>{num}</p>
        <NavLink to={`/album/${id}`}>
            <button className='btn'>Посмотреть</button>
        </NavLink>
        
    </div>
      
    </div>
  );
}

export default AlbumBlock;
