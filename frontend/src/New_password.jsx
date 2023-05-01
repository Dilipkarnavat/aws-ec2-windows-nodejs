import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { BiArrowBack, BiShow } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function New_password() {

    const [newpassword, setnewpassword] = useState()
    const [newconpassword, setnewconpassword] = useState()
    const [errpassword, seterrpassword] = useState(false)


    const [id, setid] = useState()
    const navigate = useNavigate()
    function back() {
        navigate('/forgot-password')
    }
    useEffect(() => {
        axios.get('/getdata')
            .then((data) => setid(data.data[data.data.length - 1].id))
    }, [])
    console.log(id);
    const forgotpassword = () => {
        if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(newpassword) || newpassword == undefined) {
            seterrpassword(true)
            document.getElementById('password_error').innerHTML = "Password must be 6 characters are required..."

        } else {
            if (newconpassword == newpassword) {
                axios.put('/edit/' + id, { newpassword: newpassword }).then((res) => {
                    console.log(res);
                })
                navigate('/login')
            } else {
                seterrpassword(true)
                document.getElementById('password_error').innerHTML = "Password not match..."
            }

        }
    }
    function show() {
        let x = document.getElementById('showpass')
        if (x.type === 'password') {
            x.type = 'text'
        } else {
            x.type = 'password'
        }
    }
    const hide = () => {
        let x = document.getElementById('hide')
        if (x.type === 'password') {
            x.type = 'text'
        } else {
            x.type = 'password'
        }
    }
    return (
        <div>
            <div className='headar'>
                <label className='frt_lable'><BiArrowBack className='icon' onClick={back} /> Create a New Password</label>
            </div>
            <div>
                <FaLock className='phone_icon' /><input type="password" className='pass_change' placeholder='New password' id='showpass' onChange={(e) => setnewpassword(e.target.value)} required />
                <BiShow className='show' onClick={show} />
                <br /><br /><FaLock className='phone_icon' /><input type="password" className='pass_change' placeholder='Conform password' id='hide' onChange={(e) => setnewconpassword(e.target.value)} required />
                <BiShow className='show' onClick={hide} />
                {errpassword ? <span id='password_error' className='error' style={{
                    left: "39px",
                    display: "block",
                    top: "-31px",
                    width: "382px",
                }}></span> : ""}
                <button type="submit" className='btn' id='signin' style={{ top: "98px" }} onClick={forgotpassword}>SUBMIT</button>
            </div>
        </div>
    )
}
