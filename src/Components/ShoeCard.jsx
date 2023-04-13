import React from 'react'
import {
  FaRegStar,
  FaShoppingCart,
  FaStar,
  FaStarHalf,
  FaStarHalfAlt
} from 'react-icons/fa'

function StarRating ({ rating }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={i} />
      ))}
      {/* Half star */}
      {hasHalfStar && <FaStarHalf />}
    </div>
  )
}

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
          <StarRating rating={props.rating} />
        </div>
      </div>
    </div>
  )
}

export default ShoeCard
