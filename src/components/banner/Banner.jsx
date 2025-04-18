import React from 'react'
import './Banner.css'
const Banner = ({title, subtitle, banner}) => {
  return (
    <div 
    style={{backgroundImage:`url('${banner}')`}}
    className='jumbotron text-center text-warning'>
        <h2 className='display-2'>{title}</h2>
        <h4 className='lead'>{subtitle}</h4>
    </div>
  )
}

export default Banner