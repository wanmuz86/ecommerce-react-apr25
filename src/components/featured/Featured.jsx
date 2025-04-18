import React from 'react'
import { useFetch } from '../../hooks/useFetch'

const Featured = () => {

    const url = "https://fakestoreapi.com/products?limit=5"
    const {data,loading,error} = useFetch(url) // Calling the custom hook,
  return (
    // show the result the UI
    <div>
        {error ?
        <p>Something is wrong</p> 
        : loading ? 
        <p>Loading...</p>
        :
        <ul>
            {
                data && data.map(val=><li>{val.title}</li>)
            }
        </ul>   
    }
    </div>
  )
}

export default Featured