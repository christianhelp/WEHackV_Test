"use client";
import React, { useEffect, useState } from 'react'
import './Jumbotron.css'
import Button from '@/components/Button/Button';

function Jumbotron() {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const target = new Date("4/12/2025 9:00:00")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [target]);


  return (
    // any property that doesn't start with sm:, md:, lg:, etc are default values for mobile
    // as you increase the screen size, you need to adjust the following for different screen sizes:
    // flex-direction (do the opposite of mobile's flex direction)
    // width for divs (decrease width size as screen size increases)
    // height for divs (increase height size as screen size increases)
    // image size
    // font size
    
    // general formatting for className
    // element name, width (breakpoints), height (breakpoints), flex, flex-wrap, flex-direction (breakpoints), items-center, justify-content, gap, margin, padding

    <section className='jumbotron parent-container' id="home">
        {/* <div className='jumboImg-container child-container'>
            <img className="wehack-mascot h-auto max-w-60 sm:max-w-64 md:max-w-72 lg:max-w-72" src={"/static/images/IMG_0844(1).png"} alt="wehack logo" loading="eager"></img>
        </div> */}
        <div className='jumboText-container flex flex-col items-center justify-center text-center'>
            <div className='jumbo-group'>
                <h4 className='jumbo-text text-[#FFE9D7] text-sm font-serif lg:text-lg'>WEHack Presents</h4>
                <h1 className='jumbo-title text-[#FFE9D7] text-9xl md:text-5xl lg:text-5xl animate-pulse'>WEHack 2025</h1>
                <h2 className='jumbo-text font-thin text-[#FFE9D7] text-l md:text-5xl lg:text-5xl'>COMING SOON</h2>
                <h3 className='jumbo-text font-extralight text-[#FFE9D7] text-sm sm:text-2xl md:2xl lg:text-3xl'>April 2025</h3>

                <div className='jumbo-buttons flex flex-col items-center'>
                  <Button link={'https://events.mlh.io/events/11456-wehack'} buttonText={'Interest Form'}/>
                  {/* <Button link={'https://live.wehackutd.com/'} buttonText={'WEHack Portal'}/> */}
                </div>

                {/* Countdown Timer Here */}

                <div className="countdown">

                  
                    <div className="circle-container large animate-pulse">
                      <div className="circle bg-[rgba(255,233,215,0.68)]">
                        <p>{days}</p>
                      </div>
                      <p className="label">Days</p>
                    </div>
                    <div className="circle-container medium animate-pulse">
                      <div className="circle bg-[rgba(255,233,215,0.68)]">
                        <p>{hours}</p>
                      </div>
                      <p className="label">Hours</p>
                    </div>
                    <div className="circle-container small animate-pulse">
                      <div className="circle bg-[rgba(255,233,215,0.68)]">
                        <p>{minutes}</p>
                      </div>
                      <p className="label">Minutes</p> 
                    </div>
                    <div className="circle-container smallest animate-pulse">
                      <div className="circle bg-[rgba(255,233,215,0.68)]">
                        <p>{seconds}</p>
                      </div>
                      <p className="label">Seconds</p>
                    </div>

                    <div>
                      <img className="wehack-stats-mascot h-auto max-w-60 sm:max-w-64 md:max-w-72 lg:max-w-72 scale-x-[-1]"  src={"/static/images/IMG_0843(2).png"} alt="a bear trying to catch a butterfly" loading="eager"></img>
                    </div>

              </div>






            </div>
        </div>
    </section>
  )
}

export default Jumbotron