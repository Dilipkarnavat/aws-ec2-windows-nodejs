import React, { useEffect, useState } from 'react'
import { googleLogout, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { BiArrowBack } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
export default function My_profile() {
    // const [tokeninfo, settokeninfo] = useState()
    // console.log(tokeninfo);
    const [myprofile, setmyprofile] = useState({})

    
     useEffect(() => {
        axios.get('http://localhost:9000/getdata')
          .then((data) => setmyprofile(data.data[data.data.length - 1]))
        },[])
        console.log(myprofile.tel);
    return (
        // <GoogleOAuthProvider clientId='1005239920662-08pb4fagotksm96m876klkr4dv79lde4.apps.googleusercontent.com'>
            <div>
                <div className='headar'>
                    <label className='frt_lable'><BiArrowBack className='icon' />My Profile</label>
                </div>
                <div>
                    <div className='profile_info'>
                    <span id='name'>{myprofile.uname}</span>
                    <span>{myprofile.tel}</span>
                    <span>{myprofile.email}</span>
                    <span>{myprofile.address}</span>
                    </div>
                <CgProfile style={{
                    top: '-91px',
                    position: 'relative',
                    left: '139%',
                    height: '26px',
                    width: 'auto',
                }}/>
                </div>
            </div>
            // <GoogleLogin
            //     onSuccess={res => {
            //         console.log(res);
            //         axios.post('http://localhost:9000/jwtToken', {
            //             jwtToken: res.credential
            //         }).then((res) => settokeninfo(res.data.picture))
            //     }}
            //     theme="filled_blue"
            //     shape="circle"
            //     onError={() => {
            //         console.log('Login Failed');
            //     }}
        // </GoogleOAuthProvider >
    )
}