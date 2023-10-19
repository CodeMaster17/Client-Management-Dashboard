import React from 'react'

const Button = ({ text }) => {
    return (
        <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"> {text} </button>
    )
}

export default Button