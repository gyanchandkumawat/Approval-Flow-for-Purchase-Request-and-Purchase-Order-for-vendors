import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../NavItems/Navbar';
import '../../Assets/Css/RFQDashboard.css';
import Chart from 'react-apexcharts';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import RFQModal from './RFQModal';




const PRAPPROVEDDATA = [
    {
        id: 1,
        IndentNo: "Indent-00000000002",
        PRNo: "PR-00000000002-BPAAS",
        PRApprovedDate: "17-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 2,
        IndentNo: "Indent-00000000003",
        PRNo: "PR-00000000002-BPAAS",
        PRApprovedDate: "18-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 3,
        IndentNo: "Indent-00000000004",
        PRNo: "PR-00000000004-BPAAS",
        PRApprovedDate: "19-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 4,
        IndentNo: "Indent-00000000005",
        PRNo: "PR-00000000005-BPAAS",
        PRApprovedDate: "07-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 5,
        IndentNo: "Indent-00000000006",
        PRNo: "PR-00000000006-BPAAS",
        PRApprovedDate: "17-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 6,
        IndentNo: "Indent-00000000007",
        PRNo: "PR-00000000007-BPAAS",
        PRApprovedDate: "17-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 7,
        IndentNo: "Indent-00000000008",
        PRNo: "PR-00000000008-BPAAS",
        PRApprovedDate: "17-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 8,
        IndentNo: "Indent-00000000009",
        PRNo: "PR-00000000009-BPAAS",
        PRApprovedDate: "15-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 9,
        IndentNo: "Indent-000000000010",
        PRNo: "PR-000000000010-BPAAS",
        PRApprovedDate: "12-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
    {
        id: 10,
        IndentNo: "Indent-000000000011",
        PRNo: "PR-000000000011-BPAAS",
        PRApprovedDate: "17-05-2023",
        PRApprovedBy: "Suresh sharma"
    },
]

export default function RFQDashboard() {

    const ALLRFQOPTION = {
        chart: {
            type: 'polarArea',
            sparkline: {
                enabled: true, // Disable sparkline
            },
            background: 'transparent',
        },
        series: [44, 55, 67, 83],
        labels: ['Pending RFQ', 'Published RFQ', 'Response RFQ', 'Closed RFQ'],
        stroke: {
            show: false,
            strokeWidth: 0,
            stroke: 0,
        },
        fill: {
            opacity: 0.9,
        },
        markers: {
            size: 0, // Remove the markers at data points
        },
        legend: {
            show: true, // Hide the legend
        },
        xaxis: {
            labels: {
                show: false, // Hide x-axis labels
            },
        },
        yaxis: {
            show: false, // Hide y-axis
        },
        tooltip: {
            enabled: true, // Disable tooltip
        },
        colors: ['#f56f36', '#727cf5', '#ff3333', '#0acf97'],
    };






    const ALLPROPTIONS = {
        chart: {
            type: 'polarArea',
            sparkline: {
                enabled: true, // Disable sparkline
            },
            background: 'transparent',
        },
        series: [44, 55, 67, 30],
        labels: ['Rejected PR', 'Pending PR', 'Approved PR', 'Query Raised PR'],
        stroke: {
            show: false,
            strokeWidth: 0,
            stroke: 0,
        },
        fill: {
            opacity: 0.9,
        },
        markers: {
            size: 0, // Remove the markers at data points
        },
        legend: {
            show: true, // Hide the legend
        },
        xaxis: {
            labels: {
                show: false, // Hide x-axis labels
            },
        },
        yaxis: {
            show: false, // Hide y-axis
        },
        tooltip: {
            enabled: true, // Disable tooltip
        },
        colors: ['#ff3333', '#f56f36', '#0acf97', '#727cf5'],
    };


    //   RFQResponse
    const PublishedRFQ = {
        chart: {
            type: 'bar',
            height: 60,
            sparkline: {
                enabled: true,
            },
        },
        series: [
            {
                name: 'All RFQ Response Requests',
                data: [90, 20, 30, 10, 40, 20, 70, 30, 10, 40, 17, 20],
            },
        ],
        xaxis: {
            categories: [''],
        },
        colors: ['#0391fc'],
    };

    // Render the chart when the component mounts
    useEffect(() => {
        const chart = new Chart(document.querySelector('#campaign-sent-chart'), PublishedRFQ);
        chart.render();
    }, []);

    //   RFQResponse
    const RFQResponse = {
        chart: {
            type: 'bar',
            height: 60,
            sparkline: {
                enabled: true,
            },
        },
        series: [
            {
                name: 'All Response RFQ',
                data: [90, 20, 30, 10, 40, 20, 70, 30, 10, 40, 17, 20],
            },
        ],
        xaxis: {
            categories: [''],
        },
        colors: ['#0391fc'],
    };

    // Render the chart when the component mounts
    useEffect(() => {
        const chart = new Chart(document.querySelector('#campaign-sent-chart'), RFQResponse);
        chart.render();
    }, []);



    // ALL PR   
    const [ALLPRCHART, setALLPRCHART] = useState({
        chart: {
            height: 300,
            type: 'area',
            color: '#ffffff',
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {

            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        stroke: {
            curve: 'smooth',
            colors: ['#00E396'], // set colors for each line chart
            width: [3] // set line width for each line chart
        },
        xaxis: {
            type: 'date',
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "july", "Aug", "Sep", "Oct", "Nov", "Dec"],
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                },
            },
            tooltip: {
                enabled: false,
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy'
            },
        }
    })
    const [ALLPRCHARTSeries, setALLPRCHARTSeries] = useState([
        {
            name: 'All PR',
            data: [4, 11, 13, 7, 6, 11, 6, 7, 11, 9, 10, 14]

        }
    ])

    // ALL Pending PR   
    const [ALLPENDINGPR, setALLPENDINGPR] = useState({
        chart: {
            height: 300,
            type: 'area',
            color: '#ffffff',
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {

            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        stroke: {
            curve: 'smooth',
            colors: ['#00E396'], // set colors for each line chart
            width: [3] // set line width for each line chart
        },
        xaxis: {
            type: 'date',
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "july", "Aug", "Sep", "Oct", "Nov", "Dec"],
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                },
            },
            tooltip: {
                enabled: false,
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy'
            },
        }
    })
    const [ALLPENDINGPRSeries, setALLPENDINGPRSeries] = useState([
        {
            name: 'All Pending PR',
            data: [4, 11, 13, 7, 6, 11, 6, 7, 11, 9, 10, 14]

        }
    ])

    // RFQ Creation
    const [RFQNO, setRFQNO] = useState(false);

    const handleRFQNO = () => setRFQNO(true);
    const RFQNOHandelColse = () => setRFQNO(false);
    return (
        <>
            <Navbar
                RFQDash="Dashboard"
                RFQAllRequest="All PR"
                RFQPendingReq="Pending PR"
                RFQALLRFQ="All RFQ"
                RFQPublished="Published RFQ"
                RFQResponses="Responses RFQ"
                RFQClosed="Closed RFQ"
                RFQCreateDeliveryschedule = "Create Delivery Schedule"
            />
            <RFQModal RFQNO={RFQNO} RFQNOHandelColse={RFQNOHandelColse} />
            <div className="container-fluid">
                <div className="card mt-2 RFQDASHBAORDMAIN">
                    <div className="card-body">
                        <div className="row g-2">
                            <div className="col">
                                {/* Published RFQ */}
                                <div className="row g-1">
                                    <div className="col">
                                        <div className="card RFQCARDCHILD">
                                            <div className="card-body p-2 ">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <h6 className="RFQCARDHEADING" title="Approved PR">Approved PR</h6>
                                                        <h5 className="RFQCARDCOUNT">15</h5>
                                                        <Link to="/allpr">
                                                            <button className='moreInfoRFQBTN'>More <ArrowRightIcon className='fs-6' /></button></Link>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Chart options={ALLPRCHART} series={ALLPRCHARTSeries} type="line" height={80} />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h6 className="RFQCARDHEADING" title="Pending PR">Pending PR</h6>
                                                        <h5 className="RFQCARDCOUNT">05</h5>
                                                        <Link to="/allpr">
                                                            <button className='moreInfoRFQBTN'>More <ArrowRightIcon className='fs-6' /></button></Link>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Chart options={ALLPENDINGPR} series={ALLPENDINGPRSeries} type="line" height={80} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Published RFQ */}
                                <div className="row mt-1">
                                    <div className="col">
                                        <div className="card RFQCARDCHILD">
                                            <div className="row g-1">
                                                <div className="col">
                                                    <div className="card RFQCARDCHILD">
                                                        <div className="card-body p-2">
                                                            <div className="row g-1">
                                                                <div className="col-6">
                                                                    <h6 className="RFQCARDHEADING" title="Published RFQ">Published RFQ</h6>
                                                                    <h4 className="RFQCARDCOUNT">150</h4>
                                                                    <Link to="/allrfq">
                                                                        <button className='moreInfoRFQBTN'>More <ArrowRightIcon className='fs-6' /></button></Link>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="text-end">
                                                                        <div id="campaign-sent-chart"></div>

                                                                        <Chart options={PublishedRFQ} series={PublishedRFQ.series} type="bar" width="100%" height="auto" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="card RFQCARDCHILD">
                                                        <div className="card-body p-2">
                                                            <div className="row g-1">
                                                                <div className="col-6">
                                                                    <h6 className="RFQCARDHEADING" title="Response RFQ">Response RFQ</h6>
                                                                    <h4 className="RFQCARDCOUNT">150</h4>
                                                                    <Link to="/allrfq">
                                                                        <button className='moreInfoRFQBTN'>More <ArrowRightIcon className='fs-6' /></button></Link>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="text-end">
                                                                        <div id="campaign-sent-chart"></div>
                                                                        <Chart options={RFQResponse} series={RFQResponse.series} type="bar" width="100%" height="auto" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* timeline */}
                                            <div className="card-body p-2">
                                                <h6 className="card-title ACTIVTYHEADERRFQ "><BorderTopIcon className='AccessTimeIconRecent me-1' />Recent 5 Activity</h6>
                                                <section class="py-3 BOXSHDOW">
                                                    <ul class="timeline">
                                                        <li class="timeline-item mb-2">
                                                            <h6 class="TIMEHEADER">Closed RFQ</h6>
                                                            <p class="text-muted mb-0  TIMELINEDATE">11-05-2023</p>
                                                            <p class="TIMELINEREQUESTNO mb-0">RFQ-00000000001-BPAAS </p>
                                                            <p class="text-muted TIMELINEDATE"></p>
                                                        </li>

                                                        <li class="timeline-item mb-2">
                                                            <h6 class="TIMEHEADER">Response RFQ</h6>
                                                            <p class="text-muted mb-0  TIMELINEDATE">13-05-2023</p>
                                                            <p class="TIMELINEREQUESTNO mb-0">RFQ-00000000001-BPAAS </p>
                                                            {/* <p class="text-muted TIMELINEDATE"><b></b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, quia sapiente asperiores ipsum magnam. Officiis veniam amet assumenda ipsa!</p> */}
                                                        </li>

                                                        <li class="timeline-item mb-2">
                                                            <h6 class="TIMEHEADER">Published</h6>
                                                            <p class="text-muted mb-0  TIMELINEDATE">15-05-2023</p>
                                                            <p class="TIMELINEREQUESTNO mb-0">RFQ-00000000003-BPAAS </p>
                                                            <p class="text-muted TIMELINEDATE"></p>
                                                        </li>

                                                        <li class="timeline-item mb-2">
                                                            <h6 class="TIMEHEADER">Closed</h6>
                                                            <p class="text-muted mb-0  TIMELINEDATE">18-05-2023</p>
                                                            <p class="TIMELINEREQUESTNO mb-0">RFQ-00000000004-BPAAS </p>
                                                            {/* <p class="text-muted TIMELINEDATE"><b></b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, quia sapiente asperiores ipsum magnam. Officiis veniam amet assumenda ipsa!</p> */}
                                                        </li>
                                                        <li class="timeline-item mb-2">
                                                            <h6 class="TIMEHEADER">Closed</h6>
                                                            <p class="text-muted mb-0 TIMELINEDATE">10-05-2023</p>
                                                            <p class="TIMELINEREQUESTNO mb-0">RFQ-00000000005-BPAAS </p>
                                                            {/* <p class="text-muted TIMELINEDATE"><b></b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, quia sapiente asperiores ipsum magnam. Officiis veniam amet assumenda ipsa!</p> */}
                                                        </li>
                                                    </ul>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Monthly All RFQ and All Closed RFQ Status */}
                            <div className="col-md-7">
                                <div className="card RFQCARDCHILD">
                                    <div className="card-body p-2">
                                        <div className="d-flex  justify-content-center">
                                            <div className="card m-1 RFQCARDCHILD">
                                                <div className="card-body ">
                                                    <h6 className="card-title ACTIVTYHEADERRFQ"><BorderTopIcon className='AccessTimeIconRecent me-1' /> All RFQ Status</h6>
                                                    <Chart options={ALLRFQOPTION} series={ALLRFQOPTION.series} type="polarArea" height={240} />

                                                </div>
                                            </div>
                                            <div className="card m-1 RFQCARDCHILD">
                                                <div className="card-body">
                                                    <div className='row'>
                                                        <div className="col">
                                                            <h6 className="card-title ACTIVTYHEADERRFQ"><BorderTopIcon className='AccessTimeIconRecent me-1' /> All PR Status</h6>
                                                        </div>
                                                        <div className="col">
                                                            <button className='float-end CREATERFQBTN' type='button' onClick={handleRFQNO}>Create RFQ</button>
                                                        </div>
                                                    </div>
                                                    <Chart options={ALLPROPTIONS} series={ALLPROPTIONS.series} type="polarArea" height={240} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-2 RFQCARDCHILD">
                                    <div className="card-body p-1">
                                        <h6 className="card-title ACTIVTYHEADERRFQ "><BorderTopIcon className='AccessTimeIconRecent me-1' />Latest 10 Pending PR</h6>
                                        <div className="table-responsive TABLETOPSCROLL">
                                            <table className="table table-sm  TOP20PENDINGTABLE">
                                                <tbody>
                                                    {PRAPPROVEDDATA.map((key, items) => (
                                                        <tr key={items}>
                                                            <td><span className='TOPPENDINGLINEITEMS'>{key.IndentNo}</span> <br /><span className='TABLETOPPENDINGHEAD'>Indent Number</span> </td>
                                                            <td><span className='TOPPENDINGLINEITEMS'>{key.PRNo}</span><br /><span className='TABLETOPPENDINGHEAD'>PR Number</span></td>
                                                            <td><span className='TOPPENDINGLINEITEMS'>{key.PRApprovedDate}</span> <br /><span className='TABLETOPPENDINGHEAD'>PR Approved Date</span></td>
                                                            <td><span className='TOPPENDINGLINEITEMS'>{key.PRApprovedBy}</span> <br /><span className='TABLETOPPENDINGHEAD'>PR Approved By</span></td>
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
                </div>
            </div>
        </>
    );
}
