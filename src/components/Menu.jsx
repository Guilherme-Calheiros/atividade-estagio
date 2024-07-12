import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import MenuIcon from '../assets/menu-icon.svg';

function Menu() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div id='Menu'>
      <Button variant='dark p-4' onClick={handleShow}>
        <img src={MenuIcon} alt="Icone do menu" height="30px"/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Menu;