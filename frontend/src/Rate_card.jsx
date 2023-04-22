import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
export default function Rate_card() {
    const navigate =useNavigate()
    function back() {
        navigate('/home')
    }
    function Drycleaning(){
        navigate('/Drycleaning-service')
    }
    function Washing(){
        navigate('/Washing-service')
    }
    function Steam(){
        navigate('/Steam-Iron-service')
    }
    function OnSite(){
        navigate('/OnSite-service')
    }
    return (
        <>
            <div>
                <div className='headar'>
                    <label className='frt_lable'><BiArrowBack className='icon' onClick={back} /> Rate Card</label>
                    <MdSettings className='profile'/>
                </div>
                <div>
                    <div className='services' >
                        <label>Dry Cleaning Services</label>
                        <IoIosArrowForward className='arrow_forward' onClick={Drycleaning}/>
                    </div>
                    <div className='services'>
                        <label>Washing Services</label>
                        <IoIosArrowForward className='arrow_forward' onClick={Washing}/>
                    </div>
                    <div className='services'>
                        <label>Steam Iron Services</label>
                        <IoIosArrowForward className='arrow_forward' onClick={Steam}/>
                    </div>
                    <div className='services'>
                        <label>On Site Services</label>
                        <IoIosArrowForward className='arrow_forward' onClick={OnSite}/>
                    </div>
                </div>
            </div>
        </>
    )
}
