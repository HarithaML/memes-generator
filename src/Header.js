import React from "react";
import "./Header.css";
import TrollFace from "./images/Trollface.png"

function Header() {
    return(
        <header>
            <div className="headerContainer">
                <img
                className="photo"
                src={TrollFace}
                alt="Problem?"/>
                <p className="headerText">Meme Generator</p>
            </div>

        </header>
    )
}

export default Header
