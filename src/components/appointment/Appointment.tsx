import Button from "../button/Button";
import PlanCard from "../planCard/PlanCard";
import {Link} from "react-router-dom"
import "./Appointment.css"
import {GiNotebook} from "react-icons/gi"

function Appointment() {
    return (
       <div className="app">
            <div className="appGrid">
                <div className="background"></div>
                <div className="appInfo">
                    <div className="appInfoBx">
                        <div className="appHeader">
                            Make An Appointment 
                        </div>
                        <div className="appText">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor odio soluta, repellat doloribus reprehenderit repellendus aperiam sit facilis maxime saepe possimus voluptatum ullam perspiciatis eius nihil mollitia. Omnis, suscipit.</p>
                        </div>
                        <div className="btnBx3">
                            <Link to= "/clinic/appointment"><Button name = "Contact us"/></Link>
                        </div>
                    </div>
                </div>
                <div className="sideImg">
                    <div className="circleImg1">
                        <div className="appImg">
                            <img src="pngegg5.png" alt="" />
                        </div>
                    </div> 
                </div>
            </div>
            <div className="planGrid">
                <PlanCard btnName = "Make an Appointment" text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit ullam laborum expedita." icon = {<GiNotebook/>} name = "Online Appointment" />
                {/*<PlanCard btnName = "Make an Appointment" text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit ullam laborum expedita." icon = {<GiNotebook/>} name = "Online Appointment" />*/}
            </div>
       </div> 
    );
}

export default Appointment ;