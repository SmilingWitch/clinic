import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ServiceCard from '../serviceCard/ServiceCard';
import {BiSolidBrain} from "react-icons/bi"
import {GiHeartOrgan} from "react-icons/gi"
import {MdChildFriendly} from "react-icons/md"
import {BiSolidDonateBlood} from "react-icons/bi"
import ExpertCard from '../expertCard/ExpertCard';

function Slider() {
    return (
        <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={4000}
  centerMode = {false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  /*draggable*/
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
 
  
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

<ExpertCard name = "Daniela Yero" photo = "Female doctor sitting at the desk.jpg" esp = "Cardiologist"/>
<ExpertCard name = "Alejandro Garcia" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Pediatric"/>
<ExpertCard name = "Daniela Yero" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Cardiologist"/>
<ExpertCard name = "Daniela Yero" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Cardiologist"/>
<ExpertCard name = "Daniela Yero" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Cardiologist"/>
<ExpertCard name = "Daniela Yero" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Cardiologist"/>
<ExpertCard name = "Daniela Yero" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Cardiologist"/>
<ExpertCard name = "Daniela Yero" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Cardiologist"/>
<ExpertCard name = "Daniela Yero" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Cardiologist"/>
<ExpertCard name = "Daniela Yero" photo = "Doctor hombre apuntando el dedo hacia el lado Foto Premium.jpg" esp = "Cardiologist"/>
            
</Carousel>


    );
}

export default Slider ;