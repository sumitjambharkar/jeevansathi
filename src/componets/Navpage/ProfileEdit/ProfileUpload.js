import React, { useState,useEffect} from "react";
import styled from "styled-components";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db,storage } from "../../../firebase";
import useAuth from "../../useContext/useAuth";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import girl from "../../image/girl.jpeg";
import man from "../../image/man.jpeg";

const ProfileUpload = ({image,displayName,gender}) => {
  const {user}  = useAuth()
  const [img ,setImag ] = useState('')

  const Input = styled('input')({
    display: 'none',
  });
  useEffect(()=>{
    if(img){
      const uploadImg =async()=>{
        const imgRef = ref(storage,`avatar/${new Date().getTime()} - ${img.name}`)
        try{
        const snap =await uploadBytes(imgRef,img)
        console.log(snap.ref.fullPath)
        const url = await  getDownloadURL(ref(storage,snap.ref.fullPath))
        await updateDoc(doc(db,"users",user.uid),{
          image:url,
          avatarPath:snap.ref.fullPath
        })
        console.log(url)
        setImag("")
        }
        catch(err){
          console.log(err.message);
        }
      }
      uploadImg()
    }

  },[img])


  return (
    <Container className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="bg_color col-10">
          <div className="row">
           <div className="col-md-4">
            <label>
              {image? <img className="img_face"  src={image} alt=""/> : <>{gender==="Male"? <img src={man} className="img_face"/>:<img src={girl} className="img_face"/>}</> }
        <Input onChange={(e)=>setImag(e.target.files[0])} accept="image/*" id="icon-button-file" type="file" />
        <IconButton style={{display:"flex",fontWeight:"500",color:"white",border:"#FFA500",backgroundColor: "#df2349",borderRadius:"1px",width:"80%"}} aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
           </div>
           <div className="col-md-6">
               <h1>{displayName}</h1>
           </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </Container>
  );
};

export default ProfileUpload;

const Container = styled.div`
  .bg_color {
    background-color: #f0f2f7;
    padding: 8px;
    margin: 1px;
  }
  .edit_click {
    display: flex;
    justify-content: space-between;
    padding: 18px;
  }
  ul {
    padding: 0 24px;
    margin-top: 18px;
  }
  li {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    color: #999;
    word-wrap: break-word;
  }
  li span {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
  }
  .title {
    color: #d9475c;
    font-size: 16px;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
  }
  .detail {
    display: flex;
    justify-content: space-around;
  }
  .about {
    width: 120px;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    color: #999;
    word-wrap: break-word;
  }
  .about_text {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
  }
  .img_face {
      width:80%;
      height:300px;
  }
  @media (max-width:600px) {
    li {
      width: 120px;
    }
  }
`;
