import React from 'react'
import { myCourses } from './utils'
import { FaSheetPlastic } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Ratings from '../Ratings';


const Courses = () => {
  return (
    <div className='w-full h-fit py-12' >
      <div className='max-w-screen-xl mx-auto' >
        <header className='flex items-center justify-between' >
            <div>
            <p className='text-[#704FE6] bg-[#E9E2FF] px-3 py-1 font-light w-fit text-xs' >Top Popular Course</p>
            <h1 className='text-4xl font-bold text-[#0E2A46] mt-4'>Schoolify courses students can <br /> join with us.</h1>
            </div>
            <button className='bg-[#704FE6] px-6 rounded-full py-3 font-light text-white'>Load more courses</button>
        </header>
        <main className='grid grid-cols-3 gap-6 mt-12' >
            {myCourses?.map((Element , id) =>(
                <div className='px-2 py-1 w-[23vw] bg-[#f1eff8] border border-dotted border-[#704FE6] rounded-md' key={id} >
                    <img src={Element.image} alt="" />
                    {/* rating */}
                    <div className='flex justify-between my-3' >
                        <Ratings stars = {Element.rating}  />
                        <p className='text-xs text-[#704FE6]' >$ {Element.price}</p>
                    </div>
                    <h3 className='text-lg font-bold text-[#0E2A46]' >{Element.title}</h3>
                    {/* courses stats */}
                    <div className='flex items-center justify-between bg-white py-3 px-2 my-5 rounded-md' >
                        <div className='flex items-center gap-1' >
                            <p className='text-xs font-semibold'><FaSheetPlastic/></p>
                            <p className='text-xs font-semibold'>Lessons: {Element.lessons}</p>
                        </div>
                        <div className='flex items-center justify-between gap-1' >
                            <p className='text-xs font-semibold'><IoTime/></p>
                            <p className='text-xs font-semibold'>Duration: {Element.duration}</p>
                        </div>
                        <div className='flex items-center justify-between gap-1' >
                            <p className='text-xs font-semibold' ><FaUser/></p>
                            <p className='text-xs font-semibold' >Students: {Element.students}</p>
                        </div>
                    </div>

                    <footer className='mt-10 mb-2 flex items-center justify-between' >
                        <div className='flex items-center gap-1' >
                            <p className='text-3xl' ><CgProfile/></p>
                            <p className='text-sm' >{Element.mentor}</p>
                        </div>
                        <button className='bg-[#704FE6] text-white font-light px-5 py-1 rounded-full' >Enroll</button>
                    </footer>
                </div>
            ))}
        </main>
      </div>
    </div>
  )
}

export default Courses
