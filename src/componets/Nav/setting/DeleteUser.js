import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { reauthenticateWithCredential,EmailAuthProvider,deleteUser  } from "firebase/auth";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { auth } from "../../../firebase";


const style = {
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:360,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [account, setAccount] = useState(false)
  const [err ,setErr] = useState("")

  const [rePassword, setRePassword] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setAccount(false)
    setShow(true)
    setErr("")
  };
  const sendPassword = async() => {
    if(! rePassword) {
        setErr("Please fill out this field ?")
        
    }else{
        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            rePassword
        )
        reauthenticateWithCredential(auth.currentUser, credential).then((res) => {
            console.log(res);
            setShow(false)
            setAccount(true)
          }).catch((error) => {
            setErr("Enter Valid Password")
            console.log(error);
          });
        
    }
    
  };
  const handleDelete = () =>{
    const user = auth.currentUser;
    deleteUser(user).then((res) => {
      console.log(res);
    }).catch((error) => {
     console.log(error);
    });

  }

  return (
    <div>
      <span onClick={handleOpen}>Privacy</span>
      <Modal
        open={open}
        // onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <>
              {show ? 
              <>
              <span style={{marginLeft:"130px",marginTop:"-45px",position:'absolute'}}>
               <Button style={{color:"black"}} onClick={handleClose}><CloseIcon/></Button>
               </span>
               <div>
               <span style={{color:"red"}}>{err}</span>
               </div>
               <h3 >Delete Account</h3>
               <p></p>
               <label >Please Enter your current Password</label>
               <p></p>
              <Input>
              <input
              name="password"
              value={rePassword}
              placeholder="Enter Password"
              onChange={(e) => setRePassword(e.target.value)}
            />
              </Input>
              <p></p>
            <Button style={{background:'#FFA500',color:"white"}}  onClick={sendPassword}>Submit</Button>
            </>
             : ""
              }
            </>
            {account ? 
            <>
            <span style={{marginLeft:"130px",marginTop:"-45px",position:'absolute'}}>
               <Button style={{color:"black"}} onClick={handleClose}><CloseIcon/></Button>
               </span>
            <h1>Delete Account</h1>
            <p></p>
            <label style={{fontSize:"16px"}}>Are you sure you want to delete your account? This action will delete all of your files and records</label>
            <p></p>
            <Button style={{background:'#FFA500',color:"white"}} onClick={handleDelete}>Confirm</Button>
            </>
             : ""
            }
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
    border: 1px solid #ffa500;
    border-radius: 2px;
    padding:4px;
  }
  > input:focus {
    outline: none;
   
  }`
