import React, { useState } from 'react'
import './Login.css'
import ButtonComponent from '../../utils/Button/Button'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {

    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    signInWithEmailAndPassword(auth, gmail, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });




    return (
        <div className='loginContainer'>
            <div className="loginBox">
                <div className='loginForm'>
                    <p className='loginHeading'>Login</p>
                    <form action="" className='formContainer'>
                        <div className='inputContainer'>
                            <label htmlFor="gmail">Gmail</label>
                            <input type="text" name="gmail" id="" />
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" id="" />
                        </div>
                        <ButtonComponent text='Login' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login