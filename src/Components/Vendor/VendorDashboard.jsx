import React, { useState } from 'react'
import VendorNavbar from './VendorNavbar'
import BorderTopIcon from '@mui/icons-material/BorderTop';
import ReceiptIcon from '@mui/icons-material/Receipt';
import UpdateIcon from '@mui/icons-material/Update';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import Chart from 'react-apexcharts';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

const PRAPPROVEDDATA = [
    {
        id: 1,
        RFQNumber: "RFQ-00000000002-BPAAS",
        CloseDate: "22-05-2023",
        OpenDate: "17-05-2023",
        TimeLeft:"5 Days",
        Status: "Active"
    },
    {
        id: 2,
        RFQNumber: "RFQ-00000000003-BPAAS",
        CloseDate: "18-05-2023",
        OpenDate: "18-05-2023",
        TimeLeft:"0 Days",
        Status: "Expired"
    },
    {
        id: 3,
        RFQNumber: "RFQ-00000000004-BPAAS",
        CloseDate: "20-05-2023",
        OpenDate: "19-05-2023",
        TimeLeft:"1 Days",
        Status: "Active"
    },
    {
        id: 4,
        RFQNumber: "RFQ-00000000005-BPAAS",
        CloseDate: "13-05-2023",
        OpenDate: "07-05-2023",
        TimeLeft:"6 Days",
        Status: "Active"
    },
    {
        id: 5,
        RFQNumber: "RFQ-00000000006-BPAAS",
        CloseDate: "22-05-2023",
        OpenDate: "17-05-2023",
        TimeLeft:"5 Days",
        Status: "Active"
    },
    {
        id: 6,
        RFQNumber: "RFQ-00000000007-BPAAS",
        CloseDate: "20-05-2023",
        OpenDate: "17-05-2023",
        TimeLeft:"3 Days",
        Status: "Active"
    },
    {
        id: 7,
        RFQNumber: "RFQ-00000000008-BPAAS",
        CloseDate: "21-05-2023",
        OpenDate: "17-05-2023",
        TimeLeft:"5 Days",
        Status: "Active"
    },
    {
        id: 8,
        RFQNumber: "RFQ-00000000009-BPAAS",
        CloseDate: "22-05-2023",
        OpenDate: "15-05-2023",
        TimeLeft:"7 Days",
        Status: "Active"
    },
    {
        id: 9,
        RFQNumber: "RFQ-000000000010-BPAAS",
        CloseDate: "14-05-2023",
        OpenDate: "12-05-2023",
        TimeLeft:"2 Days",
        Status: "Active"
    },
    {
        id: 10,
        RFQNumber: "RFQ-000000000011-BPAAS",
        CloseDate: "18-05-2023",
        OpenDate: "17-05-2023",
        TimeLeft:"1 Days",
        Status: "Active"
    },
]




