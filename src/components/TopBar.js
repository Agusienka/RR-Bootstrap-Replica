import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button' // eslint-disable-next-line




export default function TopBar() {
    return (
        <div className="flex-container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{ margin: "10px 1px 10px", padding: "5px" }} href="#home"><img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt="Instacart home"/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <div className="container">   </div>
                    <Nav style={{ padding: "24px 10px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", }}  >
                        <Nav.Link style={{ color: "#343538"}} href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" style={{ fontSize: "18px" }}>Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>



    )
}
