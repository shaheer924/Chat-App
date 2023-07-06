import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import './../Assets/CSS/SignIn.css'
import { useForm } from "react-hook-form";
import { Login } from '../Services/User';


function SignIn() {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [show, setShow] = useState(false)

    const onSubmit = async (data) => { 
        try {
            let response = await Login(data)
            console.log(response.data)
            reset()
            setShow(true)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (
        <div >
            <div className='login'></div>
            <Container>
                {/* <h3 className='text-center'> Chat App </h3> */}
                <div className='d-flex align-items-center justify-content-center'>

                    <div className='login-form'>
                        {/* <h4 className='text-center'> Login </h4> */}
                        <h3 className='text-center'>Login</h3>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Label className='form-label'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" {...register('email')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='form-label'>Password</Form.Label>
                                <Form.Control type="password" placeholder="********"  {...register('password')}/>
                            </Form.Group>
                            <Button className="login-btn" type="submit">Login</Button>
                        </Form>
                    </div>
                </div>
            </Container>    
        </div>
    )
}

export default SignIn
