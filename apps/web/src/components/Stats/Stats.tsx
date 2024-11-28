import React from 'react'
import './Stats.css'
import Group23 from './DRAFT-WEHack2025/public/static/images/Group 23.svg'
function Stats() {
  return (
    // stats-container flex flex-wrap flex-col gap-y-20 justify-between sm:flex-row md:flex-row: lg:flex-row pt-40 sm:pt-40 md:pt-48 lg:pt-72

        <div className='stats-container flex flex-col gap-y-32 lg:flex-col pt-40 sm:pt-40 md:pt-40 lg:pt-28 w-full pb-48 md:pb-60'>
            <div className='flex flex-wrap flex-col md:flex-row lg:flex-row content-center justify-between md:justify-around lg:justify-around gap-y-10 w-full '>
                <div className="flex flex-row md:flex-col justify-center">
                    <img className="wehack-stats-mascot max-w-64 md:max-w-72 lg:max-w-72" src={"/img/static/images/Raccoon_Hearts.svg"} alt="a bear trying to catch a butterfly" loading="eager"></img>
                </div>
                
                <div className="statsOne max-w-[85%] md:max-w-[50%] lg:max-w-[40%] flex flex-col md:justify-center lg:justify-center">
                    <img src={"/img/static/images/Group 23.svg"}></img>
                </div>     
            </div>

            <div className='flex flex-wrap flex-col-reverse md:flex-row lg:flex-row content-center justify-between md:justify-around lg:justify-around gap-y-10 w-full '>
                <div className="statsTwo max-w-[85%] md:max-w-[50%] lg:max-w-[40%] flex flex-col md:justify-center lg:justify-center">
                    <img src={"/img/static/images/Group 24.svg"}></img>
                </div>   
                <div className="flex flex-row md:flex-col justify-center">
                    <img className="wehack-stats-mascot max-w-64 md:max-w-72 lg:max-w-72" src={"/img/static/images/Raccoon_Music.svg"} alt="a bear trying to catch a butterfly" loading="eager"></img>
                </div>
            </div>

            <div className='flex flex-wrap flex-col md:flex-row lg:flex-row content-center justify-between md:justify-around lg:justify-around gap-y-10 w-full '>
                <div className="flex flex-row md:flex-col justify-center md:max-w-[50%] lg:max-w-[50%]">
                    <img className="wehack-stats-mascot max-w-64 md:max-w-72 lg:max-w-72" src={"/img/static/images/Raccoon_Sleeping.svg"} alt="a bear trying to catch a butterfly" loading="eager"></img>
                </div>
                
                <div className="statsThree max-w-[85%] md:max-w-[50%] lg:max-w-[40%] flex flex-col md:justify-center lg:justify-center">
                    <img src={"/img/static/images/Group 25.svg"}></img>
                </div>     
            </div>
        </div>
        


  )
}

export default Stats