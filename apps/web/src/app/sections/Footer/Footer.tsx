import React from 'react'
import './Footer.css'
import Button from '@/components/Button/Button'

function Footer() {
  return (
    <div className='footer-container w-full h-auto flex flex-col md:flex-row lg:flex-row items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start py-10 px-10 md:px-20 lg:px-20 gap-y-10 md:gap-x-3 lg:gap-x-5'>
        <div className='main-container w-full flex flex-wrap flex-col items-center content-center gap-y-5 md:items-start md:content-start lg:items-start lg:content-start'>
            <img className="wehack-logo h-auto max-w-60 sm:max-w-64 md:max-w-72 lg:max-w-32" src={"/static/images/LogoSparkle.png"} alt="wehack logo"></img>
            <p className='about-text text-[#FFE9D7] font-medium text-base text-center'>Made with 💪🤍 by WEHack 2025</p>
        </div>
        <div className='navigation-container w-full flex flex-wrap flex-col content-center items-center md:content-start md:items-start lg:content-start lg:items-start gap-y-4 md:w-1/2 lg:w-1/2 md:-ml-20 lg:ml-0 lg:-mr-60'>
            <h1 className='about-title text-[#FFE9D7] font-medium text-xl text-center'>Navigation</h1>
            <a className='nav-link font-bold' href="#home">Home</a>
            <a className='nav-link font-bold' href="#about-wehack">About</a>
            <a className='nav-link font-bold' href="#FAQ">FAQ</a>
            <a className='nav-link font-bold' href="http://hackp.ac/coc" target="_blank">MLH Conduct</a>
        </div>
        <div className='contact-container w-full flex flex-wrap flex-col content-center items-center md:content-start md:items-start lg:content-start lg:items-start gap-y-4  md:w-1/2 lg:w-1/2 lg:-mr-60'>
            <h1 className='about-title text-[#FFE9D7] font-medium text-xl text-left'>Contact Us</h1>
            <a className='nav-link font-bold' href="mailto:wehackutd@gmail.com" target="_blank">Email</a>
            <a className='nav-link font-bold' href="https://www.instagram.com/wehackutd/" target="_blank">Instagram</a>
            <a className='nav-link font-bold' href="https://www.linkedin.com/company/wehackutd-2020/"target="_blank">LinkedIn</a>
            <a className='nav-link font-bold' href="https://www.facebook.com/WEHackUTD/" target="_blank">Facebook</a>
            <a className='nav-link font-bold' href="https://x.com/wehackutd" target="_blank">X</a>
        </div>
    </div>
  )
}

export default Footer