import React from 'react'
import FavoriteItem from '../Components/FavoriteItem'
import Navigation from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/Footer'

const Favorite = () => {
  return (
    <div>
       <Navigation />
    <Announcement />
    <img src='../Images/master-slide-03.jpg.webp' width="100%"/>
    <FavoriteItem/>
    <Newslatter />
    <Footer />
    </div>
  )
}

export default Favorite
