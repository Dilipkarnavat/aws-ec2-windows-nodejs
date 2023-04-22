import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Verifyotp() {
    const navigate = useNavigate()
    const [Votp, setVotp] = useState()
    const [otp, setotp] = useState()


    const [otperr, setotperr] = useState(false)
    const Verify = () => {
        axios.get('http://localhost:9000/getotp')
            .then((otp) => {
                setotp(otp);
            }).catch((err) => {
                console.log(err);
            })
        console.log(otp);
        console.log(Votp);
        if (otp.data == Votp) {            
            navigate('/home')
        } else {
            setotperr(true)
        }
    }
    function Resend_OTP() {
        axios.post('http://localhost:9000/otpsent', {
                number: document.getElementById('number').value
            }).then((data) => console.log(data))
    }
    return (
        <>
        <div id='verifyotp'>
            <label id='enterotp'>Please Enter OTP</label>
            <input type="text" name="" id="otp" onChange={(e) => setVotp(e.target.value)} />
            <br />
            <br />
            {otperr ? <span id='otperr' className='error'>Invalid OTP...</span> : ""}
            <button type='button' className='btn' id='signin' style={{
                position: "relative",
                top: "71px",
                left: "3vw"
            }} onClick={Verify} >Verify</button>
            <Link onClick={Resend_OTP} id='Resent_otp'>Resend OTP</Link>
        </div>
        </>
    )
}
