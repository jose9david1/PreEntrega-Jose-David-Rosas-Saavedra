import React from 'react'
import logo from '../../assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu_logo'>
        <img className='menu_img' src={logo} alt="cart widget"/>

    </div>
    
  )
}

export default CartWidget