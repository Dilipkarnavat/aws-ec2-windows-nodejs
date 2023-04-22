import React, { useEffect, useState } from 'react'
import './stylesheet.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Create_acc() {
  window.history.forward()

  const navigate = useNavigate()

  const [uname, setuname] = useState()
  const [email, setemail] = useState()
  const [tel, settel] = useState()
  const [city, setcity] = useState()
  const [address, setaddress] = useState()
  const [password, setpassword] = useState()
  const [conpassword, setconpassword] = useState()

  const [unameerror, setunameerror] = useState(false)
  const [emailerror, setemailerror] = useState(false)
  const [numbererror, setnumbererror] = useState(false)
  const [cityerror, setcityerror] = useState(false)
  const [addresserror, setaddresserror] = useState(false)
  const [passworderror, setpassworderror] = useState(false)
  const [conpassworderror, setconpassworderror] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:9000/getdata')
      .then((data) => console.log(data))
  })
  var uname_check = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  var email_check = /\S+@\S+\.\S+/;
  var number_check = /^[789][0-9]{9}$/;
  var city_check = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  var address_check = /^[a-zA-Z0-9\s,.:'-]{3,}$/;
  var password_check = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  // const [verifyemail,setverifyemail]=useState()
  // axios.get('http://localhost:9000/getdata')
  //   .then((data) => setverifyemail(data.data.email))
  //   console.log(verifyemail);
  function signup() {

    // if (unameerror || emailerror || numbererror || cityerror || addresserror || passworderror || conpassworderror == true) {
    //   alert('please fill the correct information...');
    //   e.preventdefault();
    // } else {

    //   window.alert("Account create successfully...")
    //   navigate('/login')
    // }

    // var username = document.getElementById('uname').value;
    // var emailid = document.getElementById('email').value;
    // var number = document.getElementById('tel').value;
    // var cityname = document.getElementById('city').value;
    // var Address = document.getElementById('address').value;
    // var Password = document.getElementById('password').value;
    // var conpassword = document.getElementById('conpassword').value;



    // if (uname_check.test(uname)) {
    //   document.getElementById('user_error')
    // } else {
    //   document.getElementById('user_error').innerHTML = "Username is invalid...";

    // }

    if (email != "") {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', 'http://localhost:9000/verify_email', true);

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);

          if (response.emailexist) {
            alert('Email Already Exists...')
          }
          else {
            axios.post('http://localhost:9000/signup', {
              Uname: uname,
              email: email,
              tel: tel,
              city: city,
              address: address,
              password: password
            }).then(data => console.log(data))
            window.alert("Account create successfully...")
            navigate('/login')
          }
        }
        else {
          console.log("error...");
        }
      };
      xhr.onerror = () => {
        console.log("error checking...");
      }
      xhr.send(JSON.stringify({ email }))
    } else {
      console.log("please enter email...");
    }
  }
  function changename(e) {
    setuname(e.target.value);
    // console.log(uname);
    if (!uname_check.test(uname)) {
      setunameerror(true)

    } else {
      setunameerror(false)
    }

    // console.log(username);
  }
  function changeemail(e) {
    setemail(e.target.value);
    console.log(email);
    if (!email_check.test(document.getElementById('email').value)) {
      setemailerror(true)

    } else {
      setemailerror(false)
    }
  }
  function changetel(e) {
    settel(e.target.value);
    console.log(tel);
    if (!number_check.test(document.getElementById('tel').value)) {
      setnumbererror(true)

    } else {
      setnumbererror(false)
    }
  }
  function changecity(e) {
    setcity(e.target.value);

    if (!city_check.test(document.getElementById('city').value)) {
      setcityerror(true)

    } else {
      setcityerror(false)
    }
  }
  function changeaddress(e) {
    setaddress(e.target.value);

    if (!address_check.test(document.getElementById('address').value)) {
      setaddresserror(true)

    } else {
      setaddresserror(false)
    }
  }
  function changepassword(e) {
    setpassword(e.target.value);
    console.log("password:83", password);
    if (!password_check.test(password)) {
      setpassworderror(true)

    } else {
      setpassworderror(false)
    }
  }
  // const uname= document.getElementById('uname').value
  // console.log(uname);
  function changeconpassword(e) {
    setconpassword(e.target.value);
    let pass = document.getElementById('password').value;
    console.log("***password:92", password, pass);
    if (conpassword !== password) {
      setconpassworderror(true)

    } else {
      setconpassworderror(false)
    }
  }
  return (
    <>
      <div id='acc'>
        <div>
          <h1 id='c_acc_h1'>Create account</h1>
        </div>
        <form onSubmit={(e) => signup(e.preventDefault())} id='submit'>
          <label className='lb'>Username</label>
          <input id='uname' placeholder='Your username' className='input' type='text' value={uname || ''} onChange={changename} required></input>
          {unameerror ? <span id='user_error' className='error'>Invalid username...</span> : ""}
          <br />
          <label className='lb'>Email</label>
          <input id='email' placeholder='Your email address' className='input' type='email' value={email || ''} onChange={changeemail} required></input>
          {emailerror ? <span id='email_error' className='error'>Invalid email...</span> : ""}
          <br />
          <label className='lb'>Mobile No</label>
          <input id='tel' placeholder='Your mobile number' className='input' type='tel' value={tel || ''} onChange={changetel} required></input>
          {numbererror ? <span id='mobileno_error' className='error'>Invalid number...</span> : ""}
          <br />
          <label className='lb'>City</label>
          <input id='city' placeholder='Your city' className='input' type='text' value={city || ''} onChange={changecity} required></input>
          {cityerror ? <span id='city_error' className='error'>Invalid city...</span> : ""}
          <br />
          <label className='lb'>Address</label>
          <input id='address' placeholder='Your address' className='input' type='text' value={address || ''} onChange={changeaddress} required></input>
          {addresserror ? <span id='address_error' className='error'>Invalid address...</span> : ""}
          <br />
          <label className='lb'>Create password</label>
          <input id='password' placeholder='Must be 8 characters' className='input' type='password' value={password || ''} onChange={changepassword} required></input>
          {passworderror ? <span id='password_error' className='error'>Invalid password...</span> : ""}
          <br />
          <label className='lb'>Conform password</label>
          <input id='conpassword' placeholder='Repeat password' className='input' type='password' value={conpassword || ''} onChange={changeconpassword} required></input>
          {conpassworderror ? <span id='conpassword_error' className='error'>Password not match...</span> : ""}
          <br />
          <input type='checkbox' id='chk'></input>
          <label id='chk_lb'>I am a Laundry Shop Owner</label>
          <button type='submit' name='Sign up' className='btn' id='signin'>Sign up</button>
          <div style={{
            position: "relative",
            display: "block",
            width: "100vw"
          }}>
            <label id='is_acc'>Already have an account?</label>
            <Link to='/login' id='lg' style={{
              textDecoration: "none",
              position: "relative",
              left: "58px",
              top: "-1px"
            }}>Login</Link>
          </div>
        </form >
      </div>
    </>
  )
}
