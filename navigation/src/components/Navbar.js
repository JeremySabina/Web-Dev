import React from "react";
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <li>
                <Link to="/"> Home</Link>
            </li>
            <li>
                <Link to="/photos"> Photos</Link>
            </li>
            <li>
                <Link to="/contact-us"> Contact Us</Link>
            </li>
        </div>
    )
}

export default Navbar