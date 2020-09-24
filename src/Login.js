import React,{useState,useEffect} from 'react'
import "./Login.css"
import {Link,useHistory} from "react-router-dom"
import { auth } from './firebase';



function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //some fancy firebase work here
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))

    }

    const register = e =>{
        e.preventDefault();
        //some firebase work here
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            //it successfully created a new user with email and password
            console.log(auth);
        })
        .catch(error=>alert(error.message))
    }

    return (
        <div className="login" >
            <Link to="/" >
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="login_logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}  />
                    <button type="submit" className="login__signInButton" onClick={signIn} >Sign In</button>
                </form>
                <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>

                    <button onClick={register} className="login__registerButton" >Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
