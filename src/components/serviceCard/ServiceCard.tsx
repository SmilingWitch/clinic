import Button from "../button/Button";
import {Link} from "react-router-dom"
import "./ServiceCard.css"


function ServiceCard(props:{ name: string, icon: React.ReactNode; text: string }) {
    return (
        <div className="sCard">
                <div className="icon">
                    {props.icon}
                </div>
                <div className="sCardHeader">
                    {props.name}
                </div>
                <div className="stext">
                   <p>{props.text}</p> 
                </div>
                <div className="btnBx2"> 
                   <Link to = "/clinic/services"><Button name = "Read More"/></Link> 
                </div>
        </div>
    );
}

export default ServiceCard ;