import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
export default function Washing_Services() {
    const navigate = useNavigate()
    function back() {
        navigate('/Rate-card')
    }
    return (
        <div>
            <div className='headar' style={{ position: "fixed" }}>
                <label className='frt_lable'><BiArrowBack className='icon' onClick={back} /> Washing Services</label>
                <MdSettings className='profile' />
            </div>
            <div>
                <div className='daily-wear'>
                    <label style={{ fontWeight: "700" }}>Wash & Iron</label>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Normal</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>99/Kg</td>
                                <td>159/Kg</td>
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
