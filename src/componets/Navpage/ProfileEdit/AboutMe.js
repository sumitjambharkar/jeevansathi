import React from "react";
import styled from "styled-components";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import { useState } from "react";
import useAuth from "../../useContext/useAuth";
import { db } from "../../../firebase";

const AboutMe = ({ number, family, qaulification, manglik, work,about,aboutFamily }) => {
  console.log(number);
  const {user} = useAuth()
  
  const [show, setShow] = useState(true);
  const [editData, setEditData] = useState({
    about:"",family:"",aboutFamily:"",qaulification:"",work:"",number:"",manglik:""
  })

  const handleEdit = () => {
    setEditData({number, family,qaulification, manglik,work,about,aboutFamily
    });
    setShow(false);
  };

  const handleSave = () => {
    db.collection("users").doc(user.uid).update({
      number:editData.number,family:editData.family,manglik:editData.manglik,work:editData.work,
      about:editData.about,aboutFamily:editData.aboutFamily,qaulification:editData.qaulification
    });
    setShow(true);
  }

  const handalChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="bg_color col-10">
          <div className="edit_click ">
            <div className="title">
              <PersonOutlineSharpIcon />
              About me
            </div>
            <div className="title">
              {show? <span  onClick={()=>handleEdit({number, family, qaulification, manglik, work})}
                  >Edit</span> : null}
            </div>
          </div>
          {show? 
          <>
          <div className="row">
            <div className="col-10">
              <ul>
                <span className="about">Describe yourself in 5 words</span>
                <br></br>
                <span className="about_text">
                  {about}
                </span>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Live With Family</li>
                <li>
                  <span>{family}</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>About My Family</li>
                <li>
                  <span>{aboutFamily} 😀</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Education</li>
                <li>
                  <span>{qaulification}</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Occupation</li>
                <li>
                  <span>{work}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Mobile No.</li>
                <li>
                  <span>{number}</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Manglik</li>
                <li>
                  <span>{manglik}</span>
                </li>
              </ul>
            </div>
          </div>
          </>
          :
          <>
          <div className="row">
            <div className="col-10">
              <ul>
                <span className="about">Describe yourself in 5 words</span>
                <br></br>
                <textarea name="about" value={editData.about} onChange={handalChange} style={{width:"100%"}} rows="3"/>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Live With Family</li>
                <li>
                  <select name="family" value={editData.family} onChange={handalChange}>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>About My Family</li>
                <li>
                  <input name="aboutFamily" value={editData.aboutFamily} onChange={handalChange}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Education</li>
                <li>
                <input name="qaulification" value={editData.qaulification} onChange={handalChange}/>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Occupation</li>
                <li>
                  <input name="work" value={editData.work} onChange={handalChange}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Mobile No.</li>
                <li>
                  <input name="number" value={editData.number} onChange={handalChange} type="number"/>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Manglik</li>
                <li>
                <select name="manglik" value={editData.manglik} onChange={handalChange}>
                    <option>Manglik</option>
                    <option>Non-Manglik</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="btn">
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleSave}>Cancel</button>
                </div>
          </div>
          </>
          }
        </div>
        <div className="col-1"></div>
      </div>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  .bg_color {
    background-color: white;
    padding: 8px;
    margin: 1px;
  }
  .edit_click {
    display: flex;
    justify-content: space-between;
    padding: 18px;
  }
  ul {
    padding: 0 24px;
    margin-top: 18px;
  }
  li {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    color: #999;
    word-wrap: break-word;
  }
  li span {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
  }
  .title {
    color: #d9475c;
    font-size: 16px;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
  }
  .detail {
    display: flex;
    justify-content: space-around;
  }
  .about {
    width: 120px;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    color: #999;
    word-wrap: break-word;
  }
  .about_text {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
  }
  .title span {
    color: #d9475c;
    font-size: 16px;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    cursor: pointer;
  }
  li input {
    width: 100%;
    padding: 12px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
  }
  textarea {
    padding: 6px;
  }
  li input,
  select,textarea:focus {
    outline: none;
  }
  li select {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 4%;
  }
  .btn button {
    background-color: #ffa500;
    width: 120px;
    height: 100%;
    padding: 4px;
    margin: 4px;
    font-size: larger;
    color: white;
    border: none;
  }
  @media (max-width: 600px) {
    li {
      width: 120px;
    }
  }
`;
