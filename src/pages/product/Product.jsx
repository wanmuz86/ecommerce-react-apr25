import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()
    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`)
    const { dispatch } = useCart()
    const navigate = useNavigate()

    const handleAddCart = () => {
        dispatch({type:'ADD_ITEM', payload:{item:data,quantity:1}})
        navigate('/cart')
    }
    return (
        <div className="container py-5">
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status"></div>
                    <p className="mt-3">Loading...</p>
                </div>
            ) : error ? (
                <p className="text-danger">Something went wrong. Please try again.</p>
            ) : data && (
                <div className="row g-4 align-items-start product-detail-card">
                    <div className="col-md-6 text-center">
                        <div className="product-img-wrapper p-4">
                            <img src={data.image} alt={data.title} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">{data.title}</h2>
                        <p className="text-capitalize mb-1 badge text-bg-secondary">{data.category}</p>
                        <p className="text-primary fs-4 fw-bold mb-3">USD {data.price}</p>
                        <p className="text-secondary">{data.description}</p>
                        <button onClick={handleAddCart} className="btn btn-primary btn-lg mt-4">Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product