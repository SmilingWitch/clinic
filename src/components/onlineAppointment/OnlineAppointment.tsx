import ConsultInfo from "../consultInfo/ConsultInfo";
import Contact from "../contact/Contact";
import "./OnlineAppointment.css"

function OnlineAppointment() {
    return (
        <div className="online">
            <div className="backgroundOnline"></div>
            <div className="onlinePresentation">
                <div className="onlineAppInfo">
                    <div className="onlineHeader">
                        Make an Appointment
                    </div>
                    <div className="onlineText">
                        <p>- Tell us if you would like to be seen by our experienced team -</p>
                    </div>
                </div>
            </div>
            <div className="InfoBx">
                <div className="contBx">
                    <Contact/>
                </div>
                <div className="conInfoBx">
                    <ConsultInfo/>
                </div>
            </div>
        </div>
    );
}

export default OnlineAppointment ;