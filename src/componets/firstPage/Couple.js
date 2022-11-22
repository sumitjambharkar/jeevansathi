import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import Head from "./Head";

const CoupleDetails = () => {
    
  const {personId} = useParams()

  const [data, setData] = useState({})

    useEffect(() => {
      db.collection("success").doc(personId).onSnapshot(snapshot=>{
        setData(snapshot.data())
      })
    }, [personId])

  return (
    <>
    <Head/>
      <Details className="container">
        <Link to={`/couple/${personId}`}>Featured Success Stories</Link>
        <Link to="/video">Videos Stories</Link>
        <Link to="/tellus">Tell Us Your Story</Link>
      </Details>
      <Welcome className="container">
        <h1>Welcome to Success Stories</h1>
        <p>This is where we celebrate MarriageOrbit Success Stories.</p>
      </Welcome>
      <Header className="container">
        <div className="row">
        <div className="col-md-6">
          <p></p>
        <h1>{data.name}</h1>
        <p>{data.date}</p>
        <p></p>
        <img
          src={data.image}
          alt=""
        />
        <p></p>
        </div>
        
<div class="col-md-6">
<div class="para">
<p>
         {data.desc}
        </p>
</div>
</div>

        </div>
      </Header>
      <Footer/>
    </>
  );
};

export default CoupleDetails;

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
  }
  > p {
    text-align: center;
    color: #72727d;
  }
`;
const Header = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: auto;
  margin-bottom: 40px;
  > h1 {
    padding: 24px;
    color: darkcyan;
  }
  > p {
    padding: 24px;
    color: gray;
  }
  > img {
    width: 100%;
    align-items:center;
  }
`;
