import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ForumIcon from "@mui/icons-material/Forum";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Tooltip from "@mui/material/Tooltip";
import HistoryIcon from "@mui/icons-material/History";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import PersonIcon from "@mui/icons-material/Person";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PeopleIcon from "@mui/icons-material/People";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsIcon from "@mui/icons-material/Sports";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsBasketballSharpIcon from "@mui/icons-material/SportsBasketballSharp";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import PreviewSharpIcon from "@mui/icons-material/PreviewSharp";
import DownloadDoneSharpIcon from "@mui/icons-material/DownloadDoneSharp";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase";
import useAuth from "../useContext/useAuth";
import Head from "../Head";
import Navbar from "../Nav/Navbar";
import Footer from "../firstPage/Footer";
import girl from "../image/girl.jpeg";
import man from "../image/man.jpeg";
import bg from '../image/header-sm-bg.png';
const Viewpage = () => {

  const { Id } = useParams()
  const { user } = useAuth()

  const navigate = useNavigate()
  const [data,setData] = useState([])
  const [userData, setUserData] = useState("")
  const [showData, setShowData] = useState("")
  const pic = userData.gender === "Male"
  console.log(pic);
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  let x = showData.birth;
  let date = new Date(x);
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1
    }-${date.getFullYear()}`;

  useEffect(() => {
    db.collection("users").doc(user.uid).onSnapshot(snapshot => (
      setUserData(snapshot.data())
    ))
  }, [user.uid])

  useEffect(() => {
    db.collection("users").doc(Id).onSnapshot(snapshot => (
      setShowData(snapshot.data())
    ))
  }, [])

  useEffect(() => {
    db.collection("users").onSnapshot(snapshot=>(
      setData(snapshot.docs
        .map((doc)=>(doc.data())))
    ))
  }, [])
  
  console.log(data);

  const rax = Math.random()*data.length


  const openChat = (showData) => {
    const uid = showData.uid;
    const displayName = showData.displayName;
    const image = showData.image;
    const id = user.uid > uid ? `${user.uid + uid}` : `${uid + user.uid}`;
    if (user.uid) {
      db.collection("users")
        .doc(user.uid)
        .collection("messages")
        .doc(id)
        .set({
          uid: uid,
          displayName,
          image: image || null,
          createdAt: new Date(),
        });
      if (uid) {
        db.collection("users")
          .doc(uid)
          .collection("messages")
          .doc(id)
          .set({
            uid: user.uid,
            displayName: userData.displayName,
            image: userData.image || null,
            createdAt: new Date(),
          });
      }
      navigate({
        pathname: "/chat",
        state: { uid: showData.uid },
      });
    }
  }
  const sendNotification = async (e) => {
    let text = "Are you sure you want to send Notification ?"
    if (window.confirm(text) == true) {
      e.preventDefault();
      db.collection("users")
        .doc(user.uid)
        .collection("sent")
        .doc(showData.uid)
        .set({ data: showData });
      db.collection("users")
        .doc(showData.uid)
        .collection("req")
        .doc(user.uid)
        .set({ data: userData });
      const respone = await fetch(
        "https://marriageorbit-backend-api.herokuapp.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: showData.email,
            from: userData.email,
            subject: `${userData.displayName} Members visited your Profile`,
            message: `Hi ${showData.displayName} ${user.displayName
              } may be interested in you as they visisted your Profile.Take the first step and connect with them ${`https://marriageorbit.com/view/${user.uid}`}`,
          }),
        }
      );
      const result = await respone.json();
      toast.success("Notification send");
      console.log(result);
      console.log(text = "You pressed OK!")
    } else {
      console.log(text = "You canceled!")
    }
  }
  return (
    <>
      <Head />
      <Navbar />
      <Container>
        <div className="container mt-5">
          <div className="bg">
            <div className="row">
              <div className="col-md-2">
                {showData.image ? <img style={{ width: "100%", height: "200px" }} src={showData.image} alt="" /> : <>{showData.gender === "Male" ? <img src={man} style={{ width: "100%", height: "200px" }} /> : <img src={girl} style={{ width: "100%", height: "200px" }} />}</>}
              </div>

              <div className="col-md-7">
                <div className="head_border">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="name">
                        <span>{showData.uid?.substr(1, 8).toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="lastseen">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="cusinfo">
                      <>
                        <li>{calculate_age(new Date(showData.birth))}, {showData.height}</li>
                        <li>{showData.city}</li>
                        <li>{showData.religion}</li>
                        <li>{showData.tounge}</li>
                      </>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cusinfo">
                      <>
                        <li>{showData.qaulification}</li>
                        <li>{showData.work}</li>
                        <li>{showData.income}</li>
                        <li>{showData.maritalStatus}</li>
                      </>
                    </div>
                  </div>
                  <>
                    <div className="icons">
                      <Tooltip title="communication history">
                        <HistoryIcon />
                      </Tooltip>
                      <Tooltip title="share profile">
                        <SendToMobileIcon size={40} />
                      </Tooltip>
                      <Tooltip title="Block Profile">
                        <NoAccountsIcon />
                      </Tooltip>
                      <Tooltip title="Report Spam">
                        <AssistantPhotoIcon />
                      </Tooltip>
                    </div>
                  </>
                </div>
              </div>

              <div className="col-md-3">
                <div className="contact">
                  <div>
                    <li onClick={sendNotification}>
                      <MarkEmailReadIcon />
                      <span>Interest Sent</span>
                    </li>
                    <li>
                      <ContactMailIcon />
                      <span>View Contacts</span>
                    </li>
                    <li onClick={() => openChat(showData)}>
                      <ForumIcon />
                      <span>Chat</span>
                    </li>
                    <li>
                      <StarBorderIcon />
                      <span>Shortlist</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 mt-3">
              <div className="line">
                <div className="blocks">
                  <div className="row">
                    <div className="col-3">
                      <div className="abt">
                        <Tooltip title="About Her">
                          <PersonIcon />
                        </Tooltip>
                        <p>About Her</p>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="abt">
                        <Tooltip title="Education">
                          <AutoStoriesIcon />
                        </Tooltip>
                        <p>Education & Career</p>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="abt">
                        <Tooltip title="Family">
                          <PeopleIcon />
                        </Tooltip>
                        <p>Family Details</p>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="abt">
                        <Tooltip title="About Her">
                          <RemoveRedEyeIcon />
                        </Tooltip>
                        <p>Desired Partner</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="personal">
                  <ul>
                    <li>
                      Her profile is managed by Sibling<br></br>
                      <br />
                      {showData.about}
                    </li>
                  </ul>
                  <p></p>
                  <ul>
                    <li><span>About her Family</span></li>
                    <li>{showData.aboutFamily}</li>
                  </ul>
                  <p></p>
                  <ul>
                    <li><span>Education</span></li>
                    <li>{showData.qaulification}</li>
                  </ul>
                  <p></p>
                  <ul>
                    <li><span>Occupation</span></li>
                    <li>{showData.work}</li>
                  </ul>
                </div>

                <div className="personal">
                  <div className="row">
                    <div className="col-12">
                      <p>
                        <Tooltip title="Education & Career">
                          <MenuBookIcon />
                        </Tooltip>
                        Education & Career
                      </p>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li><span>Highest Education</span></li>
                        <li>{showData.qaulification}</li>
                      </ul>
                      <br />
                      <ul>
                        <li><span>Annual Income</span></li>
                        <li>{showData.income}</li>
                      </ul>
                    </div>

                    <div className="col-md-6">

                      <ul>
                        <li><span>School Name</span></li>
                        <li>{showData.collage}</li>
                      </ul>
                      <br />

                      <ul>
                        <li><span>Occupation</span></li>
                        <li>{showData.qaulification}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="personal">
                  <div className="row">
                    <div className="col-12">

                      <p>
                        <Tooltip title="Family Details">
                          <FamilyRestroomIcon />
                        </Tooltip>
                        Family Details
                      </p>
                    </div>
                    <div className="col-md-6">


                      <ul>
                        <li><span>Mother's Occupation</span></li>
                        <li>{showData.motherWork}</li>
                      </ul>
                      <br />
                      <ul>
                        <li><span>Sister(s)</span></li>
                        <li>{showData.sister}sister</li>
                      </ul>

                      <br />
                      <ul>
                        <li><span>Family Status</span></li>
                        <li>{showData.family}</li>
                      </ul>
                    </div>

                    <div className="col-md-6">

                      <ul>
                        <li><span>Father's Occupation</span></li>
                        <li>{showData.fatherWork}</li>
                      </ul>
                      <br />
                      <ul>
                        <li><span>Brother(s)</span></li>
                        <li>{showData.brother} brother</li>
                      </ul>

                      <br />
                      <ul>
                        <li><span>Family Income</span></li>
                        <li>No Required</li>
                      </ul>
                    </div>

                  </div>
                </div>

                <div className="personal">
                  <div className="row">
                    <div className="col-12">
                      <p>
                        <Tooltip title="Lifestyle">
                          <NightlifeIcon />
                        </Tooltip>
                        Lifestyle
                      </p>
                    </div>
                    <div className="col-md-6">

                      <ul>
                        <li><span>Habits</span></li>
                        <li>Non Vegetarian, Doesn't drink, Doesn't smoke</li>
                      </ul>
                      <br />
                      <ul>
                        <li><span>Languages Known</span></li>
                        <li>English, Hindi, Marathi</li>
                      </ul>
                      <br />
                    </div>

                    <div className="col-md-6">

                      <ul>
                        <li><span>Assets</span></li>
                        <li>Owns a house</li>
                      </ul>
                      <br />
                      <ul>
                        <li><span>Blood Group</span></li>
                        <li>Not filled in</li>
                      </ul>
                      <br />
                    </div>
                  </div>
                </div>

                <div className="personala">
                  <div className="row">
                    <p>
                      <Tooltip title="He Likes">
                        <FavoriteIcon />
                      </Tooltip>
                      He Likes
                    </p>

                    <div className="col-md-3">
                      <span>
                        <Tooltip title="Hobbies">
                          <SportsSoccerIcon />
                        </Tooltip>
                      </span>
                    </div>
                    <div className="col-md-9">
                      <ul>
                        <li>Cooking, Photography </li>
                      </ul>
                      <br />
                    </div>

                    <div className="col-md-3">
                      <ul><li>
                        <Tooltip title="Interests">
                          <SportsIcon />
                        </Tooltip>
                      </li></ul>
                    </div>
                    <div className="col-md-9">
                      <ul>
                        <li>
                          Listening to music, Movies, Sports - Outdoor, Trekking /
                          Adventure sports, Health & Fitness, Yoga / Meditation,
                          Volunteering / Social Service, Politics, Net surfing,
                          Blogging{" "}
                        </li>
                      </ul>
                      <br />
                    </div>

                    <div className="col-md-3">
                      <ul>
                        <Tooltip title="Music">
                          <MusicNoteIcon />
                        </Tooltip>
                      </ul>
                    </div>
                    <div className="col-md-9">
                      <ul>
                        <li>Classical - Hindustani </li>
                      </ul>
                      <br />
                    </div>

                    <div className="col-md-3">
                      <ul>
                        <Tooltip title="Favourite read">
                          <LocalLibraryIcon />
                        </Tooltip>
                      </ul>
                    </div>
                    <div className="col-md-9">
                      <ul>
                        <li>
                          Favourites : à¤¦à¥à¤°à¥à¤à¤°à¤¾à¤ à¤°à¤¾à¤à¤à¤¡,
                          à¤®à¥à¤¤à¥à¤¯à¥à¤à¤à¤¯, à¤¸à¤à¤­à¤¾à¤à¥,
                          à¤¶à¥à¤°à¥à¤®à¤¾à¤¨à¤¯à¥à¤à¥
                        </li>
                      </ul>
                      <br />
                    </div>

                    <div className="col-md-3">
                      <ul>
                        <Tooltip title="Sports Fitness">
                          <SportsBasketballSharpIcon />
                        </Tooltip>
                      </ul>
                    </div>
                    <div className="col-md-9">
                      <ul>
                        <li>
                          Jogging / Walking, Cycling, Cricket, Badminton
                        </li>
                      </ul>
                      <br />
                    </div>

                    <div className="col-md-3">
                      <ul>
                        <Tooltip title="Favourite Vacation destination">
                          <AirplanemodeActiveSharpIcon />
                        </Tooltip>
                      </ul>
                    </div>
                    <div className="col-md-9">
                      <ul>
                        <li>Uttrakhand</li>
                      </ul>
                      <br />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className="Horos">
                <ul><li>Horoscope</li>
                  <li>
                    Get a detailed analysis of guna match score, manglik & bhakut
                    dosh analysis and lots more
                  </li></ul>
                <button>Get Kundli Milan</button>
                <button className="scope">Know More</button>
                <hr></hr>
                <div className="birth">
                  <ul>
                    <li>
                      <span>Place of Birth</span>
                    </li>
                    <li>{showData.born_location}</li>
                  </ul>
                </div>

                <div className="birth">
                  <ul>
                    <li>
                      <span>Date of Birth</span>
                    </li>
                    <li>{dateMDY}</li>
                  </ul>
                </div>

                <div className="birth">
                  <ul>
                    <li>
                      <span>Time of Birth</span>
                    </li>
                    <li>{showData.born_time}</li>
                  </ul>
                </div>

                <div className="birth">
                  <ul>
                    <li>Horoscope match is Must</li>
                  </ul>
                </div>

                <div className="birth">
                  <ul>
                    <li>
                      <span>Sun sign</span>
                    </li>
                    <li>Scorpio</li>
                  </ul>
                </div>

                <div className="birth">
                  <ul>
                    <li>
                      <span>Rashi/Moon Sign</span>
                    </li>
                    <li>Makar Rashi (Non Manglik)</li>
                  </ul>
                </div>

                <div className="birth">
                  <ul>
                    <li>
                      <span>Nakshatra</span>
                    </li>
                    <li>Sravana Nakshatra</li>
                  </ul>
                </div>

                <div className="birth">
                  <ul>
                    <li>
                      <span>Manglik</span>
                    </li>
                    <li>{showData.magalik}</li>
                  </ul>
                </div>

                <button className="Viewhoros">View Horoscopen</button>
                <div className="birth">
                  <ul>
                    <li>Check your kundli report</li>
                  </ul>
                </div>
                <button className="Viewhoros">Upload your Horoscope</button>
              </div>

              <div className="similarprof mt-3">
                <h5>Similar Profiles</h5>
                <hr></hr>

                <div className="row">
                   {data.map((doc,i)=>(
                   i>rax? <>
                   {i<rax+5 && doc.gender==="Female"? <>
                    <>
                   <div className="col-md-3 mt-2">
                   <div className="similarimg">
                     <img src={doc.image}></img>
                   </div>
                 </div>
                 <div className="col-md-9 mt-2">
                   <ul>
                     <li>{doc.displayName}</li>
                     <li>{calculate_age(new Date(showData.birth))}</li>
                     <li>{doc.city}</li>
                   </ul>
                 </div> 
                 </> 
                   </> :null}
                   </> :null
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Viewpage;

const Container = styled.div`
background-color: #e7e6e6;
padding:24px;
.head_border{
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom:1px solid #000;
}

