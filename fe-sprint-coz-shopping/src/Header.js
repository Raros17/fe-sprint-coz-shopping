import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Components/Hamburger'
const Header = () => {
    return (
        <header>
            <div id="logo-title" Link to="./"><img id="logo" src={'로고.png'}/>COZ Shopping</div>
            <div id="hamburger"><i class="fa-solid fa-bars"></i></div>
            <Hamburger />
        </header>
    )
}
export default Header;