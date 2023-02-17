import React from 'react'
import { useParams } from 'react-router-dom'
import PhotoBlock from './PhotoBlock'


function AlbumPage({ photos, favorites, setFavorites,login }) {

  const params = useParams()
  const id = params.id

  const photosArr = photos.filter((item) => item.albumId == id)

  return (
    <div>
      { login ? 
        <div className='grid-img'>
            {
              photosArr.map((item) => (
                  <PhotoBlock item = {item} favorites = {favorites} setFavorites={setFavorites}  url = {item.url} key = {item.id}/>
              ))
            }
        </div> : <div className='grid-img'>Пожалуйста авторизуйстесь</div>
      }
    </div>
  )
}

export default AlbumPage