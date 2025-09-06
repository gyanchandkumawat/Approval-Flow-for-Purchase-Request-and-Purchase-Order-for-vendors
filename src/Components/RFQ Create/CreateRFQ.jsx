import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/Css/CreateIndent.css'
import '../../Assets/Css/CreateRFQ.css'
import iziToast from 'izitoast';
import Select from 'react-select';
import Navbar from '../NavItems/Navbar';
import makeAnimated from 'react-select/animated';
import MultiselectReactDropdown from 'multiselect-react-dropdown';
import GroupIcon from '@mui/icons-material/Group';



const SingleVendor = [
    { id: 1, value: 'Duna Fashion', label: 'Duna Fashion' },
    { id: 2, value: 'Ishika Polyfab', label: 'Ishika Polyfab' },
    { id: 3, value: 'Mogli Labs', label: 'Mogli Labs' },
];

const MultiVendor = [
    {
        id: 1,
        label: 'Group 1',
        value: 'group1',
        users: [
            { id: 1, name: 'Duna Fashion' },
            { id: 2, name: 'Ishika Polyfab' },
            { id: 3, name: 'Mogli Labs' },
        ],
    },
    {
        id: 2,
        label: 'Group 2',
        value: 'group2',
        users: [
            { id: 4, name: 'Duna Fashion' },
            { id: 5, name: 'Ishika Polyfab' },
            { id: 6, name: 'Mogli Labs' },
        ],
    },
];


const animatedComponents = makeAnimated();

