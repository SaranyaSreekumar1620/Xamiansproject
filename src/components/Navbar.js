import React, { useContext } from "react";
import "../sass/App.css";
import { BsFillGrid1X2Fill, BsBarChartSteps } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { DiKrakenjsBadge } from "react-icons/di";
import { ImQuotesLeft } from "react-icons/im";
import { SiMicrodotblog } from "react-icons/si";
import { IoDownloadSharp } from "react-icons/io5";
import { MdNotifications, MdOutlineSettings } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { NavItem, Nav, NavLink } from "reactstrap";
import { AuthContext } from "../store/Context";
function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="side-bar text-justify p-4">
      <h1>
        <span className="font-weight-bold">XAMIANS</span>
      </h1>
      <Nav vertical>
        <NavItem>
          <NavLink className="text-light" href="/Dashboard">
            <BsFillGrid1X2Fill />
            &nbsp;&nbsp;Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/levelCreation">
            <BsBarChartSteps />
            &nbsp;&nbsp;Level Creation
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/User">
            <HiUserGroup />
            &nbsp;&nbsp;Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/missionVideo">
            <MdOutlineOndemandVideo />
            &nbsp;&nbsp;Mission Video
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/Enroll">
            <AiOutlineUserSwitch />
            &nbsp;&nbsp;Enrollment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/Badge">
            <DiKrakenjsBadge />
            &nbsp;&nbsp;Badge
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/Quotes">
            <ImQuotesLeft />
            &nbsp;&nbsp;Quotes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/Blogs">
            <SiMicrodotblog />
            &nbsp;&nbsp;Blogs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/Download">
            <IoDownloadSharp />
            &nbsp;&nbsp;Downloads
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/sendNotify">
            <MdNotifications />
            &nbsp;&nbsp;Send Notification
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/Settings">
            <MdOutlineSettings />
            &nbsp;&nbsp;Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" href="/Login">
            <GoSignOut />
            &nbsp;&nbsp;Sign out
          </NavLink>
        </NavItem>
      </Nav>
      <br />
      <div className="bg-light text-center form-control"> 
      <span className="text-dark fw-bold fst-italic ">
        {user ? `Welcome ${user.displayName}` : "Login"}
      </span>
      </div>
    </div>
  );
}

export default Navbar;
