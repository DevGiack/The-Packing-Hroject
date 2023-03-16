import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <p>Copyright © 2023 TPH - All Right Reserved.</p>
        <div className='footer-link'>
        <Link to="/security">
        <p>Security</p>
        </Link>
        <Link to="/terms">
        <p>Terms</p>
        </Link>
        <Link to="/privacy">
        <p>Privacy</p>
        </Link>
        </div>
    </div>
  )
}

