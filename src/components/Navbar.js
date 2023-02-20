import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import '../css/navbar.css';

// assets
import avatar from '../assets/profile-11.jpg';

// icons
import { FaBell } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

function Navbar(){
    const { open_sidebar } = useContext(SidebarContext);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-container">
                <div className="app__navbar-row">
                    <div className="app__navbar-row_col-left">
                        <div className="app__navbar-menu">
                            <MdMenu onClick={open_sidebar} />
                        </div>
                        <img className="app__avatar" src={avatar} alt="" />
                        <h4> Welcome Back, Chris </h4>
                    </div>
                    <div className="app__navbar-row_col-right">
                        <FaBell />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;