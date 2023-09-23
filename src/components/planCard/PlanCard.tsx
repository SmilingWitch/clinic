import Button from "../button/Button";
import "./PlanCard.css"
import {Link} from "react-router-dom"

function PlanCard(props:{icon: React.ReactNode, name: string, text: string, btnName: string}) {
    return (
        <div className="plans">
                <div className="plansCard">
                    <div className="iconPlans">
                        {props.icon}
                    </div>
                    <div className="plansName">
                        {props.name}
                    </div>
                    <div className="plansText">
                        {props.text}
                    </div>
                    <div className="planBtn">
                        <Link to = "/clinic/appointment" ><Button name = {props.btnName}/></Link>
                    </div>
                </div>
            </div>
    );
}

export default PlanCard ;