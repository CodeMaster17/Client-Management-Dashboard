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
            <p className="color-white sidebarHeading">Member Manager</p>
            <ul className="linkContainer" style={{ width: "100%" }}>
                <p className="linkHeading">Dashboard</p>
                <LinkComponent to={"home"} name="Home" />
                <LinkComponent to={"register"} name="Add user" />

                <LinkComponent to={"home"} name="Visualize" />

                <LinkComponent to={"home"} name="" />

            </ul>

        </div>
    )
}

export default Sidebar