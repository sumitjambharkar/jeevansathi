import React, { useState } from "react";
import styled from "styled-components";
import Head from "./Head";
import {sta,cit,inc,edu} from './data'
import useAuth from "../useContext/useAuth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import SimpleFooter from "./SimpleFooter";
import Alert from '@mui/material/Alert';

const CareerDeatils = () => {
    const navigate  = useNavigate()
    const {user} = useAuth()
    const [county,setCounty] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [qaulification,setQaulification] = useState("")
    const [employed,setEmployed] = useState("")
    const [work, setWork] = useState("")
    const [income,setIncome] = useState("")
    const [collage,setCollage]= useState("")
    const [message,setMessage] = useState("")

    const careerDetails = () => {
      if (!county||!city||!state||!qaulification||!employed ||!work||!income||!collage) {
        setMessage(<Alert severity="error">Please fill in all required fields</Alert>)
      } else {
        db.collection("users").doc(user.uid).update({
          county,city,state,qaulification,employed,work,income,collage

      })
      navigate({pathname:"/life-style-deatils"})
      }
    }
  return (
    <Section>
        <Head/>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
          <h5>Great! You are about to complete your marriageorbit profile</h5>
          {message}
            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Country</label>
                </div>
                <div className="col-md-9">
                  <select value={county} onChange={(e)=>setCounty(e.target.value)} className="select">
                    <option>Select</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Israil</option>
                    <option>America</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>State</label>
                </div>
                <div className="col-md-9">
                  <select  value={state} onChange={(e)=>setState(e.target.value)} className="select">
                   {sta.map((doc)=>(
                     <>
                
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
                  <label>City</label>
                </div>
                <div className="col-md-9">
                  <select  value={city} onChange={(e)=>setCity(e.target.value)} className="select">
                  {cit.map((doc)=>(
                     <>
                     
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
                  <label>School Name</label>
                </div>
                <div className="col-md-9">
                  <input placeholder="School Name" value={collage} onChange={(e)=>setCollage(e.target.value)}/>
                  
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Heighest Degree</label>
                </div>
                <div className="col-md-9">
                  <select  value={qaulification} onChange={(e)=>setQaulification(e.target.value)} className="select">
                  {edu.map((doc)=>(
                     <>
                     
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
                  <label>Employed In</label>
                </div>
                <div className="col-md-9">
                  <select  value={employed} onChange={(e)=>setEmployed(e.target.value)} className="select">
                  <option>Select</option>
                    <option>Private Sector</option>
                    <option>Govt/Public Sector</option>
                    <option>Defense</option>
                    <option>Business/Self Employee</option>
                    <option>Not Working</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Occupation</label>
                </div>
                <div className="col-md-9">
                  <select  value={work} onChange={(e)=>setWork(e.target.value)} className="select">
                  <option>Select</option>
                    <option>Looking For Job</option>
                    <option>Not Working</option>
                    <option>Retired</option>
                    <option>Student</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Anual Income</label>
                </div>
                <div className="col-md-9">
                  <select  value={income} onChange={(e)=>setIncome(e.target.value)} className="select">
                  {inc.map((doc)=>(
                     <>
                     
                     <option>{doc}</option>
                     </>
                   ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-12">
            <div className="btn">
            <button onClick={careerDetails}>Continue</button>
            </div>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
      <SimpleFooter/>
    </Section>
  );
};

export default CareerDeatils;

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

select{
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
