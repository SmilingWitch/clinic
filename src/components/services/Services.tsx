import "./Services.css"
import ServiceCard from "../serviceCard/ServiceCard";
import {BiSolidBrain} from "react-icons/bi"
import {GiHeartOrgan} from "react-icons/gi"
import {MdChildFriendly} from "react-icons/md"
import {BiSolidDonateBlood} from "react-icons/bi"

function Services() {
    return (
        <div className="services">
            <div className="serviceHeader">
                Services For Your Health
            </div>
            <div className="servBx">
                <ServiceCard name = "Neurology Clinic" icon = {<BiSolidBrain/>} text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab praesentium nesciunt dicta, rerum, harum eum ex fugiat id officiis ea! Sed repellat exercitationem rerum explicabo in quae id laborum!"/>
                <ServiceCard name = "Pediatric Clinic" icon = {<MdChildFriendly/>} text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab praesentium nesciunt dicta, rerum, harum eum ex fugiat id officiis ea! Sed repellat exercitationem rerum explicabo in quae id laborum!"/>
                <ServiceCard name = "Cardiac Clinic" icon = {<GiHeartOrgan/>} text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab praesentium nesciunt dicta, rerum, harum eum ex fugiat id officiis ea! Sed repellat exercitationem rerum explicabo in quae id laborum!"/>
                <ServiceCard name = "Donate Clinic" icon = {<BiSolidDonateBlood/>} text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab praesentium nesciunt dicta, rerum, harum eum ex fugiat id officiis ea! Sed repellat exercitationem rerum explicabo in quae id laborum!"/>
            </div>

        </div>
    );
}

export default Services ;