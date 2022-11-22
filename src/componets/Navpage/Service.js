import React from 'react';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import styled from 'styled-components';
import SmsIcon from '@mui/icons-material/Sms';
import SearchIcon from '@mui/icons-material/Search';
import DiamondIcon from '@mui/icons-material/Diamond';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {Helmet} from "react-helmet";
import { Container } from '@mui/material';
import Footer from '../firstPage/Footer';
import Head from '../Head';
import Navbar from '../Nav/Navbar';

const Service = () => {
  
  return (
    <>
     <Helmet>
     <meta charset="utf-8"/>
    <meta name="robots" content="follow,index"/>
     <meta http-equiv="content-language" content="en"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="description" content="On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity. Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession."/>

      <meta name="keywords" content="Matrimony services in andheri, matchmaking services in andheri, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in andheri Brides, matchmaking services in andheri, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in mulund, Online matchmaking Services,Indian single girls in ,girls for marriage in mahim
      lifepartner for wedding in Andheri.get girlfriend for marriage in sion.diffrent casts of girls for marriage in andheri.
      services of matrimony for mens in andheri, Matrimonial websites to find girls, matrimonials, couples girls and boys and girls matchmaking companies in mahalaxmi, Brides, matchmaking services in andheri, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in jogeshwari, Online matchmaking Services,Indian single boys and girls in kurla,boys and girls for marriage in mahalaxmi
      lifepartner for wedding in andheri.get boyfriend for marriage in andheri.diffrent casts of boys and girls for marriage in andheri.
      hindu girls and boys and girls for marriage."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/myphoto"/>
      <meta property="og:type" content="Matrimonial Matchmaking Service In India" />
      <meta property="og:title" content="My Photo | Best matchmaking services in Juhu" />
      <meta property="og:image" content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png" />
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/myphoto" />
 
      <title> Service | Best matchmaking services in Juhu</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 
   

      </Helmet>
      <Head/>
      <Navbar/>
    <div className='container text-center'>
    <h1>Our Service</h1>
      <div className='row mt-4 mb-5'>
      <div className='col-md-4 text-center mt-4'>
          <Servicee>
            <p></p>
            <SensorOccupiedIcon/>
            <p></p>
            <strong>Free Sign Up</strong>
            <p></p>
            <p>Sign up in marriage orbit for free of cost and get perfect matches for your Profile</p>
            <p></p>
          </Servicee>
        </div>
        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <SmsIcon/>
            <p></p>
            <strong>Free SMS & Chat</strong>
            <p></p>
            <p>On our website, a crucial tool like ctat is accessible so that users can communicate with one another.</p>
            <p></p>
          </Servicee>
        </div>

        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <SearchIcon/>
           <p></p>
            <strong>Auto Match Maker</strong>
            <p></p>
            <p>Each day, some new members sign up. This matrimonial service updates and displays matching profiles to you.</p>
            <p></p>
          </Servicee>
        </div>

        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <DiamondIcon/>
            <p></p>
            <strong>Recommend Profile</strong>
            <p></p>
            <p>You can view updates from those you follow when you follow someone.</p>
            <p></p>
          </Servicee>
        </div>



        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <NotificationsActiveIcon/>
            <p></p>
            <strong>NotificationsAlerts</strong>
            <p></p>
            <p>changes to the display picture, birthday notifications, and photo requests</p>
            <p></p>
          </Servicee>
        </div>

        <div className='col-md-4 text-center mt-4'>
          <Servicee>
          <p></p>
            <AdminPanelSettingsIcon/>
            <p></p>
            <strong>Restrictions Setting</strong>
            <p></p>
            <p>limitations make it possible to disable the built-in anti-spam system.</p>
            <p></p>
          </Servicee>
        </div>

      </div>
    </div>
    <Container>
        <h1 style={{textAlign:"center",fontSize:"24px", fontWeight:600, marginTop:"25px"}}>We Are Available In Several Locations</h1>
          </Container>
          <Footer/>
    </>
  ) 
}

export default Service;

const Servicee = styled.div`
width: 100%;
height: 220px;
background: #eee;
align-items: center;
padding: 15px;
transition: 0.5s;
display:flex;
justify-content: center;
flex-direction: column;
cursor: pointer;
>.MuiSvgIcon-root {
  font-size:60px;
  color:#FFA500;
}
:hover{
  box-shadow: 0 0 10px;
}
`