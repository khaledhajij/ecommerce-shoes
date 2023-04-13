import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Testimonial = ({ name, comment }) => {
  return (
    <div className='testimonial'>
      <div className='circle'></div>
      <p className='name'>{name}</p>
      <p className='comment'>
        <FaQuoteLeft className='left-quote' />
        {comment}
        <FaQuoteRight className='right-quote' />
      </p>
    </div>
  )
}

const Testimonials = props => {
  const data = props.data
  return (
    <div className='testimonials'>
      <div className='my-container'>
        <h2>What do our customers say</h2>
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
          {data.map(e => (
            <SwiperSlide>
              <Testimonial {...e} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
