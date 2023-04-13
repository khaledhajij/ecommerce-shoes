import React from 'react'
import { useSelector } from 'react-redux'
import { shoesSelector } from '../app/shoesSlice'
import ShoeCard from './ShoeCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const Top = () => {
  const topShoes = useSelector(shoesSelector).filter(shoe => shoe.rating >= 4.5).slice(0,17)
  console.log(topShoes)
  const topShoesRen = topShoes.map(shoe => (
    <SwiperSlide>
      <ShoeCard {...shoe} />
    </SwiperSlide>
  ))
  return (
    <div className='top'>
      <div className='my-container'>
        <p className='title'>Leading Shoes</p>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          cssMode={true}
          slidesPerView={3}
          slidesPerGroup={3}
          navigation
          pagination={{ clickable: true }}
        >
          {topShoesRen}
          ...
        </Swiper>
      </div>
    </div>
  )
}

export default Top
