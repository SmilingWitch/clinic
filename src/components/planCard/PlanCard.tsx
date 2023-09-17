import Button from "../button/Button";
import "./PlanCard.css"

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
                        <Button name = {props.btnName}/>
                    </div>
                </div>
            </div>
    );
}

export default PlanCard ;