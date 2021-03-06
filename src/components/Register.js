import React, { useState, useContext } from 'react'


import { Link, withRouter } from 'react-router-dom'
import { ICON_LOGO } from '../Icons'


const Register = (props) => {
    //const { actions } = useContext(StoreContext)
   
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignUp = (e) => {
        e.preventDefault()
        if(username.length && password.length && email.length && name.length){
            const values = {
                name,
                username,
                email,
                password,
                func: Redirect
            }

        }
    }

    const Redirect = () => {
        props.history.push('/login')
    }

    return(
        <div className="signup-wrapper">
            <ICON_LOGO styles={{fill:"rgb(29,161,242)", width:'47px', height:"30px"}}/>
                    <span className="navbar-toggler-icon"></span>
                <h1 className="signup-header">
                Sign up  to be Twitterati
            </h1>
            <form id="signupForm" onSubmit={(e)=>SignUp(e)} className="signup-form">
                <div className="signup-input-wrap">
                    <div className="signup-input-content">
                        <label>Name</label>
                        <input onChange={(e)=>setName(e.target.value)} name="name" type="text" className="signup-input"/>
                    </div>
                </div>
                <div className="signup-input-wrap">
                    <div className="signup-input-content">
                        <label>Username</label>
                        <input onChange={(e)=>setUsername(e.target.value)} name="username" type="text" className="signup-input"/>
                    </div>
                </div>
                <div className="signup-input-wrap">
                    <div className="signup-input-content">
                        <label>Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} name="email" type="email" className="signup-input"/>
                    </div>
                </div>
                <div className="signup-input-wrap">
                    <div className="signup-input-content">
                        <label>Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} name="password" type="password" className="signup-input"/>
                    </div>
                </div>
                <button type="submit" form="signupForm" className={username.length && password.length && name.length && email.length ? "signup-btn-wrap button-active": "signup-btn-wrap"}>
                    Sign up
                </button>
            </form>
            
        </div>
    )
}

export default Register