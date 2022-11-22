import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Couple from './componets/firstPage/Couple';
import TellUs from './componets/firstPage/TellUs';
import Video from './componets/firstPage/Video';
import HomePage from './componets/HomePage';
import useAuth from './componets/useContext/useAuth';
import ProfileDetails from './componets/firstPage/ProfileDetails';
import CareerDeatils from './componets/firstPage/CareerDeatils';
import LifeStyle from './componets/firstPage/LifeStyle';
import FreeRegister from './componets/firstPage/FreeRegister';
import HomeScreen from './componets/HomeScreen';
import Matches from './componets/Navpage/Matches';
import Viewpage from './componets/Navpage/ViewPage';
import ViewProfile from './componets/Navpage/ViewProfile';
import AboutPage from './componets/firstPage/AboutPage'
import ContactPage from './componets/firstPage/ContactPage';
import PolicyPage from './componets/firstPage/PolicyPage';
import Chat from "./componets/chat/Chat"
import MyPhoto from './componets/Navpage/MyPhoto';
import Service from './componets/Navpage/Service';
import Inbox from './componets/Navpage/Inbox';
import Search from './componets/Navpage/Search'
import Gallery from './componets/Navpage/Gallery';

const App = () => {
  
  const {user} = useAuth()
  
  return (
    <>
    <Router>
      <Routes>
       
        {!user?
         <>
        <Route path='/' element={<HomePage/>} />
        <Route path='/profile/registration_new' element={<FreeRegister/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/tellus' element={<TellUs/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/privacy-policy' element={<PolicyPage/>}/>
        <Route path='/couple/:personId' element={<Couple/>}/>
        </>   :
        <>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/profile-deatils' element={<ProfileDetails/>} />
        <Route path='/careear-deatils' element={<CareerDeatils/>} />
        <Route path='/life-style-deatils' element={<LifeStyle/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/tellus' element={<TellUs/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/privacy-policy' element={<PolicyPage/>}/>
        <Route path='/Matches' element={<Matches/>}/>
        <Route path='/view-profile/:Id' element={<Viewpage/>}/>
        <Route path='/my-profile' element={<ViewProfile/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/myphoto' element={<MyPhoto/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        </>}
      </Routes>
    </Router>
    </>
  )
}

export default App