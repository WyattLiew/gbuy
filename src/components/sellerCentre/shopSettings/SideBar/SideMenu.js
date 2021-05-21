import React, { useState } from 'react'
import AsideButton from './AsideButton';
import ShopAside from './ShopAside';

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsedChange = (checked) => {
        collapsed ? (checked = false) : (checked = true);
        setCollapsed(checked);
    };

    return (
        <div className="side">
            <ShopAside collapsed={collapsed} />
            <AsideButton
                collapsed={collapsed}
                handleCollapsedChange={handleCollapsedChange}
            />
        </div>
    )
}

export default SideMenu
