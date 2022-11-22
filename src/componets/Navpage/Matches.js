
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { db } from "../../firebase";
import useAuth from "../useContext/useAuth";
import HomeSection from "./HomeSection";
import NearMe from './NearMe';
import Recently from "./Recently"

const Matches = () => {
    

  const {user}  = useAuth()
  const [near, setNear] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userId, setUserId] = useState([]);

  const mumbai = currentUser.city?.toLowerCase()
  console.warn(near.length);

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
      .onSnapshot((snapshot) => setCurrentUser(snapshot.data()));
    return () => unSub();
  }, [user.uid]);

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
          <HomeSection />
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
