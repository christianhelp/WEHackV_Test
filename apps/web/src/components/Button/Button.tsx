import React from 'react'
import './Button.css'

function Button({buttonText, link} : {buttonText : String, link : any}) {
  return (
      <a href={link} className="text-xl" target="_blank">
        <button className="primary-btn bg-[#909634] text-[#FFE9D7] w-full py-3 px-5">{buttonText}</button>
      </a>
  )
}

export default Button