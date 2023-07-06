import React from 'react'
import { Button } from 'react-bootstrap'

function MessageList() {
  return (
    <div>
      <container>
        <div className='bg-warning'>
            Chat
        </div>
        <div>
            
        </div>
        <div style={{backgroundColor: 'gray', width: '100%'}} className='d-flex'>
            <input type="text" style={{width: '100%', height: '100%'}}></input>
            <Button>Send</Button>
        </div>
      </container>
    </div>
  )
}

export default MessageList
