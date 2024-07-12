import { useState } from 'react';
import { Alert , Modal, Form, Button } from 'react-bootstrap';

function FormButton() {
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleName = (e) => setName(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        setShowAlert(true)
    }

    return (
        <>
            <Button variant='light' className='primary-font fs-3 px-5 py-1 rounded-1' onClick={handleShow}>
                Join-us!
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Formulário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" onChange={handleName} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control type="date" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="nome@email.com" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="123.456.789-10" required pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}' maxLength="11"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Check label="Masculino" type="radio" name='sexo' id="radio-1" required/>
                            <Form.Check label="Feminino" type="radio" name='sexo' id="radio-2" required/>
                        </Form.Group>
                        <Button type='submit' className='w-100'>
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Alert show={showAlert} variant="light" style={{left: 10}} className='text-start position-absolute bottom-0 border border-3'>
                <Alert.Heading>Parabéns {name}</Alert.Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='d-flex justify-content-end'>
                    <Button variant='warning' onClick={() => setShowAlert(false)}>
                        Fechar
                    </Button>
                </div>
            </Alert>
        </>
    )
}

export default FormButton;