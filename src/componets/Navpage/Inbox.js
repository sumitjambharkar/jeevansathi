import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EmailIcon from "@mui/icons-material/Email";
import "./Inbox.css";
import { useState } from "react";
import { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import useAuth from "../useContext/useAuth";
import Head from "../Head";
import Navbar from "../Nav/Navbar";
import Footer from "../firstPage/Footer";

const Inbox = () => {
    
  const navigate = useNavigate()
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  const {user} = useAuth()
  const [userData, setUserData] = useState([]);
  const [sent, setSent] = useState([]);
  const [req, setReq] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [received, setReceived] = useState([]);
  console.log(userData);

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .onSnapshot((snapshot) => setUserData(snapshot.data()));
    db.collection("users")
      .doc(user.uid)
      .collection("req")
      .onSnapshot((snapshot) => setReq(snapshot.docs.map((doc) => doc.data())));
    db.collection("users")
      .doc(user.uid)
      .collection("sent")
      .onSnapshot((snapshot) =>
        setSent(snapshot.docs.map((doc) => doc.data()))
      );
    db.collection("users")
      .doc(user.uid)
      .collection("received")
      .onSnapshot((snapshot) =>
        setReceived(snapshot.docs.map((doc) => doc.data()))
      );
    db.collection("users")
      .doc(user.uid)
      .collection("accept")
      .onSnapshot((snapshot) =>
        setAccepted(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const accept = async (doc) => {
    console.log(doc);
    db.collection("users")
      .doc(user.uid)
      .collection("accept")
      .doc(doc.data.uid)
      .set({
        data: doc.data,
      });
    db.collection("users")
      .doc(user.uid)
      .collection("req")
      .doc(doc.data.uid)
      .delete();
    db.collection("users")
      .doc(doc.data.uid)
      .collection("received")
      .doc(user.uid)
      .set({
        data: userData,
      });
    db.collection("users")
      .doc(doc.data.uid)
      .collection("sent")
      .doc(user.uid)
      .delete();
    const respone = await fetch(
      "https://marriageorbit-backend-api.herokuapp.com/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: doc.data.email,
          from: user.email,
          subject: `${user.displayName} Members Accepted your Request`,
          message: `Hi ${doc.data.displayName} ${
            user.displayName
          } may be interested in you as they visisted your Profile.Take the first step and connect with them ${`https://marriageorbit.com/view/${user.uid}`}`,
        }),
      }
    );
    const result = await respone.json();
    console.log(result);
  };

  const getData = async (doc) => {
    const uid = doc.data.uid;
    const displayName =doc.data.displayName;
    const image =doc.data.image;

    const id = user.uid > uid ? `${user.uid + uid}` : `${uid + user.ui}`;
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
      });
    }
  };

  return (
    <>
      <Head/>
      <Navbar/>
      <Tabs>
        <TabList
          style={{
            display: "flex",
            justifyContent: "center",
            color: "gray",
            border: "1px solid orange",
          }}
        >
          <Tab>Received ({received.length})</Tab>
          <Tab>Accepted ({accepted.length})</Tab>
          <Tab>Requests ({req.length})</Tab>
          <Tab>sent ({sent.length})</Tab>
        </TabList>
        <div className="container">
          <TabPanel>
            <div className="mah">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  {received.map((doc) => (
                    <div className="fl">
                      <div className="row">
                        <div className="col-3">
                          <div className="im">
                            {doc.data.image ? (
                              <img className="img_img" src={doc.data.image} />
                            ) : (
                              <AccountCircleIcon />
                            )}
                          </div>
                        </div>
                        <div className="col-6 sib">
                          <div className="sid">
                            <p>
                              {doc.data.displayName}{" "}
                              <VerifiedUserOutlinedIcon />
                            </p>
                            <h2>
                              <span>
                                <QuestionAnswerOutlinedIcon />
                              </span>
                              Online 1hr Ago
                            </h2>
                            <hr></hr>
                            <small>
                              {calculate_age(new Date(doc.data.birth))} yrs,
                              {doc.data.height}
                              <br />
                              {doc.data.religion}, {doc.data.tounge}
                              <br />
                              {doc.data.city}, {doc.data.state}
                              <br />
                              {doc.data.qaulification}
                              <br />
                              {doc.data.des}
                            </small>
                          </div>
                          <div className="lov">
                            <span>
                              <LockOutlinedIcon />
                            </span>
                            <p>
                              {doc.data.displayName} has sent you a message. In
                              the interest of our Premium Members, we allow only
                              Premium users to read messages.
                            </p>
                            <a className="lovv">
                              Upgrade Now
                              <KeyboardArrowRightIcon />
                            </a>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="invv">
                            <p>Upgrade to Contact him directly</p>

                            <a href={`tel:${doc.data.number}`}>
                              <p className="piku">
                                <span>
                                  <CallIcon />
                                </span>
                                Call
                              </p>
                            </a>
                            <a
                              target="blank"
                              href={`https://api.whatsapp.com/send?phone=${doc.data.number}`}
                            >
                              <p className="pik">
                                <WhatsAppIcon />
                                Whatsapp
                              </p>
                            </a>
                              <p onClick={()=>getData(doc)} className="pikk">
                                <MarkChatReadIcon />
                                Shaddi Chat
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mah">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  {accepted.map((doc) => (
                    <div className="fl">
                      <div className="row">
                        <div className="col-3">
                          <div className="im">
                            {doc.data.image ? (
                              <img className="img" src={doc.data.image} />
                            ) : (
                              <AccountCircleIcon />
                            )}
                          </div>
                        </div>
                        <div className="col-6 sib">
                          <div className="sid">
                            <p>
                              {doc.data.displayName}{" "}
                              <VerifiedUserOutlinedIcon />
                            </p>
                            <h2>
                              <span>
                                <QuestionAnswerOutlinedIcon />
                              </span>
                              Online 1hr Ago
                            </h2>
                            <hr></hr>
                            <small>
                              {calculate_age(new Date(doc.data.birth))} yrs,
                              {doc.data.height}
                              <br />
                              {doc.data.religion}, {doc.data.tounge}
                              <br />
                              {doc.data.city}, {doc.data.state}
                              <br />
                              {doc.data.qaulification}
                              <br />
                              {doc.data.des}
                            </small>
                          </div>
                          <div className="lov">
                            <span>
                              <LockOutlinedIcon />
                            </span>
                            <p>
                              {doc.data.displayName} has sent you a message. In
                              the interest of our Premium Members, we allow only
                              Premium users to read messages.
                            </p>
                            <a className="lovv">
                              Upgrade Now
                              <KeyboardArrowRightIcon />
                            </a>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="invv">
                            <p>Upgrade to Contact him directly</p>

                            <a href={`tel:${doc.data.number}`}>
                              <p className="piku">
                                <span>
                                  <CallIcon />
                                </span>
                                Call
                              </p>
                            </a>
                            <a
                              target="blank"
                              href={`https://api.whatsapp.com/send?phone=${doc.data.number}`}
                            >
                              <p className="pik">
                                <WhatsAppIcon />
                                Whatsapp
                              </p>
                            </a>
                              <p onClick={()=>getData(doc)} className="pikk">
                                <MarkChatReadIcon />
                                Shaddi Chat
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mah">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  {req.map((doc) => (
                    <div className="fl">
                      <div className="row">
                        <div className="col-3">
                          <div className="im">
                            {doc.data.image ? (
                              <img className="img" src={doc.data.image} />
                            ) : (
                              <AccountCircleIcon />
                            )}
                          </div>
                        </div>
                        <div className="col-6 sib">
                          <div className="sid">
                            <p>
                              {doc.data.displayName}{" "}
                              <VerifiedUserOutlinedIcon />
                            </p>
                            <h2>
                              <span>
                                <QuestionAnswerOutlinedIcon />
                              </span>
                              Online 1hr Ago
                            </h2>
                            <hr></hr>
                            <small>
                              {calculate_age(new Date(doc.data.birth))} yrs,
                              {doc.data.height}
                              <br />
                              {doc.data.religion}, {doc.data.tounge}
                              <br />
                              {doc.data.city}, {doc.data.state}
                              <br />
                              {doc.data.qaulification}
                              <br />
                              {doc.data.des}
                            </small>
                          </div>
                          <div className="lov">
                            <span>
                              <LockOutlinedIcon />
                            </span>
                            <p>
                              {doc.data.displayName} has sent you a message. In
                              the interest of our Premium Members, we allow only
                              Premium users to read messages.
                            </p>
                            <a className="lovv">
                              Upgrade Now
                              <KeyboardArrowRightIcon />
                            </a>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="inv">
                            <p>He invited you to Connect</p>
                            <span>
                              <Button onClick={() => accept(doc)}>
                                <CheckOutlinedIcon />
                              </Button>
                            </span>
                            <p>Accept</p>
                            <ClearOutlinedIcon />
                            <p>Decline</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mah">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  {sent.map((doc) => (
                    <div className="fl">
                      <div className="row">
                        <div className="col-3">
                          <div className="im">
                            {doc.data.image ? (
                              <img className="img_img" src={doc.data.image} />
                            ) : (
                              <AccountCircleIcon />
                            )}
                          </div>
                        </div>
                        <div className="col-6 sib">
                          <div className="sid">
                            <p>
                              {doc.data.displayName}{" "}
                              <VerifiedUserOutlinedIcon />
                            </p>
                            <h2>
                              <span>
                                <QuestionAnswerOutlinedIcon />
                              </span>
                              Online 1hr Ago
                            </h2>
                            <hr></hr>
                            <small>
                              {calculate_age(new Date(doc.data.birth))} yrs,
                              {doc.data.height}
                              <br />
                              {doc.data.religion}, {doc.data.tounge}
                              <br />
                              {doc.data.city}, {doc.data.state}
                              <br />
                              {doc.data.qaulification}
                              <br />
                              {doc.data.des}
                            </small>
                          </div>
                          <br />
                          <div className="love">
                            <p>
                              <span>
                                <EmailIcon />
                              </span>
                              &nbsp;Hello, I like your Profile. Accept my
                              request if my profile interests you too
                            </p>
                            <h3>
                              He viewed your Invitation and choose to respond
                              later.
                            </h3>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="invv">
                            <p>Upgrade to Contact him directly</p>

                            <a href="#">
                              <p className="piku">
                                <span>
                                  <CallIcon />
                                </span>
                                Call
                              </p>
                            </a>
                            <a href="#"
                              
                            >
                              <p className="pik">
                                <WhatsAppIcon />
                                Whatsapp
                              </p>
                            </a>
       
                              <p onClick={()=>getData(doc)} className="pikk">
                                <MarkChatReadIcon />
                                Shaddi Chat
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      
    </>
  );
};

export default Inbox;
