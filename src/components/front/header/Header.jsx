import React from "react";
import { Route, Link } from "react-router-dom";
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping as Icon } from "@fortawesome/free-solid-svg-icons";
import logo from '../header/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header__links">
                <ul>
                    <li>
                        <Link to="/" className='logo'>
                        <img src={logo} className="header__logo"/>
                        </Link>
                    </li>
                    
                    <li><Link to="/">Book Shop</Link></li>
                    <li>
                        <Link to="/cart" className="header__cart">
                        <FontAwesomeIcon icon={Icon} />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header