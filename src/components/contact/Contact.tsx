import Button from "../button/Button";
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div className="appo">
                Date Form
            </div>
            <div className="Contactinfo">
                <p>Please complete this simple form to request an appointment with your specialist. 
                   <br/> Let us know the date and time you would like to be seen, and we will respond to your request as soon as possible. 
                    Thank you very much for trusting us.</p>
            </div>
            <div className="form">
            <form action=""> 
                <div className="principalInfo">
                    <input type="text" required name="contactName" className="form-control" placeholder="Name(required)"/>
                    <input type="email" required name="contactName" className="form-control" placeholder="Email(required)"/>
                    <input type="tel" required name="contactName" className="form-control" placeholder="Phone(required)"/>
                    <input type="text" name="contactName" className="form-control" placeholder="Why make an appointment?"/>
                </div>
                <div className="sintoms">
                <textarea  className="form-control" placeholder="Explain us a little more?"/>
                </div>
                <div className="bxBtn4">
                    <button  type= "submit" className="primaryBtn">
                        <Button name= "Submit"></Button>
                    </button>
                </div>
                
            </form>

                

            </div>
        </div>
        
    );
}

export default Contact ;