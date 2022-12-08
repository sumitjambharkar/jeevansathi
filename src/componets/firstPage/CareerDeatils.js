import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Head from "./Head";
import { sta, cit, inc, edu } from './data'
import useAuth from "../useContext/useAuth";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase";
import SimpleFooter from "./SimpleFooter";
import uploadImage from '../image/upload.png';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

const CareerDeatils = () => {

  const navigate = useNavigate()
  const { user } = useAuth()
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [qaulification, setQaulification] = useState("")
  const [work, setWork] = useState("")
  const [income, setIncome] = useState("")
  const [collage, setCollage] = useState("")
  const [img, setImag] = useState('')
  const [data,setData] = useState("")
  console.log(data.image);

  useEffect(() => {
    db.collection("users").doc(user.uid).onSnapshot(snapshot=>(
      setData(snapshot.data())
    ))
  }, [user.uid])
  

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
  
  const careerDetails = () => {
    db.collection("users").doc(user.uid).update({
      country, city, state, qaulification, work, income, collage

    })
    navigate({ pathname: "/life-style-deatils" })
  }


  return (
    <Section>
      <Head />
      <div className="container">
        <form onSubmit={careerDetails}>
          <div className="row">
            <div className="col-md-3"></div>

            <div className="col-md-6">
              <h5>Great! You are about to complete your marriageorbit profile</h5>
              <div className="space">
                <div className="row">
                  <div className="col-md-12">
                    <label style={{ display: "flex", justifyContent: "center" }}>
                      {!data?.image?
                      <>
                      <Input onChange={(e) => setImag(e.target.files[0])} accept="image/*" id="icon-button-file" type="file" />
                      <img style={{ width: "30%"}} src={uploadImage} />
                      </> :
                      <img style={{ width: "20%",borderRadius:"50%"}} src={data.image} alt=""/>
                        }
                    </label>
                  </div>
                </div>
              </div>
              <div className="space">
                <div className="row">
                  <div className="col-md-3">
                    <label>Country</label>
                  </div>
                  <div className="col-md-9">
                    <select required value={country} onChange={(e) => setCountry(e.target.value)} className="select">
                      <option value="" disabled>Select</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Israil</option>
                      <option>America</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space">
                <div className="row">
                  <div className="col-md-3">
                    <label>State</label>
                  </div>
                  <div className="col-md-9">
                    <select required value={state} onChange={(e) => setState(e.target.value)} className="select">
                      <option value="" disabled>Select</option>
                      {sta.map((doc) => (
                        <>

                          <option>{doc}</option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space">
                <div className="row">
                  <div className="col-md-3">
                    <label>City</label>
                  </div>
                  <div className="col-md-9">
                    <select required value={city} onChange={(e) => setCity(e.target.value)} className="select">
                      <option value="" disabled>Select</option>
                      {cit.map((doc) => (
                        <>

                          <option>{doc}</option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="space">
                <div className="row">
                  <div className="col-md-3">
                    <label>University</label>
                  </div>
                  <div className="col-md-9">
                    <select required className="select" value={collage} onChange={(e) => setCollage(e.target.value)}>
                      <option value="" disabled>Select</option>
                      {sta.map((doc) => (
                        <>

                          <option>{doc}</option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space">
                <div className="row">
                  <div className="col-md-3">
                    <label>Heighest Degree</label>
                  </div>
                  <div className="col-md-9">
                    <select required value={qaulification} onChange={(e) => setQaulification(e.target.value)} className="select">
                      <option value="" disabled>Select</option>
                      {edu.map((doc) => (
                        <>

                          <option>{doc}</option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space">
                <div className="row">
                  <div className="col-md-3">
                    <label>Occupation</label>
                  </div>
                  <div className="col-md-9">
                    <select required value={work} onChange={(e) => setWork(e.target.value)} className="select">
                      <option value="" disabled>Select</option>
                      <option>Private Sector</option>
                      <option>Govt/Public Sector</option>
                      <option>Defense</option>
                      <option>Business/Self Employee</option>
                      <option>Looking For Job</option>
                      <option>Not Working</option>
                      <option>Retired</option>
                      <option>Student</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space">
                <div className="row">
                  <div className="col-md-3">
                    <label>Anual Income</label>
                  </div>
                  <div className="col-md-9">
                    <select required value={income} onChange={(e) => setIncome(e.target.value)} className="select">
                      <option value="" disabled>Select</option>
                      {inc.map((doc) => (
                        <>

                          <option>{doc}</option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="btn">
                  <button type="submit" value="Submit">Continue</button>
                </div>
              </div>
            </div>

            <div className="col-md-3"></div>
          </div>
        </form>
      </div>
      <SimpleFooter />
    </Section>
  );
};

export default CareerDeatils;

const Section = styled.div`
.space input,textarea, .select {
  width:95%;
  height: 140%;
  margin: 0 10px;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  outline: none;
}

.space{
  margin: 20px 0;
}

.space label{
  color: #353e4f;
  font-size: 15px;
  font-family:"sans-serif";
  font-weight: 100;

}

select{
  font-size: 15px;
  font-family:"sans-serif";
}
.btn {
    display: flex;
    justify-content: center;
    margin-top:70px;
}
button {
    background-color: #FFA500;
    padding: 12px;
    color: white;
    border: none;
    width: 150px;
    font-size: 18px;
    font-weight: 600;
}
h5 {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    margin: 16px;
    text-align: center;
  }

`
