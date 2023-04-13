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
        <h2>Nike Epic React Flyknit 2</h2>
        <div className='image-description'>
          <div className='image-container'>
            <img src={reactFlyknit} alt='' />
            <div className='discover'>Discover</div>
            <div className='running-category'>Running Collection</div>
          </div>
          <p>
            Introducing the <strong>Nike Epic React Flyknit 2</strong> - the
            ultimate running shoe that will take your training to the next
            level. With its innovative design and cutting-edge technologies, the
            Epic React Flyknit 2 is the perfect shoe for runners who demand
            performance and style.
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
