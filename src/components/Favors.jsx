import React from 'react';
import PhotoBlock from './PhotoBlock';

function Favors({ favors,login }) {

  console.log(favors)

  return (
    <div>
      { login ?
        <p className='grid-img'>
          {
          favors.map((item) => (
            <PhotoBlock isFavors = {true} url = {item.url} />
          ))
          }
        </p> : <p className='grid-img'>Пожалуйста авторизуйстесь.</p>
}
    </div>
      );
}

export default Favors;
