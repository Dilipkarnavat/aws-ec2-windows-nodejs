import React, { useEffect } from 'react'
import myimage from './images/loundry.png'
import { MdSettings } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import Settings from './Settings';
export default function Welcome_page() {
    const navigate = useNavigate()
    useEffect(() => {
        document.getElementById('home').style.top = '25px'
    })
    function Rate_card() {
        navigate('/Rate-card')
    }
    function setting(){
        document.getElementById('class_id').classList.remove('settings')
        document.getElementById('home').style.display='none'
    }
    return (
        <>
        <Settings/>
            <div id='home' >
                <div id='welcome'>
                    <MdSettings className='profile' style={{
                        color: "black",
                        top: "-36px",
                        left: "-3vw"
                    }} onClick={setting} />
                    <h1 style={{ position: "relative", left: "-31px" }}>Welcome To</h1>
                    <img src={myimage}></img>
                    <h2>Laundrylite</h2>
                </div>
                <button id='signin' className='btn'>Services</button>
                <button id='signin' className='btn'>Pickup Schedule</button>
                <button id='signin' className='btn' onClick={Rate_card}>Rate Card</button>

            </div>
        </>
    )
}
