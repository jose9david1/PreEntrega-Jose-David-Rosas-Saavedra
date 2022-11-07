import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menu-container'>
        <h1 className='titulo-tienda'>Bombastick</h1>
        <ul className='menu-items'>
            <li><a href='' className='menu-list' >Productos</a></li>
            <li><a href='' className='menu-list'>Lo Nuevo</a></li>
            <li><a href='' className='menu-list'>Contactanos</a></li>

        </ul>
<CartWidget/>
    </div>
  )
}

export default NavBar