import React from 'react'
import { Link } from 'react-router-dom'
import "./Link.css"
const LinkComponent = ({ link, text }) => {
    return (
        <Link className='link' to={`/` + `${link}`}>
            {text}
        </Link>
    )
}

export default LinkComponent