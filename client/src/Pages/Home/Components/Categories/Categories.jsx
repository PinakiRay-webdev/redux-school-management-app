import React from 'react'
import { myCategory } from './utils'
const Categories = () => {
  return (
    <div className='w-full h-fit py-12' >
        <h1 className='text-center text-4xl font-bold text-[#0E2A46]'>Browse By Categories</h1>
      <div className='max-w-screen-xl mx-auto grid grid-cols-3 gap-8 my-4' >
        {myCategory?.map((Element , id) =>(
            <div key={id} className={`flex items-center gap-3 py-4 px-3 ${Element.background} rounded-lg border cursor-pointer`} >
                <img className='w-14' src={Element.icon} alt="" />
                <p>{Element.name}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
