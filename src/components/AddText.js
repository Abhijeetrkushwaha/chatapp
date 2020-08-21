import React, { useState } from 'react';
import Messages from './Messages'

const AddText = () => {
    
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);

    const sendMessage = (e) => {

        e.preventDefault()
        setMessages([...messages, input])
        setInput('')

    }

    const text = messages ? (
        messages.map((message) => {
            return <Messages message={message} key={Math.random()} />
        })
    ) : null ;

    return (
        <div className="container">
            <form onSubmit={sendMessage}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <button>Send message</button>
            </form>

            {text}

        </div>
    )
}

export default AddText