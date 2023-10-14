import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import homeLogo from '../../assets/icons/home.svg'
const Sidebar = () => {
    return (
        <div className='sidebarConatiner'>
            <p className="color-white sidebarHeading">
                <img src={logo} alt="" className='sidebarLogo' />
                &nbsp;
                Voyager Vista</p>
            <ul className="linkContainer" style={{ width: "100%" }}>
                <p className="linkHeading">
                    Home</p>
                <LinkComponent to={""} name="Member Dashboard" />
                <LinkComponent to={"viewplacedata"} name="Places Dashboard" />
                <LinkComponent to={"register"} name="Add user" />

                <LinkComponent to={"visualize"} name="Visualize" />
                <p className="linkHeading">Website Dashboard</p>

                <LinkComponent to={"addplace"} name="Add Place" />

            </ul>

        </div>
    )
}
const LinkComponent = ({ to, name }) => {
    return (
        <>
            <Link to={`/` + `${to}`} className='link'>
                {name}
            </Link>
        </>
    )
}

export default Sidebar