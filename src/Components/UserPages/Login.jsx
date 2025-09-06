import React, { useEffect, useState } from 'react'
import '../../Assets/Css/Login.css'
import { useNavigate } from 'react-router-dom'
import iziToast from 'izitoast'

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "BPAAS || Login"
    }, [])

    // Credentials
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [captchaInput, setCaptchaInput] = useState('');
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);

    // captcha function
    function generateCaptcha() {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            code += chars[randomIndex];
        }
        return code;
    }
    function reloadCaptcha() {
        setCaptcha(generateCaptcha());
    }
    function handleCaptchaInputChange(event) {
        setCaptchaInput(event.target.value);
    }


    // submit login
    function handleCaptchaSubmit(event) {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        if (username === "" && password === "") {
            iziToast.error({
                class: "IZITOAST",
                message: 'Username and Password are required',
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
        } else if (username === "") {
            iziToast.error({
                class: "IZITOAST",
                message: 'Username is required',
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
        } else if (password === "") {
            iziToast.error({
                class: "IZITOAST",
                message: 'Password is required',
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
        }
        else if (captchaInput !== captcha) {
            setIsCaptchaValid(false);
            iziToast.error({
                class: "IZITOAST",
                message: 'Invalid Captcha',
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
            reloadCaptcha();
        }
        else if (captchaInput === captcha && username == "sanjay.kumar" && password == "sanjay.kumar") {
            setIsCaptchaValid(true);
            navigate("/dashboard", { replace: true });
        } else if (captchaInput === captcha && username == "rajesh.kumar" && password == "rajesh.kumar") {
            setIsCaptchaValid(true);
            navigate("/appdashboard", { replace: true });
        } else if (captchaInput === captcha && username == "RFQ.user" && password == "RFQ.user") {
            setIsCaptchaValid(true);
            navigate("/rfqdashboard", { replace: true });
        } else if (captchaInput === captcha && username == "vendor" && password == "vendor") {
            setIsCaptchaValid(true);
            navigate("/vendor-dashboard", { replace: true });
        }else {
            setIsCaptchaValid(false);
            iziToast.warning({
                title: 'Error',
                titleColor: 'red',
                titleSize: '13',
                message: 'Wrong Credential',
                position: 'topRight',
                backgroundColor: "white",
                messageColor: "red",
                messageSize: "13",
                position: 'topRight',
                icon: 'fa-regular fa-circle-xmark',
                iconColor: 'red',
                progressBarColor: 'red',
            });
            reloadCaptcha();
        }
    }

    const handleCopy = (event) => {
        event.preventDefault();
    };
    const handleSelect = (event) => {
        event.target.setSelectionRange(0, 0);
    };


    return (
        <>
            <div className='BackgroundBanner'>
                <div className="container-fluid">
                    <div className="row LoginMAINROW g-1">
                        <div className="col text-center">
                            {/* <div> */}
                                <h2 className=' mb-2 SideImage'>Logo</h2>
                                <h4 className='SideTextHeader'>E-Procurement System</h4>
                                <h6 className='Sidetextp'>
                                BPAAS Proqure provides automation of RFQ Generation/Approval, RFQ/RFP release to multiple vendors, capture Vendor Responses, Comparative Analysis of Quotes, Purchase Order Generation, and Purchase Requisition. It delivers open APIs for integration with back-end ERP systems                                
                                </h6>
                            {/* </div> */}
                        </div>
                        <div className="col">
                            <div className="card ECOMLOGINFORM m-auto">
                                <div className="card-body">
                                    <form className='p-3 ' onSubmit={handleCaptchaSubmit}>
                                        <div className="mb-3 text-center">
                                           {/* <img src={BPAASlogo} alt="" className='ECOMLOGO' /> */}
                                        </div>
                                        <div class="mb-3">
                                            <label for="UserName" class="form-label FormLabel">Email address</label>
                                            <input type="text" class="form-control FORMINPUT" id="UserName"
                                                value={username} onChange={e => setUsername(e.target.value)}
                                                autoComplete="off"
                                                placeholder=""
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label FormLabel">Password</label>
                                            <input type="password" class="form-control FORMINPUT"
                                                value={password} onChange={e => setPassword(e.target.value)}
                                                placeholder=''
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label class="form-label FormLabel">Captcha</label>
                                            <div className="d-flex">
                                                <input id="captcha" type="text" value={captcha} onCopy={handleCopy} onSelect={handleSelect} disabled readOnly class="form-control me-1 FORMINPUT" />
                                                <input type="text" class="form-control FORMINPUT" name="captcha" value={captchaInput} onChange={handleCaptchaInputChange} />
                                            </div>
                                            <button type='button' className='REloadCaptchabtn' onClick={reloadCaptcha} >Reload Captcha</button>
                                        </div>
                                        <div className="mb-4 text-center">
                                            <button type="submit" class="SubmitBTN SubmitAnimation">Login</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


