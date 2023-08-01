import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/Css/CreateIndent.css'
import '../../Assets/Css/CreateRFQ.css'
import iziToast from 'izitoast';
import Select from 'react-select';
import Navbar from '../NavItems/Navbar';
import makeAnimated from 'react-select/animated';


export default function ResponseRFQForm() {
    const navigate = useNavigate();

    const HandelAddInvoiceForm = (event) => {
        event.preventDefault();
        iziToast.success({
            title: 'RFQ',
            message: 'Re-Published Successfully',
            position: 'topRight'
        });
        navigate("/rfqdashboard", { replace: true });
    }

    // table items
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
    // table items
    // get expiredate
    const currentDatewithExpire = getCurrentDate();
    const [selectExpiryDate, setselectExpiryDate] = useState('2023-05-25');

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

                                        <h6 className="card-title ADDINVOICECARDTITLE">RFQ Header Details | <span class="badge bg-warning text-dark Approvedbadge me-1">Response</span>
                                            {/* <VerifiedIcon className='text-success fs-5'/> */}
                                            <div className="FORMBTNSMAIN">
                                                <button type='submit' className='PUBLISH '>Re-Publish</button>
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
                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Time Line<span className='text-danger'>*</span> <span className='text-danger'>(For RFQ Team) </span></label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="10 Days" />
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
                                                        <td colspan="14" className="text-center AdminTABLELINEITEMdiv"><b>No Entry!</b> </td>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* vendor response details */}
                           
                            {/* vendor details */}
                            <div className="row mt-2 ">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1">
                                        <h6 className="card-title ADDINVOICECARDTITLE">Vendor Details</h6>
                                        <hr className='mt-0 mb-1' />
                                        <div className="VENDORSELECTIONGROUP">
                                            {/* Vendor Response Details */}
                                            <div className="card AddINSUBCARD mt-2">
                                                <div className="card-body p-1">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="card-title ADDINVOICECARDTITLE">Vendor Response Details</h6>
                                                        </div>
                                                        <div className="col">
                                                        </div>
                                                    </div>
                                                    <hr className='mt-0 mb-1' />
                                                    <div className="VENDORSELECTIONGROUP">
                                                        <div className="table-responsive VENDORTABLE">
                                                            <table className="table-sm table-hover table-bordered">
                                                                <thead className='VTHEAD'>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col" colspan="1"></th>
                                                                        <th className='VREMARKS text-center' scope="col" colspan="4">PR Details</th>
                                                                        <th className='Vendorform text-center' scope="col" colspan="6">Vendor Name 1</th>
                                                                        <th className='VREMARKS text-center' scope="col" colspan="6">Vendor Name 2</th>
                                                                        <th className='Vendorform text-center' scope="col" colspan="6">Vendor Name 3</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">S.No.</th>
                                                                        {/* pr-details */}
                                                                        <th className='VREMARKS text-center' scope="col">Items Name</th>
                                                                        <th className='VREMARKS text-center' scope="col">Item Code</th>
                                                                        <th className='VREMARKS text-center' scope="col">Quantity</th>
                                                                        <th className='VREMARKS text-center' scope="col">Item description</th>
                                                                        {/* v-1 */}
                                                                        <th className='Vendorform text-center' scope="col">Quantity</th>
                                                                        <th className='Vendorform text-center' scope="col">Price</th>
                                                                        <th className='Vendorform text-center' scope="col">Total</th>
                                                                        <th className='Vendorform text-center' scope="col">Payment Terms</th>
                                                                        <th className='Vendorform text-center' scope="col">Lead Time</th>
                                                                        <th className='Vendorform text-center' scope="col">Remark(s)</th>
                                                                        {/* v-2 */}
                                                                        <th className='VREMARKS text-center' scope="col">Quantity</th>
                                                                        <th className='VREMARKS text-center' scope="col">Price</th>
                                                                        <th className='VREMARKS text-center' scope="col">Total</th>
                                                                        <th className='VREMARKS text-center' scope="col">Payment Terms</th>
                                                                        <th className='VREMARKS text-center' scope="col">Lead Time</th>
                                                                        <th className='VREMARKS text-center' scope="col">Remark(s)</th>
                                                                        {/* v-3 */}
                                                                        <th className='Vendorform text-center' scope="col">Quantity</th>
                                                                        <th className='Vendorform text-center' scope="col">Price</th>
                                                                        <th className='Vendorform text-center' scope="col">Total</th>
                                                                        <th className='Vendorform text-center' scope="col">Payment Terms</th>
                                                                        <th className='Vendorform text-center' scope="col">Lead Time</th>
                                                                        <th className='Vendorform text-center' scope="col">Remark(s)</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">1</th>
                                                                        {/* pr-details */}
                                                                        <td className='VREMARKS text-center' scope="col">Canvas Bag</td>
                                                                        <td className='VREMARKS text-center' scope="col">OPEXBAG0004</td>
                                                                        <td className='VREMARKS text-center' scope="col">100000</td>
                                                                        <td className='VREMARKS text-center' scope="col">Canvas Bag BIG 20x20x34 with double layered base. Weight approximately 250  15 grams along with eyelet attached and stitched with P.P. POLY POPLIN threads.</td>
                                                                        {/* v-1 */}
                                                                        <td className='Vendorform text-center' scope="col">10000</td>
                                                                        <td className='Vendorform text-center' scope="col">33</td>
                                                                        <td className='Vendorform text-center' scope="col">330000</td>
                                                                        <td className='Vendorform text-center' scope="col">30 Days</td>
                                                                        <td className='Vendorform text-center' scope="col">10 days</td>
                                                                        <td className='Vendorform text-center' scope="col">Canvas Bag BIG 20x20x34 with double layered base. Weight approximately</td>
                                                                        {/* v-2 */}
                                                                        <td className='VREMARKS text-center' scope="col">10000</td>
                                                                        <td className='VREMARKS text-center' scope="col">20</td>
                                                                        <td className='VREMARKS text-center' scope="col">200000</td>
                                                                        <td className='VREMARKS text-center' scope="col">30 Days</td>
                                                                        <td className='VREMARKS text-center' scope="col">10 days</td>
                                                                        <td className='VREMARKS text-center' scope="col">Canvas Bag BIG 20x20x34 with double layered base. Weight approximately</td>
                                                                        {/* v-3 */}
                                                                        <td className='Vendorform text-center' scope="col">10000</td>
                                                                        <td className='Vendorform text-center' scope="col">30</td>
                                                                        <td className='Vendorform text-center' scope="col">300000</td>
                                                                        <td className='Vendorform text-center' scope="col">30 Days</td>
                                                                        <td className='Vendorform text-center' scope="col">10 days</td>
                                                                        <td className='Vendorform text-center' scope="col">Canvas Bag BIG 20x20x34 with double layered base. Weight approximately</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">2</th>
                                                                        {/* pr-details */}
                                                                        <td className='VREMARKS text-center' scope="col">Big Tamper proof bag</td>
                                                                        <td className='VREMARKS text-center' scope="col">OPEXBAG0005</td>
                                                                        <td className='VREMARKS text-center' scope="col">100000</td>
                                                                        <td className='VREMARKS text-center' scope="col">Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap, 4 Inch gusset ,55 microns, twin sealing, sequential barcodes (2 places) , side series and POD Jacket) as per approved design</td>
                                                                        {/* v-1 */}
                                                                        <td className='Vendorform text-center' scope="col">100000</td>
                                                                        <td className='Vendorform text-center' scope="col">33</td>
                                                                        <td className='Vendorform text-center' scope="col">330000</td>
                                                                        <td className='Vendorform text-center' scope="col">30 Days</td>
                                                                        <td className='Vendorform text-center' scope="col">10 days</td>
                                                                        <td className='Vendorform text-center' scope="col">Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap</td>
                                                                        {/* v-2 */}
                                                                        <td className='VREMARKS text-center' scope="col">100000</td>
                                                                        <td className='VREMARKS text-center' scope="col">20</td>
                                                                        <td className='VREMARKS text-center' scope="col">200000</td>
                                                                        <td className='VREMARKS text-center' scope="col">30 Days</td>
                                                                        <td className='VREMARKS text-center' scope="col">10 days</td>
                                                                        <td className='VREMARKS text-center' scope="col">Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap</td>
                                                                        {/* v-3 */}
                                                                        <td className='Vendorform text-center' scope="col">100000</td>
                                                                        <td className='Vendorform text-center' scope="col">30</td>
                                                                        <td className='Vendorform text-center' scope="col">300000</td>
                                                                        <td className='Vendorform text-center' scope="col">30 Days</td>
                                                                        <td className='Vendorform text-center' scope="col">10 days</td>
                                                                        <td className='Vendorform text-center' scope="col">Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Vendor Selection Details */}
                                            <div className="card AddINSUBCARD mt-2">
                                                <div className="card-body p-1">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="card-title ADDINVOICECARDTITLE">Vendor Selection Details</h6>
                                                        </div>
                                                        <div className="col">
                                                        </div>
                                                    </div>
                                                    <hr className='mt-0 mb-1' />
                                                    <div className="VENDORSELECTIONGROUP">
                                                        <div className="table-responsive VENDORTABLE">
                                                            <table className="table-sm table-hover table-bordered">
                                                                <thead className='VTHEAD'>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col" colspan="1"></th>
                                                                        <th className='VREMARKS text-center' scope="col" colspan="4">PR Details</th>
                                                                        <th className='Vendorform text-center' scope="col" colspan="7">Vendor Selection</th>
                                                                        <th className='VREMARKS text-center' scope="col" colspan="5">BPAAS Details</th>
                                                                        <th className='Vendorform text-center' scope="col" colspan="1"></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">S.No.</th>
                                                                        {/* pr-details */}
                                                                        <th className='VREMARKS text-center' scope="col">Items Name</th>
                                                                        <th className='VREMARKS text-center' scope="col">Item Code</th>
                                                                        <th className='VREMARKS text-center' scope="col">Quantity</th>
                                                                        <th className='VREMARKS text-center' scope="col">Item description</th>
                                                                        {/* vendor selection */}
                                                                        <th className='Vendorform text-center' scope="col">Vendor__Name</th>
                                                                        <th className='Vendorform text-center' scope="col">V.Quantity</th>
                                                                        <th className='Vendorform text-center' scope="col">Price</th>
                                                                        <th className='Vendorform text-center' scope="col">Total</th>
                                                                        <th className='Vendorform text-center' scope="col">Payment Trems</th>
                                                                        <th className='Vendorform text-center' scope="col">Lead Time</th>
                                                                        <th className='Vendorform text-center' scope="col">Remark(s)</th>
                                                                        {/* Ecom Details */}
                                                                        <th className='VREMARKS text-center' scope="col">Quantity</th>
                                                                        <th className='VREMARKS text-center' scope="col">R.Quantity</th>
                                                                        <th className='VREMARKS text-center' scope="col">Price</th>
                                                                        <th className='VREMARKS text-center' scope="col">Total</th>
                                                                        <th className='VREMARKS text-center' scope="col">Remarks</th>
                                                                        {/* Action */}
                                                                        <th className='Vendorform text-center' scope="col">Action</th>


                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">1</th>
                                                                        {/* pr-details */}
                                                                        <td className='VREMARKS text-center' scope="col">Canvas Bag BIG</td>
                                                                        <td className='VREMARKS text-center' scope="col">OPEXBAG0004</td>
                                                                        <td className='VREMARKS text-center' scope="col">10000</td>
                                                                        <td className='VREMARKS text-center' scope="col">Canvas Bag BIG 20x20x34 with double layered base. Weight approximately 250  15 grams along with eyelet attached and stitched with P.P. POLY POPLIN threads.</td>
                                                                        {/* vendor selection */}
                                                                        <td className='Vendorform text-center' scope="col">
                                                                            <select class="form-select VendorSelectRFQ">
                                                                                <option value="">Select</option>
                                                                                <option value="Duna Fashion" selected>Duna Fashion</option>
                                                                                <option value="Ishika Polyfab">Ishika Polyfab</option>
                                                                                <option value="Mogli Labs">Mogli Labs</option>
                                                                            </select>
                                                                        </td>
                                                                        <td className='Vendorform text-center' scope="col">10000</td>
                                                                        <td className='Vendorform text-center' scope="col">33</td>
                                                                        <td className='Vendorform text-center' scope="col">330000</td>
                                                                        <td className='Vendorform text-center' scope="col">30 Days</td>
                                                                        <td className='Vendorform text-center' scope="col">10 days</td>
                                                                        <td className='Vendorform text-center' scope="col">Canvas Bag BIG 20x20x34 with double layered base</td>
                                                                        {/* Ecom Details */}
                                                                        <td className='VREMARKS text-center' scope="col">
                                                                        <input type="text" name="" id="" className='from-control VendorInputRFQ' />
                                                                        </td>
                                                                        <td className='VREMARKS text-center' scope="col">0</td>
                                                                        <td className='VREMARKS text-center' scope="col">
                                                                        <input type="text" name="" id="" className='from-control VendorInputRFQ' value="33" />
                                                                        </td>
                                                                        <td className='VREMARKS text-center' scope="col">330000</td>
                                                                        <td className='VREMARKS text-center' scope="col">
                                                                            <input type="text" name="" id="" className='from-control VendorInputRFQ' /></td>
                                                                        {/* Action */}
                                                                        <td className='Vendorform text-center' scope="col">
                                                                        <div className="d-flex">
                                                                            <button className='VSUBMITBTN me-1'>Submit</button>
                                                                            <button className='FinalizeBTN'>Finalize</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">2</th>
                                                                        {/* pr-details */}
                                                                        <td className='VREMARKS text-center' scope="col">Big Tamper proof bag</td>                                                                  
                                                                         <td className='VREMARKS text-center' scope="col">OPEXBAG0004</td>
                                                                        <td className='VREMARKS text-center' scope="col">100000</td>
                                                                        <td className='VREMARKS text-center' scope="col">Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round</td>

                                                                        {/* vendor selection*/}
                                                                        <td className='Vendorform text-center' scope="col">
                                                                        <select class="form-select VendorSelectRFQ">
                                                                                <option value="">Select</option>
                                                                                <option value="Duna Fashion">Duna Fashion</option>
                                                                                <option value="Ishika Polyfab"selected>Ishika Polyfab</option>
                                                                                <option value="Mogli Labs">Mogli Labs</option>
                                                                            </select>
                                                                        </td>
                                                                        <td className='Vendorform text-center' scope="col">100000</td>
                                                                        <td className='Vendorform text-center' scope="col">5</td>
                                                                        <td className='Vendorform text-center' scope="col">500000</td>
                                                                        <td className='Vendorform text-center' scope="col">30 Days</td>
                                                                        <td className='Vendorform text-center' scope="col">10 days</td>
                                                                        <td className='Vendorform text-center' scope="col">Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap</td>
                                                                        {/* Ecom Details */}
                                                                        <td className='VREMARKS text-center' scope="col">
                                                                        <input type="text" name="" id="" className='from-control VendorInputRFQ' />
                                                                        </td>
                                                                        <td className='VREMARKS text-center' scope="col">0</td>
                                                                        <td className='VREMARKS text-center' scope="col">
                                                                        <input type="text" name="" id="" className='from-control VendorInputRFQ' value="5" />
                                                                        </td>
                                                                        <td className='VREMARKS text-center' scope="col">500000</td>
                                                                        <td className='VREMARKS text-center' scope="col"><input type="text" name="" id="" className='from-control VendorInputRFQ' /></td>
                                                                        {/* Action */}
                                                                        <td className='Vendorform text-center' scope="col">
                                                                            <div className="d-flex">
                                                                            <button className='VSUBMITBTN me-1'>Submit</button>
                                                                            <button className='FinalizeBTN'>Finalize</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Vendor History */}
                                            <div className="card AddINSUBCARD mt-2">
                                                <div className="card-body p-1">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="card-title ADDINVOICECARDTITLE">Vendor History</h6>
                                                        </div>
                                                        <div className="col">
                                                        </div>
                                                    </div>
                                                    <hr className='mt-0 mb-1' />
                                                    <div className="VENDORSELECTIONGROUP">
                                                        <div className="table-responsive VENDORTABLE">
                                                            <table className="table-sm table-hover table-bordered">
                                                                <thead className='VTHEAD'>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col" colspan="1"></th>
                                                                        <th className='VREMARKS text-center' scope="col" colspan="4">PR Details</th>
                                                                        <th className='Vendorform text-center' scope="col" colspan="7">Vendor Submission Details</th>
                                                                        <th className='VREMARKS text-center' scope="col" colspan="4">BPAAS Details</th>
                                                                        <th className='Vendorform text-center' scope="col" colspan="1"></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">S.No.</th>
                                                                        {/* pr-details */}
                                                                        <th className='VREMARKS text-center' scope="col">Items Name</th>
                                                                        <th className='VREMARKS text-center' scope="col">Item Code</th>
                                                                        <th className='VREMARKS text-center' scope="col">Quantity</th>
                                                                        <th className='VREMARKS text-center' scope="col">Item Description</th>

                                                                        {/* vendor selection */}
                                                                        <th className='Vendorform text-center' scope="col">Vendor Name</th>
                                                                        <th className='Vendorform text-center' scope="col">Vendor Quantity</th>
                                                                        <th className='Vendorform text-center' scope="col">Price</th>
                                                                        <th className='Vendorform text-center' scope="col">Total</th>
                                                                        <th className='Vendorform text-center' scope="col">Payment Trems</th>
                                                                        <th className='Vendorform text-center' scope="col">Lead Time</th>
                                                                        <th className='Vendorform text-center' scope="col">Remark(s)</th>
                                                                        {/* Ecom Details */}
                                                                        <th className='VREMARKS text-center' scope="col">R.Quantity</th>
                                                                        <th className='VREMARKS text-center' scope="col">Price</th>
                                                                        <th className='VREMARKS text-center' scope="col">Total</th>
                                                                        <th className='VREMARKS text-center' scope="col">Remarks</th>
                                                                        {/* status */}
                                                                        <th className='Vendorform text-center' scope="col">Status</th>


                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">1</th>
                                                                        {/* pr-details */}
                                                                        <td className='VREMARKS text-center' scope="col">Canvas Bag BIG</td>
                                                                        <td className='VREMARKS text-center' scope="col">OPEXBAG0004</td>
                                                                        <td className='VREMARKS text-center' scope="col">10000</td>
                                                                        <td className='VREMARKS text-center' scope="col">Impressive performance</td>
                                                                        {/* vendor selection */}
                                                                        <td className='Vendorform text-center' scope="col">Duna Fashion</td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        {/* Ecom Details */}
                                                                        <td className='VREMARKS text-center' scope="col">0</td>
                                                                        <td className='VREMARKS text-center' scope="col">33</td>
                                                                        <td className='VREMARKS text-center' scope="col">330000</td>
                                                                        <td className='VREMARKS text-center' scope="col">Canvas Bag BIG 20x20x34 with double layered base</td>
                                                                        {/* status */}
                                                                        <td className='Vendorform text-center' scope="col">V Pending</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className='Vendorform text-center' scope="col">2</th>
                                                                        {/* pr-details */}
                                                                        <td className='VREMARKS text-center' scope="col">Big Tamper proof bag</td>
                                                                        <td className='VREMARKS text-center' scope="col">OPEXBAG0005</td>
                                                                        <td className='VREMARKS text-center' scope="col">100000</td>
                                                                        <td className='VREMARKS text-center' scope="col">Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap</td>
                                                                        {/* vendor selection*/}
                                                                        <td className='Vendorform text-center' scope="col">Ishika Polyfab</td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        <td className='Vendorform text-center' scope="col"></td>
                                                                        {/* Ecom Details */}
                                                                        <td className='VREMARKS text-center' scope="col">0</td>
                                                                        <td className='VREMARKS text-center' scope="col">5</td>
                                                                        <td className='VREMARKS text-center' scope="col">500000</td>
                                                                        <td className='VREMARKS text-center' scope="col">Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round</td>
                                                                        {/* status */}
                                                                        <td className='Vendorform text-center' scope="col">V Pending</td>
                                                                    </tr>
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



