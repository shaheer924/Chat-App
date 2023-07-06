import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { GetAllUsers } from '../Services/User';


function UserList() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        userList()
    },[])

    const userList = async () => {
        try {
            let response = await GetAllUsers();
            setUsers(response.data.data)
        } catch (e) {

        }
    }
    return (
        <Container className='bg-light w-10'>
            <ListGroup defaultActiveKey="#link1">
                {users.map(dt => {
                    return (
                        <ListGroup.Item action onClick={(e) => console.log(e)} className='d-flex'>
                            <div>
                                <Image src={dt.image} roundedCircle width={"50px"} height={"50px"} className='mr-2' />

                            </div>
                            <div className='mt-2 mx-2' style={{ fontSize: '12px', fontWeight: 'bolder' }}>
                                <div>
                                    {dt.first_name + ' ' + dt.last_name}
                                </div>
                                <div>
                                    Last Recevied
                                </div>
                            </div>
                        </ListGroup.Item>
                    )
                })}

            </ListGroup>
        </Container>
    )
}

export default UserList
