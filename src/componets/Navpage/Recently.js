import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Avatar, Container } from "@mui/material";
import { Button } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Helmet } from "react-helmet";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import girl from "../image/girl.jpeg";
import man from "../image/man.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import {age,hei,cit,rel,mot} from '../firstPage/data'
import useAuth from "../useContext/useAuth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import Footer from '../firstPage/Footer'

const HomeSection = () => {
    
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  
  const [data, setData] = useState([]);
  const {user} = useAuth()
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  const [location, setLocation] = useState("");
  const [showFiltter, setShowFiltter] = useState(false);
  const [selectAge, setSelectAge] = useState("");
  const [selectReligion, setSelectReligion] = useState("");
  const [selectTounge, setSelectTounge] = useState("");
  const [selectHeight, setSelectHeight] = useState("");
  const [userData, setUserData] = useState("");
  const [userId, setUserId] = useState([]);


  useEffect(() => {
    const unSub = db
      .collection("users")
      .doc(user.uid)
      .collection("recently_viewed")
      .onSnapshot((snapshot) =>
        setUserId(snapshot.docs.map((doc) => doc.data()))
      );
    return () => unSub();
  }, [user.uid]);
  
  useEffect(() => {
    if (user.uid) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((snapshot) => {
          setUserData(snapshot.data());
        });
    }
  }, [user.uid]);

  useEffect(
    () =>
      db
        .collection("users")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          setData(snapshot.docs.map((doc) => doc.data()));
        }),
    []
  );

  const sendMessage = (uid) => {
    db.collection("users").doc(user.uid).collection("recently_viewed").doc(uid).set({uid:uid})
    console.log(uid);
    navigate({pathname:`/view-profile/${uid}`,state: {uid}})

  }

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="robots" content="follow,index" />
        <meta http-equiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity. Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession."
        />

        <meta
          name="keywords"
          content="best Matrimony services in mumbai, best Matrimony services in pune, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in karnataka, Brides, matchmaking services in coimbatore, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in new delhi, Online matchmaking Services,Indian single girls in surat,girls for marriage in jaipur
      lifepartner for wedding in bangalore.get girlfriend for marriage in hyderabad.diffrent casts of girls for marriage in amritsar.
      services of matrimony for mens in ahmedabad, Matrimonial websites to find girls, matrimonials, couples girls and boys matchmaking companies in chandigadh, Brides, matchmaking services in uttar pradesh, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in gujarat, Online matchmaking Services,Indian single boys in kolkata,boys for marriage in bihar
      lifepartner for wedding in chennai.get boyfriend for marriage in kanpur.diffrent casts of boys for marriage in nashik.
      hindu girls and boys for marriage."
        />

        <meta name="author" content="Design and Promoted By Marriageorbit" />
        <meta property="og:url" content="https://marriageorbit.com/matches" />
        <meta
          property="og:type"
          content="Matrimonial Matchmaking Service In India"
        />
        <meta
          property="og:title"
          content="Matches | find your favourite lifepartner for marriage in mumbai"
        />
        <meta
          property="og:image"
          content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png"
        />
        <meta property="og:site_name" content="Marriageorbit.com" />

        <link rel="canonical" href="https://marriageorbit.com/matches" />

        <title>
          Matches | find your favourite lifepartner for marriage in mumbai
        </title>

        <link
          rel="icon"
          href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png"
          sizes="16x16"
          type="image/png"
        />
      </Helmet>
      <Container>
        <SearchBar>
          <Speed>
            <a onClick={() => setShowFiltter(!showFiltter)}>
              <FilterAltIcon />
            </a>
            {showFiltter ? (
              <ul>
                <li data-aos="fade-down" data-aos-duration="500">
                  <select
                    class="dropbtn"
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option>Select Location</option>
                    {cit.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
                <li data-aos="fade-down" data-aos-duration="600">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectAge(e.target.value)}
                  >
                    <option>Select Age</option>
                    {age.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
                <li data-aos="fade-down" data-aos-duration="700">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectReligion(e.target.value)}
                  >
                    <option>Select Religion</option>
                    {rel.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
                <li data-aos="fade-down" data-aos-duration="800">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectTounge(e.target.value)}
                  >
                    <option>Select MotherTounge</option>
                    {mot.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
                <li data-aos="fade-down" data-aos-duration="900">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectHeight(e.target.value)}
                  >
                    <option>Select Height</option>
                    {hei.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </li>
              </ul>
            ) : (
              ""
            )}
          </Speed>
          <Input>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
            />
            <SearchIcon />
          </Input>
        </SearchBar>
      </Container>
      <Section className="container">
        <SectionFiltter>
          <Filtter>
              {/* ==================Start Location===================== */}
              <Filter>
                <br></br>
                <strong>Filter By Categories</strong>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option>Select Location</option>
                    {cit.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>
              {/* ==================End Location===================== */}

              {/* ==================Start Age===================== */}
              <Filter>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    name="age"
                    onChange={(e) => setSelectAge(e.target.value)}
                  >
                    <option>Select Age        </option>
                    {age.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>

              {/* ==================End Age===================== */}

              {/* ==================Start Height===================== */}
              <Filter>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    name="rel"
                    onChange={(e) => setSelectReligion(e.target.value)}
                  >
                    <option>Select Religion</option>
                    {rel.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>

              {/* ==================End Height===================== */}

              {/* ==================Start Religion===================== */}
              <Filter>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectTounge(e.target.value)}
                  >
                    <option>Select MotherTounge</option>
                    {mot.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>

              {/* ==================end Religion===================== */}

              {/* ==================End mothertounge===================== */}
              <Filter>
                <div class="dropdown">
                  <select
                    class="dropbtn"
                    onChange={(e) => setSelectHeight(e.target.value)}
                  >
                    <option>Select Height</option>
                    {hei.map((doc) => (
                      <option class="dropdown-content">{doc}</option>
                    ))}
                  </select>
                </div>
              </Filter>

              {/* ==================End mothertounge===================== */}
          </Filtter>
        </SectionFiltter>
        <SectionCard>
          <Card>
          {userId.map((ele) => (
        <>
          {data
          .filter(
            (doc) =>
              doc.height
                ?.toLowerCase()
                .indexOf(selectHeight.toLowerCase()) !== -1
          )
          .filter(
            (doc) =>
              doc.tounge
                ?.toLowerCase()
                .indexOf(selectTounge.toLowerCase()) !== -1
          )
          .filter(
            (doc) =>
              doc.religion
                ?.toLowerCase()
                .indexOf(selectReligion.toLowerCase()) !== -1
          )
          .filter(
            (doc) =>
              doc.city?.toLowerCase().indexOf(location.toLowerCase()) !== -1
          )
          .filter(
            (doc) =>
              doc.displayName
                .toLowerCase()
                .indexOf(search.toLowerCase()) !== -1
          )
          .map((doc) => (
            
            <>
              {doc.uid === ele.uid ? (
                <>
                  <SingleCard>
                    {doc.gender === "Male" ? (
                      <>
                        {doc.image ? (
                          <img
                            style={{ height: 250, width: "100%" }}
                            src={doc.image}
                          />
                        ) : (
                          <img
                            style={{ height: 250, width: "100%" }}
                            src={man}
                          />
                        )}
                      </>
                    ) : (
                      <>
                        {doc.image ? (
                          <img
                            style={{ height: 250, width: "100%" }}
                            src={doc.image}
                          />
                        ) : (
                          <img
                            style={{ height: 250, width: "100%" }}
                            src={girl}
                          />
                        )}
                      </>
                    )}
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontWeight: 600,
                      }}
                    >
                      {doc.uid?.substr(1, 8).toUpperCase()}
                    </span>
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontFamily: "emoji",
                      }}
                    >
                      {doc?.gender}
                    </span>
                    <span style={{ fontFamily: "cursive" }}>
                      {calculate_age(new Date(doc.birth))}
                    </span>
                    <Button onClick={() => sendMessage(doc.uid)}>
                      {/* <Link to={`/view/${doc.uid}`}>Send Message</Link> */}
                      Send Message
                    </Button>
                  </SingleCard>
                </>
              ) : null}
            </>
          ))}
        </>
      ))}
          </Card>
        </SectionCard>
      </Section>
      <Container>
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 600,
            marginTop: "25px",
          }}
        >
          We Are Available In Several Locations
        </h1>
      </Container>
      <Footer />{" "}
    </>
  );
};

