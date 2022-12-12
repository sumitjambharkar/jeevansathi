import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import SmsIcon from '@mui/icons-material/Sms';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import images2 from "../image/mrglogo.png";
import bg from "../image/header-sm-bg.png"
const Footer = () => {
  return (
    <>
    <FooterSection >
    <a href="https://api.whatsapp.com/send?phone=+919833188050&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
    <SmsIcon style={{color:"#fff",fontSize:40}}/>
</a>
          <FirstDiv>
          {/* <a><SmsIcon style={{color:"#fff",fontSize:40}}/></a> */}
          <div className="logoS"><img src={images2}/></div>
           <hr/>
           <strong>Let's Start New Journey With India's <br></br>matrimonial and matchmaking service.</strong>
           <p></p>
           <ul>
            <li><a target="blank" href='https://www.facebook.com/marriageorbit.co'><FacebookIcon/></a></li>
           <li><a target="blank" href='https://www.instagram.com/marriageorbit/'><InstagramIcon/></a></li>
           <li><a target="blank" href='https://twitter.com/MarriageOrbit'><TwitterIcon/></a></li>
           <li><a target="blank" href='https://www.youtube.com/channel/UC24wskR9nDHv8jnz2apRY0w'><YouTubeIcon/></a></li>
           </ul>
           </FirstDiv>
          

          <SecandDiv>
          <h2>About Us</h2>
          <hr/>
          <p><Link to="/about">About Marriageorbit.com »</Link></p>
          <p><Link to="/contact">Contact Us »</Link></p>
          <p><Link to="#">Sitemap »</Link></p>
          </SecandDiv>
          <ThirdDiv>
          <h2>Information</h2>
          <hr/>
          <p><Link to="#">Terms of Use »</Link></p>
          <p><Link to="/privacy-policy">Privacy Policy »</Link></p>
          <p><a href="https://api.whatsapp.com/send?phone=+919833188050&amp;text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">Help »</a></p>

          </ThirdDiv>
      </FooterSection>
       <FooterDiv>
        <h1>
          © 1996-2022 Marriageorbit.com | The World's Leading Matchmaking Service™
        </h1>
        <h1>Created By Smart Deal And Investment</h1>
        </FooterDiv>
    </>
  )
}

export default Footer;
const FooterSection = styled.div`
 overflow: hidden;
  background-color:#df2147;
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
  background-repeat: 100% 100%;
  background-image: url(${bg});
  .float{
    position:fixed;
    width:80px;
    height:80px;
    bottom:90px;
    right:28px;
    background-color:red;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:30px;
    box-shadow: 2px 2px 3px #999;
    z-index:100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .my-float{
    margin-top:16px;
  }
  
 `
const FooterDiv = styled.div`
background-color:#df2147;
display:flex;
justify-content:space-around;
background-repeat: 100% 100%;
background-image: url(${bg});
flex-wrap:wrap;
> h1 {
  font-family: 'Roboto Slab';
    font-size: 16px;
    padding: 24px 24px;
    color: white;
  }
  `
const FirstDiv = styled.div`
padding-top:20px;
color:white;
  .logoS img {
    width: 240px;
  }
  > h2 {
    font-size: 24px;
    font-family: 'Roboto Slab';
    font-weight: 400;
  }
  >p{
    color:white;
    padding-bottom: 10px;
    display: block;
    transition: all 0.3s ease-in-out;
    font-family: 'Roboto Slab';
  }
  >p:hover{
    transform: translate(25px);
  }
  >a {
  width: 80px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  height: 80px;
  align-items: center;
  background-color: red;
}
>ul{
  display: flex;
}
>ul li{
  margin:5px;
  list-style: none;
}
>ul li a{
	width: 40px;
	height: 40px;
  color: #fff;
	float: left;
	background: #ccc;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	border: 1px solid #fff;
	transition: 0.5s;
}
> a > MuiSvgIcon-root{
  color:red;
}

>ul li:nth-child(1) a :hover{
  color: #0047fd;
}

>ul li:nth-child(2) a :hover{
  color: #fd00a7;
}
>ul li:nth-child(3) a :hover{
  color: #00fafd;
}

>ul li:nth-child(4) a :hover{
  color: #fd0000;
}
  `
const SecandDiv = styled.div`
padding-top:20px;
color:white;
> h2 {
    font-size: 24px;
    font-family: 'Roboto Slab';
    font-weight: 400;
  }
  >p > a {
    color:#fff;
    padding-bottom:6px;
    display: block;
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
    font-family: 'Roboto Slab';
  }
  >p > a:hover{
    transform: translate(25px);
  }
  `
const ThirdDiv = styled.div`
padding-top:20px;
color:white;
> h2 {
    font-size: 24px;
    font-family: 'Roboto Slab';
    font-weight: 400;
  }
  >p > a {
    color:#fff;
    padding-bottom:6px;
    display: block;
    transition: all 0.3s ease-in-out;
    transition: 0.5s;
    font-family: 'Roboto Slab';
  }
  >p > a:hover{
    transform: translate(15px);
  }
  `