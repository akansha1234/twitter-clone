import React,{useState} from 'react'
import './Login.css';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';
import {auth} from './firebase';

function Login() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const register=()=>{
        if(!name){
           return alert("Please Enter Full Name")
        }
        auth.createUserWithEmailAndPassword(email,password).then(
            (userAuth)=>{
                userAuth.user.updateProfile({
                    displayName:name
                })
                .then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                    }))
                })
            }
        ).catch((error)=>alert(error.message))
    }
    const loginToApp=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
               dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
               }))
        }).catch((error)=>alert(error.message))

    }
    return (
        <div className="login">
           <img src="https://www.flaticon.com/svg/vstatic/svg/733/733579.svg?token=exp=1610621131~hmac=99d884a27d3892c480bbd04bfe9d032a"/>
            <form>
                <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder="FullName(required)"/>
                <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
                <span className="login-register" onClick={register}>Register Now</span>
            </p>
            
        </div>
    )
}

export default Login
