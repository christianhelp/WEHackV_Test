import React from 'react'
import './Question.css'
function Question({question, answer} : {question : String, answer : String}) {
  return (
    <div className="question w-full lg:w-10/12">
        <details className="bg-[#D16155]">
            <summary className='flex flex-wrap justify-between list-none w-full bg-[#D16155] text-[#301814] p-2 text-[14px] md:text-base lg:text-base'>{question}</summary>
                <div className="panel text-sm lg:text-base">
                    {answer}
                </div>
        </details>
    </div>
  )
}

export default Question