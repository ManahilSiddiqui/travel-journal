import React from 'react';
import globe from '../images/Fill123.png';



export default function Navbar() {

    return (

        <nav  className="nav">
                <img src={globe} className="globe-picture" alt="globe" />
                <p className="header">my travel journal</p>
            </nav>
    )
}