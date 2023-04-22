import React from 'react'
import { BiArrowBack } from "react-icons/bi";
// import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom'
export default function Settings() {
    const navigate = useNavigate()
  function back() {
    document.getElementById('class_id').classList.add('settings')
    document.getElementById('home').style.display='block'
  }
  function myprofile(){
    navigate('/My-profile')
  }
  return (
    <div id='class_id' className="settings">
      <label><BiArrowBack className='icon' onClick={back} />Setting</label>
      <div>
      <button type="button" className="setting_btn" onClick={myprofile}>My Profile</button>
      <button type="button" className="setting_btn">My Order</button>
      <button type="button" className="setting_btn">Complaints</button>
      <button type="button" className="setting_btn">Feedback</button>
      <button type="button" className="setting_btn">Logout</button>

      </div>
    </div>
  )
}
