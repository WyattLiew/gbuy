import React from 'react'
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const NavbarLogin = () => {
    const { loginWithRedirect, logout, user, isLoading } = useAuth0();
    return (
        <div >
          {!isLoading && !user &&(
            <Button
              variant="primary"
              onClick={()=> loginWithRedirect()}
              >
              Log in
              </Button>
              
          )}
          {!isLoading && user &&(
            <Button
            variant="primary"
            onClick={()=> logout({
              returnTo:window.location.origin,
            })}
            >
            Log out
            </Button>
          )}
        </div>
    )
}

export default NavbarLogin
