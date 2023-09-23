import "./ConsultInfo.css"
import {AiFillPhone} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {ImLocation} from "react-icons/im"

function ConsultInfo() {
    return (
        <div className="consultBx"> 
            <div className="iconBx">
                <div className="header1">
                    <div>Our Consult</div> 
                </div>
                <div className="infoBx1">
                    <div className="icon">
                        <AiFillPhone/>
                    </div>
                    <div className="number">
                        +53 58215536
                    </div>
                </div>
                <div className="infoBx1">
                    <div className="icon">
                        <MdEmail/>
                    </div>
                    <div className="number">
                        d@gmail.com
                    </div>
                </div>
                <div className="infoBx1">
                    <div className="icon">
                        <ImLocation/>
                    </div>
                    <div className="number">
                        BARCELON<br/>
                        1. Consell de Cent, 284 entlo. <br/>
                        2. Diputació, 256 (Pg. de Gràcia, 19), 2º 1ª
                    </div>
                </div>
            </div>
            <div className="opening">
                <div className="header2">
                  Opening hours
                </div>
                <div className="hours">
                <span>Monday - Fryday</span>
                <span> 9:00 - 21:00</span>
                </div>
            </div>
        </div>
    );
}

export default ConsultInfo ;