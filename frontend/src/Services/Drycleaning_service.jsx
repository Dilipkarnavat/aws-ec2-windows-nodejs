import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
export default function Drycleaning_service() {
  const navigate = useNavigate()
  function back() {
    navigate('/Rate-card')
  }
  return (
    <div>
      <div className='headar' style={{position:"fixed"}}>
        <label className='frt_lable'><BiArrowBack className='icon' onClick={back} /> Dry Cleaning Services</label>
        <MdSettings className='profile' />
      </div>
      <div>
        <div className='daily-wear'>
          <label style={{fontWeight:"700"}}>Daily Wear</label>
          <table className='table'>
            <thead>
              <tr>
                <th>Item</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>shirt</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>T-shirt</td>
                <td>$80</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