export default function PRForm() {
    const navigate = useNavigate();
    const currentDate = new Date().toLocaleDateString();
    const HandelAddInvoiceForm = (event) => {
        event.preventDefault();
        iziToast.success({
            title: 'RFQ',
            message: 'Published Successfully',
            position: 'topRight'
        });
        navigate("/approvedpr", { replace: true });
    }

    // table items
    const [items, setItems] = useState([
        {
            id: 1,
            ItemCode: "OPEXBAG0004",
            ItemDesc: "Canvas Bag BIG 20x20x34 with double layered base. Weight approximately 250  15 grams along with eyelet attached and stitched with P.P. POLY POPLIN threads.",
            Type: "Goods",
            Category: "SUPPLIES OFFICE",
            Revision: "0",
            UOM: "Pcs",
            Quantity: "10000",
            Price: "33",
            NeedByDate: "31-08-2023",
            Delivertolocation: "DEH",
            ChargeAccount: "0112345678 ",
            NaturalAccount: "0112345678 ",
            Function: "Admin",
        },
        {
            id: 2,
            ItemCode: "OPEXBAG0005",
            ItemDesc: "Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap, 4 Inch gusset ,55 microns, twin sealing, sequential barcodes (2 places) , side series and POD Jacket) as per approved design",
            Type: "Goods",
            Category: "SUPPLIES OFFICE",
            Revision: "0",
            UOM: "Pcs",
            Quantity: "10000",
            Price: "5",
            NeedByDate: "31-08-2023",
            Delivertolocation: "INH",
            ChargeAccount: "0112345678 ",
            NaturalAccount: "0112345678 ",
            Function: "Admin",
        },


    ]);
    // table items



    // Vendor Selection
    const [singleVendorSelect, setSingleVendorSelect] = useState([]);
    const [multiVendorSelect, setMultiVendorSelect] = useState([]);
    const [vendorTableData, setVendorTableData] = useState([]);

    const handleSingleVendorChange = (selectedOptions) => {
        setSingleVendorSelect(selectedOptions);
    };

    const handleMultiVendorChange = (selectedOptions) => {
        setMultiVendorSelect(selectedOptions);
    };

    const handleAddVendors = () => {
        const newVendors = singleVendorSelect.map((vendor) => ({
            id: vendor.id,
            name: vendor.label,
        }));

        if (multiVendorSelect.length > 0) {
            const groupVendors = multiVendorSelect.flatMap((group) => group.users);
            newVendors.push(...groupVendors);
        }

        setVendorTableData((prevData) => [...prevData, ...newVendors]);
        setSingleVendorSelect([]);
        setMultiVendorSelect([]);
    };

// get expiredate
const currentDatewithExpire = getCurrentDate();
    const [selectExpiryDate, setselectExpiryDate] = useState('');

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Pad month and day with leading zeroes if necessary
    month = (month < 10 ? '0' : '') + month;
    day = (day < 10 ? '0' : '') + day;

    return `${year}-${month}-${day}`;
  }

  function HandleExipreDate(event) {
    setselectExpiryDate(event.target.value);
  }

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
                <div className="card AddINMAINCARD mt-2 mb-2">
                    <div className="card-body" style={{ padding: "10px 20px 20px 20px" }}>
                        <form onSubmit={HandelAddInvoiceForm}>
                            {/* Purchase Request Header Details */}
                            <div className="row">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1 ">

                                        <h6 className="card-title ADDINVOICECARDTITLE">RFQ Header Details | <span class="badge bg-primary text-light Approvedbadge me-1">Draft</span>
                                            {/* <VerifiedIcon className='text-success fs-5'/> */}
                                            <div className="FORMBTNSMAIN">
                                                <button type='submit' className='PUBLISH'>Publish</button>
                                                &nbsp;
                                                <button type='submit' className='PUBLISH d-none'>Re-Publish</button>
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
                                                <input type="text" autoComplete="off" id="Designation" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="Senior manager" disabled readOnly />
                                            </div>

                                            <div className="col">
                                                <label htmlFor="Department" className="col-form-label G20ADDFOEMLABEL">Department</label>
                                                <input type="text" autoComplete="off" id="Department" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="RFQ" disabled readOnly />
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
                                                <input type="text" autoComplete="off" id="IndentNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="Indent-00000000002" readOnly disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="PRNumber" className="col-form-label G20ADDFOEMLABEL">PR Number</label>
                                                <input type="text" autoComplete="off" id="PRNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="PR-00000000001-BPAAS" readOnly disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">RFQ Number</label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="RFQ-00000000001-BPAAS" readOnly disabled />
                                            </div>
                                            {/* <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Time Line<span className='text-danger'>*</span> <span className='text-danger'>(For RFQ Team) </span></label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" />
                                            </div> */}
                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Time Line<span className='text-danger'>*</span> <span className='text-danger'>(For Vendors) </span></label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Expiry Date</label>
                                                <input type="date" id="expiryDate" className="form-control G20ADDFOEMINPUTS1" autoComplete="off" min={currentDatewithExpire} value={selectExpiryDate} onChange={HandleExipreDate} />
                                            </div>
                                        </div>
                                        {/* header */}
                                    </div>
                                </div>
                            </div>
                            {/* Purchase Request Line Level Details */}
                            <div className="row mt-2 mb-2">
                                <div className="card AddINSUBCARD">
                                    <h6 className="card-title ADDINVOICECARDTITLE m-1">RFQ Line Level Details</h6>
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
                                                        {/* <th className='text-center' scope="col">Charge Account</th>
                                                        <th className='text-center' scope="col">Natural Account</th>
                                                        <th className='text-center' scope="col">Function</th> */}
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
                                                                {/* <td className=' text-center'>{item.ChargeAccount}</td>
                                                                <td className='TABLEITEMS text-center'>{item.NaturalAccount}</td>
                                                                <td className=' text-center'>{item.Function}</td> */}
                                                            </tr>
                                                        ))) : (
                                                        <td colspan="11" className="text-center AdminTABLELINEITEMdiv"><b>No Entry!</b> </td>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2 ">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1">
                                        <h6 className="card-title ADDINVOICECARDTITLE">Vendor Selection</h6>
                                        <hr className='mt-0 mb-1' />
                                        <div className="VENDORSELECTIONGROUP">
                                            <div className="row mb-2 g-1">
                                                <div className="col-md-5">
                                                    <label htmlFor="Destination" className="col-form-label G20ADDFOEMLABEL">
                                                        Name Wise Vendor Selection
                                                    </label>
                                                    <Select
                                                        isMulti
                                                        options={SingleVendor}
                                                        value={singleVendorSelect}
                                                        onChange={handleSingleVendorChange}
                                                        closeMenuOnSelect={false}
                                                        components={animatedComponents}
                                                    />
                                                </div>
                                                <div className="col-md-5">
                                                    <label htmlFor="Destination" className="col-form-label G20ADDFOEMLABEL">
                                                        Group Wise Vendor Selection
                                                    </label>
                                                    <Select
                                                        isMulti
                                                        options={MultiVendor}
                                                        value={multiVendorSelect}
                                                        onChange={handleMultiVendorChange}
                                                        closeMenuOnSelect={false}
                                                        components={animatedComponents}
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <button className="ADDVENDORBTN" type="button" onClick={handleAddVendors}>
                                                        <GroupIcon className="VENDORNICON me-1" />
                                                        Add Vendors
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="table-responsive VENDORTABLE">
                                                <table className="table-sm table-hover table-bordered">
                                                    <thead className='VTHEAD'>
                                                        <tr>
                                                            <th>S.No.</th>
                                                            <th>Vendor Code</th>
                                                            <th>Vendor Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {vendorTableData.length > 0 ? (
                                                            vendorTableData.map((vendor, index) => (
                                                                <tr key={vendor.id}>
                                                                    <th>{index + 1}</th>
                                                                    <td>{"VENDOR-0000000000-"+index}</td>
                                                                    <td>{vendor.name}</td>
                                                                </tr>
                                                            ))) : (
                                                                <tr>
                                                                    <td colspan="3" className="text-center AdminTABLELINEITEMdiv"><b>No Entry!</b>Please Select Vendors </td>
                                                                </tr>
                                                        )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* remarks */}
                            <div className="row mt-2">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1 mb-2">
                                        <div className="col">
                                            <label htmlFor="Site" className="col-form-label G20ADDFOEMLABEL">Comments <span className='text-danger'>*</span></label>
                                            <textarea type="text" autoComplete="off" id="Site" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" required ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}



