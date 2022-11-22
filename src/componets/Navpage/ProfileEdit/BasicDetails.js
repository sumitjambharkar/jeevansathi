import React from "react";
import styled from "styled-components";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import { useState } from "react";
import {hei,rel,mot,inc,cit,cas} from '../../firstPage/data'
import useAuth from "../../useContext/useAuth";
import { db } from "../../../firebase";

const BasicDetails = ({displayName,gender,height,religion,tounge,income,location,caste}) => {
  const {user} = useAuth()
  console.log(rel);
  const [show, setShow] = useState(true);
  const [editData, setEditData] = useState({
    displayName: "",
    gender: "",
    height: "",
    religion: "",
    tounge: "",
    income: "",
    location: "",
    caste: "",
  });
  const handleEdit = () => {
    setEditData({
      displayName,
      gender,
      height,
      religion,
      tounge,
      income,
      location,
      caste,
    });
    setShow(false);
  };
  const handleSave = () => {
    setShow(true);
    console.log(editData);
    db.collection("users").doc(user.uid).update({
      displayName: editData.displayName,
      gender: editData.gender,
      height: editData.height,
      religion: editData.religion,
      tounge: editData.tounge,
      income: editData.income,
      city: editData.location,
      community: editData.caste,
    });
  };

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
              Basic Details
            </div>
            <div className="title">
              {show ? (
                <span
                  onClick={() =>
                    handleEdit({
                      displayName,
                      gender,
                      height,
                      religion,
                      tounge,
                      income,
                      location,
                      caste,
                    })
                  }
                >
                  Edit
                </span>
              ) : null}
            </div>
          </div>
          {show ? (
            <>
              <div className="row">
                <div className="col-5">
                  <ul>
                    <li>Full Name</li>
                    <li>
                      <span>{displayName}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-5">
                  <ul>
                    <li>Gender</li>
                    <li>
                      <span>{gender}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <ul>
                    <li>Height</li>
                    <li>
                      <span>{height}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-5">
                  <ul>
                    <li>Religion</li>
                    <li>
                      <span>{religion}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <ul>
                    <li>Mother Tongue</li>
                    <li>
                      <span>{tounge}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-5">
                  <ul>
                    <li>Annual Income</li>
                    <li>
                      <span>{income}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <ul>
                    <li>Location</li>
                    <li>
                      <span>{location}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-5">
                  <ul>
                    <li>Caste</li>
                    <li>
                      <span>{caste}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-5">
                  <ul>
                    <li>Full Name</li>
                    <li>
                      <input
                        name="displayName"
                        value={editData.displayName}
                        onChange={handalChange}
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-5">
                  <ul>
                    <li>Gender</li>
                    <li>
                      <select
                        name="gender"
                        value={editData.gender}
                        onChange={handalChange}
                      >
                        <option>select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <ul>
                    <li>Height</li>
                    <li>
                      <select
                        name="height"
                        value={editData.height}
                        onChange={handalChange}
                      >
                        {hei.map((doc) => (
                          <option>{doc}</option>
                        ))}
                      </select>
                    </li>
                  </ul>
                </div>
                <div className="col-5">
                  <ul>
                    <li>Religion</li>
                    <li>
                      <select
                        name="religion"
                        value={editData.religion}
                        onChange={handalChange}
                      >
                        {rel.map((doc) => (
                          <option>{doc}</option>
                        ))}
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <ul>
                    <li>Mother Tongue</li>
                    <li>
                      <select
                        name="tounge"
                        value={editData.tounge}
                        onChange={handalChange}
                      >
                        {mot.map((doc) => (
                          <option>{doc}</option>
                        ))}
                      </select>
                    </li>
                  </ul>
                </div>
                <div className="col-5">
                  <ul>
                    <li>Annual Income</li>
                    <li>
                      <select
                        name="income"
                        value={editData.income}
                        onChange={handalChange}
                      >
                        {inc.map((doc) => (
                          <option>{doc}</option>
                        ))}
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <ul>
                    <li>Location</li>
                    <li>
                      <select
                        name="location"
                        value={editData.location}
                        onChange={handalChange}
                      >
                        {cit.map((doc) => (
                          <option>{doc}</option>
                        ))}
                      </select>
                    </li>
                  </ul>
                </div>
                <div className="col-5">
                  <ul>
                    <li>Caste</li>
                    <li>
                      <select
                        name="caste"
                        value={editData.caste}
                        onChange={handalChange}
                      >
                        {cas.map((doc) => (
                          <option>{doc}</option>
                        ))}
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
          )}
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
  .title span {
    color: #d9475c;
    font-size: 16px;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    cursor: pointer;
  }
  .detail {
    display: flex;
    justify-content: space-around;
  }
  li input {
    width: 100%;
    padding: 12px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
  }
  li input,
  select:focus {
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
