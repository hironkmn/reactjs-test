import React from "react";
import logo from "../assets/logo (1).svg"

const Header = (props) => {
    return(
        <div id="header">
           <img src={logo} alt="Logo" />
           <ul id="menu-header">
            <li>ACCUEIL</li>
            <li>RECHERCHE</li>
           </ul>
        </div>
    )
}

export default Header;