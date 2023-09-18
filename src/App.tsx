import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import Services from './components/services/Services'
import Expert from './components/expert/Expert'
import Appointment from './components/appointment/Appointment'
import Navbar from './components/navbar/Navbar'
import PrincipalPage from './components/principalPage/PrincipalPage'


function App() {
  return (
   <>
    <Navbar/>
    <Router>
      <Routes path = "/home" element = { <PrincipalPage /> }></Routes><PrincipalPage/>
    </Router>
   </>
    

  )
}

export default App
