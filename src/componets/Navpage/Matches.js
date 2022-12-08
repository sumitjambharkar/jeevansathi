
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { db } from "../../firebase";
import useAuth from "../useContext/useAuth";
import HomeSec from "./HomeSec";
import NearMe from './NearMe';
import Recently from "./Recently"

const Matches = () => {
    

  const {user}  = useAuth()
  const [near, setNear] = useState([]);
  const [userData, setUserData] = useState([]);
  console.log(userData);
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
    const unSub = db
      .collection("users")
      .doc(user.uid)
      .onSnapshot((snapshot) => setUserData(snapshot.data()));
    return () => unSub();
  }, [user.uid]);

  const mumbai = userData.city?.toLowerCase()
  console.warn(near.length);

  useEffect(() => db
      .collection("users")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setNear(
          snapshot.docs
          .map((doc) => doc.data())
          .filter((doc) => doc.city?.toLowerCase() === mumbai)
        )
      ),[mumbai]);


  return (
    <>
      <Tabs>
        <TabList
          style={{
            display: "flex",
            justifyContent: "center",
            color: "gray",
            border: "1px solid orange",
          }}
        >
          <Tab>My Matches</Tab>
          <Tab>Near Me ({near.length})</Tab>
          <Tab>Recently Viewed ({userId.length})</Tab>
          {/* <Tab>More Matches (9999+)</Tab> */}
        </TabList>

        <TabPanel>
          <HomeSec />
        </TabPanel>
         <TabPanel>
          <NearMe />
        </TabPanel>
        <TabPanel>
          <Recently />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Matches;
