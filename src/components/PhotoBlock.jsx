import React from 'react'

function PhotoBlock({ url, setFavorites, favorites, id, item, isFavors}) {

  const addToFav = () => {
    if (favorites.find(x => x.id === item.id) === undefined) {
        setFavorites([...favorites, item])
    }
  }

  return (
    <div>
        <img className ="img" src={url} alt="ph"/>
        {!isFavors && <button className = "btn" onClick={() => {addToFav()}}>Добавить в избранное ❤️</button>}
    </div>
  )
}

export default PhotoBlock