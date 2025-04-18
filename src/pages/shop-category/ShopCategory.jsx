import React from 'react'
import './ShopCategory.css'
import Banner from '../../components/banner/Banner'

const ShopCategory = ({title, subtitle, banner}) => {
  return (
    <div>
        <Banner title={title} subtitle={subtitle} banner={banner}/>
    </div>
  )
}

export default ShopCategory