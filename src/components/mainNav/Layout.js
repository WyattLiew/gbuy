import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import SellerCentreBody from '../sellerCentre/seller-centre-body';
import MainNav from './Main-nav';
import ShopProfile from '../sellerCentre/shopSettings/profile/ShopProfile';


const Layout = () => {
    const { user, isLoading } = useAuth0();
    return (
        <div className="">
            <Router>
                <MainNav />
                {!isLoading && user &&
                    <Router>
                    <Route exact path="/" component={SellerCentreBody}></Route>
                    <Route path="/ShopProfile" component={ShopProfile}></Route>
                    </Router>
                }
                {/* {!isLoading && user &&
                    <Route path="/ShopProfile" component={ShopProfile}></Route>
                } */}

            </Router>
        </div>
    )
}

export default Layout
