import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            {/* background red, text yellow, center text, padding 5 */}
            <header className='bg-danger text-warning text-center p-5'>
                <h1>Lazamall</h1>
            </header>
            {/*  if your navbar is dark, and you wont light text - navbar-dark */}
            {/*  if your navbar is light, and you wont dark text - navbar-light */}
            <nav className="navbar navbar-expand-lg bg-success navbar-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Lazamall</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories/men's clothing">Men's clothing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories/women's clothing">Women's clothing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories/jewelery">Jewelery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories/electronics">Electronics</NavLink>
                            </li>
                    
                        </ul>
                    </div>
                    <div className="d-flex">
                        <NavLink className='me-2 btn btn-outline-light' to="/cart"><i class="bi bi-cart"></i> ( 0 )</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header