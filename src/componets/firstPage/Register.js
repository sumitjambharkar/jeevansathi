import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../useContext/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newRegister = () => {
    if (
      email ||
      password ||
      number ||
      displayName ||
      gender ||
      profile ||
      birth
    ) {
      if (
        !email ||
        !password ||
        !number ||
        !displayName ||
        !gender ||
        !profile ||
        !birth
      ) {
        toast.error('Please fill in all required fields!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

      } else {
        signUp(email, password, number, displayName, gender, profile, birth);
        navigate({ pathname: "/profile-deatils" });
      }
    } else {
      navigate({ pathname: "/profile/registration_new" });
    }
  };

  return (
    <Section>
      <div class="container">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <div class="backgrund">
              <div class="space">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-6">
                    <label>Profile For</label>
                    <select
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                      class="select"
                    >
                      <option>Select</option>
                      <option>Son</option>
                      <option>Self</option>
                      <option>Brother</option>
                      <option>Sister</option>
                      <option>Daughter</option>
                    </select>
                  </div>
                  <div class="col-lg-3 col-md-6 col-6 ">
                    <label>Full Name</label>
                    <input
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Enter Name"
                      type="text"
                    ></input>
                  </div>

                  <div class="col-lg-3 col-md-6 col-6">
                    <label>Gender</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      class="select"
                    >
                      <option>Select</option>
                      <option>Female</option>
                      <option>Male</option>
                    </select>
                  </div>

                  <div class="col-lg-3 col-md-6  col-6">
                    <label>Date of Birth</label>
                    <input
                      value={birth}
                      onChange={(e) => setBirth(e.target.value)}
                      type="date"
                      id="birthday"
                      name="birthday"
                    ></input>
                  </div>
                </div>
              </div>

              <div class="space">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-6 ">
                    <label>Mobile No</label>
                    <input
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      type="tel"
                      name="phone"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    ></input>
                  </div>
                  <div class="col-lg-3 col-md-6 col-6">
                    <label>Email Id</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Id"
                      type="email"
                    ></input>
                  </div>

                  <div class="col-lg-3 col-md-6 col-6 ">
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create New Password"
                      type="password"
                      name="pwd"
                      maxlength="12"
                    ></input>
                  </div>

                  <div class="col-lg-3 col-md-6 col-6  ">
                    <label style={{ visibility: "hidden" }}>#ffa500</label>

                    <button onClick={newRegister}>Register Free</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-1"></div>
        </div>
      </div>
    </Section>
  );
};

export default Register;

const Section = styled.div`
  .space input,
  textarea,
  .select,
  button {
    width: 100%;
    height: 45%;
    margin: 0 10px;
    padding: 0 10px;
    border: 1px solid #df2349;
    outline: none;
    border-radius: 4px;
    height: 32px;
    font-family: "Roboto", "sans-serif";
  }

  .space {
    margin: 5px 0;
  }

  .space label {
    color:black;
    font-size: 15px;
    font-family: "sans-serif";
    font-weight: 100;
    padding: 0 13px;
  }

  .select {
    font-size: 15px;
    font-family: "sans-serif";
    border-radius: 4px;
  }

  .backgrund {
    
    padding: 2px 22px 4px 0px;
  }

  button {
    color: #fff;
    background-color:#df2349;
    border: none;
    border-radius: 4px;
  }
`;
