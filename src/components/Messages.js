import React from 'react'

function Messages({ message, username}) {
    
    const  isUser = username === message.username

    return (
        <div className={`message ${isUser && 'message-user'}`}>
            <span className={isUser ? "user-right" : "user-left"}>{message.username}</span> <br/>
            <p className={`message-content ${isUser ? "message-user-card" : 'message-guest-card'}`}>
                {message.text}
            </p>
        </div>
    )
}

export default Messages
