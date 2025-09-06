import React, { useState } from 'react'
import Navbar from '../NavItems/Navbar'
import { useNavigate } from 'react-router-dom'
import iziToast from 'izitoast';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import fetchVendorDetails from './VendorDetailsData';

const CreateDeliverySch = () => {
    const navigate = useNavigate();

    const [VendorCode, setVendorCode] = useState("")
    const [VendorName, setVendorName] = useState("")
    const [PoNumber, setPoNumber] = useState("")
    const [PoLineItemNo, setPoLineItemNo] = useState("")
    const [ImPartNumber, setImPartNumber] = useState("")
    const [ImPartDesc, setImPartDesc] = useState("")
    const [Currency, setCurrency] = useState("")
    const [PricePerPc, setPricePerPc] = useState("")
    const [Unit, setUnit] = useState("")
    const [InvoicePrice, setInvoicePrice] = useState("")
    const [HsnCode, setHsnCode] = useState("")
    const [NetAmount, setNetAmount] = useState("")
    const [TaxAmount, setTaxAmount] = useState("")
    const [TotalAmount, setTotalAmount] = useState("")

    const HandleVendorCode = (event) => {
        event.preventDefault();
        const newVendorCode = event.target.value;
        const {
            VendorName: newName,
            PoNumber: newPoNumber,
            POLineItemNo: newPOLineItemNo,
            IMPartNumber: newIMPartNumber,
            IMPartDesc: newIMPartDesc,
            HSNCode: newHSNCode,
            Unit: newUnit,
            InvoicePrice: newInvoicePrice,
            Currency: newCurrency,
            PricePerPC: newPricePerPC,
            NetAmount: newNetAmount,
            TaxAmount: newTaxAmount,
            TotalAmount: newTotalAmount,
        } = fetchVendorDetails(newVendorCode);
        setVendorCode(newVendorCode);
        setVendorName(newName);
        setPoNumber(newPoNumber);
        setPoLineItemNo(newPOLineItemNo);
        setImPartNumber(newIMPartNumber);
        setImPartDesc(newIMPartDesc);
        setHsnCode(newHSNCode);
        setUnit(newUnit);
        setInvoicePrice(newInvoicePrice);
        setCurrency(newCurrency);
        setPricePerPc(newPricePerPC);
        setNetAmount(newNetAmount);
        setTaxAmount(newTaxAmount);
        setTotalAmount(newTotalAmount);
        
    }


    const HsnHandle = (e) => {
        const HsnValue = e.target.value;
        const regex = /^\d{0,6}$/;
        if (regex.test(HsnValue) || HsnValue === '') {
            setHsnCode(HsnValue);
        }
    };


    const handleNetAmountChange = (event) => {
        const newNetAmount = event.target.value;
        if (/^[+-]?\d+(\.\d+)?$/.test(newNetAmount) || newNetAmount === '') {
            setNetAmount(newNetAmount);
            calculateTotalAmount(newNetAmount, TaxAmount);
        }
    };

    const handleTaxAmountChange = (event) => {
        const newTaxAmount = event.target.value;
        if (/^[+-]?\d+(\.\d+)?$/.test(newTaxAmount) || newTaxAmount === '') {
            setTaxAmount(newTaxAmount);
            calculateTotalAmount(NetAmount, newTaxAmount);
        }
    };

    const calculateTotalAmount = (netAmount, taxAmount) => {
        if (/^[+-]?\d+(\.\d+)?$/.test(netAmount) && /^[+-]?\d+(\.\d+)?$/.test(taxAmount)) {
            const total = parseFloat(netAmount) + parseFloat(taxAmount);
            if (isNaN(total)) {
                setTotalAmount('');
            } else {
                setTotalAmount(total.toFixed(2));
            }
        } else {
            setTotalAmount('');
        }
    };



    const HandleCreate = () => {
        iziToast.success({
            title: 'Delivery Schedule ',
            message: 'Created successfully',
            position: 'topRight',
            messageColor: "green",
        });
        navigate("/delivery-schedule-data")
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
                        <form onSubmit={HandleCreate}>
                            <div className="row">
                                <div className="card AddINSUBCARD">
                                    <div className="card-body p-1 ">
                                        <h6 className="card-title ADDINVOICECARDTITLE">Create Delivery Schedule
                                            <div className="FORMBTNSMAIN">
                                                {/* <Link to="/dashboard"><button type='button' className='G20AButtonBack d-none'>Back</button></Link>
                                                &nbsp;
                                                <button type='button' className='SAVEDRAFT'>Save Draft</button>
                                                &nbsp;
                                                <button type='button' className='RaiseQuery d-none'>Raise Query</button>
                                                <button type='button' className='APPROVEDBTN d-none'>Approve</button>
                                                &nbsp;
                                                <button type='button' className='REJECTED d-none'>Reject</button> */}
                                                <button type='submit' className='G20AButtonSubmit'>Create</button>
                                            </div>
                                        </h6>
                                        <hr className='mt-0 mb-1' />
                                        <div className="row mb-2">
                                            <div className="col-md-2">
                                                <label htmlFor="" className="col-form-label G20ADDFOEMLABEL">Vendor Code <span className='text-danger'>*</span></label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" value={VendorCode} onChange={HandleVendorCode} >
                                                    <option selected>Select</option>
                                                    <option value="345455">345455</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Vname" className="col-form-label G20ADDFOEMLABEL">Vendor Name <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="Vname" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={VendorName} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="PoNumber" className="col-form-label G20ADDFOEMLABEL">PO Number <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="PoNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={PoNumber} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="PoLine" className="col-form-label G20ADDFOEMLABEL">PO Line item No <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="PoLine" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={PoLineItemNo} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="ImPart" className="col-form-label G20ADDFOEMLABEL">IM Part Number <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="ImPart" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={ImPartNumber} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="ImPart" className="col-form-label G20ADDFOEMLABEL">IM Part Desc <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="ImPart" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={ImPartDesc} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="HSNCOde" className="col-form-label G20ADDFOEMLABEL">HSN Code <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="HSNCOde" className="form-control G20ADDFOEMINPUTS1" aria-describedby=""
                                                    onChange={HsnHandle} value={HsnCode} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="MPN" className="col-form-label G20ADDFOEMLABEL">MPN (if)</label>
                                                <input type="text" autoComplete="off" id="MPN" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="MPNIF" className="col-form-label G20ADDFOEMLABEL">Make (if)</label>
                                                <input type="text" autoComplete="off" id="MPNIF" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="MATERAILBATCH" className="col-form-label G20ADDFOEMLABEL">Material Batch/Lot No (if)</label>
                                                <input type="text" autoComplete="off" id="MATERAILBATCH" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Materialdate" className="col-form-label G20ADDFOEMLABEL">Material date code (if)</label>
                                                <input type="text" autoComplete="off" id="Materialdate" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="DateofMan" className="col-form-label G20ADDFOEMLABEL">Date Of manufacturing</label>
                                                <input type="text" autoComplete="off" id="DateofMan" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="InvoiceNumber" className="col-form-label G20ADDFOEMLABEL">Invoice Number</label>
                                                <input type="text" autoComplete="off" id="InvoiceNumber" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="nvpoiceDate" className="col-form-label G20ADDFOEMLABEL">Invoice Date</label>
                                                <input type="text" autoComplete="off" id="nvpoiceDate" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="InvoiceQUantity" className="col-form-label G20ADDFOEMLABEL">Invoice Quantity</label>
                                                <input type="text" autoComplete="off" id="InvoiceQUantity" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Freight" className="col-form-label G20ADDFOEMLABEL">Freight Amount</label>
                                                <input type="text" autoComplete="off" id="Freight" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" disabled />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Unit" className="col-form-label G20ADDFOEMLABEL">Unit <span className='text-danger'>*</span></label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" value={Unit}>
                                                    <option selected>Select</option>
                                                    <option value="Kg">Kg</option>
                                                    <option value="PCs">PCs</option>
                                                    <option value="LTR">LTR</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="IvoicePrice" className="col-form-label G20ADDFOEMLABEL">Invoice Price <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="IvoicePrice" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={InvoicePrice} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="Currency" className="col-form-label G20ADDFOEMLABEL">Currency <span className='text-danger'>*</span></label>
                                                <select className="form-select G20ADDFOEMINPUTS1SELECT" aria-label="Default select example" value={Currency}>
                                                    <option selected>Select</option>
                                                    <option value="INR">INR</option>
                                                    <option value="USD">USD</option>
                                                    <option value="EUR">EUR</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="PricePErpc" className="col-form-label G20ADDFOEMLABEL">Price Per PC <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="PricePErpc" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" value={PricePerPc} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="NetAmount" className="col-form-label G20ADDFOEMLABEL">Net Amount <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="NetAmount" className="form-control G20ADDFOEMINPUTS1" aria-describedby="" onChange={handleNetAmountChange} value={NetAmount} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="TaxAmount" className="col-form-label G20ADDFOEMLABEL">Tax Amount <span className='text-danger'>*</span></label>
                                                <input type="text" autoComplete="off" id="TaxAmount" className="form-control G20ADDFOEMINPUTS1" aria-describedby=""
                                                    onChange={handleTaxAmountChange}
                                                    value={TaxAmount} />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="TotalAmount" className="col-form-label G20ADDFOEMLABEL">Total Amount</label>
                                                <input type="text" autoComplete="off" id="TotalAmount" className="form-control G20ADDFOEMINPUTS1" aria-describedby=""
                                                    value={TotalAmount}
                                                    disabled />
                                            </div>
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

export default CreateDeliverySch