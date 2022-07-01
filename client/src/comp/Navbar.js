
import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap'

function topBar(){


    return(
      <div>

<Navbar bg="light" expand="sm">
  <Container>

  {/* <Button  color="inherit">  <Link to="/massage"> Massage </Link>  </Button> */}

    <Navbar.Brand  > <Link to ="/" style={{textDecoration: 'none'}} > Got Problems Write About it like the rest of them | </Link> </Navbar.Brand>

    <Navbar.Brand href="#home">Our Issue</Navbar.Brand>
    
    <Navbar.Brand href="#link">| Common Issures </Navbar.Brand>
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