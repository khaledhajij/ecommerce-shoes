import React, { useState } from 'react'
import { FaRegStar } from 'react-icons/fa'

const ShoeCard = props => {
  return (
    <div className='shoe-card'>
      <div className='image-container'>
        <img src={props.images[0]} alt={props.name} />
      </div>
      <div className='info-container'>
        <div className='name-price'>
          <h3>{props.name.toUpperCase()}</h3>
          <div class='price'>Rs. {props.salePrice}</div>
        </div>
        <div class='rating'>
          <i class='fas fa-star'></i>
          <span>
            {Array.from({ length: props.rating }).map((_, i) => (
              <FaRegStar key={i} />
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ShoeCard
