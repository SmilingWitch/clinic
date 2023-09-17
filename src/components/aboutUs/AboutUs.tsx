import Button from "../button/Button";
import "./AboutUs.css"

function AboutUs() {
    return (
        
        <div className="aboutBx">
            <div className="abInfo">
                <div className="adInfoS">
                    <div className="abHeader">
                        We Are Always Ensure Best Medical Treatment 
                    </div>
                    <div className="adtext">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta hic, optio modi dicta, excepturi at amet aperiam aspernatur nihil reiciendis perspiciatis dolor sequi, iusto error adipisci odit vitae nam.</p>
                    </div>
                    <div className="btnBx">
                        <Button name = "More About Us"/>
                    </div>
                </div>
            </div>
            <div className="bsImgBx">
                <div className="adImgS">
                    <div className="img1">
                        <img src="medium-shot-scientists-posing-together.jpg" alt="" />
                    </div>
                    <div className="img2">
                        <img src="woman-showing-papers-patient.jpg" alt="" />
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default AboutUs ;