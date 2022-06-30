
import React from 'react';
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap'

function topBar(){


    return(
      <div>

<Navbar bg="light" expand="sm">
  <Container>
    <Navbar.Brand href="#home">Got Problems Write About it like the rest of them </Navbar.Brand>

    <Navbar.Brand href="#home">Our Issue</Navbar.Brand>
    
    <Navbar.Brand href="#link">Common Issures </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

       
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">LogOut</NavDropdown.Item>
           
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
    )
}

export default topBar