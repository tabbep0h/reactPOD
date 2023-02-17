import React from 'react'
import { NavLink } from 'react-router-dom'


function Header({ len,login }) {
  return (
    <div className='header'>
        <p className='login' style={login ? {color:"green"} : {color:"red"}}>{login ? "АВТОРИЗОВАН" : "НЕАВТОРИЗОВАН"}</p>   
        <NavLink to="/albums">
            <p className='titleBTN'>Альбомы </p>
        </NavLink>
        { login ? <NavLink to="/photos">
            <p className='titleBTN'> Фото</p>
        </NavLink> : ""}
        <NavLink to="/login">
            <p className='titleBTN'> Логин</p>
        </NavLink>
        <NavLink to="/reg">
            <p className='titleBTN'> Регистрация</p>
        </NavLink>
        { login ? <NavLink to="/favorites">
            <p className='titleBTN counted'>Избранное
            {len ? <p className='count tilt-shaking'> | {len}</p> : ""}
            </p>
        </NavLink> : "" }
    </div>
  )
}

export default Header