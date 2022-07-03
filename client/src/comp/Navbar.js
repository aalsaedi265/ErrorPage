
import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap'

function topBar(){


    return(
      <div>

<Navbar bg="light" expand="sm">
  <Container>

  {/*'/ourIssue' */}

    <Navbar.Brand  > <Link to ="/" style={{textDecoration: 'none'}} > Got Problems Write About it like the rest of them | </Link> </Navbar.Brand>

    <Navbar.Brand> <Link to ='/ourIssue' style={{textDecoration: 'none'}} > Our Issue </Link> </Navbar.Brand>
    
    <Navbar.Brand> <Link to ='/Common' style={{textDecoration: 'none'}} >| Common Issures |</Link> </Navbar.Brand>
    
    <Navbar.Brand  >
   
      <Nav className="me-auto" >
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" > 
          <NavDropdown.Item><Link to ='/Common' style={{textDecoration: 'none'}} >LogIn|</Link> </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item> <Link to ='/Common' style={{textDecoration: 'none'}} >LogOut </Link></NavDropdown.Item>
           
        </NavDropdown>
      
      </Nav>
      </Navbar.Brand>
  </Container>
</Navbar>

      </div>
    )
}

export default topBar