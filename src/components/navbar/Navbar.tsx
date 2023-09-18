import { NavLink } from "react-router-dom";
import {RiCactusFill} from "react-icons/ri";
import {RiMenuLine} from "react-icons/ri";
import {useState, useEffect} from  "react";
import {BiCart} from "react-icons/bi"
import "./Navbar.css";
import { BsArrowDownShort } from "react-icons/bs";
import axios from "axios";


function Navbar() {

    const [hMenu,setHmenu] = useState(false) ;
    const [items, setItems] = useState();
    const [circle, setCircle] = useState();
    /*const token = localStorage.getItem('token');*/

   
    /*const  SingOut = async () => {``
        const token = localStorage.getItem('token');

        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        };
        
            let res = await axios.get("http://localhost:8000/logout/", config);
            console.log(res);
            localStorage.setItem('token', "");
            localStorage.setItem('refresh_token', "");
    }*/


    /*function renderContent() {
        if (token === "") {
          return <NavLink to = "/login" className = "log" onClick = {() => {setHmenu(!hMenu)}}  >Sing in</NavLink>
        } else {
          return <div className =  "log" onClick={SingOut} > Sing Out </div>;
        }
      }*/
    

    return(
    <div className="bar">
        <div className="hamburguerMenu">     
            <div className="list"> 
                <ul className= {hMenu === true  ? "Active dropdown" : "notActive dropdown" } >
                    <li>
                        <div className="a"> Home</div>  
                    </li>
                    <li>
                        <div className="a" >About</div>
                    </li>
                    <li>
                        <div className="a">Services</div>
                    </li>
                    <li>
                        <div className="a">Programs</div>
                    </li>
                    <li>
                        <div className="a"> Contact us</div>
                    </li>
                </ul>
                <div className="menu" >
                    <RiMenuLine className="Micon" onClick={() => {setHmenu(!hMenu)}} />
                </div>
            </div>
    </div>

    </div>
    )


}

export default Navbar ;