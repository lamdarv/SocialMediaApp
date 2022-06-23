import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" className="" />
            <div className="Webname">
                <h1>Twittahhhh</h1>
                <h6>Don't explore the ideas in here!</h6>
            </div>
        </div>
        
        <LogIn />
    </div>
  )
}

function LogIn(){
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Log In</h3>
                <div>
                    <input 
                        type="text" 
                        className="infoInput"
                        name="username"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        className="infoInput"
                        name="password"
                        placeholder="Password" 
                    />
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account? Sign Up.</span>
                </div>
                <button className="button infoButton">Sign Up</button>
            </form>
        </div>
    )
}

function SignUp(){
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign Up</h3>
                <div>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        className="infoInput" 
                        name="firstname" 
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        className="infoInput"
                        name="lastname" 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        className="infoInput"
                        name="username"
                        placeholder="Usernames"
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        className="infoInput"
                        name="password"
                        placeholder="Password" 
                    />
                    <input 
                        type="text"
                        className="infoInput"
                        name="confirmpass"
                        placeholder="Confirm Password" 
                    />
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Already have an account? Login.</span>
                </div>
                <button className="button infoButton">Sign Up</button>
            </form>
        </div>
    )
}


export default Auth