export default HomeSection;

const Section = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const SectionFiltter = styled.div`
  padding: 1%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SectionCard = styled.div`
  width:100%;
  padding: 1%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Filtter = styled.div`
  background-color: #eee;
  min-height: 100vh;
  padding:10px;
`;
const Card = styled.div`
  display: flax;
  flex-wrap: wrap;
  justify-content: center;
`;

const SingleCard = styled.div`
  width:220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #eee;
  margin: 1%;
  border: 2px solid #9994;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  > span {
    margin-left: 4px;
  }

  > button {
    padding: 4px;
    background-color: #ffa500;
    color: white;
    border: 1px solid #ffa500;
    margin: 4px;
  }
  > button :hover {
    color: red;
  }
  > button a {
    color: white;
    text-decoration: none;
  }
`;
const SearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top:16px;
`;
const Filter = styled.div`
  .dropbtn {
    background-color: #ffa500;
    color: white;
    padding: 10px;
    width: 195px;
    font-size: 16px;
    margin-top: 40px;
    border: none;

    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    transition: 0.3s;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    transition: 0.3s;
    min-width: 270px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content {
    color: black;
    padding: 12px 16px;

    text-decoration: none;
    display: block;
  }
  .dropdown-content {
    list-style: none;
    cursor: pointer;
    transition: 0.3s;

    padding: 10px;
  }

  .dropdown-content li:hover {
    background-color: #fab90a;
    color: #fff;
  }

  .dropdown:hover .dropdown-content {
    display: block;
    transition: 0.3s;
  }

  .dropdown:hover .dropbtn {
    background-color: #ff8507;
  }
`;

const Speed = styled.div`
  margin-right: 10px;
  margin-top: 12px;
  display: none;
  a {
    background-color: #ffa500;
    border-radius: 50%;
    padding: 15px;
    
  }
  a :hover {
    cursor: pointer;
  }

  a > .MuiSvgIcon-root {
    color: white;
  }

  ul {
    position: absolute;
    z-index: 1;
    margin-top: 10px;
  }

  ul li {
    list-style: none;
    margin: 6px;
  }

  ul li select {
    width: 190px;
    padding: 4px;
    background-color: #ffa500;
    color: white;
    border-radius: 24px;
    border: 1px solid #ffa500;
    outline: none;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const Input = styled.div`
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  border-radius: 24px;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  > input {
    font-size: 15px;
    border: 1px solid #ccc;
    padding: 10px;
    height: 45px;
    width: 100%;
    border: none;
    outline: none;
  }
  .MuiSvgIcon-root {
    color: orange;
  }
`;
