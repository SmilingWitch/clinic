import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import Services from './components/services/Services'
import Expert from './components/expert/Expert'
import Appointment from './components/appointment/Appointment'

function App() {
  return (
   <>
    <Home></Home>
    <AboutUs></AboutUs>
    <Services></Services>
    <Expert/>
    <Appointment/>
   </>
    

  )
}

export default App
