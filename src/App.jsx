import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { Main,PhotoPage,Login,Reg } from './components';
import AlbumPage from './components/AlbumPage';
import Favors from './components/Favors';
import Header from './components/Header';
import "./style.css"


function App() {

  const [ albums, setAlbums ] = React.useState([])
  const [ photos, setPhotos ] = React.useState([]) 
  const [ favorites, setFavorites ] = React.useState([])
  
  const [login, setLogin] = React.useState(false);

  const [ account, setAccount ] = React.useState([
    { id: uuid(), name: 'admin', password: 'admin' },
    { id: uuid(), name: 'zekrin', password: '123' },
  ]);

  const params = useParams();
  const id = params.id

  React.useEffect(() => {
    fetchAlbums();
    fetchPhotos();
  }, []);

  const fetchAlbums = async () => {
    await fetch('https://jsonplaceholder.typicode.com/albums?_limit=40')
      .then((res) => res.json())
      .then((album) => setAlbums(album))
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPhotos = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((photo) => setPhotos(photo))
      .catch((err) => {
        console.log(err);
      });
  };

  let len = favorites.length
  if (len == 0 ){
    len = ""
  }

  console.log(login)

 return (
    <Router>
      <Header len={len} login={login}></Header>
      <Routes>
        <Route path="/reg" element={<Reg  
                propName={''}
                propPassword={''}
                propEmail={''}
                account={account}
                setAccount={setAccount}
                />}>
        </Route>
        <Route path="/favorites" element={<Favors login={login} favors={favorites} />}></Route>
        <Route path="/login" element={<Login setLogin={setLogin} account={account} />}></Route>
        <Route path="/" element={<Main albums={albums} />}></Route>
        <Route path="/albums" element={<Main albums={albums} />}></Route>
        <Route path="/album/:id" element={<AlbumPage login={login} albums={albums} favorites={favorites} setFavorites={setFavorites} photos = {photos} params = {params}/>}></Route>
        <Route path="/photos" element={<PhotoPage login={login} photos={photos} favorites = {favorites} setFavorites = {setFavorites} />}></Route>
        <Route path="*" element={<p className='grid-img'>Такого пути не существует,проверьте правильность маршрута.</p>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
