import ConsultInfo from "../consultInfo/ConsultInfo";
import Contact from "../contact/Contact";
import OnlineAppointment from "../onlineAppointment/OnlineAppointment";
import "./ServiceView.css"

function ServiceView() {
    return (
        <div>

            <div className="background5"></div>
            <div className="servVBx">
                <div className="ServInfo">
                    <div className="servHeader">
                        Services
                    </div>
                    <div className="servText">
                        <p>- Know our services -</p>
                    </div>
                </div>
            </div>
            <div className="serviceBx">
                <p>You will be assisted by our medical team of highly trained professionals in various specialties.
                    You can access any treatment from the same consultation.
                </p>
                <div className="imgBox">
                    <div className="imgCont">
                        <div className="img1">
                            <img src="Friendly geriatrician talking with f.jpg" alt="" />
                        </div>
                    </div> 
                </div>
            </div>
            <div className="serviceList">
                <div className="header">
                    Our Services
                </div>
                <div className="listofServices">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati velit ullam praesentium iure voluptatibus blanditiis temporibus. Laudantium fugiat facilis corporis eligendi possimus reprehenderit id totam veritatis ad distinctio. Quas, in!
                </div>
            </div>
            <Contact/>
            <ConsultInfo/>

        </div>
        
    );
}

export default ServiceView ;