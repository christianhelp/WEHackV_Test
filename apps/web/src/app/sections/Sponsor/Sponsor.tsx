import React from 'react';
import './Sponsor.css';

const sponsors = [
  { default: '/static/images/sample_sponsors/statefarm_logo_brown.png', hover: '/static/images/sample_sponsors/statefarm_logo.png' },
  { default: '/static/images/sample_sponsors/jpmorgan_logo_brown.png', hover: '/static/images/sample_sponsors/jpmorgan_logo.png' },
  { default: '/static/images/sample_sponsors/axxess_logo_brown.png', hover: '/static/images/sample_sponsors/axxess_logo.png' },
  { default: '/static/images/sample_sponsors/statefarm_logo_brown.png', hover: '/static/images/sample_sponsors/statefarm_logo.png' },
  { default: '/static/images/sample_sponsors/jpmorgan_logo_brown.png', hover: '/static/images/sample_sponsors/jpmorgan_logo.png' },
  { default: '/static/images/sample_sponsors/axxess_logo_brown.png', hover: '/static/images/sample_sponsors/axxess_logo.png' }
];

function Sponsor() {
    return (
      <div className='Sponsor-container w-full h-auto flex flex-wrap flex-col items-center justify-center p-6 pb-40 lg:pb-60' id="Sponsors">
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-16 lg:gap-x-24 pb-24 md:pb-24 lg:pb-36">
          <div className="glow-sponsor transform-gpu">
            <h1 className='Sponsor-title text-[#992444] text-center text-4xl md:text-5xl lg:text-5xl'>2025 Sponsors</h1>
          </div>
        </div>
        <div className="sponsor-text-container flex flex-col gap-y-5 flex-wrap items-center justify-center">
          <p className='sponsor-text text-[#CCBA97] font-medium text-4xl md:text-5xl'>Coming Soon</p>
          <p className='sponsor-text text-[#CCBA97] font-medium text-2xl md:text-3xl text-center'>Interested in sponsoring WEHack 2025? Contact us at wehackutd@gmail.com!</p>
        </div>
        {/* <div className='Sponsor-logos flex flex-wrap justify-around w-full'>
          {sponsors.map((logo, index) => (
            <div key={index} className='Sponsor-logo bg-[#FFE9D7] rounded-lg flex items-center justify-center' style={{ '--hover-image': `url(${logo.hover})` } as React.CSSProperties}>
              <img src={logo.default} alt={`Sponsor ${index + 1}`} className='sponsor-img' />
            </div>
          ))}
        </div> */}
        <div className="vinyl-yellow-container overflow-x-hidden flex justify-center md:justify-start pt-20 pb-72 md:pt-30 md:pb-64 md:-mr-[5rem] lg:-mr-[20rem] xl:-mr-[35rem]">
          <img className="vinyl-yellow overflow-x-hidden" src="/img/static/images/Untitled_Artwork 5.png" width="250px" height="250px"></img>    
        </div>
      </div>
    );
  }
  
  export default Sponsor;