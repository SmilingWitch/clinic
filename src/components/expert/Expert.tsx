import Slider from "../slider/Slider";
import "./Expert.css"

function Expert() {
    return (
        <div className="expertBx">
            <div className="expHeader">
                Meet Our Experts
            </div>
            <div className="expertCarousel">
                <Slider/>
            </div>

        </div>
    );
}

export default Expert ;