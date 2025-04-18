import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import Card from '../card/Card'

const Featured = () => {

    const url = "https://fakestoreapi.com/products?limit=5"
    const { data, loading, error } = useFetch(url) // Calling the custom hook,
    return (
        // show the result the UI
        <div className='container my-3'>
            <h2>Featured products</h2>
            {error ?
                <p>Something is wrong</p>
                : loading ?
                    <p>Loading...</p>
                    :
                    <div className='row'> 
                        {
                            data && data.map(val => <div className='col-3 gap-1 mb-1' key={val.id}>
                                <Card item={val}/>
                            </div>)
                        }
                   </div>
            }
        </div>
    )
}

export default Featured