import { useEffect, useState } from "react"

// a custom hook that can be called in any component, to create a reusable function/hook to call the API

const useFetch = (url)=> {
    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    
    // fetch the data when there is a change on the url

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (e){
            setError(true)
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()

    },[url])

// either return data, loading , error
return {data, loading, error}
}


