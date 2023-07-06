import { useState } from 'react';
import './App.css';
// import io from 'socket.io-client'
// import Chat from './Chat';
import UserList from './Components/UserList';
import { Container, Row, Col } from 'react-bootstrap';
import MessageList from './Components/MessageList';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import SetupProfile from './Components/SetupProfile';
import ChatPage from './Components/ChatPage';


// const socket = io.connect('http://localhost:3001')

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/setup-profile",
    element: <SetupProfile />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

function App() {
  // const [id, setId] = useState('')
  // const [room, setRoom] = useState('')

  // const joinRoom = (e) => {
  //   e.preventDefault()
  //   if(id !== "" && room !== ""){
  //     socket.emit('join_room', room)
  //   }else {
  //     alert("Please add user id and room id")
  //   }
  // }
  return (
    <div className='App'>
      {/* <h1 className='text-center'>Chat App</h1>
      {/* <h1>Hello world</h1>
      <form>
        <input type="text" placeholder='id' onChange={(e)=>setId(e.target.value)}></input>
        <input type="text" placeholder="room" onChange={(e)=>setRoom(e.target.value)}></input>
        <button onClick={joinRoom}>Create Room</button>
      </form> */}

      {/* <Chat id={id} room={room} socket={socket} /> */}
      {/* <Container>
        <Row>
          <Col xl={6} className='mt-3 py-2'>
            <UserList />

          </Col>
          <Col  xl={6} className='mt-3 py-2'>
            <MessageList />

          </Col>
        </Row>
      </Container>  */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
