
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
     <h1>E commerce app</h1>
     {/* the content of the component will go here */}
     <Outlet/>
    </>
  )
}

export default App
