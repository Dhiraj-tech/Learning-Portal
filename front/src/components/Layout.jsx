import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./Layout.css"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { clearStorage, fromStorage, isEmpty } from "../lib"
import http from "../http"
import { clearUser, setUser } from "../store"

export const Layout = () => {

    const [categories, setCategories] = useState([])
    const user = useSelector(st => st.user.value)

    const dispatch = useDispatch()

    useEffect(() => {
        if(isEmpty(user)){
            const token = fromStorage('user_token')

            if(!isEmpty(token)) {
                http.get('profile/details')
                    .then(({data}) => {
                        dispatch(setUser(data))
                    })
                    .catch(err => {
                        clearStorage('user_token')
                    })
            }
        }
    }, [user])

    const handleLogout = (ev) => {
        ev.preventDefault()
                
        dispatch(clearUser())
        clearStorage('user_token')
        window.location.replace("/");
    }


    return <>
    <div className="main-bar"> 
    <Navbar expand="lg" variant="dark" bg="dark">
    <Container className="contain-main">
        <Link to="/" className="navbar-brand head-bar">E-learning Portal</Link>
        <Navbar.Toggle className="contain-main"/>
        <Navbar.Collapse>
            <Nav className="mx-auto">
                <Nav.Item className="me-4">
                    <NavLink className="nav-link" to="/">
                        <i className="fa-solid fa-house me-2"></i>Home
                    </NavLink>
                </Nav.Item>
                <Nav.Item className="me-4">
                    <NavLink className="nav-link" to="/course">
                        <i className="fa-solid fa-graduation-cap me-2"></i>Courses
                    </NavLink>
                </Nav.Item>
                <Nav.Item className="me-4">
                    <NavLink className="nav-link" to="/about">
                        <i className="fa-solid fa-address-card me-2"></i>About Us
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="/contacts">
                        <i className="fa-solid fa-address-book me-2"></i>Contact Us
                    </NavLink>
                </Nav.Item>               
                </Nav>             
              
                   <Nav>
                    {isEmpty(user) ? 
                        <Nav.Item>
                            <NavLink className="nav-link" to="/register">
                                <i className="fas fa-sign-in-alt me-2"></i>Register/Login
                            </NavLink>
                        </Nav.Item>: 
                        <Nav>
                            <NavDropdown title={<><i className="fa-solid fa-user-circle 
                            me-2"></i>{user.name}</>} align="end">
                                <div className="dropdown-item text-end"></div>
                                <Link to="/edit-profile" className="dropdown-item">
                                    <i className="me-2"></i>My Profile
                                </Link>
                                <Link to="/change-password" className="dropdown-item">
                                    <i className="me-2"></i>Change Password
                                </Link>
                                <hr className="nav-dropdown-divider" />
                                <Button variant="link" className="dropdown-item rounded-0"
                                onClick={handleLogout}>
                                    <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Logout
                                </Button>
                            </NavDropdown>
                        </Nav>
                        }
                        
                     </Nav>
            
           
        </Navbar.Collapse>
    </Container>
</Navbar>
</div>
<Outlet />


    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi magni dolorem deleniti ad, perspiciatis adipisci. Laboriosam, enim commodi numquam illo esse veritatis pariatur, qui impedit quia animi ipsum accusamus tempora. Autem veniam aliquam modi odio consectetur molestiae, necessitatibus iusto ullam illo tempora minus quas tenetur provident voluptatibus beatae nihil quo facere voluptate mollitia eaque obcaecati.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><Link to="#">development</Link></li>
              <li><Link to="#">design</Link></li>
              <li><Link to="#">business</Link></li>
              <li><Link to="#">marketing</Link></li>
              <li><Link to="#">software</Link></li>
              <li><Link to="#">science</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contacts">Contact Us</Link></li>
              <li><Link to="#">Contribute</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    
</footer>

</>
          
    
}