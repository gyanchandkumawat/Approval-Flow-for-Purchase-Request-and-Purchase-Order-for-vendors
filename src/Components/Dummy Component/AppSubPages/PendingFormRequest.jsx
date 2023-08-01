import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../../Assets/Css/CreateIndent.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import iziToast from 'izitoast';

import DeleteIcon from '@mui/icons-material/Delete';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import moment from 'moment/moment';
// import { Modal } from 'react-bootstrap';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import CommentIcon from '@mui/icons-material/Comment';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../../NavItems/Navbar';



export default function APPPendingFormRequest() {
    const navigate = useNavigate();
    const currentDate = new Date().toLocaleDateString();
    const HandelAddInvoiceForm = (event) => {
        event.preventDefault();
        iziToast.success({
            title: 'Request',
            message: 'Approved Successfully',
            position: 'topRight'
        });
        navigate("/appdashboard", { replace: true });
    }


    //  Crud Opration line items add
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [items, setItems] = useState([
        {
            id: 1,
            ItemCode: "OPEXBAG0004",
            ItemDesc: "Canvas Bag BIG 20x20x34 with double layered base. Weight approximately 250  15 grams along with eyelet attached and stitched with P.P. POLY POPLIN threads.",
            Type: "",
            Category: "",
            Revision: "",
            UOM: "No",
            Quantity: "10000",
            Price: "33",
            NeedByDate: "",
            Delivertolocation: "DEH",
            ChargeAccount: "",
            NaturalAccount: "",
            Function: "",
        },
        {
            id: 2,
            ItemCode: "OPEXBAG0005",
            ItemDesc: "Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap, 4 Inch gusset ,55 microns, twin sealing, sequential barcodes (2 places) , side series and POD Jacket) as per approved design",
            Type: "",
            Category: "",
            Revision: "",
            UOM: "No",
            Quantity: "10000",
            Price: "5",
            NeedByDate: "",
            Delivertolocation: "INH",
            ChargeAccount: "",
            NaturalAccount: "",
            Function: "",
        },

    ]);
    const [Type, setType] = useState("");
    const [ItemDesc, setItemDesc] = useState("");
    const [ItemCode, setItemCode] = useState("");
    const [Category, setCategory] = useState("");
    const [Revision, setRevision] = useState("");
    const [UOM, setUOM] = useState("");
    const [Quantity, setQuantity] = useState("");

    const [Price, setPrice] = useState("");
    const [NeedByDate, setNeedByDate] = useState("");
    const [Delivertolocation, setDelivertolocation] = useState("");
    const [ChargeAccount, setChargeAccount] = useState("");
    const [NaturalAccount, setNaturalAccount] = useState("");
    const [Function, setFunction] = useState("");


    const CrudhandleModalOpen = () => {
        setCurrentItem(null);
        setType("");
        setItemDesc("");
        setItemCode("");
        setCategory("");
        setRevision("");
        setUOM("");
        setQuantity("");

        setPrice("");
        setNeedByDate("");
        setDelivertolocation("");
        setChargeAccount("");
        setNaturalAccount("");
        setFunction("");
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // INSERT ITEM
    const handleAddItem = (event) => {
        event.preventDefault();
        if (!Type || !ItemDesc || !ItemCode || !Category
            || !Revision || !UOM || !Quantity || !Price
            || !NeedByDate || !Delivertolocation || !ChargeAccount || !NaturalAccount || !Function) {
            // Show an error toast message
            iziToast.error({
                class: "IZITOAST",
                message: 'All fields are mandatory',
                messageColor: "red",
                messageSize: "6px",
                messageLineHeight: "",
                position: 'topRight',
                theme: 'light', // dark
                backgroundColor: 'rgb(255 255 255 / 72%)',
                icon: "fa-regular fa-circle-xmark",
                iconColor: "red",
            });
            return;
        }

        const newItem = {
            id: items.length + 1,
            Type,
            ItemDesc,
            ItemCode,
            Category,
            Revision,
            UOM,
            Quantity,
            Price,
            NeedByDate,
            Delivertolocation,
            ChargeAccount,
            NaturalAccount,
            Function,
        };

        setItems([...items, newItem]);
        // Clear the form inputs
        setType('');
        setItemDesc('');
        setItemCode('');
        setCategory('');
        setRevision('');
        setUOM('');
        setQuantity('');
        setPrice('');
        setNeedByDate('');
        setDelivertolocation('');
        setChargeAccount('');
        setNaturalAccount('');
        setFunction('');
        // Show a success toast message
        iziToast.show({
            class: "IZITOAST",
            message: 'Item added successfully',
            messageColor: "green",
            messageSize: "6px",
            messageLineHeight: "",
            position: 'topRight',
            theme: 'light', // dark
            backgroundColor: 'rgb(255 255 255 / 72%)',
            icon: "fa-solid fa-check",
            iconColor: "green",
        });
        // Close the modal
        setIsModalOpen(false);

    };

    // SHOW VALUES IN MODAL FOR UPDATE
    const CRUDhandleEditItemClick = (item) => {
        setCurrentItem(item);
        setType(item.Type);
        setItemDesc(item.ItemDesc);
        setItemCode(item.ItemCode);
        setCategory(item.Category);
        setRevision(item.Revision);
        setUOM(item.UOM);
        setQuantity(item.Quantity);

        setPrice(item.Price);
        setNeedByDate(item.NeedByDate);
        setDelivertolocation(item.Delivertolocation);
        setChargeAccount(item.ChargeAccount);
        setNaturalAccount(item.NaturalAccount);
        setFunction(item.Function);
        setIsModalOpen(true);
    };
    // UPDATE
    const handleEditItem = (event) => {
        event.preventDefault();
        if (!Type || !ItemDesc || !ItemCode || !Category
            || !Revision || !UOM || !Quantity || !Price
            || !NeedByDate || !Delivertolocation || !ChargeAccount
            || !NaturalAccount || !Function) {
            // Show an error toast message
            iziToast.error({
                class: "IZITOAST",
                message: 'All fields are mandatory',
                messageColor: "red",
                messageSize: "6px",
                messageLineHeight: "",
                position: 'topRight',
                theme: 'light', // dark
                backgroundColor: 'rgb(255 255 255 / 72%)',
                icon: "fa-regular fa-circle-xmark",
                iconColor: "red",
            });
            return;
        }

        const updatedItem = {
            id: currentItem.id,
            Type,
            ItemDesc,
            ItemCode,
            Category,
            Revision,
            UOM,
            Quantity,
            Price,
            NeedByDate,
            Delivertolocation,
            ChargeAccount,
            NaturalAccount,
            Function,
        };

        const updatedItems = items.map((item) =>
            item.id === currentItem.id ? updatedItem : item
        );
        setItems(updatedItems);
        setIsModalOpen(false);
        // Show a success toast message
        iziToast.show({
            class: "IZITOAST",
            message: 'Item updated successfully',
            messageColor: "green",
            messageSize: "6px",
            messageLineHeight: "",
            position: 'topRight',
            theme: 'light', // dark
            backgroundColor: 'rgb(255 255 255 / 72%)',
            icon: "fa-solid fa-check",
            iconColor: "green",
        });
    };
    // DELETE
    const handleDeleteItem = (item) => {
        iziToast.question({
            timeout: false,
            close: false,
            overlay: true,
            displayMode: 'once',
            id: 'question',
            zindex: 999,
            title: '',
            message: 'Are you sure you want to delete this item?',
            position: 'center',
            theme: 'light', // dark
            backgroundColor: 'rgb(255 255 255 / 72%)',
            icon: "",
            iconColor: "",
            buttons: [
                ['<button><b>Yes</b></button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                    const updatedItems = items.filter((i) => i.id !== item.id);
                    setItems(updatedItems);
                }, true],
                ['<button>No</button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                }],
            ],
        });
    };





    // date and TIme
    // const formattedDate = moment().format('DD/MM/YYYY, h:mm a');

    function formatTimestamp(timestamp) {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        };
        return new Date(timestamp).toLocaleString(undefined, options);
    }

    // uploadfiles and show
    const [files, setFiles] = useState([
        {
            name: "Document1.pdf",
            type: "Important",
            uploadedOn: "2023-05-17T04:52:45.402Z",
        },
        {
            name: "Document2.pdf",
            type: "Supported",
            uploadedOn: "2023-05-17T04:53:45.402Z",
        }

    ]);
    console.log(files);

    const [selectedFile, setSelectedFile] = useState(null);

    const [selectedType, setSelectedType] = useState(null);
    const [fileInputDisabled, setFileInputDisabled] = useState(true);

    const handleFileUpload = (event) => {
        event.preventDefault();
        if (!selectedType) {
            alert("Please select a type of document first.");
            return;
        }
        const uploadedFiles = [...event.target.files];
        // const newFiles = uploadedFiles.map((file) => ({
        //     name: file.name,
        //     type: selectedType.value,
        //     file: file,
        //     uploadedOn: new Date()
        // }));
        // setFiles([...files, ...newFiles]);
        uploadedFiles.forEach((file) => {
            const fileName = file.name;
            const existingFile = files.find((f) => f.name === fileName);

            if (existingFile) {
                iziToast.error({
                    class: "IZITOAST",
                    message: `File "${fileName}" already exists.`,
                    messageColor: "red",
                    messageSize: "6px",
                    messageLineHeight: "",
                    position: 'topRight',
                    theme: 'light', // dark
                    backgroundColor: 'white',
                    icon: "fa-regular fa-circle-xmark",
                    iconColor: "red",
                    progressBarColor: 'red',
                });
                //   alert(`File "${fileName}" already exists.`);
            } else {
                const newFile = {
                    name: fileName,
                    type: selectedType.value,
                    file: file,
                    uploadedOn: new Date().toISOString()
                };
                setFiles((prevFiles) => [...prevFiles, newFile]);
            }
        })
    };

    const handleFileDelete = (filename) => {
        iziToast.question({
            timeout: false,
            close: false,
            overlay: true,
            displayMode: 'once',
            id: 'question',
            zindex: 999,
            title: '',
            message: 'Are you sure you want to delete this file?',
            position: 'center',
            theme: 'light', // dark
            backgroundColor: 'rgb(255 255 255 / 72%)',
            icon: "",
            iconColor: "",
            buttons: [
                ['<button><b>Yes</b></button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                    const updatedItems = setFiles(files.filter((file) => file.name !== filename));
                    setSelectedFile(updatedItems);
                    // const updatedItems = items.filter((i) => i.id !== item.id);
                }, true],
                ['<button>No</button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                }],
            ],
        });
        // setFiles(files.filter((file) => file.name !== filename));
        // // setSelectedFile(null);
    };

    const handleTypeSelect = (selectedOption) => {
        setSelectedType(selectedOption);
        setFileInputDisabled(false);
    };
    //!uplload file



    const ApproverMatrixRows = [
        { id: 1, ApprovedBy: 'Rajesh Kumar', ApprovedOn: '', Type: "Approver", ApproverDepartment: "IT", Approver: "Regional Controller", Level: "1", ActionTaken: "" },
        // { id: 2, ApprovedBy: 'Suresh Sharma', ApprovedOn: '18-05-2023 04:25:11 PM', Type: "Approver", ApproverDepartment: "Admin", Approver: "Regional Controller", Level: "2", ActionTaken: "Pending" },
    ];

    // comments Matrix
    const commentscolumns = [

        {
            field: 'Name',
            headerName: "Name",
            width: 120,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'Designation',
            headerName: "Designation",
            width: 160,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'Status',
            headerName: "Status",
            width: 220,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'DateTime',
            headerName: 'Date & Time',
            width: 220,
            cellClassName: 'super-app-theme--cell',
        },
        {
            field: 'Remark',
            headerName: "Remark(s)",
            width: 400,
            cellClassName: 'super-app-theme--cell',
        }
    ]

    const commentsrows = [
        { id: 1, Name: 'Rajesh Kumar', Designation: "IT", Status: "Pending", DateTime: "", Remark: "" },
    ];

    // datatable pagination
    const [pageSize, setPageSize] = React.useState(10);
    return (
        <>
             <Navbar 
                APPDashboard="Dashboard" 
                APPAllRequest="All Requests" 
                APPPendingReq="Pending Requests" 
                APPApprovedReq="Approved Requests" 
                APPRejectedRequests="Rejected Requests" 
                APPDraftRequests="Draft Requests"
                APPQueryRequests="Query Requests"
            />
            <div className="container-fluid">
                <div className="card AddINMAINCARD mt-2 mb-2">
                    <div className="card-body" style={{ padding: "10px 20px 20px 20px" }}>
                        <form onSubmit={HandelAddInvoiceForm}>
                            {/* Purchase Request Header Details */}
                            <div className="row">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1 ">
                                       
                                        <h6 className="card-title ADDINVOICECARDTITLE">Purchase Request Header Details | <span class="badge bg-warning text-dark Approvedbadge">Pending</span>
                                            <div className="FORMBTNSMAIN">
                                                <Link to="/dashboard"><button type='button' className='G20AButtonBack d-none'>Back</button></Link>
                                                &nbsp;
                                                <button type='button' className='SAVEDRAFT d-none'>Save Draft</button>
                                                &nbsp;
                                                <button type='button' className='RaiseQuery'>Raise Query</button>
                                                &nbsp;
                                                <button type='button' className='G20AButtonSubmit d-none'>Submit</button>
                                                &nbsp;
                                                <button type='submit' className='APPROVEDBTN'>Approve</button>
                                                &nbsp;
                                                <button type='button' className='REJECTED'>Reject</button>
                                            </div>
                                        </h6>
                                        <hr className='mt-0 mb-1' />
                                        {/* header */}
                                        {/* <div className="row DYANAMICREPORT">
                                            <div className="col">
                                                <label htmlFor="IndentUserName" className="col-form-label G20ADDFOEMLABEL">Name</label>
                                                <input type="text" autoComplete="off" id="IndentUserName" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="Sanjay Kumar" disabled readOnly />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Designation" className="col-form-label G20ADDFOEMLABEL">Designation</label>
                                                <input type="text" autoComplete="off" id="Designation" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="Regional Manager" disabled readOnly />
                                            </div>

                                            <div className="col">
                                                <label htmlFor="Department" className="col-form-label G20ADDFOEMLABEL">Department</label>
                                                <input type="text" autoComplete="off" id="Department" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="IT" disabled readOnly />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="CurrentDate" className="col-form-label G20ADDFOEMLABEL">Current Date</label>
                                                <input type="text" autoComplete="off" id="CurrentDate" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={currentDate} disabled readOnly />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Area" className="col-form-label G20ADDFOEMLABEL">Area</label>
                                                <input type="text" autoComplete="off" id="Area" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="Region" disabled readOnly />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Location" className="col-form-label G20ADDFOEMLABEL">Location</label>
                                                <input type="text" autoComplete="off" id="Location" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="Noida" disabled readOnly />
                                            </div>
                                        </div> */}

                                        <div className="row mb-2">
                                            <div className="col-md-2">
                                                <label htmlFor="IndentNumber" className="col-form-label G20ADDFOEMLABEL">Indent Number</label>
                                                <input type="text" autoComplete="off" id="IndentNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="Indent-00000000001" readOnly disabled />
                                            </div>
                                            <div className="col-md-2 d-none">
                                                <label htmlFor="PRNumber" className="col-form-label G20ADDFOEMLABEL">PR Number</label>
                                                <input type="text" autoComplete="off" id="PRNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="PR-00000000001-BPAAS" readOnly disabled />
                                            </div>
                                            <div className="col-md-2 d-none">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">RFQ Number</label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="RFQ-00000000001" readOnly disabled />
                                            </div>
                                            <div className="col-md-2 d-none">
                                                <label htmlFor="PRNumber" className="col-form-label G20ADDFOEMLABEL">PO Number</label>
                                                <input type="text" autoComplete="off" id="PRNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="PO-00000000001" readOnly disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="OperatingUnit" className="col-form-label G20ADDFOEMLABEL">Operating Unit</label>
                                                <input type="text" autoComplete="off" id="OperatingUnit" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="North" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Type" className="col-form-label G20ADDFOEMLABEL">Type</label>
                                                <input type="text" autoComplete="off" id="Type" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="" disabled />
                                            </div>
                                            {/* <div className="col-md-2">
                                                <label htmlFor="Preparer" className="col-form-label G20ADDFOEMLABEL">Preparer</label>
                                                <input type="text" autoComplete="off" id="Preparer" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="" disabled />
                                            </div> */}
                                            <div className="col-md-2">
                                                <label htmlFor="Total" className="col-form-label G20ADDFOEMLABEL">Total</label>
                                                <input type="text" autoComplete="off" id="Total" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="BusinessLine" className="col-form-label G20ADDFOEMLABEL">Business Line</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" disabled>
                                                    <option >Select</option>
                                                    <option value="EXS" selected>EXS</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="CostCenter" className="col-form-label G20ADDFOEMLABEL">Cost Center</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id="CostCenter" disabled>
                                                    <option >Select</option>
                                                    <option value="DEH"selected>DEH</option>
                                                    <option value="INH">INH</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Company" className="col-form-label G20ADDFOEMLABEL">Company</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id="Company" disabled>
                                                    <option >Select</option>
                                                    <option value="BPAAS"selected>BPAAS</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Function" className="col-form-label G20ADDFOEMLABEL">Function</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id="Function" disabled>
                                                    <option selected>Select</option>
                                                    <option value="Function 1">Function 1</option>
                                                    <option value="Function 2">Function 2</option>
                                                    <option value="Function 3">Function 3</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="ShipToOrg" className="col-form-label G20ADDFOEMLABEL">Ship To Org</label>
                                                <input type="text" autoComplete="off" id="ShipToOrg" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="BillTo" className="col-form-label G20ADDFOEMLABEL">Bill To</label>
                                                <input type="text" autoComplete="off" id="BillTo" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Currency" className="col-form-label G20ADDFOEMLABEL">Currency</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id="Currency" disabled>
                                                    <option selected>Select</option>
                                                    <option value="Currency 1">Currency 1</option>
                                                    <option value="Currency 2">Currency 2</option>
                                                    <option value="Currency 3">Currency 3</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="CurrencyConversion" className="col-form-label G20ADDFOEMLABEL">Currency Conversion
                                                </label>
                                                <input type="text" autoComplete="off" id="CurrencyConversion" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="" readOnly disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="CurrencyRS" className="col-form-label G20ADDFOEMLABEL">Currency in Rs/-
                                                </label>
                                                <input type="text" autoComplete="off" id="CurrencyRS" className="form-control G20ADDFOEMINPUTS1" aria-describedby=""  readOnly disabled/>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="TOTALNumber" className="col-form-label G20ADDFOEMLABEL lh-0">Description
                                                </label>
                                                <textarea type="text" id="TOTALNumber" className="form-control G20ADDFOEMItextarea" aria-describedby="" disabled ></textarea>
                                            </div>
                                        </div>
                                        {/* header */}
                                    </div>
                                </div>
                            </div>
                            {/* Purchase Request Line Level Details */}
                            <div className="row mt-2 mb-2">
                                <div className="card AddINSUBCARD">
                                    <h6 className="card-title ADDINVOICECARDTITLE m-1">Purchase Request Line Level Details
                                        <button type="button" className="ADLINEITEMADDBUTTON  float-end d-none" onClick={CrudhandleModalOpen} >Add Entry</button>
                                    </h6>
                                    <hr className='mt-0' />
                                    <div className="card-body p-1 LINEITEMSOVERFLOW">
                                        <div className="table-responsive-sm LINEITEMSTABLE">
                                            <table className="table table-sm  table-hover" >
                                                <thead className='HEADSTYLE'>
                                                    <tr className='NeedByDate'>
                                                        <th className='text-center' scope="col">Entry No.</th>
                                                        <th className='text-center' scope="col">Item Code</th>
                                                        <th className='text-center' scope="col">Item Description</th>
                                                        <th className='text-center' scope="col">Type</th>
                                                        <th className='text-center' scope="col">Category</th>
                                                        <th className='text-center' scope="col">Revision</th>
                                                        <th className='text-center' scope="col">UOM</th>
                                                        <th className='text-center' scope="col">Quantity</th>
                                                        <th className='text-right' scope="col">Price</th>
                                                        <th className='text-center' scope="col">Need By Date</th>
                                                        <th className='text-center' scope="col">Deliver to location</th>
                                                        <th className='text-center' scope="col">Charge Account</th>
                                                        <th className='text-center' scope="col">Natural Account</th>
                                                        <th className='text-center' scope="col">Function</th>
                                                        <th className='text-center d-none' scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {items.length > 0 ? (
                                                        items.map((item) => (
                                                            <tr>
                                                                <th className='TABLEITEMS' scope="row">{item.id}</th>
                                                                <td className=' text-center'>{item.ItemCode}</td>
                                                                <td className='TABLEITEMS text-center'>{item.ItemDesc}</td>
                                                                <td className=' text-center'>{item.Type}</td>
                                                                <td className='TABLEITEMS text-center'>{item.Category}</td>
                                                                <td className=' text-center'>{item.Revision}</td>
                                                                <td className='TABLEITEMS text-center'>{item.UOM}</td>
                                                                <td className=' text-center'>{item.Quantity}</td>
                                                                <td className='TABLEITEMS text-right'>{item.Price}</td>
                                                                <td className=' text-center NeedByDate'>{item.NeedByDate}</td>
                                                                <td className='TABLEITEMS text-center'>{item.Delivertolocation}</td>
                                                                <td className=' text-center'>{item.ChargeAccount}</td>
                                                                <td className='TABLEITEMS text-center'>{item.NaturalAccount}</td>
                                                                <td className=' text-center'>{item.Function}</td>
                                                                <td className='text-center TABLEITEMS d-none'>
                                                                    <div className="d-flex">
                                                                        <DeleteIcon className='me-1 DeleteBTN' type='button' onClick={() => handleDeleteItem(item)} />
                                                                        <BorderColorIcon className='EDITBTN' type='button' onClick={() => CRUDhandleEditItemClick(item)} />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))) : (
                                                        <td colspan="14" className="text-center AdminTABLELINEITEMdiv"><b>No Entry!</b> <br />Please Add Purchase Items </td>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Purchase Request Footer Details */}
                            <div className="row">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1">
                                        <h6 className="card-title ADDINVOICECARDTITLE">Purchase Request Footer Details</h6>
                                        <hr className='mt-0 mb-1' />
                                        <div className="row mb-2">
                                            <div className="col-md-2">
                                                <label htmlFor="Destination" className="col-form-label G20ADDFOEMLABEL">Destination type <span className='text-danger'>*</span></label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id='Destination'  disabled>
                                                    <option selected>Select</option>
                                                    <option value="Destination type 1">Destination type 1</option>
                                                    <option value="Destination type 2">Destination type 2</option>
                                                    <option value="Destination type 3">Destination type 3</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Requester" className="col-form-label G20ADDFOEMLABEL">Requester <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="Requester" className="form-control G20ADDFOEMINPUTS1" aria-describedby=""  disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Organization" className="col-form-label G20ADDFOEMLABEL">Organization <span className='text-danger'>*</span></label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id='Organization'  disabled>
                                                    <option selected>Select</option>
                                                    <option value="Organization type 1">Organization type 1</option>
                                                    <option value="Organization type 2">Organization type 2</option>
                                                    <option value="Organization type 3">Organization type 3</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Location" className="col-form-label G20ADDFOEMLABEL">Location <br />
                                                </label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id='Organization'  disabled>
                                                    <option selected>Select</option>
                                                    <option value="Location 1">Location 1</option>
                                                    <option value="Location 2">Location 2</option>
                                                    <option value="Location 3">Location 3</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Source" className="col-form-label G20ADDFOEMLABEL">Source <span className='text-danger'>*</span> <span className='text-danger'>(Preferred Supplier) </span> </label>
                                                <input type="text" autoComplete="off" id="Source" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Supplier" className="col-form-label G20ADDFOEMLABEL">Supplier</label>
                                                <input type="text" autoComplete="off" id="Supplier" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Site" className="col-form-label G20ADDFOEMLABEL">Site</label>
                                                <input type="text" autoComplete="off" id="Site" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1">
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            {/* Document Upload accordion */}
                                            <div className="accordion-item mt-1">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed ACCORDIANHEADE" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <DocumentScannerIcon className='text-secondary fs-6 m-1' /> Documents</button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body ACCORDIAONBODY">
                                                        <div className="row mb-2">
                                                            <div className="col-md-3">
                                                                <label htmlFor="TypeofDocument" className="col-form-label G20ADDFOEMLABEL">Type of Document <span className="text-warning">*</span></label>
                                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id='Organization' onChange={handleTypeSelect} disabled>
                                                                    <option selected>Select</option>
                                                                    <option value="Supported">Supported</option>
                                                                    <option value="Important">Important</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label htmlFor="" className="col-form-label G20ADDFOEMLABEL">Choose Multiple files <span className="text-warning">*</span></label>
                                                                <input type="file" id="fileUpload" className="form-control G20ADDFOEMINPUTS1" multiple onChange={handleFileUpload} disabled={fileInputDisabled} />
                                                            </div>
                                                        </div>
                                                        <div className="table-responsive-sm LINEITEMSTABLE">
                                                            <table className="table table-sm  table-hover">
                                                                <thead className='HEADSTYLE'>
                                                                    <tr className='NeedByDate'>
                                                                        <th scope="col">File Name</th>
                                                                        <th scope="col">Type of Document</th>
                                                                        <th scope="col">Uploaded By</th>
                                                                        <th scope="col">Uploaded On </th>
                                                                        <th scope="col">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {files.length > 0 ? (
                                                                        files.map((file, index) => (
                                                                            <tr key={index}>
                                                                                <td ><Link to="#" type='button' title="Open your Uploaded Document" className='UPDOCLINK' onClick={() => setSelectedFile(file.file)}>{file.name}</Link></td>
                                                                                <td>{file.type}</td>
                                                                                <td>Sanjay Kumar</td>
                                                                                <td>{formatTimestamp(file.uploadedOn)}</td>
                                                                                <td>
                                                                                    <button type='button' title='Delete Document' className='UPLOADOCDELTEBTN' onClick={() => handleFileDelete(file.name)} >Delete</button>
                                                                                </td>
                                                                            </tr>

                                                                        ))) : (
                                                                        <td colspan="5" className="text-center AdminTABLELINEITEMdiv"><b>Empty!</b> <br />Please Upload Documents </td>
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Comment Matrix */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" >
                                                    <button className="accordion-button collapsed ACCORDIANHEADE" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                        <PublishedWithChangesIcon className='text-secondary fs-6 m-1' /> Approver Matrix
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body ACCORDIAONBODY">
                                                        <div className="table-responsive table-responsive-sm LINEITEMSTABLE">
                                                            <table className='table table-sm  table-hover'>
                                                                <thead className='HEADSTYLE'>
                                                                    <tr className='NeedByDate'>
                                                                        <th className='text-center' scope="col">Level</th>
                                                                        <th className='text-center' scope="col">Type</th>
                                                                        <th className='text-center' scope="col">Approver Department</th>
                                                                        <th className='text-center' scope="col">Approver Designation</th>
                                                                        <th className='text-center' scope="col">Action Taken By</th>
                                                                        <th className='text-center' scope="col">Action Taken</th>
                                                                        <th className='text-center' scope="col">Action Taken On</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {ApproverMatrixRows.length > 0 ? (
                                                                        ApproverMatrixRows.map((key) => (
                                                                            <tr>
                                                                                <th>{key.Level}</th>
                                                                                <td className='text-center'>{key.Type}</td>
                                                                                <td className='text-center'>{key.ApproverDepartment}</td>
                                                                                <td className='text-center'>{key.Approver}</td>
                                                                                <td className='text-center'>{key.ApprovedBy}</td>
                                                                                <td className='text-center'>{key.ActionTaken}</td>
                                                                                <td className='text-center'>{key.ApprovedOn}</td>
                                                                            </tr>

                                                                        ))) : (
                                                                        <td colspan="7" className="text-center AdminTABLELINEITEMdiv">No Record Available </td>
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Approval Matrix */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" >
                                                    <button className="accordion-button collapsed ACCORDIANHEADE" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        <CommentIcon className='text-secondary fs-6 m-1' /> Comments Matrix</button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body ACCORDIAONBODY">
                                                        <Box sx={{ height: 250, width: '100%' }} >
                                                            <DataGrid className="ETD-Firmware_h_box"
                                                                rowHeight={25}
                                                                rows={commentsrows}
                                                                columns={commentscolumns}
                                                                pageSize={pageSize}
                                                                rowsPerPageOptions={[10, 15, 20]}
                                                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                                                pagination
                                                                disableSelectionOnClick
                                                                experimentalFeatures={{ newEditingApi: true }}
                                                                sx={{
                                                                    boxShadow: 0,
                                                                    border: 0,
                                                                    '& .super-app-theme--cell': {
                                                                        verticalAlign: "middle",
                                                                        color: "#1e1f1e",
                                                                        fontFamily: "Arial, Helvetica, sans-serif, calibri",
                                                                    },
                                                                    '& .css-yrdy0g-MuiDataGrid-columnHeaderRow': {
                                                                        color: '#000066',
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
                                    </div>
                                </div>
                            </div>
                            {/* Merge Indent */}
                            {/* <div className="row mt-2 ">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1">
                                        <h6 className="card-title ADDINVOICECARDTITLE">Merge Indent</h6>
                                        <hr className='mt-0 mb-1' />
                                        <div className="row mb-2">
                                            <div className="col-md-3">
                                                <label htmlFor="Destination" className="col-form-label G20ADDFOEMLABEL">Select Indent No.</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" id='Destination' >
                                                    <option selected value="">Select</option>
                                                    <option value="Indent-00000000001">Indent-00000000001</option>
                                                    <option value="Indent-00000000002">Indent-00000000002</option>
                                                    <option value="Indent-00000000003">Indent-00000000003</option>
                                                    <option value="Indent-00000000004">Indent-00000000004</option>
                                                    <option value="Indent-00000000005">Indent-00000000005</option>
                                                    <option value="Indent-00000000006">Indent-00000000006</option>
                                                    <option value="Indent-00000000007">Indent-00000000007</option>
                                                    <option value="Indent-00000000008">Indent-00000000008</option>
                                                    <option value="Indent-00000000009">Indent-00000000009</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* remarks */}
                            <div className="row mt-2">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1 mb-2">
                                        <div className="col">
                                            <label htmlFor="Site" className="col-form-label G20ADDFOEMLABEL">Remark's <span className='text-danger'>*</span></label>
                                            <textarea type="text" autoComplete="off" id="Site" className="form-control G20ADDFOEMINPUTS1" aria-describedby=""  disabled></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* modal add Type */}
                <div className={`modal ${isModalOpen ? "show fade" : ""}`} data-bs-backdrop="static" tabIndex="-1" role="dialog" style={{ display: `${isModalOpen ? "block" : "none"}`, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content ADDNFAITEMSMODAL">
                            <div className="modal-header p-2">
                                <h6 className="modal-title ADLINEITEMMODAlTITLE" >{currentItem ? "Update Entry" : "Add Entry"}</h6>
                                <div className='text-end'>
                                    <button type="button" className="ITEMMODALCANCLE me-2" data-bs-dismiss="modal" onClick={handleModalClose}>Cancel </button>
                                    <button type="button" onClick={currentItem ? handleEditItem : handleAddItem} className="MODALADDITEMS" >{currentItem ? "Update Entry" : "Add Entry"}</button>
                                </div>
                            </div>
                            <div className="card border-0 m-2 ADEMSMODALCARD">
                                <div className="card-body">
                                    <form>
                                        <div className="row g-2">
                                            <div className="col">
                                                <label htmlFor="Type" className="col-form-label G20ADDFOEMLABEL">Type</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example"
                                                    id="Type" name="Type" value={Type} onChange={(event) => setType(event.target.value)}  autoComplete='off'>
                                                    <option selected>Select</option>
                                                    <option value="Type 1">Type 1</option>
                                                    <option value="Type 2">Type 2</option>
                                                    <option value="Type 3">Type 3</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="ItemDesc" className="col-form-label G20ADDFOEMLABEL">Item Description</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example"
                                                    id="ItemDesc" name="ItemDesc" value={ItemDesc} onChange={(event) => setItemDesc(event.target.value)}  autoComplete='off'>
                                                    <option >Select</option>
                                                    <option selected value="ItemDesc 1">ItemDesc 1</option>
                                                    <option value="ItemDesc 2">ItemDesc 2</option>
                                                    <option value="ItemDesc 3">ItemDesc 3</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="ItemCode" className="col-form-label G20ADDFOEMLABEL">Item Code</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example"
                                                    id="ItemCode" name="ItemCode" value={ItemCode} onChange={(event) => setItemCode(event.target.value)}  autoComplete='off'>
                                                    <option >Select</option>
                                                    <option selected value="ItemCode 1">ItemCode 1</option>
                                                    <option value="ItemCode 2">ItemCode 2</option>
                                                    <option value="ItemCode 3">ItemCode 3</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Category" className="col-form-label G20ADDFOEMLABEL">Category</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example"
                                                    id="Category" name="Category" value={Category} onChange={(event) => setCategory(event.target.value)}  autoComplete='off'>
                                                    <option selected>Select</option>
                                                    <option value="Category 1">Category 1</option>
                                                    <option value="Category 2">Category 2</option>
                                                    <option value="Category 3">Category 3</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Revision" className="col-form-label G20ADDFOEMLABEL">Revision</label>
                                                <input type="text" autoComplete="off" id="Revision" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={Revision} onChange={(event) => setRevision(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row g-2">
                                            <div className="col">
                                                <label htmlFor="UOM" className="col-form-label G20ADDFOEMLABEL">UOM</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example"
                                                    id="UOM" name="UOM" value={UOM} onChange={(event) => setUOM(event.target.value)}  autoComplete='off'>
                                                    <option >Select</option>
                                                    <option selected value="UOM 1">UOM 1</option>
                                                    <option value="UOM 2">UOM 2</option>
                                                    <option value="UOM 3">UOM 3</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Quantity" className="col-form-label G20ADDFOEMLABEL">Quantity</label>
                                                <input type="text" autoComplete="off" id="Quantity" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={Quantity} onChange={(event) => setQuantity(event.target.value)} />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Price" className="col-form-label G20ADDFOEMLABEL">Price</label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example"
                                                    id="Price" name="Price" value={Price} onChange={(event) => setPrice(event.target.value)}  autoComplete='off'>
                                                    <option >Select</option>
                                                    <option selected value="Price 1">Price 1</option>
                                                    <option value="Price 2">Price 2</option>
                                                    <option value="Price 3">Price 3</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="NeedByDate" className="col-form-label G20ADDFOEMLABEL">Need By Date</label>
                                                <input type="date" autoComplete="off" id="NeedByDate" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={NeedByDate} onChange={(event) => setNeedByDate(event.target.value)} />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Delivertolocation" className="col-form-label G20ADDFOEMLABEL">Deliver to Location</label>
                                                <input type="text" autoComplete="off" id="Delivertolocation" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={Delivertolocation} onChange={(event) => setDelivertolocation(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row g-2">
                                            <div className="col">
                                                <label htmlFor="ChargeAccount" className="col-form-label G20ADDFOEMLABEL">Charge Account</label>
                                                <input type="text" autoComplete="off" id="ChargeAccount" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={ChargeAccount} onChange={(event) => setChargeAccount(event.target.value)} />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="NaturalAccount" className="col-form-label G20ADDFOEMLABEL">Natural Account</label>
                                                <input type="text" autoComplete="off" id="NaturalAccount" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={NaturalAccount} onChange={(event) => setNaturalAccount(event.target.value)} />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="Function" className="col-form-label G20ADDFOEMLABEL">Function</label>
                                                <input type="text" autoComplete="off" id="Function" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={Function} onChange={(event) => setFunction(event.target.value)} />
                                            </div>
                                            <div className="col"></div>
                                            <div className="col"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Document Upload */}
                {selectedFile && (
                    <Modal className='UPLOADDOCSHOWMODAL' show={selectedFile !== null} onHide={() => setSelectedFile(null)} backdrop="static" keyboard={false} size="lg" aria-labelledby="example-modal-sizes-title-lg">
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedFile && selectedFile.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedFile && selectedFile.type.startsWith('image/') ? (
                                <img src={URL.createObjectURL(selectedFile)} alt={selectedFile.name} style={{ width: '80%', height: 'auto' }} />
                            ) : selectedFile && selectedFile.type === 'application/pdf' ? (
                                <embed title={selectedFile.name} src={URL.createObjectURL(selectedFile)} style={{ width: '100%', height: '75vh' }} />
                            ) : (
                                <p className='text-center'>File not supported</p>
                            )}
                        </Modal.Body>
                    </Modal>
                )}
            </div>
        </>
    )
}



