import "./ExpertCard.css"
import {BiLogoFacebook, BiLogoTwitter,BiLogoLinkedin} from "react-icons/bi"


function ExpertCard(props:{name:string, esp:string, photo: string, fb: string, tw: string, in: string}) {
    return (
        <div className="docCard">
                <div className="docImg">
                    <img src={props.photo} alt="" />
                </div>
                <div className="docInfo">
                    <div className="docName">
                        {props.name}
                    </div>
                    <div className="especialidad">
                        {props.esp}
                    </div>
                    <div className="docSM">
                    <a href={props.fb}><BiLogoFacebook/></a> 
                    <a href={props.tw}><BiLogoTwitter/></a> 
                    <a href={props.in}><BiLogoLinkedin/></a> 
                    </div>
                </div>
        </div>
    );
}

export default ExpertCard ;