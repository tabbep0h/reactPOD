import React from 'react'
import PhotoBlock from './PhotoBlock'


function PhotoPage({ photos,setFavorites,favorites,login }) {

  return (

    <div>
      { login ?
        <div className='grid-img'>
        {
          photos.map((item) => (
            <div>
              <PhotoBlock key = {`${item.id}`} item = {item} favorites = {favorites} url = {item.url} setFavorites={setFavorites}/>
            </div>
          )
          )
        }
        </div> : <p className='grid-img'>Пожалуйста авторизуйстесь.</p>
     }
    </div>
  )
}

export default PhotoPage