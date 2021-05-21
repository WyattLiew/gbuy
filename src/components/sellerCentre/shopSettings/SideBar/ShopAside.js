import { NavLink } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { ClipboardData, BroadcastPin } from "react-bootstrap-icons";

import React from "react";

const ShopAside = ({ collapsed }) => {
  return (
    <div style={{ height: "100%" }}>
      <ProSidebar collapsed={collapsed} className="">
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Shop Settings
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<ClipboardData />}>
              <NavLink
                to="/ShopProfile"
                activeStyle={{
                  color: "#ffd331",
                }}
              >
                Shop Profile
              </NavLink>
            </MenuItem>
            <MenuItem icon={<ClipboardData />}>
              <NavLink
                to="/MyAddress"
                activeStyle={{
                  color: "#ffd331",
                }}
              >
                My Address
              </NavLink>
            </MenuItem>
            <MenuItem icon={<ClipboardData />}>
              <NavLink
                to="/BankAccount"
                activeStyle={{
                  color: "#ffd331",
                }}
              >
                Bank Accounts / Cards
              </NavLink>
            </MenuItem>
            <SubMenu
              suffix={<span className="badge yellow">1</span>}
              title="Device List"
              icon={<BroadcastPin />}
            >
              <MenuItem>
                <NavLink
                  to="/Devices"
                  activeStyle={{
                    color: "#ffd331",
                  }}
                >
                  PIR Sensor
                </NavLink>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default ShopAside;
