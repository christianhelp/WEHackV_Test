"use client"
import React from 'react'
import './Nav.css'
import { useState } from 'react'
 
function Nav() {

  return (
    <nav> 
        <div className="nav-header">      
            <img className="wehack-logo h-auto max-w-12 lg:max-w-16" src={"/static/images/LogoSparkle.png"} alt="wehack logo"></img>
        </div>

        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

        <ul className="collapse-menu">
          <li><a className='text-lg lg:text-base' href="#about-wehack">About</a></li>
          <li><a className='text-lg lg:text-base' href="#FAQ">FAQ</a></li>
          <li><a className='text-lg lg:text-base' href="http://hackp.ac/coc" target="_blank">MLH Conduct</a></li>
        </ul>

        {/* MLH 2025 BADGE */}
        <a className="mlh-trust-badge" 
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" 
      target="_blank"><img src={"/static/images/mlh-trust-badge-2025-white.svg"} 
      alt="Major League Hacking 2025 Hackathon Season"/></a>
  </nav>
  )
}

export default Nav