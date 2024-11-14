import React from 'react'
import './Footer.css'
import Button from '@/components/Button/Button'

function Footer() {
  return (
    <div className='footer-container w-full h-auto flex flex-col md:flex-row lg:flex-row md:items-start md:justify-start lg:items-start lg:justify-start py-10 px-10 pb-20 md:px-20 lg:px-20 gap-y-10 md:gap-x-3 lg:gap-x-5'>
        <div className='main-container w-full flex flex-wrap flex-col gap-y-5 md:items-start md:content-start lg:items-start lg:content-start'>
            <img className="wehack-logo h-auto max-w-40 sm:max-w-64 md:max-w-72 lg:max-w-32" src={"/static/images/black wehack logo.png"} alt="wehack logo"></img>
            <div className="gap-x-0">
            <p className='about-text text-[#FFE9D7] font-medium text-lg'>Made with 💪🤍 by WEHack 2025</p>
            <p className='about-text text-[#FFE9D7] font-medium text-lg'><a href="https://github.com/acmutsa/HackKit" target="_blank"><u>Powered by HackKit</u></a></p>
            </div>
        </div>
        <div className="flex flex-col gap-y-10 md:flex-row md:items-end md:gap-x-10 lg:flex-row lg:gap-x-10 lg:w-full lg:items-ends lg:-mr-10 xl:-mr-72">
          <div className="flex flex-row gap-x-20 md:gap-x-10">
            <div className='navigation-container flex flex-wrap flex-col gap-y-1'>
                <h1 className='about-title text-[#FFE9D7] font-medium text-xl text-center'>Navigation</h1>
                <a className='nav-link' href="#home">Home</a>
                <a className='nav-link' href="#about-wehack">About</a>
                <a className='nav-link' href="#FAQ">FAQ</a>
                <a className='nav-link' href="http://hackp.ac/coc" target="_blank">MLH Conduct</a>
            </div>
            <div className='contact-container flex flex-wrap flex-col md:content-start gap-y-1'>
                <h1 className='about-title text-[#FFE9D7] font-medium text-xl text-left'>Contact Us</h1>
                <a className='nav-link' href="mailto:wehackutd@gmail.com" target="_blank">Email</a>
                <a className='nav-link' href="https://www.instagram.com/wehackutd/" target="_blank">Instagram</a>
                <a className='nav-link' href="https://www.linkedin.com/company/wehackutd-2020/"target="_blank">LinkedIn</a>
                <a className='nav-link' href="https://www.facebook.com/WEHackUTD/" target="_blank">Facebook</a>
                <a className='nav-link' href="https://x.com/wehackutd" target="_blank">X</a>
            </div>
          </div>
          <div className='contact-container flex flex-wrap flex-col gap-y-1'>
                <h1 className='about-title text-[#FFE9D7] font-medium text-xl text-left'>Other Hackathons</h1>
                <a className='nav-link' href="https://hackutd.co/" target="_blank">HackUTD</a>
                <a className='nav-link' href="https://hacktx.com/" target="_blank">HackTX</a>
                <a className='nav-link' href="https://hackuta.org/" target="_blank">HackUTA</a>
                <a className='nav-link' href="https://rowdyhacks.org/" target="_blank">RowdyHacks</a>
                <a className='nav-link' href="https://cqhacks.org/" target="_blank">CodeQuantum</a>
          </div>
        </div>
        
    </div>
  )
}

export default Footer