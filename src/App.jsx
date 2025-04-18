
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
     <Header/>
     {/* the content of the component will go here */}
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
