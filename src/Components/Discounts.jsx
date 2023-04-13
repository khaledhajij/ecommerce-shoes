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

const Discounts = () => {
  const discountShoes = useSelector(shoesSelector).filter(shoe => shoe.discount).slice(0,18)
  const topShoesRen = discountShoes.map(shoe => (
    <SwiperSlide>
      <ShoeCard {...shoe} />
    </SwiperSlide>
  ))
  return (
    <div className='discounts' id='Discounts'>
      <div className='my-container'>
        <h2 className='title'>Discounts</h2>
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

export default Discounts
