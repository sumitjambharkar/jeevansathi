import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import { db } from "../../firebase";
import Head from "./Head";

const Tellus = () => {
  const [patner, setPatner] = useState({
    fName: "",
    pName: "",
    email: "",
    pEmail: "",
    firstMeet: "",
    wedDate: "",
    tell: "",
    file: "",
  });
  const submitData = (e) => {
    const { fName, pName, email, pEmail, firstMeet, wedDate, tell, file } =
      patner;
    e.preventDefault();
    console.log(patner);
    db.collection("patners").add({
      fName,
      pName,
      email,
      pEmail,
      firstMeet,
      wedDate,
      tell,
      file,
    });
    toast.success("Submit");
    setPatner("");
  };
  let name, value;
  const handalChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    value = e.target.file;
    setPatner({ ...patner, [name]: value });
  };

  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow,index" />
        <meta name="description" content="Pagekeyword" />
        <meta name="keywords" content="Pagekeywords" />
        <meta name="author" content="Marriageorbit" />
        <meta property="og:url" content="PageURL.html" />
        <meta property="og:type" content="products" />
        <meta property="og:title" content="Title-Name" />
        <meta property="og:image" content="Pageimagelink.jpg" />
        <meta property="og:site_name" content="Who We are " />

        <link rel="canonical" href="" />

        <title></title>

        <link
          rel="icon"
          href="imagelink.png"
          sizes="16x16"
          type="image/png"
        ></link>
      </Helmet>
      <Head/>
      <Details className="container">
        <Link to="/">Featured Success Stories</Link>
        <Link to="/video">Videos Stories</Link>
        <Link to="/tellus">Tell Us Your Story</Link>
      </Details>
      <Welcome className="container">
        <h1>Thank you for sharing your Story with us!</h1>
        <TellUsCard>
          <p>We Provide The Best Matchmaking Service In All Over India.</p>
          <hr />
          <Company>
            <img
              style={{ width: "100px", marginRight: "24px" }}
              src="https://smartpropdeals.com/wp-content/uploads/2020/12/Harish-Rupani-210x210.jpg"
              alt=""
            />
            <pre>
              <p>Best Wishes</p>
              <span>Founder Marriageorbit.com</span>
              <h5>Harish Rupani</h5>
            </pre>
          </Company>
          <p>Give us Detail of you and your partner</p>
          <Input>
            <input
              name="fName"
              onChange={handalChange}
              value={patner.fName}
              placeholder="Your Name"
              type="text"
            />
            <input
              name="pName"
              onChange={handalChange}
              value={patner.pName}
              placeholder="Your Partner Name"
              type="text"
            />
          </Input>
          <Input>
            <input
              name="email"
              onChange={handalChange}
              value={patner.email}
              placeholder="Your Email Id"
              type="email"
            />
            <input
              name="pEmail"
              onChange={handalChange}
              value={patner.pEmail}
              placeholder="Your Partner Email Id"
              type="email"
            />
          </Input>
          <Input>
            <input
              name="firstMeet"
              onChange={handalChange}
              value={patner.firstMeet}
              placeholder="When did you first meet ?"
              type="text"
            />
            <input
              name="wedDate"
              onChange={handalChange}
              value={patner.wedDate}
              placeholder="Your Wedding Date"
              type="text"
            />
          </Input>
          <Input>
            <input
              name="tell"
              onChange={handalChange}
              value={patner.tell}
              placeholder="Tell us how you meet each other on TruShaddhi.com"
              type="text"
            />
          </Input>
          <Input>
            <label>Your Couple or Weddding Photos</label>
            <input
              name="file"
              type="file"
              value={patner.file}
              onChange={handalChange}
            />
          </Input>
          <Checkbox>
            <input type="checkbox" /> I agree to Teams & Conditions.
          </Checkbox>
          <h3>
            <button onClick={submitData} type="submit">
              Submit
            </button>
          </h3>
        </TellUsCard>
      </Welcome>
      <Footer />
    </>
  );
};

export default Tellus;

const Details = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: start;
  margin-top: 24px;
  a {
    color: black;
    text-decoration: none;
    padding: 16px;
    display: flex;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  a:active {
    color: red;
  }
`;
const Welcome = styled.div`
  padding: 24px;
  > h1 {
    text-align: center;
    color: #72727d;
    margin-bottom: 12px;
  }
  > p {
    text-align: center;
    color: #72727d;
  }
`;
const TellUsCard = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 12px;
  > p {
    text-align: center;
  }
  > h3 {
    text-align: center;
  }
  > h3 > button {
    background-color: #ffa500;
    color: white;
    padding: 4px;
    width: 150px;
    border: 1px solid #ffa500;
    border-radius: 8px;
    margin: 12px;
  }
`;
const Company = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px;
  align-items: center;
  > pre h5 {
    font-weight: 600;
  }
`;
const Input = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px;
  align-items: center;
  flex-wrap: wrap;
  > input {
    width: 300px;
    margin: 6px;
    padding: 2.5px;
    border-radius: 4px;
    border: 1px solid #ffa500;
  }
  input:focus {
    outline: none;
  }
  @media (min-width: 430px) {
    > input {
      width: 220px;
      margin: 6px;
      padding: 2.5px;
      border-radius: 4px;
      border: 1px solid #ffa500;
    }
  }
`;
const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > input {
    margin: 6px;
  }
`;
