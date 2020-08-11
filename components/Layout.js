import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
const Layout = props => (
    <div>
    <Container fluid>
    <Row>
        <Col>
          <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="#home">Buffalo Ridge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="mr-auto" variant="pills"  activeKey="1">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/amenities">Amenities</Nav.Link>
                <Nav.Link href="/walkthrough">Walkthrough</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
                <Nav.Link href="/guidebook">Guidebook</Nav.Link>
                <Nav.Link href="/location">Location</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/reserve" eventKey="1">Reserve</Nav.Link>
              </Nav>
          </Navbar>
        </Col>
      </Row>
      {props.children}
        </Container>
        </div>

  );
  
  export default Layout;