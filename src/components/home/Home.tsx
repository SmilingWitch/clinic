import Button from "../button/Button";
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="infoHeader">
                <div className="infoBx">
                    <div className="header">
                        <span>Dedicated to Hope, Healing & Recovery</span>
                    </div>
                    <div className="infoH">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, similique laboriosam. Numquam sed iste quis quisquam, eum ipsa cum a unde minima veniam magnam consequatur. Exercitationem dolor officiis excepturi nam!</p>
                    </div>
                    <div className="btnBx1">
                        <Button name = "Meet our Employees"/>
                    </div>
                </div>
            </div>
            
            <div className="sideBx">
                <div className="circleBx">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>
                <div className="imgHome">
                    <img src="pngegg5.png" alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Home ;