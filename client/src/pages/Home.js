import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
        <Announcement/>
        <Navbar/>
        <Hero/>
        <Categories/>
    </>
  )
}

export default Home