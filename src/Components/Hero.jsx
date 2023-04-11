import React from 'react'
import nikeShoes from '../Assets/landing-page-image..png'

const Hero = () => {
  return (
    <div className='my-container'>
      <div className='hero'>
        <div className='text-section'>
          <div className='text'>
            <div>
              <h1>
                <span>NIKE EPIC</span> <br /> SHOES STORE
              </h1>
              <div className='circles-div'>
                <div className='blue-circle'></div>
                <div className='blue-circle'></div>
                <div className='blue-circle'></div>
              </div>
            </div>
            <p>
              Welcome to our website, the ultimate destination for Nike shoe
              lovers! We offer a wide selection of high-quality Nike shoes,
              designed to meet your unique style and comfort preferences.
            </p>
            <div className='blue-circle'></div>
            <div className='blue-circle'></div>
            <div className='blue-circle'></div>
          </div>
        </div>
        <div className='image-section'>
          <img src={nikeShoes} alt='' />
          <div className='red-circle'></div>
          <div className='yellow-circle'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
