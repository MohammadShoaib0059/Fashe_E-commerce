import React from 'react'
import Navigation from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import FilteredProduct from '../Components/FilteredProduct'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/Footer'

const Shop = () => {
  return (
    <div>
      <Navigation/>
      <Announcement/>
      <FilteredProduct/>
      <Newslatter/>
      <Footer/>
    </div>
  )
}

export default Shop