function VendorDashboard() {

    // small charts-1
    const [ALLRequest, setALLRequest] = useState({
        chart: {
            type: 'donut',
            toolbar: {
                show: false
            }
        },
        tooltip: {
            enabled: false,
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                size: 50,
                donut: {
                    size: '60%',
                    labels: {
                        show: false
                    }
                }
            }
        },
        colors: ['#008FFB'],
        labels: ['RFQ'],
    });

    const [ALLRequestSeries, setALLRequestSeries] = useState([70,]);

    return (
        <>
            <VendorNavbar />
            <div className="container-fluid">
                <div className="card mt-2 RFQDASHBAORDMAIN">
                    <div className="card-body pt-2">
                        <div className="row g-1">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col">
                                        <div className="card mt-2 RFQCARDCHILD">
                                            <div className="card-body p-2">
                                                <div className="row">
                                                    <div className="col text-center">
                                                        <h6 className='ACTIVTYHEADERRFQ mt-2 VHEAD'><ReceiptIcon className='AccessTimeIconRecent me-1' />Total RFQ</h6>
                                                        <p className='mt-3 mb-1 VCOUNT'>500</p>
                                                    </div>
                                                    <div className="col text-center">
                                                        <Link to="/allactivity" className='MOreInforButton'>More
                                                            <ArrowOutwardIcon className='ArrowOutwardIconVendor' /></Link>
                                                        <div className="mt-2">
                                                            <Chart options={ALLRequest} series={ALLRequestSeries} type="donut" width="100%" height="auto" />
                                                        </div>
                                                    </div>
                                                    <div className="col text-center">
                                                        <h6 className='ACTIVTYHEADERRFQ mt-2 VHEAD'><UpdateIcon className='AccessTimeIconRecent me-1' />Active RFQ</h6>
                                                        <p className='mt-3 mb-1 VCOUNT'>10</p>
                                                    </div>
                                                    <div className="col text-center">
                                                        <Link to="/allactivity" className='MOreInforButton'>More
                                                            <ArrowOutwardIcon className='ArrowOutwardIconVendor' /></Link>
                                                        <div className="mt-2">
                                                            <Chart options={ALLRequest} series={ALLRequestSeries} type="donut" width="100%" height="auto" />
                                                        </div>
                                                    </div>
                                                    <div className="col text-center">
                                                        <h6 className='ACTIVTYHEADERRFQ mt-2 VHEAD'><CheckCircleOutlineIcon className='AccessTimeIconRecent me-1' />Closed RFQ</h6>
                                                        <p className='mt-3 mb-1 VCOUNT'>490</p>
                                                    </div>
                                                    <div className="col text-center">
                                                        <Link to="/allactivity" className='MOreInforButton'>More
                                                            <ArrowOutwardIcon className='ArrowOutwardIconVendor' /></Link>
                                                        <div className="mt-2">
                                                            <Chart options={ALLRequest} series={ALLRequestSeries} type="donut" width="100%" height="auto" />
                                                        </div>
                                                    </div>
                                                    <div className="col text-center">
                                                        <h6 className='ACTIVTYHEADERRFQ mt-2 VHEAD'><AddRoadIcon className='AccessTimeIconRecent me-1' />PO-Issued</h6>
                                                        <p className='mt-3 mb-1 VCOUNT'>410</p>
                                                    </div>
                                                    <div className="col text-center">
                                                        <Link to="/vendorpo" className='MOreInforButton'>More
                                                            <ArrowOutwardIcon className='ArrowOutwardIconVendor' /></Link>
                                                        <div className="mt-2">
                                                            <Chart options={ALLRequest} series={ALLRequestSeries} type="donut" width="100%" height="auto" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="card mt-2 RFQCARDCHILD">
                                            <div className="card-body p-1">
                                                <h6 className="card-title ACTIVTYHEADERRFQ "><BorderTopIcon className='AccessTimeIconRecent me-1' />Latest 10 Active RFQ</h6>
                                                <div className="table-responsive VendortableScroll">
                                                    <table className="table table-sm  TOP20PENDINGTABLE">
                                                        <thead>
                                                            <tr>
                                                                <th className='TableToHeadVendor'>RFQ Number</th>
                                                                <th className='TableToHeadVendor'>Open Date</th>
                                                                <th className='TableToHeadVendor'>Close Date</th>
                                                                <th className='TableToHeadVendor'>Time Left</th>
                                                                <th className='TableToHeadVendor'>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {PRAPPROVEDDATA.map((key, items) => (
                                                                <tr key={items}>
                                                                    <td className='TOPPENDINGLINEITEMS'>
                                                                        <Link to="/acknowledge"className='RFQNUMBERVENDOR'>
                                                                            {key.RFQNumber}</Link></td>
                                                                    <td className='TOPPENDINGLINEITEMS'><span>{key.OpenDate}</span> </td>
                                                                    <td className='TOPPENDINGLINEITEMS'><span>{key.CloseDate}</span></td>
                                                                    <td className='TOPPENDINGLINEITEMS'><span>{key.TimeLeft}</span></td>
                                                                    <td className='TOPPENDINGLINEITEMS'><button className={key.Status==="Active"?'VENDORSTATUS':"VENDORSTATUSExpired"}>{key.Status}</button> <br />
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* side right */}
                            <div className="col-md-3">
                                <div className="card mt-2 RFQCARDCHILD">
                                    <div className="card-body p-2">
                                        <div className="activityheadtop">
                                            <h6 className="card-title ACTIVTYHEADERRFQ "><UpdateIcon className='AccessTimeIconRecent me-1' />Recent Activity</h6>
                                        </div>
                                        <div className="ActivityScroll">
                                            <div className="card mt-2 activites border-0">
                                                <div className="card-body p-2">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className='ActivitiesContent'>RFQ-00000000002-BPAAS</h6>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <UpdateIcon className='text-warning fs-4 m-auto' />
                                                        </div>
                                                    </div>
                                                    <p class="mb-0  ActivitiesDate">13-05-2023</p>
                                                    <p class="ActivitiesRemarks"> 
                                                    Request Received from RFQ Team                                                    
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card mt-2 activites border-0">
                                                <div className="card-body p-2">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className='ActivitiesContent'>RFQ-00000000003-BPAAS</h6>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <CheckCircleOutlineIcon className='text-success fs-4 m-auto' />
                                                        </div>
                                                    </div>
                                                    <p class="mb-0  ActivitiesDate">13-05-2023</p>
                                                    <p class="ActivitiesRemarks"> 
                                                    Request Acknowledged                                                    
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card mt-2 activites border-0">
                                                <div className="card-body p-2">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className='ActivitiesContent'>RFQ-00000000004-BPAAS</h6>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <AddRoadIcon className='text-primary fs-4 m-auto' />
                                                        </div>
                                                    </div>
                                                    <p class="mb-0  ActivitiesDate">13-05-2023</p>
                                                    <p class="ActivitiesRemarks"> 
                                                    Request Submitted                                                    
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card mt-2 activites border-0">
                                                <div className="card-body p-2">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className='ActivitiesContent'>RFQ-00000000005-BPAAS</h6>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <UpdateIcon className='text-warning fs-4 m-auto' />
                                                        </div>
                                                    </div>
                                                    <p class="mb-0  ActivitiesDate">13-05-2023</p>
                                                    <p class="ActivitiesRemarks"> 
                                                    Request Received from RFQ Team                                                    
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card mt-2 activites border-0">
                                                <div className="card-body p-2">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className='ActivitiesContent'>RFQ-00000000006-BPAAS</h6>
                                                        </div>
                                                        <div className="col-md-2">
                                                        <CheckCircleOutlineIcon className='text-success fs-4 m-auto' />
                                                        </div>
                                                    </div>
                                                    <p class="mb-0  ActivitiesDate">13-05-2023</p>
                                                    <p class="ActivitiesRemarks"> 
                                                    Request Acknowledged                                                    
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VendorDashboard