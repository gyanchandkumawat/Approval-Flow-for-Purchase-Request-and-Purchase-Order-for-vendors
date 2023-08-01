import React from 'react'
import { BrowserRouter,HashRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/UserPages/Login';
import DashboardIndent from './Components/Dashboard/DashboardIndent';
import AllRequests from './Components/Pages/AllRequests';
import CreateIndent from './Components/CreateIndent/CreateIndent';
import PendingRequests from './Components/Pages/PendingRequests';
import ApprovedRequests from './Components/Pages/ApprovedRequests';
import RejectedRequests from './Components/Pages/RejectedRequests';
import QueryRequests from './Components/Pages/QueryRequests';
import DraftRequests from './Components/Pages/DraftRequests';


// dummy pages
import PendingFormRequest from './Components/Dummy/PendingFormRequest';
import ApprovedFormRequest from './Components/Dummy/ApprovedFormRequest';
import RejectedFormRequest from './Components/Dummy/RejectedFormRequests';
import DraftFormRequest from './Components/Dummy/DraftFormRequest';
import QueryFormRequest from './Components/Dummy/QueryFormRequest';

// dummy APPPages
import APPDashboardIndent from './Components/Dummy Component/AppDashboard/DashboardIndent';
import APPAllRequests from './Components/Dummy Component/AppPages/AllRequests';
import APPPendingRequests from './Components/Dummy Component/AppPages/PendingRequests';
import APPApprovedRequests from './Components/Dummy Component/AppPages/ApprovedRequests';
import APPRejectedRequest from './Components/Dummy Component/AppPages/RejectedRequests';
import APPQueryRequests from './Components/Dummy Component/AppPages/QueryRequests';
import APPDraftRequests from './Components/Dummy Component/AppPages/DraftRequests';
import APPPendingFormRequest from './Components/Dummy Component/AppSubPages/PendingFormRequest';
import APPRejectedFormRequest from './Components/Dummy Component/AppSubPages/RejectedFormRequests';
import APPDraftFormRequest from './Components/Dummy Component/AppSubPages/DraftFormRequest';
import APPQueryFormRequest from './Components/Dummy Component/AppSubPages/QueryFormRequest';
import APPQueryRaisedRequest from './Components/Dummy Component/AppSubPages/APPQueryRaisedRequest';
import RFQDashboard from './Components/RFQ Dashboard/RFQDashboard';
import CreateRFQ from './Components/RFQ Create/CreateRFQ';
import AllPR from './Components/RFQ Pages/AllPR';
import PendingPR from './Components/RFQ Pages/PendingPR';
import AllRFQ from './Components/RFQ Pages/AllRFQ';
import PublishedRFQ from './Components/RFQ Pages/PublishedRFQ';
import ResponseRFQ from './Components/RFQ Pages/ResponseRFQ';
import ClosedRFQ from './Components/RFQ Pages/ClosedRFQ';
import PRForm from './Components/RFQ Create/PendingPRForm';
import PublishedRFQForm from './Components/RFQ Create/PublishedRFQ';
import ResponseRFQForm from './Components/RFQ Create/ResponseRFQ';
import ClosedRFQForm from './Components/RFQ Create/ClosedRFQFOrm';
import ApprovedPR from './Components/RFQ Pages/ApprovedPR';
import ApprovedPRForm from './Components/RFQ Create/ApprovedPRFom';
import VendorDashboard from './Components/Vendor/VendorDashboard';
import VAllActivities from './Components/Vendor/VAllActivities';
import Acknowledge from './Components/Vendor/Acknowledge';
import AcknowledgeSubmit from './Components/Vendor/AcknowledgeSubmit';
import MyPO from './Components/RFQ Create/MyPO';
import VendorPO from './Components/Vendor/VendorPO';
import VendorPoFOrm from './Components/Vendor/VendorPOFOrm';

function App() {
  return (
    <>
    <BrowserRouter>
        {/* <Navbar2/> */}
        <Routes>
          <Route path='/prpo' element={<Login />} />
          <Route path='/dashboard' element={<DashboardIndent />} />
          <Route path='/createindent' element={<CreateIndent />} />
          {/* Pages */}
          <Route path='/allrequests' element={<AllRequests />} />
          <Route path='/pendinginvoice' element={<PendingRequests />} />
          <Route path='/approvedrequests' element={<ApprovedRequests />} />
          <Route path='/rejectedrequests' element={<RejectedRequests />} />
          <Route path='/queryraisedrequests' element={<QueryRequests />} />
          <Route path='/draftrequests' element={<DraftRequests />} />
          {/* RFQDashboard */}
          <Route path='/rfqdashboard' element={<RFQDashboard />} />
          <Route path='/createrfq' element={<CreateRFQ />} />
          <Route path='/allpr' element={<AllPR />} />

          <Route path='/prform' element={<PRForm/>}/>
          <Route path='/approvedprform' element={<ApprovedPRForm/>}/>
          
          <Route path='/pendingpr' element={<PendingPR/>}/>
          <Route path='/approvedpr' element={<ApprovedPR/>}/>
          <Route path='/allrfq' element={<AllRFQ/>}/>
          <Route path='/publishedrfq' element={<PublishedRFQ/>}/>
          <Route path='/responserfq' element={<ResponseRFQ/>}/>
          <Route path='/closedrfq' element={<ClosedRFQ/>}/>
          <Route path='/publishedrfqform' element={<PublishedRFQForm/>}/>
          <Route path='/responserfqform' element={<ResponseRFQForm/>}/>
          <Route path='/closedrfqform' element={<ClosedRFQForm/>}/>
          <Route path='/mypo' element={<MyPO/>}/>


          {/* dummy */}
          <Route path='/pendingformrequest' element={<PendingFormRequest />} />
          <Route path='/approvedformrequest' element={<ApprovedFormRequest />} />
          <Route path='/rejectedformrequest' element={<RejectedFormRequest />} />
          <Route path='/draftformrequest' element={<DraftFormRequest />} />
          <Route path='/queryformrequest' element={<QueryFormRequest />} />


          {/* APP Dummy */}
          <Route path='/appdashboard' element={<APPDashboardIndent />} />
          {/* Pages */}
          <Route path='/appallrequests' element={<APPAllRequests />} />
          <Route path='/apppendinginvoice' element={<APPPendingRequests />} />
          <Route path='/appapprovedrequests' element={<APPApprovedRequests />} />
          <Route path='/apprejectedrequests' element={<APPRejectedRequest />} />
          <Route path='/appqueryraisedrequests' element={<APPQueryRequests />} />
          <Route path='/appdraftrequests' element={<APPDraftRequests />} />


          {/* dummy */}
          <Route path='/apppendingformrequest' element={<APPPendingFormRequest />} />
          <Route path='/appqueryraisedrequest' element={<APPQueryRaisedRequest />} />
          <Route path='/apprejectedformrequest' element={<APPRejectedFormRequest />} />
          <Route path='/appdraftformrequest' element={<APPDraftFormRequest />} />
          <Route path='/appqueryformrequest' element={<APPQueryFormRequest />} />


          {/* vendor */}
          <Route path='/vendor-dashboard' element={<VendorDashboard/>}/>
          <Route path='/allactivity' element={<VAllActivities/>}/>
          <Route path='/acknowledge' element={<Acknowledge/>}/>
          <Route path='/acknowledgesubmit' element={<AcknowledgeSubmit/>}/>
          <Route path='/vendorpo' element={<VendorPO/>}/>
          <Route path='/vendorpoform' element={<VendorPoFOrm/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
