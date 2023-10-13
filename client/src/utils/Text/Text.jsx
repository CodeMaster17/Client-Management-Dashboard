import React from 'react'
import './Text.css'

const Text = ({ text, styling }) => {
    return (
        <p className='text'>{text}</p>
        // <div>Paragraph</div>
    )
}

export default Text