import { Alert, Button, Form, Modal } from 'react-bootstrap'
import React, {useContext, useRef, useState} from 'react'
import { AuthContext } from '../../context/AuthContext'

function Register() {
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPassword = useRef()

  const { register } = useContext(AuthContext)

  const openForm = () => setShowForm(true)
  const closeForm = () => setShowForm(false)
  const submitForm = async (e) => {
    e.preventDefault()
    setError('')
    
    if(passwordRef.current.value !== confirmPassword.current.value) {
        return setError("Password does not match")
    }
    try {
        await register(emailRef.current.value, passwordRef.current.value)
        closeForm()
    } catch (error) { 
        setError(error.message)
    }
  }

    return (
   <>
    <div onClick={openForm} className="btn btn-outline-secondary mx-2">
        Register
    </div>
    <Modal centered show={showForm} onHide={closeForm}>
        <Form onSubmit={submitForm}>
        <Modal.Header>
            <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required ref={passwordRef}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" required ref={confirmPassword}/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={closeForm}>Cancel</Button>
            <Button variant='primary' type='submit'>Register</Button>
        </Modal.Footer>
        </Form>
    </Modal>
   </>
    
  )
}

export default Register