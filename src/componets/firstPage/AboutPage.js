import React from 'react';
import styled from 'styled-components';
import AboutImage from "../image/banner.jpg";
import {Helmet} from "react-helmet";
import { Container } from '@mui/material';
import Navbar from '../Nav/Navbar';
import Head from './Head';
import Footer from './Footer';

const About = () => {
  return (
    <>
    
    <Helmet>

  <meta charset="utf-8"/>
  <meta name="robots" content="follow,index"/>
  <meta http-equiv="content-language" content="en"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="description" content="Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession.On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity."/>

      <meta name="keywords" content="Matrimony services for boys in mumbai,Matchmaking services for girls in mumbai,Matrimonial websites to get womens, matrimonials, couples matchmaking companies in mumbai, Brides, matchmaking services in linking road, grooms, shaadi, Online Matrimonial services in marine drive, 
      Online Matrimony, female partner for shadi in south matunga, Online matchmaking Services,Indian single girls in juhu,girls for marriage in mumbai
      lifepartner for wedding in thane.get girlfriend for marriage in bandra.diffrent casts of girls for marriage in mulund.
      Matrimony services for mens in panvel, matchmaking websites to find girls, matrimonials, couples girls and boys matchmaking companies in lower parel, Brides, matchmaking services in mumbai, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in dadar, Online matchmaking Services,Indian single boys in chembur,boys for marriage in varsova
      lifepartner for wedding in santacruz.get boyfriend for marriage in vasai-virar.diffrent casts of boys for marriage in andheri.hindu girls and boys for marriage in borivali."/>

      <meta name="author" content="Design and Promoted By Marriageorbit"/>
      <meta property="og:url" content="https://marriageorbit.com/about"/>
      <meta property="og:type" content="About Our Matrimonial Matchmaking Service In Thane" />
      <meta property="og:title" content="About Us | Best Matchmaking Services In Thane"/>
      <meta property="og:image" content="https://marriageorbit.com/static/media/download.c4ad1512ea895588cb1d.jpg"/>
      <meta property="og:site_name" content="Marriageorbit.com"/>
   
    <link rel="canonical" href="https://marriageorbit.com/about"/>
 
      <title>About Us | Best Matchmaking and Matrimony Services In Thane</title>
      
      <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/>
   

    
      </Helmet>
      <Head/>
    <AboutSection className='container'>
     <h1>About Us</h1>
     <Image>
         <img src={AboutImage}  alt='about'/>
     </Image>
     <p>
     Marriageorbit is a matchmaking service created for parents who are looking for a life partner for their loved ones. Unlike other Matrimonial services, we focus on providing detailed family and background information to help you take the next step with confidence. With over 80+ community sites, you can find a match from your own community. Marriageorbit is Like Shaadi.com, the World's No. 1 Matchmaking service.
     </p>
     <h4>Our Mission:</h4>
     <span>With the aim of bringing upliftment & togetherness to the Sindhi community, we at Marriageorbit.com have a vision to widen and strengthen this website as an all-serving dedicated space from matchmaking to wedding planning services, wedding invitations, catering facilities, destinations, decorations or venue bookings & more. </span>
     <p></p>
     <h4>Why Us:</h4>
     <li>Matrimonial magazines have gone obsolete, websites are the all-serving future</li>
     <li>Reach wider than magazines, raises the chances of finding a compatible partner</li>
     <li>Dedicated support team </li>
     <li>Easy to use </li>
     <li>100% Verified Profiles</li>
     <li>Advanced filters</li>
     <li>Reduced hassle & time consumption</li>
     <li>Upliftment of the community</li>
     <li>In the near future, wedding planning, venue, caterers, DJ etc. booking to be introduced and incorporated</li>
     <p></p>
     <h4>What keeps us going:</h4>
     <p>Happy success stories and continuous feedback from our valued members. </p>
    </AboutSection>
    <Container>
        <h1 style={{textAlign:"center",fontSize:"24px", fontWeight:600, marginTop:"25px"}}>We Are Available In Several Locations</h1>
          </Container>
        <Footer/>
    </>
  )
}

export default About;

const AboutSection = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
> h1 {
    margin:12px;
    text-align : center;
    font-family:roman;
    font-weight :700;
}
> p {
    margin : 12PX;
    text-align :center;
    font-weight :600;
   color : #8b7c7c;
    
}
> span {
  font-weight :600;
  color : #8b7c7c;
}
> li {
  font-weight :600;
  color : #8b7c7c;
}
> h4 {
  font-weight:600;
}
`
const Image = styled.div`
display:flex;
justify-content:center;
>img {
    width:700px;
}`
