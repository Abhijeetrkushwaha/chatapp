import React from 'react'

function Messages({ message, username}) {
    

    return (
        <div>
           <p className="message"><span className="blue-text">{username}</span> <br/> {message}</p>
        </div>
    )
}

export default Messages
