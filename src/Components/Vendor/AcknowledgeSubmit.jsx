import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/Css/CreateIndent.css'
import '../../Assets/Css/CreateRFQ.css'
import iziToast from 'izitoast';
import VendorNavbar from './VendorNavbar';


export default function AcknowledgeSubmit() {
    const navigate = useNavigate();

    const HandelAddInvoiceForm = (event) => {
        event.preventDefault();
        iziToast.success({
            message: 'RFQ Submitted Successfully',
            position: 'topRight'
        });
        navigate("/vendor-dashboard", { replace: true });
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
    return (
        <>
            <VendorNavbar />
            <div className="container-fluid">
                <div className="card AddINMAINCARD mt-2 mb-2">
                    <div className="card-body" style={{ padding: "10px 20px 20px 20px" }}>
                        <form onSubmit={HandelAddInvoiceForm}>
                            {/* Purchase Request Header Details */}
                            <div className="row">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1 ">

                                        <h6 className="card-title ADDINVOICECARDTITLE">Vendor Header Details | <span class="badge bg-success text-dark Approvedbadge me-1">Acknowledged</span>
                                            <div className="FORMBTNSMAIN">
                                                <button type='submit' className='APPROVEDBTN '>Submit</button>
                                            </div>
                                        </h6>
                                        <hr className='mt-0 mb-1' />
                                        <div className="row mb-2">
                                            <div className="col-md-2">
                                                <label htmlFor="IndentNumber" className="col-form-label G20ADDFOEMLABEL">RFQ Number</label>
                                                <input type="text" autoComplete="off" id="IndentNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="RFQ-00000000001-BPAAS" readOnly disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="PRNumber" className="col-form-label G20ADDFOEMLABEL">Open Date</label>
                                                <input type="text" autoComplete="off" id="PRNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="17-05-2023" readOnly disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Close Date</label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="22-05-2023" readOnly disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Time Left</label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="5 Days" readOnly disabled />
                                            </div>
                                            <div className="col-md-2">
                                            <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Payment Terms<span className="text-warning">
                                                *</span></label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" placeholder='Payment Terms' required/>
                                            </div>
                                            <div className="col-md-2">
                                            <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Lead Time<span className="text-warning">
                                                *</span></label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" placeholder='Lead Time' required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Purchase Request Line Level Details */}
                            <div className="row mt-2 mb-2">
                                <div className="card AddINSUBCARD">
                                    <h6 className="card-title ADDINVOICECARDTITLE m-1">Line Level Details</h6>
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
                                                        <th className='text-center' scope="col">Your Quantity</th>
                                                        <th className='text-center' scope="col">Your Price</th>
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
                                                                <td className='TABLEITEMS text-center'>
                                                                <input type='text' className='from-control VendorInputRFQ' placeholder='Quantity'/>
                                                                </td>
                                                                <td className='TABLEITEMS text-center'>
                                                                <input type='text' className='from-control VendorInputRFQ' placeholder='Price'/>
                                                                </td>
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
                            {/* remarks */}
                            <div className="row mt-2">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1 mb-2">
                                        <div className="col">
                                            <label htmlFor="Site" className="col-form-label G20ADDFOEMLABEL">Remarks <span className='text-danger'>*</span></label>
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



