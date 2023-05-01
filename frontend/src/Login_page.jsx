import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Verifyotp from './Verifyotp';
// import fast2sms from 'fast-two-sms'
export default function Login_page() {
    
    const [tel, settel] = useState()
    const [password, setpassword] = useState()
    const [userpassword, setuserpassword] = useState()
    const [number, setnumber] = useState()
    const [numbererr, setnumbererr] = useState(false)
    const [passworderr, setpassworderr] = useState(false)

    axios.get('/getdata')
        .then((data) => [settel(data.data[data.data.length - 1].tel), setpassword(data.data[data.data.length - 1].password)])


    const sentOTP = () => {
        if (tel == number && password == userpassword) {
            axios.post('/otpsent', {
                number: document.getElementById('number').value
            }).then((data) => console.log(data))
            document.getElementById('number').value = ""
            document.getElementById('verifyotp').style.display = "block";
            document.getElementById('login').style.left = "-182%";
            document.getElementById('login').style.transition = 'left 0.5s';

            document.getElementById('verifyotp').style.transition = 'left 0.5s';

            document.getElementById('verifyotp').style.left = '-10%'
            document.getElementById('verifyotp').style.position = "relative";
            // document.getElementById('verifyotp').style.right="-234px";


        } else {
            setnumbererr(true)
        }
        if (password == userpassword) {
            document.getElementById('password').value = ""
        } else {
            setpassworderr(true)
        }
    }
    return (
        <>
            <div>
                <Verifyotp />
                <div id='login'>
                    <h1 id='c_acc_h1'>Login</h1>
                    <label className='lb'>Mobile No</label>
                    <input placeholder='your mobile number' className='input' id='number' onChange={(e) => setnumber(e.target.value)} ></input>
                    <br />
                    {numbererr ? <span id='user_error' className='error'>Number not available...</span> : ""}
                    <br />
                    <label className='lb'>Password</label>
                    <input placeholder='your password' className='input' id='password' onChange={(e) => setuserpassword(e.target.value)}></input>
                    <br />
                    {passworderr ? <span id='user_error' className='error'>Wrong password...</span> : ""}
                    <Link to="/Forgot-password" id='forgot_password'>Forgot password?</Link>
                    <button className='btn' id='signin' onClick={sentOTP}>Sent OTP</button>
                    <div style={{
                        position: "relative",
                        left: "15vw",
                        width: "129%"
                    }}>
                        <label>Don't have an account?</label>
                        <Link to='/account' style={{
                            textDecoration: "none",
                        }}>Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
