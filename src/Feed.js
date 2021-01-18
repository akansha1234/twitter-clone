import { Avatar } from '@material-ui/core'
import React from 'react'
import './Feed.css'
function Feed({name,description,message}) {
    return (
        <div className="feed">
            <div className="feed-header">
                <Avatar>{name[0]}</Avatar>
                <h4 className="feed-title">{name}</h4>
                <p className="feed-description">{description}</p>
            </div>
            <p className="message">{message}</p>
        </div>
    )
}

export default Feed
