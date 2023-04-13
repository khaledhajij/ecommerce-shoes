import React, { useEffect, useState } from 'react'
import { FaRunning } from 'react-icons/fa'
import { InputText } from 'primereact/inputtext'
import nikeLogo from '../Assets/nike-logo.svg'
const Navbar = () => {
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    window.onscroll = function (e) {
      if (this.oldScroll > this.scrollY) {
        setShowNav(true)
      } else if (this.oldScroll < this.scrollY) {
        setShowNav(false)
      }
      this.oldScroll = this.scrollY
      delete window.onscroll
    }
  }, [])

  return (
    <div
      className='navbar'
      style={!showNav ? { transform: 'translateY(-100px)' } : null}
    >
      <div className='my-container'>
        <div className='logo'>
          <p>
            <span>running</span>station
          </p>
          <FaRunning />
        </div>
        <img src={nikeLogo} alt='' />
        <span className='p-input-icon-right'>
          <InputText placeholder='' />
          <i className='pi pi-search' />
        </span>
      </div>
    </div>
  )
}

export default Navbar
