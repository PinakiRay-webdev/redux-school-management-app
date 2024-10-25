import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/hero/Hero'
import Categories from './Components/Categories/Categories'
import Courses from './Components/Courses/Courses'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Courses/>
    </div>
  )
}

export default Home
