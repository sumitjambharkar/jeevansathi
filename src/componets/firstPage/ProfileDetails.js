import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Head from "./Head";
import {tou,rel,cas,hei} from './data'
import { useNavigate } from "react-router-dom";
import useAuth from "../useContext/useAuth";
import { db } from "../../firebase";
import SimpleFooter from "./SimpleFooter";
import Alert from '@mui/material/Alert';

const ProfileDetails = () => {
    const {user}  = useAuth()
    console.log(user.uid);
    const navigate = useNavigate()
    const [tounge, setTounge] = useState("")
    const [religion, setReligion] = useState("")
    const [community, setCommunity] = useState("")
    const [manglik,setManglik] = useState("")
    const [horoscope,setHoroscope] = useState("")
    const [maritalStatus,setMaritalStatus] = useState("")
    const [height,setHeight] = useState("")
    const [about,setAbout] = useState("")
    const [message,setMessage] = useState("")

    const profileDetails = () => {
      if (!tounge||!religion||!community||!manglik||!horoscope||!maritalStatus||!height||!about) {
        setMessage(<Alert severity="error">Please fill in all required fields</Alert>)
      } else {
      db.collection("users").doc(user.uid).update({
          tounge,religion,community,manglik,horoscope,maritalStatus,height,about
      })
      navigate({pathname:"/careear-deatils"})
      }

    }

  return (
    <>
    <Section>
        <Head/>
      <div className="container">
       <form onSubmit={profileDetails}>
       <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
          <h5>Great! You are about to complete your marriageorbit profile</h5>
          {message}
            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Mother Tongue</label>
                </div>
                <div className="col-md-9">
                  <select required value={tounge} onChange={(e)=>setTounge(e.target.value)}>
                  <option value=""  disabled>Select </option>
                    {tou.map((doc)=>(
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
                  <label>Religion</label>
                </div>
                <div className="col-md-9">
                <select required value={religion} onChange={(e)=>setReligion(e.target.value)}>
                <option value=""  disabled>Select</option>
                {rel.map((doc)=>(
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
                  <label>Caste</label>
                </div>
                <div className="col-md-9">
                <select required value={community} onChange={(e)=>setCommunity(e.target.value)}>
                <option value=""  disabled>Select</option>
                {cas.map((doc)=>(
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
                  <label>Manglik</label>
                </div>
                <div className="col-md-9">
                <select required value={manglik} onChange={(e)=>setManglik(e.target.value)}>
                <option value="" disabled>Select</option>
                <option>Manglik</option>
                <option>Non-Manglik</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>horoscope</label>
                </div>
                <div className="col-md-9">
                <select required value={horoscope} onChange={(e)=>setHoroscope(e.target.value)}>
                <option value="" disabled>Select</option>
              <option>Yes</option>
              <option>No</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Marital Status</label>
                </div>
                <div className="col-md-9">
                <select required value={maritalStatus} onChange={(e)=>setMaritalStatus(e.target.value)}>
                <option value="" disabled>Select</option>
              <option>Married</option>
              <option>Never Married</option>
              <option>Divorce</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space">
              <div className="row">
                <div className="col-md-3">
                  <label>Height</label>
                </div>
                <div className="col-md-9">
                <select required value={height} onChange={(e)=>setHeight(e.target.value)}>
                <option value=""  disabled>Select</option>
                {hei.map((doc)=>(
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
                  <label>Yourself</label>
                </div>
                <div className="col-md-9">
                  <textarea required autoComplete="off" value={about} onChange={(e)=>setAbout(e.target.value)} placeholder="Tell me about you self" rows="4"/>
                </div>
              </div>
            </div>
            
            <div className="col-12">
            <div className="btn">
            <button type="submit" value="Submit">Continue</button>
            </div>
            </div>
           
          </div>
          <div className="col-md-3"></div>
        </div>
       </form>
      </div>
    </Section>
    <SimpleFooter/>
    </>
  );
};

export default ProfileDetails;

const Section = styled.div`
input,textarea,select {
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

label{
  color: #353e4f;
  font-size: 15px;
  font-family:"sans-serif";
  font-weight: 100;


}
.select{
  font-size: 15px;
  font-family:"sans-serif";
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
    background-color:#df2349;
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
