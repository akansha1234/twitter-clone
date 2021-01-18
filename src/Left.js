import React from 'react'
import './Left.css'
import LeftOptions from './LeftOptions';
import HomeIcon from '@material-ui/icons/Home';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/List';
import MoreIcon from '@material-ui/icons/More';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function Left() {
    return (
        <div className="left">
              <img src="https://www.flaticon.com/svg/vstatic/svg/733/733579.svg?token=exp=1610621131~hmac=99d884a27d3892c480bbd04bfe9d032a" alt="logo" className="logo"/>
          <LeftOptions Icon={HomeIcon} title="Home"/>
          <LeftOptions Icon={NotificationImportantIcon} title="Notifications"/>
          <LeftOptions Icon={MessageOutlinedIcon} title="Messages"/>
          <LeftOptions Icon={BookmarkBorderOutlinedIcon} title="Bookmarks"/>
          <LeftOptions Icon={ListIcon} title="Lists"/>
          <LeftOptions Icon={PersonOutlineIcon} title="Profile"/>
          <LeftOptions Icon={MoreIcon} title="More"/>
          <button className="btn">Tweet</button>
        </div>
    )
}

export default Left
