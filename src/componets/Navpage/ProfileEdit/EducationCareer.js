import React from "react";
import styled from "styled-components";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useState } from "react";
import useAuth from "../../useContext/useAuth";
import { db } from "../../../firebase";


const BasicDetails = ({qaulification,work,collage,employed}) => {

  const {user} = useAuth()
  
  console.log(user);
  const [show, setShow] = useState(true);
  const [editData, setEditData] = useState({
    qaulification:"",collage:"",employed:"",work:""
  })

  const handleEdit = () => {
    setEditData({qaulification,work,collage,employed});
    setShow(false);
  };

  const handleSave = () => {
    db.collection("users").doc(user.uid).update({
      qaulification:editData.qaulification,
      collage:editData.collage,
      work:editData.work,
      employed:editData.employed
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
              <SchoolOutlinedIcon />
              Education & Career
            </div>
            <div className="title">
              {show? <span onClick={()=>handleEdit({qaulification,work,collage})}>Edit</span>:null}
            </div>
          </div>
          {show? 
          <>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Highest Education</li>
                <li>
                  <span>{qaulification}</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>School Name</li>
                <li>
                  <span>{collage}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>UG Degree</li>
                <li>
                  <span>No Required</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>PG Degree</li>
                <li>
                  <span>No Required</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Employed In</li>
                <li>
                  <span>{employed}</span>
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
          </>
          :
          <>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Highest Education</li>
                <li>
                  <input name="qaulification" value={editData.qaulification} onChange={handalChange}/>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>School Name</li>
                <li>
                  <input name="collage" value={editData.collage} onChange={handalChange}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>UG Degree</li>
                <li>
                  <input name="ug" value={editData.ug} onChange={handalChange}/>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>PG Degree</li>
                <li>
                  <input name="pg" value={editData.pg} onChange={handalChange}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Employed In</li>
                <li>
                  <input name="employed" value={editData.employed} onChange={handalChange}/>
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

export default BasicDetails;

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
  @media (max-width:600px) {
    li {
      width: 120px;
    }
  }
`;
