import React, { useState } from 'react'
import '../../Assets/Css/Navbar.css'
import Profile from '../../Assets/Images/download.svg'
import ICONLOGO from '../../Assets/Images/main-logo.png'
import BPAASlogo from '../../Assets/Images/bpaas.png'
import { Link, NavLink } from 'react-router-dom'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function VendorNavbar() {
  const [navbar, setNavbar] = useState(false)
  const [isActiveNav, setisActiveNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 3) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground)


  return (
    <>
      <nav className={navbar ? "Navbar-main-scroll navbar navbar-expand-lg" : "navbar navbar-expand-lg Navbar-main "}>
        <div className="container">
          <img src={BPAASlogo} className="navbar-brand" alt="" srcset="" style={{ width: "8%" }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">

              <li className="nav-item NAVACTIVECLASS">
                <NavLink to="/vendor-dashboard"
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"} aria-current="page">
                  <DashboardIcon className='me-1 fs-6'style={{marginTop:"-3px"}}/>
                  Dashboard
                </NavLink>
              </li>

              <li className="nav-item NAVACTIVECLASS">
                <NavLink to= "/allactivity"
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"}>
                  <AlignHorizontalLeftIcon className='me-1 fs-6'style={{marginTop:"-3px"}}/>
                  RFQ
                </NavLink>
              </li>
              <li className="nav-item NAVACTIVECLASS">
                <NavLink to= "/vendorpo"
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"}>
                  <InventoryIcon className='me-1 fs-6'style={{marginTop:"-3px"}}/>
                  PO
                </NavLink>
              </li>
            </ul>
              <img src={Profile} className="Navbar-Login-Profile" alt="Profile" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "4%" }}/>
              <div className="dropdown-menu p-1 ECOMSIGNOUTDROPDOWN text-center">
                <h6 className='DROPDWNLINKSECOM  lh-1'>user name<br />
                  <span className='USERIDPROFILE text-dark'>username@bpaas.com</span></h6>
                <hr className="m-0 p-0" />
                <Link className="DROPDWNLINKSECOM dropdown-item" to="#">Update Profile</Link>
                <Link className="DROPDWNLINKSECOM dropdown-item " to="#">About</Link>
                <Link className="DROPDWNLINKSECOM dropdown-item" to="#">Contact</Link>
                <hr className="m-0 p-0" />
                <Link className="DROPDWNLINKSECOM dropdown-item" to="/prpo">Sign Out</Link>
                <hr className="m-0 p-0" />
                <br/>
              </div> 
          </div>
        </div>
      </nav>
    </>
  )
}
