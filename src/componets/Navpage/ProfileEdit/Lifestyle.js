import React from "react";
import styled from "styled-components";
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import { useState } from "react";
import useAuth from "../../useContext/useAuth";
import { db } from "../../../firebase";

const Lifestyle = ({habit,asset,language,blood}) => {

  const {user} = useAuth()
  
  console.log(user);
  const [show, setShow] = useState(true);
  const [editData, setEditData] = useState({
    habit:"",asset:"",language:"",blood:""
  })

  const handleEdit = () => {
    setEditData({habit,asset,language,blood});
    setShow(false);
  };

  const handleSave = () => {
    db.collection("users").doc(user.uid).update({
      habit:editData.habit,
      asset:editData.asset,
      language:editData.language,
      blood:editData.blood
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
              <NightlifeOutlinedIcon />
              Lifestyle
            </div>
            <div className="title">
            {show? <span onClick={()=>handleEdit({habit,language,asset,blood})}>Edit</span>:null}
            </div>
          </div>
          {show?
          <>
           <div className="row">
            <div className="col-5">
              <ul>
                <li>Habits</li>
                <li>
                  <span>{habit}</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Assets</li>
                <li>
                  <span>{asset}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
          <div className="col-5">
            <ul>
              <li>Languages Know</li>
              <li>
                <span>{language}</span>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <ul>
              <li>Blood Group</li>
              <li>
                <span>{blood}</span>
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
                <li>Habits</li>
                <li>
                  <input name="habit" value={editData.habit} onChange={handalChange}/>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Assets</li>
                <li>
                  <input name="asset" value={editData.asset} onChange={handalChange}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Languages Known</li>
                <li>
                  <input name="blood" value={editData.blood} onChange={handalChange}/>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Blood Group</li>
                <li>
                  <input name="language" value={editData.language} onChange={handalChange}/>
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

export default Lifestyle;

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
    background-color:#df2349;
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
