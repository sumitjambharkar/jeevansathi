import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import Head from '../Head';
import useAuth from '../useContext/useAuth';
import Navbar from '../Nav/Navbar';
import ProfileUpload from './ProfileEdit/ProfileUpload';
import CriticalFields from './ProfileEdit/CriticalFields';
import BasicDetails from './ProfileEdit/BasicDetails';
import AboutMe from './ProfileEdit/AboutMe';
import FamilyDetails from './ProfileEdit/FamilyDetails';
import EducationCareer from './ProfileEdit/EducationCareer';
import LifeStyle from './ProfileEdit/Lifestyle';
import Footer from '../firstPage/Footer';





const ViewProfile = () => {
    
  const {user}  = useAuth()
  const [userData, setUserData] = useState("")
  console.log(userData);
  useEffect(() => {
    db.collection("users").doc(user.uid).onSnapshot(snapshot=>(
      setUserData(snapshot.data())
    ))
  }, [user.uid])
  
  return (
    <>
    <Head/>
    <Navbar/>
    <Container>
      <ProfileUpload gender={userData.gender} image={userData?.image} displayName={userData?.displayName}/>
      <CriticalFields birth={userData?.birth} status={userData?.maritalStatus}/>
      <BasicDetails gender={userData?.gender} displayName={userData?.displayName} 
      height={userData?.height} religion={userData?.religion} tounge={userData?.tounge}
      location={userData?.city} caste={userData?.community} income={userData?.income}/>
      <AboutMe family={userData?.family} qaulification={userData?.qaulification}
      manglik={userData?.manglik} number={userData?.number} work={userData?.work}
      about={userData?.about} aboutFamily={userData?.aboutFamily}/>
      <EducationCareer income={userData?.income} qaulification={userData?.qaulification} collage={userData?.collage} work={userData?.work}/>
      <FamilyDetails fatherWork={userData?.fatherWork} motherWork={userData?.motherWork} brother={userData?.brother} sister={userData?.sister}/>
      <LifeStyle habit={userData?.habit}asset={userData?.asset} language={userData.language}blood={userData.blood}/>
    </Container>
    <Footer/>
    </>
  )
}

export default ViewProfile;

const Container = styled.div`
background-color: #e7e6e6;
padding:24px`