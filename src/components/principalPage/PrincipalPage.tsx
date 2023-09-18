import AboutUs from "../aboutUs/AboutUs";
import Appointment from "../appointment/Appointment";
import Expert from "../expert/Expert";
import Home from "../home/Home";
import Services from "../services/Services";
import "./PrincipalPage.css"


function PrincipalPage() {
    return (
        <div className="cont">
        <Home></Home>
        <AboutUs></AboutUs>
        <Services></Services>
        <Expert/>
        <Appointment/>
        </div>
        
    );
}

export default PrincipalPage ;