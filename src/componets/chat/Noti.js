import React from 'react';

const Noti = ({notification,data,user1}) => {
    console.log(user1);
  return (
    <>
    {data?.from !== user1 && data?.unread && (
        <>
        <div onClick={notification} className="unread">New Message</div>
        </>
    )}
    </>
    
  )
}

export default Noti