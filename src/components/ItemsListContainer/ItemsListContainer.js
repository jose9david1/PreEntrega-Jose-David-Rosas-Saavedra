import React from 'react'
import './ItemsListContainer.css'

const ItemsListContainer = (props) => {
  return (
    <div className='mensaje_container'>
        <h2 className='mensaje'>{props.name} </h2>

    </div>    
    
  )
}

export default ItemsListContainer