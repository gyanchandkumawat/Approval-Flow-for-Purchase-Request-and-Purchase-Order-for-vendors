import React, { useState } from 'react'
import '../../Assets/Css/Navbar.css'
import Profile from '../../Assets/Images/download.svg'
import { Link, NavLink } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Navbar(props) {
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
        <h2 className="navbar-brand">Logo</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">

            <li className={
                props.inDashboard?"nav-item NAVACTIVECLASS":
                props.APPDashboard?"nav-item NAVACTIVECLASS":
                props.RFQDash?"nav-item NAVACTIVECLASS":
                "d-none"}
              >
                  <select className={
                    props.inDashboard?"form-select float-end me-2 NAVSELECTFIILTER"
                    :props.APPDashboard?"form-select float-end me-2 NAVSELECTFIILTER"
                    :props.RFQDash?"form-select float-end me-2 NAVSELECTFIILTER":"d-none"} aria-label="Default select example">
                      <option value="" selected>Select filter for dashboard data</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
              </li>

        

              <li className=
              {
                props.inDashboard?"nav-item NAVACTIVECLASS":
                props.APPDashboard?"nav-item NAVACTIVECLASS":
                props.RFQDash?"nav-item NAVACTIVECLASS":"d-none"}
              >
                
                <NavLink to={
                  props.inDashboard==="Dashboard"?"/dashboard":
                  props.APPDashboard==="Dashboard"?"/appdashboard":
                  props.RFQDash==="Dashboard"?"/rfqdashboard":"#"}
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"} aria-current="page">
                  <DashboardIcon className='me-1 fs-6'style={{marginTop:"-3px"}}/>
                  {
                  props.inDashboard==="Dashboard"?props.inDashboard
                  :props.APPDashboard==="Dashboard"?props.APPDashboard
                  :props.RFQDash==="Dashboard"?props.RFQDash:""
                  }
                </NavLink>
              </li>


              <li className=
              {
                props.IndAllRequest?"nav-item NAVACTIVECLASS":
                props.APPAllRequest?"nav-item NAVACTIVECLASS":
                props.RFQAllRequest?"nav-item NAVACTIVECLASS":"d-none"}
              >
                <NavLink to= {
                  props.IndAllRequest==="All Requests"?"/allrequests":
                  props.APPAllRequest==="All Requests"?"/appallrequests":
                  props.RFQAllRequest==="All PR"?"/allpr":"#"}
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"}>
                  <AlignHorizontalLeftIcon className='me-1 fs-6'style={{marginTop:"-3px"}}/>
                  {
                  props.IndAllRequest==="All Requests"?props.IndAllRequest
                  :props.APPAllRequest==="All Requests"?props.APPAllRequest
                  :props.RFQAllRequest==="All PR"?props.RFQAllRequest:""
                  }
                </NavLink>
              </li>
            

              <li className=
              {
                // props.IndPendingReq?"nav-item NAVACTIVECLASS":
                // props.APPPendingReq?"nav-item NAVACTIVECLASS":
                // props.RFQPendingReq?"nav-item NAVACTIVECLASS":
                "d-none"}
              >
                <NavLink to={
                  // props.IndPendingReq==="Pending Requests"?"/pendinginvoice":
                  // props.APPPendingReq==="Pending Requests"?"/apppendinginvoice":
                  // props.RFQPendingReq==="Pending PR"?"/pendingpr":
                  "#"}
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"}>
                 
                  {
                  // props.IndPendingReq==="Pending Requests"?props.IndPendingReq:
                  // props.APPPendingReq==="Pending Requests"?props.APPPendingReq:
                  // props.RFQPendingReq==="Pending PR"?props.RFQPendingReq:""
                  }
                </NavLink>
              </li>





              <li className={
                // props.IndApprovedReq?"nav-item NAVACTIVECLASS":
                // props.APPApprovedReq?"nav-item NAVACTIVECLASS":
                props.RFQALLRFQ?"nav-item NAVACTIVECLASS":"d-none"}
              >
                <NavLink to={
                  // props.IndApprovedReq==="Approved Requests"?"/approvedrequests":
                  // props.APPApprovedReq==="Approved Requests"?"/appapprovedrequests":
                  props.RFQALLRFQ==="All RFQ"?"/allrfq":"#"}
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"}>
                    <DonutSmallIcon className='me-1 fs-6'style={{marginTop:"-3px"}}/>
                  {
                  // props.IndApprovedReq==="Approved Requests"?props.IndApprovedReq:
                  // props.APPApprovedReq==="Approved Requests"?props.APPApprovedReq:
                  props.RFQALLRFQ==="All RFQ"?props.RFQALLRFQ:""
                }
                </NavLink>
              </li>


                   
              <li className={
                // props.IndRejectedRequests?"nav-item NAVACTIVECLASS":
                // props.APPRejectedRequests?"nav-item NAVACTIVECLASS":
                // props.RFQPublished?"nav-item NAVACTIVECLASS":
                "d-none"}
              >
                <NavLink to={
                  // props.IndRejectedRequests==="Rejected Requests"?"/rejectedrequests":
                  // props.APPRejectedRequests==="Rejected Requests"?"/apprejectedrequests":
                  // props.RFQPublished==="Published RFQ"?"/publishedrfq":
                  "#"}
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"}>
                  {
                  // props.IndRejectedRequests==="Rejected Requests"?props.IndRejectedRequests:
                  // props.APPRejectedRequests==="Rejected Requests"?props.APPRejectedRequests:
                  // props.RFQPublished==="Published RFQ"?props.RFQPublished:""
                }
                </NavLink>
              </li>



              
              <li className={   
              // props.IndDraftRequests?"nav-item NAVACTIVECLASS":
              // props.APPDraftRequests?"nav-item NAVACTIVECLASS":
              // props.RFQResponses?"nav-item NAVACTIVECLASS":
              "d-none"}
              >
                <NavLink to={
                  // props.IndDraftRequests==="Draft Requests"?"/draftrequests":
                  // props.APPDraftRequests==="Draft Requests"?"/appdraftrequests":
                  // props.RFQResponses==="Responses RFQ"?"/responserfq":
                  "#"}
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"}>
                  {
                  //  props.IndDraftRequests==="Draft Requests"?props.IndDraftRequests:
                  // props.APPDraftRequests==="Draft Requests"?props.APPDraftRequests:
                  // props.RFQResponses==="Responses RFQ"?props.RFQResponses:""
                  }
                </NavLink>
              </li>




              <li className={
                // props.IndQueryRequests?"nav-item NAVACTIVECLASS":
                // props.APPQueryRequests?"nav-item NAVACTIVECLASS":
                // props.RFQClosed?"nav-item NAVACTIVECLASS":
                "d-none"} 
                >
                <NavLink to={
                  // props.IndQueryRequests==="Query Requests"?"/queryraisedrequests":
                  // props.APPQueryRequests==="Query Requests"?"/appqueryraisedrequests":
                  // props.RFQClosed==="Closed RFQ"?"/closedrfq":
                  "#"
                } 
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK"}>
                  {
                  // props.IndQueryRequests==="Query Requests"?props.IndQueryRequests:
                  // props.APPQueryRequests==="Query Requests"?props.APPQueryRequests:
                  // props.RFQClosed==="Closed RFQ"?props.RFQClosed:""
                }
                </NavLink>
              </li>


              <li className={
                props.RFQCreateDeliveryschedule?"nav-item NAVACTIVECLASS":"d-none"}
              >
                <NavLink to={
                  props.RFQCreateDeliveryschedule==="Create Delivery Schedule"?"/create-delivery-schedule":"#"}
                className={isActiveNav ? "nav-link active NAV_LINK " : "nav-link NAV_LINK text-primary"}>
                  {
                    props.RFQCreateDeliveryschedule==="Create Delivery Schedule"?props.RFQCreateDeliveryschedule:""
                  }
                  <LaunchIcon  className='me-1 fs-6'style={{marginTop:"-2px"}}/>
                </NavLink>
              </li>


            </ul>
           
              {/* <img src={Profile} alt="" srcSet="" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "4%" }} />
              <ul class="dropdown-menu">
                  <Link to="/" className='text-center'>Sign Out</Link> */}
              {/* </ul> */}
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
