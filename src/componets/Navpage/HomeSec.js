import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Avatar, Container } from "@mui/material";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import girl from "../image/girl.jpeg";
import man from "../image/man.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import useAuth from "../useContext/useAuth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { cit, sta, age, hei, rel, tou, cas } from '../firstPage/data'
import Footer from "../firstPage/Footer";
import bg from '../image/header-sm-bg.png';

const HomeSec = () => {

    const navigate = useNavigate()
    const { user } = useAuth()
    function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [showFiltter, setShowFiltter] = useState(false);
    const [selectAge, setSelectAge] = useState("");
    const [selectReligion, setSelectReligion] = useState("");
    const [selectTounge, setSelectTounge] = useState("");
    const [selectHeight, setSelectHeight] = useState("");
    const [userData, setUserData] = useState("");

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

    const sendMessage = (doc) => {
        db.collection("users").doc(user.uid).collection("recently_viewed").doc(doc.uid).set({ uid: doc.uid })
        console.log(doc);
        navigate({ pathname: `/view-profile/${doc.uid}` })

    }

    return (
        <Section>
            <div class="column_center">
                <div class="container">
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
                                        {tou.map((doc) => (
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
                    <div class="search">
                        <Input>
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="search"
                            />
                            <SearchIcon />
                        </Input>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
            <div class="main">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12 sidebar_box mt-5">
                            <h3 class="menu_head">Filter By Categories</h3>
                            <select >
                                <option>Select State</option>
                                {sta.map((doc) => (
                                    <option>{doc}</option>
                                ))}
                            </select>
                            <select name="location"
                                onChange={(e) => setLocation(e.target.value)}>
                                <option>Select Location</option>
                                {cit.map((doc) => (
                                    <option>{doc}</option>
                                ))}
                            </select>
                            <select name="age"
                                onChange={(e) => setSelectAge(e.target.value)}>
                                <option>Select Age</option>
                                {age.map((doc) => (
                                    <option>{doc}</option>
                                ))}
                            </select>
                            <select name="rel"
                                onChange={(e) => setSelectReligion(e.target.value)}>
                                <option>Select Religion</option>
                                {rel.map((doc) => (
                                    <option>{doc}</option>
                                ))}
                            </select>
                            <select onChange={(e) => setSelectTounge(e.target.value)}>
                                <option>Select MotherTounge</option>
                                {tou.map((doc) => (
                                    <option>{doc}</option>
                                ))}
                            </select>
                            <select>
                                <option>Select Caste</option>
                                {cas.map((doc) => (
                                    <option>{doc}</option>
                                ))}
                            </select>
                            <select onChange={(e) => setSelectHeight(e.target.value)}>
                                <option>Select Height</option>
                                {hei.map((doc) => (
                                    <option>{doc}</option>
                                ))}
                            </select>
                        </div>
                        <div class="col-lg-9 col-md-12 col-sm-12">
                            <div class="row">
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
                                            {userData?.gender !== doc.gender ? (
                                                <>
                                                    {doc.displayName === user.displayName ? null : (
                                                        <div class="col-lg-3 col-md-6 col-sm-6 top_grid1-box1 mt-5">
                                                            <div class="grid_1">
                                                                {doc.gender === "Male" ? (
                                                                    <>
                                                                        {doc.image ? (
                                                                            <img class="img-responsive" alt=""
                                                                                style={{ height: 250, width: "100%" }}
                                                                                src={doc.image}
                                                                            />
                                                                        ) : (
                                                                            <img class="img-responsive" alt=""
                                                                                style={{ height: 250, width: "100%" }}
                                                                                src={man}
                                                                            />
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        {doc.image ? (
                                                                            <img class="img-responsive" alt=""
                                                                                style={{ height: 250, width: "100%" }}
                                                                                src={doc.image}
                                                                            />
                                                                        ) : (
                                                                            <img class="img-responsive" alt=""
                                                                                style={{ height: 250, width: "100%" }}
                                                                                src={girl}
                                                                            />
                                                                        )}
                                                                    </>
                                                                )}
                                                                <div class="grid_2">
                                                                    <p>{doc.uid?.substr(1, 8).toUpperCase()}</p>
                                                                    <p>{doc?.gender}</p>
                                                                    <p>{calculate_age(new Date(doc.birth))}</p>
                                                                    <div onClick={() => sendMessage(doc)} class="button " target="_self" title="Get It">Send Message</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : null}
                                        </>
                                    ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Section>
    )
}

export default HomeSec;

const Section = styled.div`
.column_center {
    background: #dee9f1;
   
    background: linear-gradient(45deg, #dee9f1 0%,#f1ede9 0%,#f9eae4 100%);
   
    padding: 10px 0;
}

.stay {
    float: left;
    font: 800 13px/13px 'Lato', sans-serif;
    margin: 8px 10px 0 0;
    text-transform: uppercase;
    color: #df1f26;
}

.search {
 width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top:16px;
}


.main {
    background: #eee;
    padding: 1em 0 5em;
}

.sidebar_box {
    padding-right: 0;
    border-right: 1px solid #B8B8B8;
}
h3.menu_head {
    background:#df2349;
    padding: 1em 0 1em 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.85em;
    margin: 0;
    background-repeat: 100% 100%;
    background-image: url(${bg});
    font-weight: 600;

}
.img-responsive{
    width: 100%;
    margin-bottom: 10px;
}
.grid_1 {
    width: 100%;
    background: #fff;
    border: 5px solid #fff;
}
.grid_1:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 23px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
.grid_2 p {
    font: 600 15px/15px 'Lato', sans-serif;
    color: #797979;
    line-height: 0.5em;
    padding-bottom: 10px;
    margin-bottom: 5px;
}
.button{
    padding: 10px 10px;
    background:#df2349;
    text-align: center;
    color: #fff;
    cursor:pointer;
    background-repeat: 100% 100%;
    background-image: url(${bg});
    font-family: 'Roboto Slab';
}
select {
   WIDTH: 100%;
    PADDING: 10PX;
    MARGIN: 10PX 0;
    border-width: thin;    
}
select:hover{
    background-color: #B8B8B8;
}
@media (max-width: 768px) {
    .sidebar_box {
        display:none;
    }
  }

`
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
    background-color: #df2349;
    color: white;
    border-radius: 24px;
    border: 1px solid #df2349;
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
    border: 1px solid #df2349;
  }
  > input {
    font-size: 15px;
    border: 1px solid #ccc;
    padding: 10px;
    height: 45px;
    width: 100%;
    border: none;
    outline: none;
    background: none;
  }
  .MuiSvgIcon-root {
    color: #df2349;
  }
`;
