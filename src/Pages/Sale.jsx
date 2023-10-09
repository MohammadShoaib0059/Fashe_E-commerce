import React from 'react'
import Navigation from '../Components/Navbar'
import Products from '../Components/Products'
import Announcement from '../Components/Announcement'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/Footer'

const Sale = () => {
  return (
    <div>
      <Navigation/>
      <Announcement/>
      <img src='../Images/master-slide-04.jpg.webp' width="100%"/>
      <Products/>
      <Newslatter/>
      <Footer/>
    </div>
  )
}

export default Sale
