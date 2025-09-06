import React, { useEffect, useState } from 'react'
import Navbar from '../NavItems/Navbar'
import '../../Assets/Css/Dashboard.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Chart from 'react-apexcharts';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddTaskIcon from '@mui/icons-material/AddTask';


export default function DashboardIndent() {

  useEffect(() => {
    document.title = "Dashboard"
  }, [])


  // small charts-1
  const [ALLRequest, setALLRequest] = useState({
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      }
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
    labels: ['All Requests'],
  });

  const [ALLRequestSeries, setALLRequestSeries] = useState([70,]);
  // small charts


  // small charts-2
  const [PendingRequest, setPendingRequest] = useState({
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      }
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
    labels: ['All Pending Requests'],
  });

  const [PendingRequestSeries, setPendingRequestSeries] = useState([11,]);
  // small charts


  // small charts-3
  const [AppRequest, setAppRequest] = useState({
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      }
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
    labels: ['All Approved Requests'],
  });

  const [AppRequestSeries, setAppRequestSeries] = useState([50,]);
  // small charts


  // small charts-4
  const [RejRequest, setRejRequest] = useState({
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      }
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
    labels: ['All Rejected Requests'],
  });

  const [RejRequestSeries, setRejRequestSeries] = useState([9]);
  // small charts


  // right sidecharts

  const [Invoicedata, setInvoicedata] = useState({
    chart: {
      height: 350,
      type: 'area',
      color: '#ffffff',

    },
    plotOptions: {
      bar: {
        borderRadius: 5,

        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    stroke: {
      curve: 'smooth',
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
  const [InvoicedataSeries, setInvoicedataSeries] = useState([
    {
      name: 'Total Requests',
      data: [4, 16, 13, 7, 6, 11, 6, 7, 11, 9, 10, 14]

    }
  ])





  // Multiline chart
  const [Paiddata, setPaiddata] = useState({
    chart: {
      height: 350,
      type: 'area',
      color: '#ffffff',
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
      colors: ['#008FFB', '#00E396'], // set colors for each line chart
      width: [3, 3] // set line width for each line chart
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
  const [PaiddataSeries, setPaiddataSeries] = useState([
    {
      name: 'Pending Requests',
      data: [4, 16, 13, 7, 6, 11, 6, 7, 11, 9, 10, 14]

    },
    {
      name: 'Query Requests',
      data: [2, 8, 6, 4, 3, 7, 4, 5, 7, 6, 7, 10]
    }
  ])

  return (
    <>
      <Navbar
        inDashboard="Dashboard"
        IndAllRequest="All Requests"
        IndPendingReq="Pending Requests"
        IndApprovedReq="Approved Requests"
        IndRejectedRequests="Rejected Requests"
        IndDraftRequests="Draft Requests"
        IndQueryRequests="Query Requests"
      />
      <div className="container-fluid">
        <div className="card mt-2 Dashboardmaincard">
          <div className="card-body">
            <div className="row g-2">
              <div className="col-md-5">
                <div className="row mb-2 g-2">
                  <div className="col">
                    <div className="card DetailCard HOVERCOUNT">
                      <div className="card-body p-2">
                        <h6 className='card-title'>
                          <div>
                            <span className='REquesthead'>All Requests</span>
                            <Link to="/allrequests" style={{ textDecoration: "none" }}>
                              <button className='float-end RequestIcons'>More info</button></Link>
                          </div>
                          <div className='row mt-2'>
                            <div className="col-md-6">
                              <h2 className='COUNT'>70</h2>
                            </div>
                            <div className="col-md-6">
                              <Chart
                                options={ALLRequest}
                                series={ALLRequestSeries}
                                type="donut"
                                width="100%"
                                height="auto"
                              />
                            </div>
                          </div>
                          {/* <div>
                            <h6><span className='grownumber1 me-3'><ArrowUpwardIcon className='ArrowUpwardIcon text-primary' />+03 </span>
                              <span className='Undertext'>Since Last Month</span></h6>
                          </div> */}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card DetailCard hovercount2">
                      <div className="card-body p-2">
                        <h6 className='card-title'>
                          <div>
                            <span className='REquesthead'>Pending Requests</span>
                            <Link to="/allrequests" style={{ textDecoration: "none" }}>
                              <button className='float-end RequestIcons'>More info</button></Link>
                          </div>
                          <div className='row mt-2'>
                            <div className="col-md-6">
                              <h2 className='COUNT'>11</h2>
                            </div>
                            <div className="col-md-6">
                              <Chart
                                options={PendingRequest}
                                series={PendingRequestSeries}
                                type="donut"
                                width="100%"
                                height="auto"
                              />
                            </div>
                          </div>
                          {/* <div>
                            <h6><span className='grownumber2 me-3'><ArrowUpwardIcon className='ArrowUpwardIcon text-warning' />+05 </span>
                              <span className='Undertext'>Since Last Month</span></h6>
                          </div> */}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2 g-2">
                  <div className="col">
                    <div className="card DetailCard hovercount3">
                      <div className="card-body p-2">
                        <h6 className='card-title'>
                          <div>
                            <span className='REquesthead'>Approved Requests</span>
                            <Link to="/allrequests" style={{ textDecoration: "none" }}>
                              <button className='float-end RequestIcons'>More info</button></Link>
                          </div>
                          <div className='row mt-2'>
                            <div className="col-md-6">
                              <h2 className='COUNT'>50</h2>
                            </div>
                            <div className="col-md-6">
                              <Chart
                                options={AppRequest}
                                series={AppRequestSeries}
                                type="donut"
                                width="100%"
                                height="auto"
                              />
                            </div>
                          </div>
                          {/* <div>
                            <h6><span className='grownumber3 me-3'><ArrowUpwardIcon className='ArrowUpwardIcon text-success' />+11 </span>
                              <span className='Undertext'>Since Last Month</span></h6>
                          </div> */}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card DetailCard hovercount4">
                      <div className="card-body p-2">
                        <h6 className='card-title'>
                          <div>
                            <span className='REquesthead'>Rejected Requests</span>
                            <Link to="/allrequests" style={{ textDecoration: "none" }}>
                              <button className='float-end RequestIcons'>More info</button></Link>
                          </div>
                          <div className='row mt-2'>
                            <div className="col-md-6">
                              <h2 className='COUNT'>09</h2>
                            </div>
                            <div className="col-md-6">
                              <Chart
                                options={RejRequest}
                                series={RejRequestSeries}
                                type="donut"
                                width="100%"
                                height="auto"
                              />
                            </div>
                          </div>
                          {/* <div>
                            <h6><span className='grownumber4 me-3'><ArrowDownwardIcon className='ArrowUpwardIcon text-danger' />+01 </span>
                              <span className='Undertext'>Since Last Month</span></h6>
                          </div> */}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card TREAQUESTBARCHART">
                  <div className="card-body p-2 heightfix">
                    <h6 className="card-title  hvr-icon-drop"><AddTaskIcon className='EditNoteIcon text-primary hvr-icon' /> Total Request Status</h6>
                    <Link className=" CREATEINDENT float-end " to="/createindent"><EditNoteIcon className=' CreateIndentIcon' />Create Indent</Link>
                    <Chart options={Invoicedata} series={InvoicedataSeries} type="bar" height={180} className="CHART" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row  g-2">
              <div className="col-md-7">
                <div className="card TREAQUESTBARCHART">
                  <div className="card-body p-2">
                    <div className='d-flex DraftQuery'>
                      <div className="col">
                        <h6 className='draftheader'><SaveAsIcon className='me-1 SaveAsIcon' />Draft Requests
                          <Link to="/allrequests" className='DRAFTQUERYMOREINFORBTN'>More Info</Link></h6>
                        <span className='TOTALDindentqury'>Total Draft Requests <b> 13</b></span><br />
                        {/* <span className='TOTALDindentqury'>Last Darft Indent No.: <b> Indent-00000000001</b></span><br />
                        <span className='TOTALDindentqury'>Last Darft Indent Date : <b>11-05-2023</b> </span> */}
                      </div>
                      <div className="col">
                        <h6 className='draftheader'><EqualizerIcon className='SaveAsIcon me-1' />Query Requests <Link to="/allrequests" className='DRAFTQUERYMOREINFORBTN'>More Info</Link></h6>
                        <span className='TOTALDindentqury'>Total Query Requests <b> 07</b></span><br />
                        {/* <span className='TOTALDindentqury'>Last Query Request No.: <b> Indent-00000000001</b></span><br />
                        <span className='TOTALDindentqury'>Last Query Request Date : <b>11-05-2023</b> </span> */}
                      </div>
                    </div>
                    <h6 className="card-title mt-3">Monthly Pending and Query Request Status</h6>
                    <Chart options={Paiddata} series={PaiddataSeries} type="line" height={290} />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card TREAQUESTBARCHART">
                  <div className="card-body  ">
                    <h6 className="card-title RECENTACTIVITY "><WatchLaterIcon className='AccessTimeIconRecent me-1' />Recent 5 Activity</h6>
                    <section class="py-3 BOXSHDOW">
                      <ul class="timeline">
                        <li class="timeline-item mb-2">
                          <h6 class="fw-bold">Approved</h6>
                          <p class="text-muted mb-0 fw-bold TIMELINEDATE">Date : 11-05-2023</p>
                          <p class="TIMELINEREQUESTNO mb-0">Request No. : PR-00000000001-BPAAS </p>
                          <p class="text-muted TIMELINEDATE"></p>
                        </li>

                        <li class="timeline-item mb-2">
                          <h6 class="fw-bold">Query Raised</h6>
                          <p class="text-muted mb-0 fw-bold TIMELINEDATE">Date : 13-05-2023</p>
                          <p class="TIMELINEREQUESTNO mb-0">Request No. : PR-00000000002-BPAAS </p>
                          {/* <p class="text-muted TIMELINEDATE"><b>Remarks :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, quia sapiente asperiores ipsum magnam. Officiis veniam amet assumenda ipsa!</p> */}
                        </li>

                        <li class="timeline-item mb-2">
                          <h6 class="fw-bold">Pending</h6>
                          <p class="text-muted mb-0 fw-bold TIMELINEDATE">Date : 15-05-2023</p>
                          <p class="TIMELINEREQUESTNO mb-0">Request No. : PR-00000000003-BPAAS </p>
                          <p class="text-muted TIMELINEDATE"></p>
                        </li>

                        <li class="timeline-item mb-2">
                          <h6 class="fw-bold">Approved</h6>
                          <p class="text-muted mb-0 fw-bold TIMELINEDATE">Date : 18-05-2023</p>
                          <p class="TIMELINEREQUESTNO mb-0">Request No. : PR-00000000004-BPAAS </p>
                          {/* <p class="text-muted TIMELINEDATE"><b>Remarks :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, quia sapiente asperiores ipsum magnam. Officiis veniam amet assumenda ipsa!</p> */}
                        </li>
                        <li class="timeline-item mb-2">
                          <h6 class="fw-bold">Rejected</h6>
                          <p class="text-muted mb-0 fw-bold TIMELINEDATE">Date : 10-05-2023</p>
                          <p class="TIMELINEREQUESTNO mb-0">Request No. : PR-00000000005-BPAAS </p>
                          {/* <p class="text-muted TIMELINEDATE"><b>Remarks :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, quia sapiente asperiores ipsum magnam. Officiis veniam amet assumenda ipsa!</p> */}
                        </li>
                      </ul>
                    </section>
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
