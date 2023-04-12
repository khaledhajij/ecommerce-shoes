import React from 'react'
import nikeShoes from '../Assets/landing-page-image..png'

const Hero = () => {
  const dots = Array.from({ length: 3 }).map(e => (
    <div className='blue-circle'></div>
  ))
  return (
    <div className='hero'>
      <div className='my-container'>
        <div className='text-section'>
          <div className='text'>
            <div className='title-circles'>
              <h1>
                <span>NIKE</span> <br /> SHOES STORE
              </h1>
              <div className='circles-div'>{dots}</div>
            </div>
            <p>
              Welcome to our website, the ultimate destination for Nike shoe
              lovers! We offer a wide selection of high-quality Nike shoes,
              designed to meet your unique style and comfort preferences.
            </p>
            <div className='buy-button'>
              <div className='circles'>{dots}</div>
              <button className='btn btn-primary btn-buy'>SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className='image-section'>
          <img src={nikeShoes} alt='' />
          <div className='red-circle'></div>
          <div className='yellow-circle'></div>
        </div>
        <p className='qoute'>
          "I've failed over and over and over again in my life and that is why I
          succeed." <br />- Michael Jordan
        </p>
      </div>
    </div>
  )
}

export default Hero
