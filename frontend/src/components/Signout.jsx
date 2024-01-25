import React from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from "../Images/avatar.jpg";
import axios from 'axios'
import useAuth from '../authentication/auth';

const Signout = ({name}) => {
    const {emailState, setEmailState} = useAuth()
    // const navigate = useNavigate()
    const handleSignout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('name')
        setEmailState('')
        const resp = axios.get("http://localhost:5001/logout")
        console.log(resp.data)
    }
    // const navigate = useNavigate()
    return (
        <div className='wrap' style={{ display: "flex", alignItems: "center", justifyContent: "space-between",gap: "2rem"}}>
            <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.3rem" }}>
                <img src={Profile} alt="profile" width={"40px"} style={{}} />
                <p style={{ fontSize: '20px' }}>{name}</p>
            </div>
            <button className="sign-out" style={{}}><a href="/" style={{ textDecoration: "none", color: "#f2f2f2" }} onClick={handleSignout}>Sign Out</a></button>
        </div>
    )
}

export default Signout
