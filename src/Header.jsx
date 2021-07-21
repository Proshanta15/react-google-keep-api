import React from 'react';
import logo from './images/logo.png';

const Header = () =>{
    return(
        <>
            <div className="header">
                <img className="logo" src={logo} alt="icon" width='70' height="50"/>
                <h1>Proshanta Roy</h1>
            </div>

        </>
    )
}
export default Header;