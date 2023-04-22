import React from 'react'
import { useEffect } from 'react'
import './stylesheet.css'
import {useNavigate} from "react-router-dom"
import myimage from './images/loundry.png'
export default function Homepage() {
  window.history.forward()
  const navigate = useNavigate()
  
  useEffect(() => {
    document.getElementById('home').style.transition = 'top 0.5s';
    document.getElementById('home').style.top='28px'
  });
  function Create_acc() {
    navigate('/account')

    // if (document.getElementById('home').style.display = 'block') {
    //   document.getElementById('home').style.display = 'none'
    //   document.getElementById('acc').style.display = 'block'
    // }
    
  }
  const signin =()=>{
    navigate('/login')
  }
  return (
    <>
      <div id='home'>
        <img className='home' src={myimage}></img>
        <h1 id='heading'>Laundry Management</h1>
        <button className='btn' id='signin' onClick={signin}>Sign In</button>
        <button className='btn' id='create_acc' onClick={Create_acc}>Create Account</button>
      </div>
    </>
  )
}
