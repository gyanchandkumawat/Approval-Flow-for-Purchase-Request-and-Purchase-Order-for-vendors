import React, { useState } from 'react'
import '../../Assets/Css/RFQDashboard.css'
import { Modal } from 'react-bootstrap';
import iziToast from 'izitoast';
import {  useNavigate } from 'react-router-dom';

export default function RFQModal(props) {
    const navigate = useNavigate()
    const [selectRFQNO, setSelectRFQNO] = useState('');

    const PrinsingHandelSubmit = (e) => {
      e.preventDefault();
        // const myselectedvalue = e.target.value;
        // console.log(myselectedvalue);

        if (!selectRFQNO) {
            iziToast.warning({
              titleColor: 'red',
              titleSize: '13',
              message: 'Please select RFQ Number',
              position: 'topRight',
              backgroundColor: 'white',
              messageColor: 'red',
              messageSize: '13',
              iconColor: 'red',
              progressBarColor: 'red',
            });
          }
          else {
            // Navigate to the next page
            navigate('/createrfq', { replace: true });
            props.RFQNOHandelColse()
          }
    }
    return (
        <>
            <Modal show={props.RFQNO} onHide={props.RFQNOHandelColse} backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='MOdalMain'
                size='sm'
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "rgba(255, 0, 0, 0.677)" }}>
                        Create RFQ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={PrinsingHandelSubmit}>
                        <div className='form-group' >
                            <label className='form-label'>Select PR Number</label>
                            <select className="form-select RFQSELECT" value={selectRFQNO} onChange={(e) => setSelectRFQNO(e.target.value)}>
                                <option value="" selected>Select</option>
                                <option value="RFQ-00000000001-BPAAS">PR-00000000001-BPAAS</option>
                                <option value="RFQ-00000000002-BPAAS">PR-00000000002-BPAAS</option>
                                <option value="RFQ-00000000003-BPAAS">PR-00000000003-BPAAS</option>
                                <option value="RFQ-00000000004-BPAAS">PR-00000000004-BPAAS</option>
                                <option value="RFQ-00000000005-BPAAS">PR-00000000005-BPAAS</option>
                                <option value="RFQ-00000000006-BPAAS">PR-00000000006-BPAAS</option>
                                <option value="RFQ-00000000007-BPAAS">PR-00000000007-BPAAS</option>
                                <option value="RFQ-00000000008-BPAAS">PR-00000000008-BPAAS</option>
                                <option value="RFQ-00000000009-BPAAS">PR-00000000009-BPAAS</option>
                            </select>
                        </div >
                        <button type="submit" className="RFQBTN float-end m-2" >
                            Submit
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
