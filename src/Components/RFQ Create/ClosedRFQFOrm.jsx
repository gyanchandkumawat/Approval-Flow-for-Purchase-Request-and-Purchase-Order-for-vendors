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
            { id: 4, name: 'Ishika Polyfab' },
            { id: 5, name: 'Duna Fashion' },
            { id: 6, name: 'Mogli Labs' },
        ],
    },
];


const animatedComponents = makeAnimated();

export default function ClosedRFQForm() {
    const navigate = useNavigate();
    const currentDate = new Date().toLocaleDateString();
    const HandelAddInvoiceForm = (event) => {
        event.preventDefault();
        iziToast.success({
            title: 'RFQ',
            message: 'Published Successfully',
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



    // Vendor Selection
    const [vendorTableData, setVendorTableData] = useState([
        {
            id: 1,
            name: "Vendor 1",
            PRQUANITTY: "20",
            VQUANTITY: "4",
            VPRICE: "200",
            VTOTAL: "600",
            HSNCODE: "242344",
            REMARKS: "Canvas Bag BIG 20x20x34 with double layered base. Weight approximately 250  15 grams along with eyelet attached and stitched with P.P. POLY POPLIN threads.",
            EFQREMARKS: "20x20x34 with double layered base"
        },
        {
            id: 2,
            name: "Ishika Polyfab",
            PRQUANITTY: "10",
            VQUANTITY: "6",
            VPRICE: "400",
            VTOTAL: "2400",
            HSNCODE: "454555",
            REMARKS: "Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap, 4 Inch gusset ,55 microns, twin sealing, sequential barcodes (2 places) , side series and POD Jacket) as per approved design",
            EFQREMARKS: "proof bag L- 480mm, W -395 mm"

        },
    ]);

const  GeneratePOHandle =(event)=>{
    event.preventDefault();
    iziToast.success({
        title: 'PO',
        message: 'Generate Successfully',
        position: 'topRight'
    });
    navigate("/allrfq", { replace: true });

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

                                        <h6 className="card-title ADDINVOICECARDTITLE">RFQ Header Details | <span class="badge bg-success text-dark Approvedbadge me-1">Closed</span>
                                            {/* <VerifiedIcon className='text-success fs-5'/> */}
                                            <div className="FORMBTNSMAIN">
                                                <button type='button' onClick={GeneratePOHandle} className='PUBLISH'>Generate PO</button>
                                                &nbsp;
                                                <button type='submit' className='PUBLISH d-none'>Re-Publish</button>
                                            </div>
                                        </h6>
                                        <hr className='mt-0 mb-1' />
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
                                                <label htmlFor="PONumber" className="col-form-label G20ADDFOEMLABEL">PO Number</label>
                                                <input type="text" autoComplete="off" id="PONumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="PO-00000000001" readOnly disabled />
                                            </div> */}
                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Time Line<span className='text-danger'>*</span> <span className='text-danger'>(For RFQ Team) </span></label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="10 Days"   readOnly disabled/>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Time Line<span className='text-danger'>*</span> <span className='text-danger'>(For Vendors) </span></label>
                                                <input type="text" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="15 Days"  readOnly disabled/>
                                            </div>

                                            <div className="col-md-2">
                                                <label htmlFor="RFQNumber" className="col-form-label G20ADDFOEMLABEL">Expiry Date</label>
                                                <input type="date" autoComplete="off" id="RFQNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value="2023-05-30"   readOnly disabled/>
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
                                                        <td colspan="14" className="text-center AdminTABLELINEITEMdiv"><b>No Entry!</b> </td>
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
                                            {/* <div className="row mb-2 g-1">
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
                                            </div> */}
                                            <div className="table-responsive VENDORTABLE">
                                                <table className="table-sm table-hover table-bordered">
                                                    <thead className='VTHEAD'>
                                                        <tr>
                                                            <th>S.No.</th>
                                                            <th className='VREMARKS'>Vendor Name</th>
                                                            <th>PR Quantity</th>
                                                            <th className='VREMARKS'>V. Quantity</th>
                                                            <th>V. Price</th>
                                                            <th className='VREMARKS'>V. Total</th>
                                                            <th>HSN Code</th>
                                                            <th className='VREMARKS'>Vendor Remarks</th>
                                                            <th>RFQ Team Remarks</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {vendorTableData.map((vendor, index) => (
                                                            <tr key={vendor.id}>
                                                                <th>{index + 1}</th>
                                                                <td className='VREMARKS'>{vendor.name}</td>
                                                                <td>{vendor.PRQUANITTY}</td>
                                                                <td className='VREMARKS'>{vendor.VQUANTITY}</td>
                                                                <td>{vendor.VPRICE}</td>
                                                                <th className='VREMARKS'>{vendor.VTOTAL}</th>
                                                                <td>{vendor.HSNCODE}</td>
                                                                <td className='VREMARKS'>{vendor.REMARKS}</td>
                                                                <td><input type="text" name="" id="" className='form-control G20ADDFOEMINPUTS1' value={vendor.EFQREMARKS} readOnly /></td>
                                                            </tr>
                                                        ))}
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
                                            <textarea type="text" autoComplete="off" id="Site" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" required >Big Tamper proof bag L- 480mm, W -395 mm,  3 Inch Round flap, 4 Inch gusset ,55</textarea>
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



