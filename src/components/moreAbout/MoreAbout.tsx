import ConsultInfo from "../consultInfo/ConsultInfo";
import Contact from "../contact/Contact";
import "./MoreAbout.css"

function MoreAbout() {
    return (
        <div className="contMAbout">
            <div className="medicBg"></div>
            <div className="aboutCont">
                <div className="aboutFront">
                    <div className="MAHeader">
                        About Us
                    </div>  
                </div>
                <div className="textMA">
                    <span>- Tu salud, nuestra prioridad -</span>  
                </div>
            </div>
            <div className="who">
                <div className="whoBx">
                    <div className="whoHeader">Quienes somos?</div>
                    <p>
                        Somos una clínica médica comprometida con el bienestar y la atención de nuestros pacientes. Nos enorgullece contar con un equipo médico altamente capacitado que trabaja en conjunto para ofrecer una atención integral y de vanguardia. Creemos en la importancia de establecer una relación de confianza y respeto con nuestros pacientes, proporcionando un ambiente acogedor y cálido donde se sientan valorados y cuidados. 
                    </p>
                </div>
            </div>
            <div className="mission">
                <div className="missBx">
                    <div className="miss">
                        Mision
                    </div> 
                    <p>En nuestra clínica médica, nuestro objetivo es brindar atención médica excepcional y personalizada a nuestros pacientes. Nos esforzamos por ofrecer servicios de alta calidad, utilizando tecnología avanzada y contando con un equipo médico altamente capacitado. Nuestra misión es ser la opción preferida de atención médica para nuestros pacientes, proporcionando un enfoque integral y centrado en el paciente. Nos comprometemos a brindar una experiencia excepcional a través de un trato amable, un ambiente acogedor y una atención médica de vanguardia. Nuestro objetivo es ser reconocidos como líderes en el campo de la salud, ofreciendo servicios innovadores y mejorando la calidad de vida de nuestros pacientes</p>        
                </div>
            </div>
            <div className="contact_info">
                <Contact/>
                <ConsultInfo/>
            </div>
            
        </div>           
    );
}

export default MoreAbout ;