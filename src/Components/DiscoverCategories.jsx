import React from 'react'
import reactFlyknit from '../Assets/react-flyknit.png'

const DiscoverCategories = () => {
  const dots = Array.from({ length: 30 }).map((e, index) => {
    return (
      <div className='circles' id='Categories'>
        {index % 2 ? (
          <>
            <div className='red-circle'></div>
            <div className='blue-circle'></div>
          </>
        ) : (
          <>
            <div className='blue-circle'></div>
            <div className='red-circle'></div>
          </>
        )}
      </div>
    )
  })
  return (
    <div className='discover-categories'>
      <div className='my-container'>
        <h2>Discover Our Categories</h2>
        <div className='image-description'>
          <div className='image-container'>
            <img src={reactFlyknit} alt='' />
            <div className='discover'>Discover</div>
            <div className='running-category'>Running Collection</div>
          </div>
          <p>
            Shop the latest collection of <br />
            <strong>Nike shoes</strong>
            <br /> for every occasion. Whether you're hitting the gym, going for
            a run, or just need a stylish pair of sneakers to complete your
            outfit, we've got you covered. Browse our selection of Nike shoes by
            category to find the perfect pair for you
          </p>
        </div>
        <div className='circles-container'>{dots}</div>
        <p className='qoute'>
          "The will to win is not nearly as important as the will to prepare to
          win." <br />- Bobby Knight
        </p>
      </div>
    </div>
  )
}

export default DiscoverCategories
