import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../firebase";
import useAuth from "../useContext/useAuth";
import {cit } from "./data";
import Head from "./Head";
import SimpleFooter from "./SimpleFooter";
import Alert from '@mui/material/Alert';

const LifeStyle = () => {
    const navigate = useNavigate()
    const {user}  = useAuth()
    const [family,setFamily] = useState("")
    const [fatherWork,setFatherWork] = useState("")
    const [motherWork, setMotherWork] = useState("")
    const [brother, setBrother] = useState("")
    const [sister,setSister] = useState("")
    const [familyLive,setFamilyLive] = useState("")
    const [address, setAddress] = useState("")
    const [aboutFamily,setAboutFamily] = useState("")
    const [message,setMessage] = useState("")

    const lifeData = () => {
      if (!family||!fatherWork||!motherWork||!brother||!sister||!familyLive||!address||!aboutFamily) {
        setMessage(<Alert severity="error">Please fill in all required fields</Alert>)
      } else {
        db.collection("users").doc(user.uid).update({
          family,fatherWork,motherWork,brother,sister,familyLive,address,aboutFamily
      })
      navigate({pathname:"/"})
      }
    }
    
  return (
    <Section>
        <Head/>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-7">
          <h5>We would love to know about your family</h5>
          {message}
            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Family Type</label>
                </div>
                <div className="col-md-9">
                  <select value={family} onChange={(e)=>setFamily(e.target.value)} className="select">
                    <option>Select</option>
                    <option>Joint Family</option>
                    <option>Nuclear Family</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Father's Occupation</label>
                </div>
                <div className="col-md-9">
                  <select value={fatherWork} onChange={(e)=>setFatherWork(e.target.value)} className="select">
                  <option>Select</option>
                    <option>Business/Enterprenur</option>
                    <option>Service/Private</option>
                    <option>Service/Govt/PSU</option>
                    <option>Army/Armed Forces</option>
                    <option>Civil Services</option>
                    <option>Retired</option>
                    <option>Not Employed</option>
                    <option>Expired</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Mother Occupation</label>
                </div>
                <div className="col-md-9">
                  <select value={motherWork} onChange={(e)=>setMotherWork(e.target.value)} className="select">
                  <option>Select</option>
                  <option>Housewife</option>
                    <option>Business/Enterprenur</option>
                    <option>Service-private</option>
                    <option>Service Govt/PSU</option>
                    <option>Army/Armed Forces</option>
                    <option>Civil Services</option>
                    <option>Retired</option>
                    <option>Not Employed</option>
                    <option>Expired</option>
                    <option>Teacher</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Brother</label>
                </div>
                <div className="col-md-9">
                  <select value={brother} onChange={(e)=>setBrother(e.target.value)} className="select">
                  <option>Select</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Sister</label>
                </div>
                <div className="col-md-9">
                  <select value={sister} onChange={(e)=>setSister(e.target.value)} className="select">
                  <option>Select</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Family living In</label>
                </div>
                <div className="col-md-9">
                  <select value={familyLive} onChange={(e)=>setFamilyLive(e.target.value)} className="select">
                    {cit.map((doc)=>(
                        <>
                        <option>Select</option>
                    <option>{doc}</option>
                        </>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Contact Address</label>
                </div>
                <div className="col-md-9">
                  <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" className="input" />
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>About My Family</label>
                </div>
                <div className="col-md-9">
                  <textarea value={aboutFamily} onChange={(e)=>setAboutFamily(e.target.value)}/>
                </div>
              </div>
            </div>

            <div className="col-12">
            <div className="btn">
            <button onClick={lifeData}>Continue</button>
            </div>
            </div>

          </div>
        </div>
      </div>
      <SimpleFooter/>
    </Section>
  );
};

export default LifeStyle;

const Section = styled.div`
.space input,textarea, .select {
  width:95%;
  height: 140%;
  margin: 0 10px;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  outline: none;
}

.space{
  margin: 20px 0;
}

.space label{
  color: #353e4f;
  font-size: 15px;
  font-family:"sans-serif";
  font-weight: 100;


}

.select{
  font-size: 15px;
  font-family:"sans-serif";
}
.btn {
    display: flex;
    justify-content: center;
    margin-top:70px;
}
button {
    background-color: #FFA500;
    padding: 12px;
    color: white;
    border: none;
    width: 150px;
    font-size: 18px;
    font-weight: 600;
}
h5 {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    margin: 16px;
    text-align: center;
  }

`
