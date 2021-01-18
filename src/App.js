import React,{useEffect} from 'react';
import './App.css';
import Left from './Left';
import Center from './Center';
import {useDispatch,useSelector} from 'react-redux';
import {login,logout,selectUser} from './features/userSlice'
import {auth} from './firebase'
import Login from './Login';
function App() {
  const dispatch=useDispatch()
  const user=useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
        }))
    }
    else{
      dispatch(logout())
    }
    })
  },[])
  return (
      <div>
      {!user?(<Login/>):(
        <div className="app">
        <Left/>
      <Center/> 
      </div>)}
    </div> 
  );
}

export default App;
