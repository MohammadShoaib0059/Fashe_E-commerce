import React from 'react'
import Navigation from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import CartItems from '../Components/CartItems'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/Footer'

const Cart = () => {
  return (
    <div>
      <Navigation/>
      <Announcement/>
      
      <CartItems/>
      <Newslatter/>
      <Footer/>
    </div>
  )
}

export default Cart
