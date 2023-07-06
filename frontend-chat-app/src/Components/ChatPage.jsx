import React from 'react'
import '../Assets/CSS/ChatPage.css'
import { Container, Row, Col } from 'react-bootstrap'

function ChatPage() {
    return (
        <div className='chatapp'>
            <Container >
                <Row className='main-box'>
                    <Col lg={3} md={3} className='user-box'>
                        User Listing
                    </Col>
                    <Col>
                        Message Box
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ChatPage
