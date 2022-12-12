import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HttpsIcon from '@mui/icons-material/Https';
import SettingsIcon from '@mui/icons-material/Settings';
import Setting from './setting/Setting';
import DeleteUser from './setting/DeleteUser'
import useAuth from '../useContext/useAuth';
import { db } from '../../firebase';


const Nav = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  line-height: 64px;
  ul {
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-left:0;
  }
  
  a {
    color: white;
      text-decoration: none;
      padding: 15px;
      font-size: 16px;
      line-height:50px;
      font-weight:600;
      font-family: 'FontAwesome';
    
  }
  .name {
    display:none;
  }
  .menu{
    display:none;
  }
  .logout {
    display:none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top:0;
    right: 0;
    z-index:2;
    overflow-x: hidden;
    overflow-y: scroll;
    height:100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    ul {
    flex-flow: column nowrap;
    background-color: #0D2538;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    margin-bottom:0px;
    }
    li {
      color: #fff;
      padding-left: 15px;
      border-bottom: 1px solid #df2349;
    }
    li a {
      padding: 0;
    }
    
    .name {
      display: block;
      background-color: white;
      color: black;
      height: 150px;
      padding: 10px;

    }
    .menu{
      display: block;
      cursor: pointer;
    }

    .use{
    display: inline-grid;
    width:300px;
    text-align: center;
    justify-content: center;
    >button{
    height: 32px;
    margin-top: 10px;
    line-height: 32px;
    font-size: 15px;
    text-align: center;
    width: 131px;
    margin-top: 20px;
    
    border: 1px solid #ffa500;
    }
    
  }

    .user{
      display: flex;
      border-bottom: 1px solid #ccc;
      height: 48px;
      >span{  
        display: inline-grid;
        margin-left: 15px;
       
      }
      >span a{
        font-size: 16px;
        position: absolute
      }
      >span p{
        font-size: 13px;
        margin-bottom: 0;
      }
    }
    .name a {
      color:black;
    }
    .logout {
      display: block;
    }
    .hide {
      display:none;
    }
   
  }
`

const Avtars = styled.div`
> a {
  color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height:50px;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  > a > button {
    margin:4px;
    border:none;
    background-color: #df2349;
    
  }
`
const Drop = styled.div`
   position:absolute;
   display:flex;
   width:300px;
   margin-left:-100px;
   z-index:1;
   justify-content:start;
  height:100px;
  background-color:#fff;
  box-shadow: 5px 5px 5px #0008;
  flex-wrap: wrap;
  justify-content: center;
>span {
  width:150px;
  line-height: 46px;
  padding-left: 10px;
  color:grey;
  cursor:pointer;
  }
  > span a {
    color: gray;
    font-weight: inherit;
    font-size: 17px;
  }
`

const RightNav = ({ open }) => {

  const [show, setShow] = useState('')
  const navigate = useNavigate()
  const {user,logout} = useAuth()
  const [userDe, setUserDe] = useState("")

  const signOut = () => {
    logout()
    navigate({pathname:"/"})
  }

  const showProfile =()=> {
    navigate({pathname:"/my-profile"})
  }

  useEffect(() => {
    db.collection("users").doc(user.uid).onSnapshot(snapshot=>(
      setUserDe(snapshot.data())
    ))
  }, [])
  
  
  return (
  <>
    <div className='container'>
    <Nav open={open}>
      {!user ?
      <>
      <ul>
      <li><Link to="/">Home</Link></li>
       <li><Link><span style={{position:"absolute",opacity: "0"}}>x</span>Login</Link></li>
       <li><Link><span style={{position:"absolute",opacity: "0"}}>x</span>Sign Up</Link></li>
       <li><Link to="/about">About</Link></li>
      </ul>
      <ul>
      <li><Link to="/">Help</Link></li>
      </ul>
      </>
       :
       <>
       <ul className=''>
       <li><Link to="/">Matches</Link></li>
       <li><Link to="/my-profile">Account</Link></li>
       <li><Link to="/chat">Chat</Link></li>
       <li><Link to="/search">Search</Link></li>
       <li><Link to="/myphoto">My Photo</Link></li>
       <li><Link to="/gallery">Gallery</Link></li>
       <li><Link to="/service">Service</Link></li>
       <li><Link to="/inbox">Inbox</Link></li>
       <li className='menu'><Setting/></li>
        <li className='menu'><DeleteUser/></li>
       
       {/* <li><Link to="/inbox">Inbox</Link></li> */}
       <li onClick={signOut}  className='logout'><Link>Logout</Link></li>
      
       </ul>
       <ul>
       <li className='hide'>
       <Avtars>
        <Link className='show' onClick={()=>setShow(!show)}>{userDe?.displayName}</Link>
        <Link style={{textTransform: 'capitalize'}} onClick={()=>setShow(!show)}>
        <button><Avatar style={{textTransform: 'capitalize'}}>{user.email?.[0]}</Avatar></button>
        <ArrowDropDownIcon/>
        </Link>
        {show ? <>
      <Drop>
              <span onClick={showProfile}><AccountCircleIcon/> My Profile</span>
              <span onClick={signOut} ><LogoutIcon/>Logout</span>
              <span style={{display:"flex",alignItems:"center"}}><SettingsIcon/><Setting/></span>
              <span style={{display:"flex",alignItems:"center"}}><HttpsIcon/><DeleteUser/></span>
       </Drop>
       </>
       :""}
       </Avtars> 
       </li>
       <li className='name'>
        <div className='user'>
        <Avatar  style={{textTransform: 'capitalize'}}>{user.displayName?.[0]}</Avatar>
        <span>
        <p >.</p>
        <a  style={{textTransform: 'capitalize'}}>{user.displayName}</a>
        </span>
        </div>
    <div className='use'>
    <span style={{fontsize:"18px",height:"25px",fontWeight:"bold",marginBottom:"4px"}}>FREE Member</span>
    <button >Upgrade Now</button>
    </div>
       </li>
       </ul>
       </>
      }
    </Nav>
    </div>
    
    </>

  
  )
}

export default RightNav