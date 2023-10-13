import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

const LinkComponent = ({ to, name }) => {
    return (
        <>
            <Link to={`/` + `${to}`} className='link'>
                {name}
            </Link>
        </>
    )
}

const Sidebar = () => {
    return (
        <div className='sidebarConatiner'>
            <p className="color-white sidebarHeading">VoyagerVista</p>
            <ul className="linkContainer" style={{ width: "100%" }}>
                <p className="linkHeading">Member Dashboard</p>
                <LinkComponent to={"home"} name="Home" />
                <LinkComponent to={"register"} name="Add user" />

                <LinkComponent to={"visualize"} name="Visualize" />
                <p className="linkHeading">Website Dashboard</p>

                <LinkComponent to={"addplace"} name="Add Place" />

            </ul>

        </div>
    )
}

export default Sidebar