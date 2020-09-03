import React, { useState, useEffect } from 'react';
import Messages from './Messages'
import db from '../firebase';
import firebase from 'firebase'
import Loader from './Loader'

const AddText = () => {
    
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);
    const [username, setUser] = useState('');
    const [id, setId] = useState(null)

    useEffect(() => {
        // setUser(prompt("Please enter your name"))
        let localData = JSON.parse(localStorage.getItem("USERNAME"))
        // console.log(localData.username);
        if(localData){
            if(localData.username){
                setUser(localData.username)
            } else {
                setUser('unknown user')
            }
            setId(localData.id)
        } else {
            let userDetails = {
                username: prompt("Please enter your name"),
                id: Math.random()
            }
            localStorage.setItem("USERNAME", JSON.stringify(userDetails))
            if(userDetails.username){
                setUser(userDetails.username)
            } else {
                setUser('unknown user')
            }
            setId(userDetails.id)
        }


    }, [])

    useEffect(() => {
        db.collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot =>{
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [] )

    const sendMessage = (e) => {

        e.preventDefault()
        if(input.trim().length > 0){
            setMessages([...messages, {username: username, text: input, id: id}])
            db.collection('messages').add({
                text: input,
                username: username,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                id: id
            })
        setInput('')
        } else {
            setInput('')
        }
    }

    const handleChange = (e) => {
        let localData = JSON.parse(localStorage.getItem("USERNAME"))
        let newUserName = prompt("Please enter your new username")
        if(newUserName) {
            let userDetails = {id: localData.id, username: newUserName}
            localStorage.setItem("USERNAME", JSON.stringify(userDetails))
            setUser(newUserName)
        }
    }

    const text = messages.length ? (
        messages.map((message) => {
            return <Messages message={message} id={id} key={Math.random()} />
        })
    ) : <Loader /> ;
    // username={username}

    return (
        <div className="dashboard">
            <form onSubmit={sendMessage}>
                <input className="white-text" type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" />
                <button disabled={!input} className="btn-small btn-style z-depth-1 black">Send</button>
            </form>
            <div className="center">
                 <button className="btn-small blue" onClick={handleChange}>Edit username?</button>
            </div>
            {text}
        </div>
    )
}

export default AddText