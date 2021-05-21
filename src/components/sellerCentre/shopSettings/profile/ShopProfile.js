import React from 'react';
import SideMenu from '../SideBar/SideMenu';
import Profile from './Profile';

const ShopProfile = () => {
    return (
        <div className="side">
            <SideMenu />
            <div className="main">
               <Profile />
            </div>
        </div>
    )
}

export default ShopProfile
