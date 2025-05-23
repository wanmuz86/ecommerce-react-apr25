import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css' // custom styles
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Card = ({ item }) => {
    const {dispatch} = useCart()

    const navigate = useNavigate()

    const handleAddToCart = () => {
        dispatch({type:'ADD_ITEM', payload:{item:item, quantity:1}})
        navigate('/cart')
    }

    return (
        <div className="card custom-card h-100 shadow-sm border-0">
            <div className="img-container">
                <img src={item.image} className="card-img-top p-3" alt={item.title} />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate" title={item.title}>{item.title}</h5>
                <p className="card-text text-muted mb-1 text-capitalize">{item.category}</p>
                <p className="text-primary fw-semibold mb-4">USD {item.price.toFixed(2)}</p>
                <div className="mt-auto d-flex gap-2">
                    <Link to={`/products/${item.id}`} className="btn btn-outline-primary btn-sm w-50">
                        View
                    </Link>
                    <button onClick={handleAddToCart} className="btn btn-primary btn-sm w-50">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card