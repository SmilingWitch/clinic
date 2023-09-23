import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import PrincipalPage from './components/principalPage/PrincipalPage'
import MoreAbout from './components/moreAbout/MoreAbout'
import Contact from './components/contact/Contact'
import OnlineAppointment from './components/onlineAppointment/OnlineAppointment'
import ServiceView from './components/serviceView/ServiceView'


function App() {
  return (
   <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "clinic/" element = { <PrincipalPage /> }></Route>
        <Route path = "clinic/moreAbout" element = { <MoreAbout /> }></Route>
        <Route path = "clinic/appointment" element = { <OnlineAppointment /> }></Route>
        <Route path = "clinic/services" element = { <ServiceView/> }></Route>
  </Routes>
  </Router>
  
   </>
    

  )
}

export default App
