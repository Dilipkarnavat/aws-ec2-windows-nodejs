import axios from 'axios';
import React, { useState } from 'react'
// import myimage from './images/Left_arrow.jpg'
import { BiArrowBack } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Forgot_password() {
  const navigate = useNavigate()
  function back() {
    navigate('/login')
  }
  const [tel, settel] = useState()
  const [number, setnumber] = useState()
  const [numbererr, setnumbererr] = useState(false)

  axios.get('/getdata')
    .then((data) => settel(data.data[data.data.length - 1].tel))

  function new_password() {
    console.log(tel);
    if (tel == number) {
      navigate('/new-password')
    } else {
      setnumbererr(true)
    }

  }
  return (
    <div>
      <div className='headar'>
        <label className='frt_lable'><BiArrowBack className='icon' onClick={back} /> Forgot Password</label>
      </div>
      <div>
        <FaMobileAlt className='phone_icon' />
        <input type='tel' className="pass_change" placeholder='Enter Mobile Number' onChange={(e) => setnumber(e.target.value)} />
        <br />
        {numbererr ? <span id='user_error' className='error' style={{
          position: "relative",
          left: "55px",
          top: "92px"
        }}>Number not available...</span> : ""}
        <button className='btn' id='signin' style={{ top: "98px" }} onClick={new_password} >Create Password</button>
      </div>
    </div>
  )
}
