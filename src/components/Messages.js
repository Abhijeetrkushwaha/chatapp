import React from 'react'

function Messages({ message, id}) {
    
    // const  isUser = username === message.username
    // let localData = JSON.parse(localStorage.getItem("USERNAME"))
    // console.log(id, localData.id);
    const isId = id === message.id

    return (
        <div className={`message ${isId && 'message-user'}`}>
            <span className={isId ? "user-right" : "user-left"}>{message.username }</span> <br/>
            <p className={`message-content ${isId ? "message-user-card" : 'message-guest-card'}`}>
                {message.text}
            </p>
        </div>
    )
}

export default Messages
