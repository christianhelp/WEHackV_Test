import React from 'react'
import './Stats.css'
function Stats() {
  return (
    // stats-container flex flex-wrap flex-col gap-y-20 justify-between sm:flex-row md:flex-row: lg:flex-row pt-40 sm:pt-40 md:pt-48 lg:pt-72

        <div className='stats-container flex flex-col gap-y-20 lg:flex-row pt-40 sm:pt-40 md:pt-40 lg:pt-28 lg:space-x-24'>
            <div className='statsOne flex flex-wrap flex-col content-center justify-between gap-y-3'>
                <img className="wehack-stats-mascot h-auto max-w-60 sm:max-w-64 md:max-w-72 lg:max-w-72" src={"/static/images/IMG_0843(2).png"} alt="a bear trying to catch a butterfly" loading="eager"></img>
                <div className='stats-text flex flex-col gap-y-3'>
                    <h1 className='stats-title text-center text-[#FFE9D7] text-5xl md:text-5xl lg:text-5xl'>280+</h1>
                    <p className='text-center text-[#FFE9D7] font-medium text-lg lg:text-xl'>Hackers</p>
                </div>
            </div>
            <div className='statsTwo flex flex-wrap flex-col content-center justify-between gap-y-3'>
                <img className="wehack-stats-mascot h-auto max-w-60 sm:max-w-64 md:max-w-72 lg:max-w-72 lg:mt-20" src={"/static/images/IMG_0845(2).png"} alt="a bee" loading="eager"></img>
                <div className='stats-text flex flex-col gap-y-3'>
                    <h1 className='stats-title text-center text-[#FFE9D7] text-5xl md:text-5xl lg:text-5xl'>50+</h1>
                    <p className='text-center text-[#FFE9D7] font-medium text-lg lg:text-xl'>Projects Submitted</p>
                </div>
            </div>
            <div className='statsThree flex flex-wrap flex-col content-center justify-between gap-y-3'>
            {/* IMG_0846(1) */}
                <img className="wehack-stats-mascot h-auto max-w-60 sm:max-w-64 md:max-w-72 lg:max-w-72 lg:mt-20" src={"/static/images/IMG_0846(1).png"} alt="a bear sleeping" loading="eager"></img>
                <div className='stats-text flex flex-col gap-y-3'>
                    <h1 className='stats-title text-center text-[#FFE9D7] text-5xl md:text-5xl lg:text-5xl'>48</h1>
                    <p className='text-center text-[#FFE9D7] font-medium text-lg lg:text-xl'>Workshops and Mini-Events</p>
                </div>
            </div>
        </div>
        


  )
}

export default Stats