import React from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';
import {Helmet} from "react-helmet";
import Head from '../Head';
import Navbar from '../Nav/Navbar';
import Footer from '../firstPage/Footer';

const Gallery = () => {
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
   
        <title> Gallery | Best matchmaking services in Juhu</title>
        
        <link rel="icon" href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png" sizes="16x16" type="image/png"/> 
     
  
    </Helmet>
    <Head/>
    <Navbar/>
     <Section>
    <div className='container text-center'>
    <h1>Our Gallery</h1>
        <p>We Are successfully Completed So Many Perfect Couple Matches In All Over India.</p>
     <div className='row mt-5'>
        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://images.unsplash.com/photo-1616165415772-f5b95c3ae135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHw%3D'alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://cdn0.weddingwire.in/article/7282/3_2/960/jpg/42827-newly-married-couple-dipak-studios-lead.jpeg'alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://cdn0.weddingwire.in/vendor/0413/3_2/960/jpeg/aashu-photo-studio-1_15_250413-1567773198.jpeg'alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://cdn0.weddingwire.in/article/1790/3_2/1280/jpg/40971-married-couple-qoutes-thelightsmiths-kiss.jpeg'alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://media.istockphoto.com/photos/found-my-queen-in-you-picture-id1174343486?k=20&m=1174343486&s=612x612&w=0&h=tADis8k8Bt1E-S8xNk1jPawEwRow5oeVCLn0ptibnBE='alt=''/>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='gall'>
             <img src='https://cdn0.weddingwire.in/article-vendor-o/5446/3_2/960/jpg/kerala-palakkad-wedding-photography-glareart-photography-15_15_135446_v1.jpeg'alt=''/>
            </div>
        </div>

     </div>
    </div>


    <Container>
        <h1 style={{textAlign:"center",fontSize:"24px", fontWeight:600, marginTop:"25px"}}>We Are Available In Several Locations</h1>
          </Container>
          </Section>
          <Footer/>
    </>

  )
}

export default Gallery

const Section = styled.div`

.gall{
  width: 100%;
  height: 250px;
  margin: 15px 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 2px solid #ffa500;
}
.gall img{
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
background-size: cover;
transition: 1s;
}
.gall:hover img{
  transform: scale(1.2);
}


`