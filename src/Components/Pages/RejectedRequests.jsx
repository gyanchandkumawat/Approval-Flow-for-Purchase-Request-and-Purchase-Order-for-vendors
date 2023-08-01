import React, { useEffect, useState } from 'react'
import '../../Assets/Css/AllRequest.css'
import '../../../node_modules/daterangepicker/daterangepicker.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Navbar from '../NavItems/Navbar';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the default styles
import 'react-date-range/dist/theme/default.css'; // Import the default theme
import CancelIcon from '@mui/icons-material/Cancel';


import $ from 'jquery';
import 'daterangepicker';
import 'daterangepicker/daterangepicker.css';
import moment from 'moment/moment';



export default function RejectedFormRequest() {
  const [pageSize, setPageSize] = useState(15);

  const [selectedRange, setSelectedRange] = useState('');
  const HadleSelectDateRange = () => {
    const $dateRangePicker = $('input[name="daterange"]');
    const currentDate = moment().format('DD/MM/YYYY');
    $dateRangePicker.daterangepicker({
      opens: 'left',
      startDate: currentDate,
      endDate: currentDate,
      autoUpdateInput: true,
      locale: {
        format: 'DD/MM/YYYY',
        cancelLabel: 'Clear'
      }
    }, function (start, end, label) {
      setSelectedRange(`${start.format('DD/MM/YYYY')} - ${end.format('DD/MM/YYYY')}`);
      // console.log(`Selected Date is: ${start.format('DD/MM/YYYY')} to ${end.format('DD/MM/YYYY')}`);
    });

  }
  useEffect(() => {
    HadleSelectDateRange();
  }, []);

  const columns = [

    // {
    //   field: 'id',
    //   headerName: 'S.No.',
    //   width: 80,
    //   cellClassName: 'super-app-theme--cell',
    // },
   
    {
      field: 'IndentNo',
      headerName: "Indent Number",
      width: 130,
      cellClassName: 'super-app-theme--cell',
      renderCell: (params) => {
        // approved
        return <Link to={
          params.row.IndentNo === "Indent-00000000006" ? '/rejectedformrequest'
            : (params.row.IndentNo === "Indent-00000000002" ? '/approvedformrequest' : "")}>{params.row.IndentNo}</Link>;
      }
    },
    {
      field: 'PurchaseRequestID',
      headerName: 'Purchase Request ID',
      width: 160,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'RFQNumber',
      headerName: 'RFQ Number',
      width: 130,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'PoNumber',
      headerName: 'Po Number',
      width: 120,
      cellClassName: 'super-app-theme--cell',
    },
    
    {
      field: 'CreatedOn',
      headerName: "Created On",
      width: 90,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'CreatedBy',
      headerName: 'Created By',
      width: 100,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'PRRejctedOn',
      headerName: 'PR Rejected On',
      width: 160,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'PRRejectedBy',
      headerName: 'PR Rejected By',
      width: 160,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 80,
      cellClassName: 'super-app-theme--cell',
    }


  ]


  const rows = [
    { id: "1", PurchaseRequestID: "", IndentNo: 'Indent-00000000006',PoNumber:"",RFQNumber:"", PRRejectedBy:"Suresh sharma",PRRejctedOn:"17-05-2023", CreatedOn: "14-05-2023", CreatedBy: "Sanjay Kumar", Status: "Rejected" },
   
  ];


  // openmodal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

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
        <div className="row m-2">
          <div className="card TRMCARD1">
            <div className="card-body TRMCARDBODY2">
              <div className="">
                <div className="row g-1">
                  <div className="col">
                    <h6 className="card-title TRCARD1CARDTITLE"><CancelIcon className='fs-5 TRCARD1CARDTITLEICON ' /> All Rejected Requests</h6>
                  </div>
                  <div className="col-md-4 d-none">
                    <div class="input-group mb-3">
                      <select className="form-select ALLREQSELECTFILTER" aria-label="Default select example" id="CostCenter">
                        <option selected>Select</option>
                        <option value="Indent Number">Indent Number</option>
                        <option value="Purchase Request Number">Purchase Request Number</option>
                        <option value="Purchase Order Number">Purchase Order Number</option>
                      </select>
                      <input type="text" name="LableFIlter" class="form-control DATERANGEINPUT" />
                    </div>
                  </div> 
                  <div className="col-md-3 d-none">
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text DATERANGELable" id="inputGroup-sizing-sm ">Date Filter</span>
                      <input type="text" class="form-control DATERANGEINPUT" name="daterange" autoComplete='off' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Select...' value={selectedRange} onChange={HadleSelectDateRange} />
                    </div>
                    {/* <input type="text" name="daterange" autoComplete='off' className='form-control DATERANGEINPUT' aria-describedby="basic-addon1" placeholder='Select...' value={selectedRange} onChange={HadleSelectDateRange} /> */}
                  </div>
                </div>

              </div>
              <Box sx={{ height: 450, width: '100%' }} >
                <DataGrid className="G20DATAGRIDDATATABLE"
                  rowHeight={25}
                  rows={rows}
                  columns={columns}
                  pageSize={pageSize}
                  rowsPerPageOptions={[15, 25, 50]}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  pagination
                  showQuickFilter
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                  components={{ Toolbar: GridToolbar }}
                  componentsProps={{
                    toolbar: {
                      showQuickFilter: true,
                      quickFilterProps: { debounceMs: 500 },
                    },
                  }}

                  sx={{
                    boxShadow: 0,
                    border: 0,

                    '& .super-app-theme--cell': {
                      verticalAlign: "middle",
                      color: "#08378c",
                      fontFamily: "Arial, Helvetica, sans-serif, calibri",
                    },
                    '& .css-yrdy0g-MuiDataGrid-columnHeaderRow': {
                      color: '#838485',
                      // backgroundColor:"#0267a6",
                      fontSize: "12px"
                    },
                    '& .MuiDataGrid-cell--textLeft': {
                      fontSize: "12px",

                    }
                  }}
                />
              </Box>
            </div>
          </div>

        </div>
        {/* Modal */}
        <div class="modal" tabindex="-1" role="dialog" style={{ display: modalIsOpen ? 'block' : 'none' }}>
          <div class="modal-dialog modal-lg " role="document">
            <div class="modal-content PDFOPENMODALMAIN">
              <div class="modal-header p-1 PDFOPENMODALHEADER">
                <h6 class="modal-title TRCARD1CARDTITLE"><DocumentScannerIcon className='fs-5 TRCARD1CARDTITLEICON ' />Invoice No : 66259</h6>
                {/* <button type="button" class="btn-close CLOSEMODALBUTTON" data-bs-dismiss="modal" aria-label="Close" ></button> */}
                <CloseIcon type="button" onClick={() => setModalIsOpen(false)} className="CLOSEMODALBUTTON" />
              </div>
              <div class="modal-body">
                <embed src="" width="100%" height="430px" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
