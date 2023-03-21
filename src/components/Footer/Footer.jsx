import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
      <span className='footer-text'>Copyright © 2023 TPH - All Right Reserved.</span>
      <div className='footer-link'>
        <Link to="/security">
          <span className='footer-link-text'>Security</span>
        </Link>
        <Link to="/terms">
          <span className='footer-link-text'>Terms</span>
        </Link>
        <Link to="/privacy">
          <span className='footer-link-text'>Privacy</span>
        </Link>
      </div>
    </div>
  )
}

