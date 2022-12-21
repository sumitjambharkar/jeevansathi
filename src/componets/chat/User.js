import React, { useEffect, useState } from "react";
import { onSnapshot, doc,orderBy } from "firebase/firestore";
import Avatar from '@mui/material/Avatar';
import { db } from "../../firebase";
import Noti from "./Noti";
import { useNavigate } from "react-router-dom";


const User = ({ user1, user, selectUser, chat }) => {

  const navigate = useNavigate()
  
  const user2 = user?.uid;
  const [data, setData] = useState("");

  const notification = () => {
    navigate({
      pathname: "/chat",
      state:null,
    });
  }

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id),
     (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);

  return (
    <>
      <div
        className={`user_wrapper ${chat.displayName === user.displayName && "selected_user"}`}
        onClick={() => selectUser(user)}
      >
        <div className="user_info">
          <div className="user_detail">
            <Avatar src={user.image} alt="avatar" />
            <h4>{user.displayName}</h4>
              <Noti data={data} user1={user1} notification={notification} />
          </div>
          <div
            className={`user_status ${user.isOnline ? "online" : "offline"}`}
          ></div>
        </div>
        {data && (
          <p className="truncate">
            <strong>{data.from === user1 ? "Me:" : null}</strong>
            {data.text}
          </p>
        )}
      </div>
      <div
        onClick={() => selectUser(user)}
        className={`sm_container ${chat.displayName === user.displayName && "selected_user"}`}
      >
        <div className="sm_screen">
           <Avatar src={user.image}/>
        </div>
      </div>
    </>
  );
};

export default User;

