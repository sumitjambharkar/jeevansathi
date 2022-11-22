import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import styled from "styled-components";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import ScrollToBottom from 'react-scroll-to-bottom';
import User from "./User";
import MessageForm from "./MessageForm";
import Message from "./Message";
import {Helmet} from "react-helmet";
import SearchIcon from "@mui/icons-material/Search";
import { auth, db,storage } from "../../firebase";
import Footer from "../firstPage/Footer";
import Navbar from "../Nav/Navbar";

const Home = () => {
  
  const [search,setSearch] = useState("")
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [gender, setGender] = useState("");
  console.log(gender.gender);


  const user1 = auth.currentUser.uid;
  console.log(user1);

  useEffect(() => {
    if (user1) {
      db.collection("users")
        .doc(user1)
        .onSnapshot((snapshot) => {
          setGender(snapshot.data());
        });
    }
  }, [user1]);

  useEffect(() => {
    if (user1) {
      db.collection("users").doc(user1).collection("messages").orderBy("createdAt","desc").onSnapshot(snapshot=>(
        setUsers(snapshot.docs.map((doc)=>(doc.data())))
      ))
    }
  }, []);
  
  const selectUser = async (user) => {
    console.log(user);
    setChat(user);

    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(db, "messages", id, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });

    // get last message b/w logged in user and selected user
    const docSnap = await getDoc(doc(db, "lastMsg", id));
    // if last message exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, set unread to false
      await updateDoc(doc(db, "lastMsg", id), { unread: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });

    await setDoc(doc(db, "lastMsg", id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    });

    setText("");
    setImg("");
  };
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Chat</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           <Header>
            <h3>Marroageorbit.com</h3>
            <Input>
            <input
              placeholder="search Name" value={search} onChange={(e)=>setSearch(e.target.value)}
            />
            <SearchIcon />
          </Input>
           </Header>
           <Navbar/>
    <HomeContainer>
      <UserContainer>
        {users
        .filter((doc)=>doc.displayName?.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        .filter((item)=>item.gender !== gender.gender )
        .map((user) => (
          <User
            key={user.uid}
            user={user}
            selectUser={selectUser}
            user1={user1}
            chat={chat}
          />
        ))}
      </UserContainer>
      <MessageContainer>
        {chat ? (
          <>
            <div className="messages_user">
              <Avatar style={{width:"50px",height: "50px",marginRight:"6px"}} src={chat.image}/>
              <h3>{chat.displayName}</h3>
            </div>
            <div className="messages">
              {msgs.length
                ? msgs.map((msg, i) => (
                    <Message key={i} msg={msg} user1={user1} />
                  ))
                : null}
            </div>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              setImg={setImg}
            />
          </>
        ) : (
          <h3 className="no_conv">Select a user to start conversation</h3>
        )}
      </MessageContainer>
    </HomeContainer>
    <Section>
    <Footer/>
    </Section>
    </>
  );
};

export default Home;
const HomeContainer = styled.div`
display:flex;
width:auto;
height:600px;`
const UserContainer = styled.div`
margin:24px;
flex:3;
border-right: 2px solid var(--color-6);
overflow-y: auto;
border-right: 1px solid black;
@media (max-width:500px) {
  margin:0px;
  flex: 2;
  height:100%;
}`
const MessageContainer = styled.div`
flex:7;
position: relative;
margin:24px;
overflow: hidden;
width:auto;
@media (max-width:500px) {
  margin:0px;
  flex: 8;
  height:100%;
}`
const Section = styled.div`
@media (max-width:500px) {
 display: none;
}
`
const Header = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 80px;
> h3 {
  color:orange;
}
@media (max-width:500px) {
  >h3 {
    display: none;
  }
}

`

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
