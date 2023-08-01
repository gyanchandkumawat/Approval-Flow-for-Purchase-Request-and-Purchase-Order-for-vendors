import React, { useEffect, useState } from 'react'
import VendorNavbar from './VendorNavbar'
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


import $ from 'jquery';
import 'daterangepicker';
import 'daterangepicker/daterangepicker.css';
import moment from 'moment/moment';



function VAllActivities() {
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
    });

  }
  useEffect(() => {
    HadleSelectDateRange();
  }, []);

  const columns = [
    {
      field: 'RFQNumber',
      headerName: "RFQ Number",
      width: 200,
      cellClassName: 'super-app-theme--cell',
      renderCell: (params) => {
        return <Link to={
          params.row.RFQNumber === "RFQ-00000000001-BPAAS" ? '/acknowledge'
            : (params.row.RFQNumber === "RFQ-00000000002-BPAAS" ? '#'
            : params.row.RFQNumber === "RFQ-00000000003-BPAAS" ? '/acknowledge' 
            : params.row.RFQNumber === "RFQ-00000000004-BPAAS" ? '/acknowledge' 
            : params.row.RFQNumber === "RFQ-00000000005-BPAAS" ? '/acknowledge' 
            : params.row.RFQNumber==="RFQ-00000000011-BPAAS"?'/acknowledgesubmit'
            :"")}>{params.row.RFQNumber}</Link>;
      }
    },
    {
      field: 'OpenDate',
      headerName: 'Open Date',
      width: 180,
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'CloseDate',
      headerName: 'Close Date',
      width: 180,
      cellClassName: 'super-app-theme--cell',
    },
    {
        field: 'TimeLeft',
        headerName: "Time Left",
        width: 90,
        cellClassName: 'super-app-theme--cell',
      },
    {
      field: 'Status',
      headerName: 'Status',
      width: 100,
      cellClassName: 'super-app-theme--cell',
    }
  ]

  const rows = [
    { id: "1", RFQNumber: 'RFQ-00000000001-BPAAS',OpenDate:"17-05-2023", CloseDate:"22-05-2023", TimeLeft: "5 Days", Status: "Active" },
    { id: "2", RFQNumber: 'RFQ-00000000002-BPAAS',OpenDate:"18-05-2023", CloseDate:"18-05-2023", TimeLeft: "0 Days", Status: "Expired" },
    { id: "3", RFQNumber: 'RFQ-00000000003-BPAAS',OpenDate:"19-05-2023", CloseDate:"20-05-2023", TimeLeft: "1 Days", Status: "Active" },
    { id: "4", RFQNumber: 'RFQ-00000000004-BPAAS',OpenDate:"07-05-2023", CloseDate:"13-05-2023", TimeLeft: "6 Days", Status: "Active" },
    { id: "5", RFQNumber: 'RFQ-00000000005-BPAAS',OpenDate:"17-05-2023", CloseDate:"22-05-2023", TimeLeft: "5 Days", Status: "Active" },
    { id: "6", RFQNumber: 'RFQ-00000000006-BPAAS',OpenDate:"17-05-2023", CloseDate:"20-05-2023", TimeLeft: "3 Days", Status: "Active" },
    { id: "7", RFQNumber: 'RFQ-00000000007-BPAAS',OpenDate:"17-05-2023", CloseDate:"21-05-2023", TimeLeft: "5 Days", Status: "Active" },
    { id: "8", RFQNumber: 'RFQ-00000000008-BPAAS',OpenDate:"15-05-2023", CloseDate:"22-05-2023", TimeLeft: "7 Days", Status: "Active" },
    { id: "9", RFQNumber: 'RFQ-00000000009-BPAAS',OpenDate:"17-05-2023", CloseDate:"14-05-2023", TimeLeft: "2 Days", Status: "Active" },
    { id: "10", RFQNumber: 'RFQ-00000000010-BPAAS',OpenDate:"17-05-2023", CloseDate:"18-05-2023", TimeLeft: "1 Days", Status: "Active" },
    { id: "11", RFQNumber: 'RFQ-00000000011-BPAAS',OpenDate:"20-05-2023", CloseDate:"20-05-2023", TimeLeft: "0 Days", Status: "Acknowledged" },

  ];

  return (
    <>
      <VendorNavbar/>
      <div className="container-fluid">
        <div className="row m-2">
          <div className="card TRMCARD1">
            <div className="card-body TRMCARDBODY2">
              <div className="">
                <div className="row g-1">
                  <div className="col">
                    <h6 className="card-title TRCARD1CARDTITLE"><AddTaskIcon className='fs-5 TRCARD1CARDTITLEICON ' /> All RFQ</h6>
                  </div>
                  <div className="col-md-4">
                    <div class="input-group mb-3">
                      <select className="form-select ALLREQSELECTFILTER" aria-label="Default select example" id="CostCenter">
                        <option selected>Select</option>
                        <option value="RFQ Number">RFQ Number</option>
                      </select>
                      <input type="text" name="LableFIlter" class="form-control DATERANGEINPUT" placeholder='Enter RFQ Number' />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text DATERANGELable" id="inputGroup-sizing-sm ">Date Filter</span>
                      <input type="text" class="form-control DATERANGEINPUT" name="daterange" autoComplete='off' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Select...' value={selectedRange} onChange={HadleSelectDateRange} />
                    </div>
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
      </div>

    </>
  )
}

export default VAllActivities