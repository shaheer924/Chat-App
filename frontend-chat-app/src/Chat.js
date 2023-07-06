import React, { useEffect, useState } from 'react'

function Chat({socket, room, id}) {
    const [message, setMessage] = useState('')

    const sendMessage = async () => {
        await socket.emit('send_message', {
            id: id,
            message,
            room,
            time: new Date().getTime()
        })

        setMessage("")
    }

    useEffect(()=> {
        socket.on('receive_message', (data) => {
            console.log(data)
        })
    })
    return (
        <div>
            <input type="text" onChange={e=>setMessage(e.target.value)}></input>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    )
}


export default Chat