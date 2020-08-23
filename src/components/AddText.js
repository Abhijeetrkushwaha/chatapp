import React, { useState, useEffect } from 'react';
import Messages from './Messages'
import db from '../firebase';
import firebase from 'firebase'

const AddText = () => {
    
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
    ]);
    const [username, setUser] = useState('');

    useEffect(() => {
        setUser(prompt("Please enter your name"))
    }, [])

    useEffect(() => {
        db.collection('messages').onSnapshot(snapshot =>{
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [] )

    const sendMessage = (e) => {

        e.preventDefault()
        // setMessages([...messages, {username: username, text: input}])
        db.collection('messages').add({
            text: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    const text = messages ? (
        messages.map((message) => {
            return <Messages message={message} username={username} key={Math.random()} />
        })
    ) : null ;

    return (
        <div className="dashboard">
            <form onSubmit={sendMessage}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" />
                <button disabled={!input} className="btn-small btn-style z-depth-1 black">Send</button>
            </form>
            {text}
        </div>
    )
}

export default AddText