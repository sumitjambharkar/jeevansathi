import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { updateEmail } from "firebase/auth";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../useContext/useAuth";
import { auth, db } from "../../../firebase";

const style = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Setting() {
  
  
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [emailShow, setEmailShow] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [toast,setToast] = useState("")

  

  const changeEmail = async(e) => {
    e.preventDefault();
    try{
      const result = await updateEmail(auth.currentUser,newEmail)
      await updateDoc(doc(db,"users",auth.currentUser.uid),{
        email:newEmail
      })
      console.log(result);
      setToast("change email success...")
      navigate('/')
    }
    catch(error){
      console.log(error);
      setToast("email not found")
    }
    setNewEmail("")
  };
  const changePassword = (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    user
      .updatePassword(newPassword)
      .then(() => {
        setToast("change password success...")
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        setToast("password not found")
      });
      setNewPassword("")
  };

  const handleClose = () => {
    setOpen(false);
    setToast('')
  };
  const handleOpen = () => {
    setOpen(true);
    setShow(true);
    setPasswordShow(false);
    setEmailShow(false);
  };
  const handleEmail = () => {
    setEmailShow(true);
    setShow(false);
  };
  const handlePassword = () => {
    setPasswordShow(true);
    setEmailShow(false);
    setShow(false);
  };

  return (
    <div>
      <span onClick={handleOpen}>Setting</span>
      <Modal
        open={open}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {show ? (
              <>
                <span style={{marginLeft:"130px",marginTop:"-35px",position:'absolute',color:"black"}}>
                <Button style={{color:"black"}} onClick={handleClose}><CloseIcon/></Button>
                </span>
                <h3> Account Settings</h3>
                <p></p>
                <Button onClick={handleEmail}>Change Email Id</Button>
                <p></p>
                <Button onClick={handlePassword}>Change Password</Button>
            
              </>
            ) : (
              ""
            )}
            <>
              {emailShow ? (
                <>
                <span style={{marginLeft:"130px",marginTop:"-35px",position:'absolute',color:"black"}}>
                <Button style={{color:"black"}} onClick={handleClose}><CloseIcon/></Button>
                </span>
                <div>
               <span style={{color:"green"}}>{toast}</span>
               </div>
                 <h3>Update Email Id</h3>
                  <label>Please Enter your new Email Id</label>
                  <p></p>
                  <Input>
                  <input
                    name="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="New Email"
                  />
                  </Input>
                  <p></p>
                  <Button style={{background:'#df2349',color:"white"}}  onClick={changeEmail}>Submit</Button>
                </>
              ) : (
                ""
              )}
            </>
            <>
              {passwordShow ? (
                <>
                <span style={{marginLeft:"130px",marginTop:"-35px",position:'absolute'}}>
                <Button style={{color:"black"}} onClick={handleClose}><CloseIcon/></Button>
                </span>
                <div>
               <span style={{color:"green"}}>{toast}</span>
               </div>
                <h3>Update Password</h3>
                  <label>Please Enter your new Password</label>
                  <p></p>
                  <Input>
                  <input
                    name="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                  />
                  </Input>
                  <p></p>
                  <Button  style={{background:'#df2349',color:"white"}}  onClick={changePassword}>Submit</Button>
                </>
              ) : (
                ""
              )}
            </>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
const Input = styled.div`
  > input {
    width: 270px;
    height: 40px;
    border: 1px solid #df2349;
    border-radius: 2px;
    padding:4px;
  }
  > input:focus {
    outline: none;
   
  }`
