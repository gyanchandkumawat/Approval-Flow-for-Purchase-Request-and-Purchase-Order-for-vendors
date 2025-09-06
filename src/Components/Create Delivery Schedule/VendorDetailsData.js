// Simulated function to fetch vendor details based on VendorCode
const fetchVendorDetails = (vendorCode) => {
    // Simulated data (replace with your actual data retrieval logic)
    const vendorData = {
        '345455': {
            VendorName: "Duna Fashion",
            PoNumber: "00002",
            POLineItemNo: "2",
            IMPartNumber: "343355",
            IMPartDesc: "Big Tamper proof bag",
            HSNCode: "767867",
            Unit: "PCs",
            InvoicePrice: "1000",
            Currency: "INR",
            PricePerPC: "33",
            NetAmount: "1000",
            TaxAmount: "200",
            TotalAmount: "1200",
        },
    };
    const vendorInfo = vendorData[vendorCode] || {};
    return {
        VendorName: vendorInfo.VendorName || '',
        PoNumber: vendorInfo.PoNumber || '',
        POLineItemNo: vendorInfo.POLineItemNo || '',
        IMPartNumber: vendorInfo.IMPartNumber || '',
        IMPartDesc: vendorInfo.IMPartDesc || '',
        HSNCode: vendorInfo.HSNCode || '',
        Unit: vendorInfo.Unit || '',
        InvoicePrice: vendorInfo.InvoicePrice || '',
        Currency: vendorInfo.Currency || '',
        PricePerPC: vendorInfo.PricePerPC || '',
        NetAmount: vendorInfo.NetAmount || '',
        TaxAmount: vendorInfo.TaxAmount || '',
        TotalAmount: vendorInfo.TotalAmount || '',
    };
};

export default fetchVendorDetails;
