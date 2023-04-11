import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { shoesSelector } from '../app/shoesSlice'
import ShoeCard from './ShoeCard'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Top = () => {
  const shoes = useSelector(shoesSelector)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = shoes.slice(indexOfFirstItem, indexOfLastItem)

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevButtonDisabled = currentPage === 1
  const nextButtonDisabled = indexOfLastItem >= shoes.length

  const shoeCards = currentItems.map(shoe => <ShoeCard {...shoe} />)

  return (
    <div className='top'>
      <div className='my-container'>
        <p className='title'>LEADING SHOES</p>
        {!prevButtonDisabled && (
          <FaAngleLeft className='left-angle' onClick={handlePrevClick} />
        )}
        <div className='shoes-grid'>{shoeCards}</div>
        {!nextButtonDisabled && (
          <FaAngleRight className='right-angle' onClick={handleNextClick} />
        )}
      </div>
    </div>
  )
}

export default Top
