import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/hero/Hero'
import Categories from './Components/Categories/Categories'
import Courses from './Components/Courses/Courses'
import  Grow  from './Components/Grow/Grow'
import Benefits from './Components/Benefots/Benefits'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Courses/>
      <Grow/>
      <Benefits/>
    </div>
  )
}

export default Home
