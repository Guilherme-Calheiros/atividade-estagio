import { Container, Navbar, Form, InputGroup } from 'react-bootstrap';
import Logo from '../assets/logo.svg';
import SearchIcon from '../assets/search-icon.svg';
import Menu from './Menu';

function Nav() {
    
    return(
        <>
            <Navbar className='w-full mx-md-5'>
                <Container fluid className='justify-content-between'>
                    <Navbar.Brand href='#home'>
                        <img src={Logo} alt="Logo da empresa" width="180px" id='Logo'/>
                    </Navbar.Brand>
                    <div className='d-flex flex-row mb-3 align-items-center gap-5'>
                        <Form>
                        <InputGroup className='rounded-pill d-none d-md-flex'>
                                <InputGroup.Text id="search-icon" className='border-0 bg-transparent h-25'>
                                    <img src={SearchIcon} alt="Ícone de busca" height="30px" />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder='SEARCH'
                                    className='secondary-font fw-light fs-6 border-2 border-light-subtle rounded-pill'
                                    aria-describedby="search-icon"
                                />
                            </InputGroup>
                        </Form>
                        <Menu />
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Nav;