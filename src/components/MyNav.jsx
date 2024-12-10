import { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNav = () => {
  return (
    <Navbar bg='light' fixed='bottom' data-bs-theme='light'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          EpiJob
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/favourites'>
            Favourites Companies
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNav
