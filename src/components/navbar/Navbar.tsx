import { NavLink } from "react-router-dom";
import {RiCactusFill} from "react-icons/ri";
import {RiMenuLine} from "react-icons/ri";
import {useState, useEffect} from  "react";
import {BiCart} from "react-icons/bi"
import "./Navbar.css";
import { BsArrowDownShort } from "react-icons/bs";
import axios from "axios";
import {Link, } from "react-router-dom"


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


      const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div  className="brand-name" onClick={closeMenu}>
        <div className="logo">
            <img src="[removal.ai]_4ccfff7d-afa8-4ae9-ae72-a664a1635f00-ideogram3.png" alt="" />
        </div>
        <span>Medic</span>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navigation-menu ${showMenu ? 'show' : ''}`}>
        <li>
           <NavLink to = "/clinic/"  className = {({isActive}) => (isActive ? "a active" : "a")} onClick={closeMenu}>Home</NavLink>  
        </li>
        <li>
            <NavLink to = "/clinic/moreAbout" className="a" onClick={closeMenu}>About</NavLink> 
        </li>
        <li>
           <NavLink to = "/clinic/services" className="a" onClick={closeMenu}>Services</NavLink>
        </li>
        <li>
            <NavLink to = "/clinic/appointment" className="a" onClick={closeMenu}>Contact us</NavLink> 
        </li>
      </ul>
    </nav>
  );
}



export default Navbar ;