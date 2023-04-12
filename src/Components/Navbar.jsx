import React from 'react'
import { FaRunning } from 'react-icons/fa'
import { InputText } from 'primereact/inputtext'
import nikeLogo from '../Assets/nike-logo.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
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
