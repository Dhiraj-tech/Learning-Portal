import { Badge, Button, Container, Nav, NavDropdown,  Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { clearUser } from "../store"
import { clearStorage } from "../lib"

export const NavBar = () => {

    const user = useSelector(st => st.user.value)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(clearUser())
        clearStorage('cms_token')
    }

    return <Navbar expand="lg" variant="dark" bg="dark">
    <Container>
        <Link to="/" className="navbar-brand">E-learning Portal</Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="me-auto">
                <Nav.Item>
                    <NavLink className="nav-link" to="/students">
                        <i className="fa-solid fa-user-friends me-2"></i>Students
                    </NavLink>
                </Nav.Item>
                
            
            <Nav.Item>
                    <NavLink className="nav-link" to="/contacts">
                        <i className="fa-solid fa-address-book me-2"></i>Contact Us
                    </NavLink>
                </Nav.Item>
           
            </Nav>
            
            <Nav>
                <NavDropdown title={<><i className="fa-solid fa-user-circle 
                me-2"></i>{user.name}</>} align="end">
                    <div className="dropdown-item text-end">
                        <Badge bg={user.type == 'Admin' ? 'primary': 'info'}>{user.type}</Badge>
                    </div>
                    <Link to="/edit-profile" className="dropdown-item">
                        <i className="fa-solid fa-user-edit me-2"></i>Edit Profile
                    </Link>
                    <Link to="/change-password" className="dropdown-item">
                        <i className="fa-solid fa-asterisk me-2"></i>Change Password
                    </Link>
                    <NavDropdown.Divider />
                    <Button variant="link" className="dropdown-item rounded-0"
                    onClick={handleLogout}>
                        <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Logout
                    </Button>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
}