.name span {
  font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size:18px;
    color: #34495e;
}
ul li {
  font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
}

.lastseen span{
  font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size:12px;
    color: #34495e;
}

.bg{
    background-color:#f0f2f7
    ;
}

.contact{
    width: 100%;
    background-color: #34495e;
    
    
}

.contact li .MuiSvgIcon-root {
    padding-left: 10px;
    width: 35px;
    height: 34px;
    cursor: pointer;
}
.contact li{
    color: #fff;
    list-style:none;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
   
}
.contact  li span{
    margin-left: 15px;
    font-size:18px;
    font-family: sans-serif;
    font-weight:200;
}

.icons{
    display: flex;
    color: #34495e;
    
    
}

.MuiSvgIcon-root{
    overflow: hidden;
    margin: 4px;
    
}

.contact  li:hover{
    background-color:#df2349;
    background-repeat: 100% 100%;
    background-image: url(${bg});
}

.blocks{
    border-bottom: 1px solid #000;
}


.abt{
   margin-top: 20px;
    text-align: center;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
}

.abt p{
  font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
}

.personaldescription{
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
}


.abtfamily{
    margin-bottom: 4%;
}
.abtfamily p{
    line-height: 5px;
   
}

.abteducation{
    margin-bottom: 4%; 
}
.abteducation p{
    line-height: 5px;
  
}

