import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import "./Center.css"
import HeaderOption from './HeaderOption'; 
import ImageIcon from "@material-ui/icons/Image"
import GifSharpIcon from "@material-ui/icons/GifSharp"
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Feed from './Feed';
import {db} from './firebase';
import {useDispatch,useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import {logout} from './features/userSlice';
import {auth} from './firebase';
// import firebase from 'firebase'
function Center() {
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const[input,setInput]=useState("");
    const [posts,setPosts]=useState([])
    useEffect(()=>{
          db.collection("posts").onSnapshot((snapshot)=>
              setPosts(snapshot.docs.map(doc=> (
                  {
                      id:doc.id,
                      data:doc.data()
                  }
              ))
    ))
     },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:'@' + user.displayName,
            message:input,
            //timestamp:firebase.firestore.FieldValue.serverTimeStamp()
        })
        setInput('')
    }
    const handleLogOut=()=>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="middle">
            <div className="header">
                <div className="header-first">
                    <h3>Home</h3>
                    <button className="tweet" onClick={handleLogOut}>LogOut</button> 
                    </div>
                <div className="header-second">
                    <Avatar>{user.displayName[0]}</Avatar>
                    <form onSubmit={handleSubmit}>
                    <input type="text" className="heading" placeholder="What's happening?" value={input} onChange={(e)=>setInput(e.target.value)}/>
                    </form>
                </div>
                <div className="header-option">
                    <div className="icons">
                <HeaderOption Icon={ImageIcon}/>
                <HeaderOption Icon={GifSharpIcon}/>
                <HeaderOption Icon={EqualizerIcon}/>
                <HeaderOption Icon={InsertEmoticonIcon}/>
                <HeaderOption Icon={CalendarTodayIcon}/>
                </div>
                <button className="tweet" onClick={handleSubmit}>Tweet</button>
                </div>
            </div>
            {posts.map(({id,data:{name,description,message}})=>(
                <Feed 
                key={id}
                name={name}
                description={description}
                message={message}
                />
            ))}
        </div>
    )
}

export default Center
