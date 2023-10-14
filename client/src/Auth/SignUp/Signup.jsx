import React from 'react'
import './signUp.css'
import ButtonComponent from '../../utils/Button/Button'
const Signup = () => {
    return (
        <div className='loginContainer'>
            <div className="loginBox">
                <div className='loginForm'>
                    <p className='loginHeading'>Sign Up</p>
                    <form action="" className='formContainer'>
                        <div className='inputContainer'>
                            <label htmlFor="gmail">Name</label>
                            <input type="text" name="name" id="" />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="gmail">Gmail</label>
                            <input type="text" name="gmail" id="" />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" id="" />
                        </div>
                        <ButtonComponent text='SignUp' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup