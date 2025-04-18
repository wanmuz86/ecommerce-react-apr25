import React from 'react'
import './Home.css'
import Banner from '../../components/banner/Banner'
import banner1 from '../../assets/banner1.jpg'
import Featured from '../../components/featured/Featured'
const Home = () => {
  return (
    <div>
        <Banner title="Shoppr" subtitle="Shop till you drop" banner={banner1}/>
        <Featured/>
    </div>
  )
}

export default Home