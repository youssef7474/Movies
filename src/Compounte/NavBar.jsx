import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


const NavBar = ({search}) => {

    const onsearch=(word)=>{
        search(word)
    }

  return (
    <div >
        <Navbar expand="lg" style={{backgroundColor:"#3f7298"}}>
            <Container>
        
                <Navbar.Brand  href='#'     style={{fontWeight:"bold",color:"white"}}>
                        Cinema
                </Navbar.Brand>

              
        
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>onsearch(e.target.value)}
                />
            </Form>
            </Container>
        </Navbar>
    </div>
  );
}

export default NavBar;
