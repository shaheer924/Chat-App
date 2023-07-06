import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import './../Assets/CSS/SignIn.css'
import { useForm } from "react-hook-form";
import { Register } from '../Services/User';

function SetupProfile() {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [show, setShow] = useState(false)

    const onSubmit = async (data) => {
        try {
            let response = await Register(data)
            console.log(response.data)
            reset()
            setShow(true)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
    return (
        <div>
            <div className='login'></div>
            <Container>
                {/* <h3 className='text-center'> Chat App </h3> */}
                <div className='d-flex align-items-center justify-content-center'>

                    <div className='login-form'>
                        {/* <h4 className='text-center'> Login </h4> */}
                        <h3 className='text-center'>Add Your Information</h3>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Label className='form-label'>First Name</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" {...register('first_name')} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='form-label'>Last Name</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" {...register('last_name')} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='form-label'>Country Code</Form.Label>
                                <Form.Control type="number" placeholder="name@example.com" {...register('country_code')} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='form-label'>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="name@example.com" {...register('phone')} />
                            </Form.Group>

                            <Button className="login-btn" type="submit">Register</Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SetupProfile
