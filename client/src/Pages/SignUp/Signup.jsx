import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from "../../firebase-config"
const Signup = () => {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const [currentUser, setCurrentUser] = useState({})

    onAuthStateChanged(auth, (loggedUser) => {
        setCurrentUser(loggedUser)
    })

    const register = async () => {
        try {

            const user = await createUserWithEmailAndPassword(
                auth,
                userEmail,
                userPassword
            )
            console.log(user)
        } catch (error) {
            console.log("error : ", error.message)
        }
    }



    return (

        <div>

            <p>
                Signup
            </p>
            <label htmlFor="name" >Name</label>
            <input type="text" id="name" placeholder="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <label htmlFor="email" >Email</label>
            <input type="email" placeholder="name" id='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            <label htmlFor="password" >Password</label>
            <input type="text" placeholder="password" id='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
            <button onClick={register}>
                Register
            </button>

            <h4>Current User Logged in</h4>
            {currentUser.email}
        </div>
    )
}

export default Signup