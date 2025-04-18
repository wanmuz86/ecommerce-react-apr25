import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
      
            <footer className='bg-dark text-light p-5'>
                  <div className='container'>
                <div className='row'>
                    {/* I want to have 1/4 of the row  */}
                    <div className='col-3'>
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms and Condition</Link></li>
                        </ul>
                    </div>
                    <div className='col-3'>
                    <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms and Condition</Link></li>
                        </ul>

                    </div>
                    <div className='col-3'>
                    <ul>
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Instagram</Link></li>
                            <li><Link to="/">Tiktok</Link></li>
                            <li><Link to="/">X</Link></li>
                        </ul>

                    </div>
                    <div className='col-3'>
                        <h6>Iverson Associates Sdn Bhd</h6>
                        <p>Suites T113-T114, 3rd Floor Centrepoint,<br/>
                        Lebuh Bandar Utama Bandar Utama <br/>
                        47800 Petaling Jaya<br/>
                        Selangor, Malaysia
                        </p>
                    </div>
                </div>
                </div>
            </footer>
       
    )
}

export default Footer