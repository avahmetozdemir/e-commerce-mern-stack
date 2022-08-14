import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

function Home() {
  return (
    <>
        <Announcement/>
        <Navbar/>
        <Hero/>
        <Categories/>
        <Products/>
        <Newsletter/>
    </>
  )
}

export default Home