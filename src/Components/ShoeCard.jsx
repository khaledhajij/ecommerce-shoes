import React, { useState } from 'react'
import { FaRegStar, FaShoppingCart } from 'react-icons/fa'

const ShoeCard = props => {
  return (
    <div className='shoe-card'>
      <div className='image-container'>
        <img src={props.images[0]} alt={props.name} />
      </div>
      <div className='info-container'>
        <div className='card-text'>
          <h3>{props.name.toUpperCase()}</h3>
          <p className='category'>{props.category}</p>
          <p className='colors-available'>1 Color</p>
        </div>
        <div className='buy-price'>
          <p className='price'>{props.salePrice * 0.012} $</p>
          <button className='btn btn-primary'>
            <FaShoppingCart />
          </button>
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
