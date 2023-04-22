import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
export default function OnSite_Services() {
    const navigate = useNavigate()
    function back() {
        navigate('/Rate-card')
    }
    return (
        <div>
            <div className='headar' style={{ position: "fixed" }}>
                <label className='frt_lable'><BiArrowBack className='icon' onClick={back} /> OnSite Services</label>
                <MdSettings className='profile' />
            </div>
            <div>
                <div className='daily-wear'>
                    
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Carpet Cleaning</th>
                                <th>Sofa, Cushion & Mattress Cleaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>233/-</td>
                                <td>345/-</td>
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
