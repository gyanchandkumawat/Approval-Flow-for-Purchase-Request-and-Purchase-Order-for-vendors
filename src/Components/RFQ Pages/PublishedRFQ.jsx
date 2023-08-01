import React, { useEffect, useState } from 'react'
import '../../Assets/Css/AllRequest.css'
import '../../../node_modules/daterangepicker/daterangepicker.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the default styles
import 'react-date-range/dist/theme/default.css'; // Import the default theme


import $ from 'jquery';
import 'daterangepicker';
import 'daterangepicker/daterangepicker.css';
import moment from 'moment/moment';
import Navbar from '../NavItems/Navbar';



export default function PublishedRFQ() {
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
      field: 'RFQNumber',
      headerName: 'RFQ Number',
      width: 190,
      cellClassName: 'super-app-theme--cell',
      renderCell: (params) => {
        // approved
        return <Link to={
          params.row.RFQNumber === "RFQ-00000000002-BPAAS" ? '/publishedrfqform'
            : (params.row.RFQNumber === "RFQ-00000000003-BPAAS" ? '#' : "")}>{params.row.RFQNumber}</Link>;
      }
    },
    {
      field: 'RFQCreatedBy',
      headerName: 'RFQ Created By',
      width: 120,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'RFQCreatedOn',
      headerName: 'RFQ Created On',
      width: 180,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'PurchaseRequestID',
      headerName: 'PR Number',
      width: 160,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'PRCreatedBy',
      headerName: 'PR Created By',
      width: 100,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'PRCreatedOn',
      headerName: "PR Created On",
      width: 180,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'EndDate',
      headerName: 'End Date',
      width: 180,
      cellClassName: 'super-app-theme--cell',
    }


  ]


  const rows = [
    { id: "1", PurchaseRequestID: "PR-00000000001-BPAAS",RFQNumber:"RFQ-00000000002-BPAAS", RFQCreatedBy:"Suresh sharma",RFQCreatedOn:"17-05-2023 11:23:00 AM", PRCreatedOn: "14-05-2023 11:23:00 AM", PRCreatedBy: "Sanjay Kumar", EndDate: "28-05-2023 12:00:00 AM" },
    { id: "2", PurchaseRequestID: "PR-00000000002-BPAAS",RFQNumber:"RFQ-00000000003-BPAAS", RFQCreatedBy:"Suresh sharma",RFQCreatedOn:"18-05-2023 10:44:23 AM", PRCreatedOn: "09-05-2023 10:44:23 AM", PRCreatedBy: "Sanjay Kumar", EndDate: "28-05-2023 12:00:00 AM" },
    { id: "3", PurchaseRequestID: "PR-00000000003-BPAAS",RFQNumber:"RFQ-00000000004-BPAAS", RFQCreatedBy:"Suresh sharma",RFQCreatedOn:"16-05-2023 09:20:33 AM", PRCreatedOn: "08-05-2023 09:20:33 AM", PRCreatedBy: "Sanjay Kumar", EndDate: "28-05-2023 12:00:00 AM" },
    { id: "4", PurchaseRequestID: "PR-00000000004-BPAAS",RFQNumber:"RFQ-00000000005-BPAAS", RFQCreatedBy:"Suresh sharma",RFQCreatedOn:"14-05-2023 12:24:55 PM", PRCreatedOn: "04-05-2023 12:24:55 PM", PRCreatedBy: "Sanjay Kumar", EndDate: "28-05-2023 12:00:00 AM" },

  ];


  // openmodal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

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
        />
      <div className="container-fluid">
        <div className="row m-2">
          <div className="card TRMCARD1">
            <div className="card-body TRMCARDBODY2">
              <div className="">
                <div className="row g-1">
                  <div className="col">
                    <h6 className="card-title TRCARD1CARDTITLE"><AddTaskIcon className='fs-5 TRCARD1CARDTITLEICON ' /> All Published RFQ</h6>
                  </div>
                  {/* <div className="col-md-4">
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
                  <div className="col-md-3">
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text DATERANGELable" id="inputGroup-sizing-sm ">Date Filter</span>
                      <input type="text" class="form-control DATERANGEINPUT" name="daterange" autoComplete='off' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Select...' value={selectedRange} onChange={HadleSelectDateRange} />
                    </div>
                  </div> */}
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
