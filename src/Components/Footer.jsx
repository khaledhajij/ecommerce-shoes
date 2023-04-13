import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer () {
  return (
    <footer className='footer'>
      <div className='my-container'>
        <div className='company'>
          <p>Company</p>
          <a href='#'>About us</a>
          <a href='#'>Our Services</a>
          <a href='#'>Privacy Policy</a>
        </div>
        <div className='get-help'>
          <p>Get Help</p>
          <a href='#'>FAQ</a>
          <a href='#'>Shipping</a>
          <a href='#'>Returns</a>
          <a href='#'>Payment Options</a>
        </div>
        <div className='online-shop'>
          <p>Online Shop</p>
          <a href='#'>Jordan</a>
          <a href='#'>Air Force 1</a>
          <a href='#'>Running</a>
          <a href='#'>Air Max</a>
        </div>
        <div className='follow-us'>
          <p>Follow Us</p>
          <FaTwitter />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
    </footer>
  )
}

export default Footer
