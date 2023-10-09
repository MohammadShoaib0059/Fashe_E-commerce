import React from 'react'
import Navigation from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'
import FeatureProducts from '../Components/FeatureProducts'
import CategoryItem from '../Components/CategoryItem'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
    <Navigation/>
    <Dashboard/>
    <CategoryItem/>
    <FeatureProducts/>
    <Newslatter/>
    <Footer/>
    </div>
  )
}

export default Home
