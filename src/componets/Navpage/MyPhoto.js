import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import useAuth from "../useContext/useAuth";
import Footer from "../firstPage/Footer";
import styled from "styled-components";
import Navbar from "../Nav/Navbar";
import Head from "../Head";

function MyPhoto() {
  var { user } = useAuth();
  const [card, setCard] = useState([]);
  const [img, setImag] = useState("");
  const [userN, setUserN] = useState();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .onSnapshot((snapshot) => {
        setProfile(snapshot.data());
      });
  },);

  useEffect(() => {
    getDoc(doc(db, "users", user.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUserN(docSnap.data());
      }
    });
    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          const snap = await uploadBytes(imgRef, img);
          console.log(snap.ref.fullPath);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
          await updateDoc(doc(db, "users", user.uid), {
            image: url,
            avatarPath: snap.ref.fullPath,
          });
          console.log(url);
          setImag("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImg();
    }
  }, [img]);

  useEffect(() => {
    db.collection("card").onSnapshot((snapshot) =>
      setCard(snapshot.docs.map((doc) => ({ data: doc.data() })))
    );
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="robots" content="follow,index" />
        <meta http-equiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="On Marriageorbit, you can find many genuine Hindi Matrimonial Male and Female profiles.
      Safe and secure dating with total anonymity. Now add your profile!Indian Matrimonial Services from marriageorbit Matrimonials Portal for Indian Singles. 
      Register now to find Indian matrimony profiles from your city, community, and profession."
        />

        <meta
          name="keywords"
          content="Matrimony services in andheri, matchmaking services in andheri, Matrimonial websites to get womens, matrimonials, couples matchmaking companies in andheri Brides, matchmaking services in andheri, grooms, shaadi, Online Matrimonial, 
      Online Matrimony, female partner for shadi in mulund, Online matchmaking Services,Indian single girls in ,girls for marriage in mahim
      lifepartner for wedding in Andheri.get girlfriend for marriage in sion.diffrent casts of girls for marriage in andheri.
      services of matrimony for mens in andheri, Matrimonial websites to find girls, matrimonials, couples girls and boys and girls matchmaking companies in mahalaxmi, Brides, matchmaking services in andheri, grooms, shaadi, Online Matrimonial, 
      Online Matrimony for females and males, male partner for shadi in jogeshwari, Online matchmaking Services,Indian single boys and girls in kurla,boys and girls for marriage in mahalaxmi
      lifepartner for wedding in andheri.get boyfriend for marriage in andheri.diffrent casts of boys and girls for marriage in andheri.
      hindu girls and boys and girls for marriage."
        />

        <meta name="author" content="Design and Promoted By Marriageorbit" />
        <meta property="og:url" content="https://marriageorbit.com/myphoto" />
        <meta
          property="og:type"
          content="Matrimonial Matchmaking Service In India"
        />
        <meta
          property="og:title"
          content="My Photo | Best matchmaking services in Juhu"
        />
        <meta
          property="og:image"
          content="https://marriageorbit.com/static/media/logos.a6d6cf2e05ff270da4b5.png"
        />
        <meta property="og:site_name" content="Marriageorbit.com" />

        <link rel="canonical" href="https://marriageorbit.com/myphoto" />

        <title>My Photo | Best matchmaking services in Juhu</title>

        <link
          rel="icon"
          href="https://marriageorbit.com/static/media/nl.6247103f9d5641b1f3f1.png"
          sizes="16x16"
          type="image/png"
        />
      </Helmet>
     <Head/>
     <Navbar/>
     <Section>
     <div className="con mt-5">
        <div className="container cono">
          <div className="row">
            <div className="col-md-11 sm-12 mt-5">
              <div className="photo mt-4">
                <div className="row" width="90%">
                  <div className="col-md-3">
                    <div className="img mt-5">
                      <img src={profile ? profile.image : null} alt="" />
                    </div>
                  </div>

                  <div className="col-md-9">
                    <div className="row mt-4">
                      <div className="text">
                        <strong>Add your photo and</strong>
                        <h2>get 5 times more responses!</h2>
                      </div>
                    </div>

                    <div className="row text-center mt-5">
                      <div className="col-md-5">
                        <div className="textt">
                          <input
                            onChange={(e) => setImag(e.target.files[0])}
                            type="file"
                          />
                          <a>
                            <UploadFileIcon />
                            Uplod
                          </a>
                        </div>
                      </div>

                      <div className="col-md-1">
                        <strong>OR</strong>
                      </div>

                      <div className="col-md-5">
                        <div className="textt">
                          <a>Photo at</a>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className=" col-md-12  textta">
                        <p>
                          Note : Only Image formats allowed. Image size should
                          be upto 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 mb-5">
          {card.map((ele) => (
            <>
              <div className="col-md-3">
                <div className="pic">
                  <img src={ele.data.image} alt="" />
                  <div className="pic1">
                    <span>{ele.data.displayName}</span>
                    <p>{ele.data.city}</p>
                    <p>{ele.data.age}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
     </Section>

      <Container>
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 600,
            marginTop: "25px",
          }}
        >
          We Are Available In Several Locations
        </h1>
      </Container>
      <Footer />
    </>
  );
}

export default MyPhoto;

const Section = styled.div`
.con{
  width:"100%";
  min-height: 500px;
  background: url('../image/bg.png');
  background-size: cover;
}
.ro{
  width:"90%";
}
.photo {
   background: #fff5;
   width:"100%";
   min-height:300px;
}
.img{
  width:200px;
  height: 200px;
  background: #fff;
  border: 2px solid #ffa500;
  position: relative;
}
.img img {
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.text{
  width:"100%";
  height: auto;
  text-align: center;
}

.text strong{
 color: #fff;
 font-size: 18px;
}
.textta p{
  color: #fff;
  padding: 10px;
  border-bottom: 2px solid #ffa500;
  overflow: hidden;
  width: "100%";

}

.textt {
  height: 40px;
  width: "95%";
  margin: 0 auto;
  background: #ffa500;
  outline: none;
  border: 1px solid #fff;
  z-index: 1;
  line-height: 40px;
  position: relative;
}
input[type="file"]{
  height: 40px;
  position: absolute;
  margin: 0 auto;
  background: #ffa500;
  outline: none;
  border: 1px solid #fff;
  opacity: 0;
  left: 0;
  overflow: hidden;
}
.cono{
  width: "100%";
  overflow: hidden;
}
img {
    vertical-align: middle;
    border-style: none;
    width: 100%;
}
@media(max-width:768px){
  .img{
   width: "80%";
   margin: 0 auto;
  }

  .photo{
    margin: 0 auto;
  }
}`