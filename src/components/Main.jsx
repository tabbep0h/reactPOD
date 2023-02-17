import React from 'react'
import AlbumBlock from './AlbumBlock'

function Main({ albums }) {
 
  return (
    
    <div>

      <div className='grid'>
      {
        albums.map((item,index) => (
          <AlbumBlock key = {`${item.title}_${index}`} id = {item.id} title = {item.title} num = {item.id} />
        ))
      }
      </div>
    </div>
  )
}

export default Main