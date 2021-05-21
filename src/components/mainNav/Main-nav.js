import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NavbarLogin from './Navbar-login';
import { useAuth0 } from '@auth0/auth0-react';


const MainNav = () => {
    const { user, isLoading } = useAuth0();
    return (
        <div>
            <Navbar className="m-3">
                <Navbar.Brand href="/">APP NAME</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end mx-3">
                    {!isLoading && user ?
                        <Navbar.Text>
                            Signed in as: <a href="#1">{user.nickname}</a>
                        </Navbar.Text> : ""}
                </Navbar.Collapse>
                <NavbarLogin />
            </Navbar>
        </div>
    )
}

export default MainNav
