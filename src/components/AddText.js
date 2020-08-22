import React, { useState, useEffect } from 'react';
import Messages from './Messages'

const AddText = () => {
    
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {username: 'abhi', text: 'hi'},
        {username: 'abhijeet', text: 'hello'}
    ]);
    const [username, setUser] = useState('');

    useEffect(() => {
        setUser(prompt("Please enter your name"))
    }, [])

    const sendMessage = (e) => {

        e.preventDefault()
        setMessages([...messages, {username: username, text: input}])
        setInput('')
    }

    const text = messages ? (
        messages.map((message) => {
            return <Messages message={message.text} username={message.username} key={Math.random()} />
        })
    ) : null ;

    return (
        <div className="dashboard">
            <form onSubmit={sendMessage}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Write a message" />
                <button disabled={!input} className="btn btn-style z-depth-1 black">Send</button>
            </form>
            {text}
        </div>
    )
}

export default AddText