import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';


function Navigationbar() {
  return (
  <div className="App">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">FOODIE</Navbar.Brand>
     <Nav className="mr-auto">
       <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#features">Features</Nav.Link>
       <Nav.Link href="#content">Content</Nav.Link>
       <Nav.Link href="#News">News</Nav.Link>
       <Nav.Link href="#contactus">ContactUs</Nav.Link>
     </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
          </div>
  );
}

export default Navigationbar;
