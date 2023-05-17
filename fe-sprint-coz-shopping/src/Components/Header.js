import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
const Header = () => {
    const [nav, setNav] = useState(false);
    const hamburgerOpen = () => {
        nav === true
        ? setNav(false)
        : setNav(true)
    }
    return (
        <header>
            <Link to="./">
            <div id="logo-title"><img id="logo" src={ require('../Image/로고.png') }></img>COZ Shopping</div></Link>
            <div id="hamburger" onClick={hamburgerOpen}><i class="fa-solid fa-bars"></i></div>
            {nav ===true?<Hamburger />: null}
        </header>
    )
}
export default Header;