.abtoccupation{
    margin-bottom: 4%; 
}

.abtoccupation p{
    line-height: 5px;
  
}

.line{
  
    background-color: #fff;
    padding: 20px;
}

.personal{
  padding: 4px;
    border-bottom: 1px solid #000;
}

.career p{
  font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
    padding: 10px;
}



.edu p{
    line-height: 0.5;
   
}

.edu1 p{
    line-height: 1;
  
}



.flex{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;
}

.Desired {
  padding-left: 12px;
}

.Desired ul{
    display: flex;
    justify-content:center;

    list-style: none;
}

.Desired ul li{
    width: 100%;
}
.Horos {
  background-color: white;
}
.Horos li {
    background-color: #fff;
    padding: 20px;
    color: #34495e;
    font-weight:200;
    font-size:14px;
    padding: 10px;
    font-family: sans-serif;
}

button{
    width: 100%;
    color: #fff;
    padding: 5px 0px;
    background-color: #df2349;
    border: 1px solid #df2349;
    background-repeat: 100% 100%;
    background-image: url(${bg});
}
.scope{
    color:#fff;
    border:1px solid #df2349;
margin: 10px 0;
background-color: #fbf7f7;

}

.birth ul li{
    list-style: none;
}
.birth span{
  color: #798187;
}


.Viewhoros{
    color: #ffffff;
    
margin: 10px 0;
background-color:#34495e; 
}

.similarprof{
    background-color: #fff;
    padding: 20px;
}

.similarimg img{
width: 100%;
}

`