import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../useContext/useAuth";
import Head from "./Head";
import SimpleFooter from "./SimpleFooter";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Alert from '@mui/material/Alert';


const FreeRegister = () => {


    const navigate = useNavigate()
    const  {signUp}   = useAuth()
    const [profile,setProfile] = useState("")
    const [displayName,setDisplayName] = useState("")
    const [gender, setGender] = useState("")
    const [birth, setBirth] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const [message,setMessage] = useState("")

  
  const showText = () => {
    setShowPassword(!showPassword)
  }

   const newSingUp = () => {
      if (!email,!password,!number,!displayName,!gender,!profile,!birth) {
        setMessage(<Alert severity="error">Please fill in all required fields</Alert>)
      }else{
      signUp(email,password,number,displayName,gender,profile,birth)
      navigate({pathname:"/profile-deatils"})
      }
   }
  
    
  return (
    <Section>
      <Head />
      <div className="container">
       
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <h5>Welcome! Let's start your partner search with this Sign up.</h5>
            {message}
            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Profile For</label>
                </div>
                <div className="col-md-9">
                  <select value={profile} onChange={(e)=>setProfile(e.target.value)}  class="select">
                  <option>Select</option>
                      <option>Son</option>
                      <option>Self</option>
                      <option>Brother</option>
                      <option>Sister</option>
                      <option>Daughter</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Full Name</label>
                </div>
                <div className="col-md-9">
                  <input  value={displayName} onChange={(e)=>setDisplayName(e.target.value)} placeholder="Enter Name" type="text"></input>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Gender</label>
                </div>
                <div className="col-md-9">
                  <select value={gender} onChange={(e)=>setGender(e.target.value)} class="select">
                    <option>Select</option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Date of Birth</label>
                </div>
                <div className="col-md-9">
                  <input value={birth} onChange={(e)=>setBirth(e.target.value)} type="date" id="birthday" name="birthday"></input>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Mobile No</label>
                </div>
                <div className="col-md-9">
                  <input
                  value={number} onChange={(e)=>setNumber(e.target.value)}
                    type="tel"
                    name="phone"
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Email Id</label>
                </div>
                <div className="col-md-9">
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Create Email Id" type="email"></input>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Password</label>
                </div>
                <div className="col-md-9">
                  <input
                  type={showPassword ? "text" : "password"}
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Create New Password"
                    name="pwd"
                    maxlength="8"
                  />
                  <p onClick={showText} style={{marginLeft:"90%",marginTop:"-35px"}}> {showPassword ? (
                                  <Visibility style={{color:"black"}} onClick={showText} />
                                ) : (
                                  <VisibilityOff style={{color:"black"}}  onClick={showText} />
                                )}</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="btn">
                <button onClick={newSingUp}>Register Me</button>
              </div>
              <span>
                By clicking on Register me, you confirm that you accept the
                Terms of Use and Privacy Policy
              </span>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
      <SimpleFooter/>
    </Section>

  );
};

export default FreeRegister;

const Section = styled.div`
 .row {
  margin-bottom:22px;
 }
  .space input,
  textarea,
  .select {
    width: 95%;
    height: 140%;
    margin: 0 10px;
    padding: 0 10px;
    border: 1px solid #d9d9d9;
    outline: none;
    font-family: "Roboto", "sans-serif";
  }

  .space {
    margin: 20px 0;
  }

  h5 {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    margin: 16px;
    text-align: center;
  }

  .space label {
    color: #353e4f;
    font-size: 15px;
    font-family: "sans-serif";
    font-weight: 100;
    padding-left: 14px;
  }
  .select,.input{
  font-size: 15px;
  font-family:"sans-serif";
 }
  select {
    font-size: 15px;
    font-family: "sans-serif";
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  span {
    font-size: 14px;
    font-family: "Roboto", "sans-serif";
    font-weight: 400;
  }
  button {
    background-color: #ffa500;
    padding: 12px;
    color: white;
    border: none;
    width: 150px;
    font-size: 18px;
    font-weight: 600;
  }
`;
