import React, { useEffect, useState } from 'react'
import Navbar from '../NavItems/Navbar'
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

const DeliveryScheduleData = () => {
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
            field: 'VendorCode',
            headerName: "Vendor Code",
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'VendorName',
            headerName: 'Vendor Name',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'PoNumber',
            headerName: "Po Number",
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'POLineItemNo',
            headerName: 'PO Line item No',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'IMPartNumber',
            headerName: 'IM Part Number',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'IMPartDesc',
            headerName: 'IM Part Desc',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'HSNCode',
            headerName: 'HSN Code',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'Unit',
            headerName: 'Unit',
            width: 80,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'InvoicePrice',
            headerName: 'Invoice Price',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'Currency',
            headerName: 'Currency',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'PricePerPC',
            headerName: 'Price Per PC',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'NetAmount',
            headerName: 'Net Amount',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'TaxAmount',
            headerName: 'Tax Amount',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'TotalAmount',
            headerName: 'Total Amount',
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'MPN',
            headerName: 'MPN (if)',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
        {
            field: 'Make',
            headerName: 'Make (if)',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
        {
            field: 'MaterialBatch',
            headerName: 'Material Batch/Lot No (if)',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
        {
            field: 'MaterialDateCode',
            headerName: 'Material date code (if)',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
        {
            field: 'DateOfManufacturing',
            headerName: 'Date Of manufacturing',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
        {
            field: 'InvoiceNumber',
            headerName: 'Invoice Number',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
        {
            field: 'InvoiceDate',
            headerName: 'Invoice Date',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
        {
            field: 'InvoiceQuantity',
            headerName: 'Invoice Quantity',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
        {
            field: 'FreightAmount',
            headerName: 'Freight Amount',
            width: 120,
            cellClassName: 'super-app-theme--cell orange-background',
            headerClassName: 'super-app-theme--header orange-background',
        },
    ]


    const rows = [
        { 
            id: 1, 
            VendorCode: '345455', 
            VendorName: "Duna Fashion", 
            PoNumber: "00002", 
            POLineItemNo: "2", 
            IMPartNumber: "343355", 
            IMPartDesc: "Big Tamper proof bag", 
            HSNCode: "767867",
            Unit :"PCs",
            InvoicePrice:"1000",
            Currency :"INR",
            PricePerPC:"33",
            NetAmount:"1000",
            TaxAmount:"200",
            TotalAmount:"1200",
            MPN:"",
            Make:"",
            MaterialBatch:"",
            MaterialDateCode:"",
            DateOfManufacturing:"",
            InvoiceNumber:"",
            InvoiceDate:"",
            InvoiceQuantity:"",
            FreightAmount:"",

        },
    ];

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
                                        <h6 className="card-title TRCARD1CARDTITLE"><AddTaskIcon className='fs-5 TRCARD1CARDTITLEICON ' /> Delivery Schedule All Data</h6>
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
                                            fontSize: "12px"
                                        },
                                        '& .MuiDataGrid-cell--textLeft': {
                                            fontSize: "12px",
                                        },
                                        '& .orange-background':{
                                            backgroundColor: "#fcc75d",
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

export default DeliveryScheduleData




