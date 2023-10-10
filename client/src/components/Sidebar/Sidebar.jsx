import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

const LinkComponent = ({ to }) => {
    return (
        <>
            <Link to={`/` + `${to}`} className='link'>
                {to}
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
                <LinkComponent to={"home"} />
                <LinkComponent to={"home"} />

                <LinkComponent to={"home"} />

                <LinkComponent to={"home"} />

            </ul>

        </div>
    )
}

export default Sidebar