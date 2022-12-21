import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAuth from '../useContext/useAuth';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Alert from '@mui/material/Alert';
import Logo from '../image/nl.png';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(true)

  const registerNew = () => {
    
    navigate({
      pathname: "/profile/registration_new"
    })

  }
  const loginUser = () => {
    if (!email || !password) {
      setMessage(<Alert severity="error">Please Fill the All input</Alert>)
    } else {
      login(email, password)
      toast.success('Login Success!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }
  const showText = () => {
    setShowPassword(!showPassword)
  }
  const forgotPass = () => {
    setShow(false)
  }
  const sendEmail =async(e)=>{
    e.preventDefault()
    sendPasswordResetEmail(auth,email)
    .then(res=>{
      toast.success("Please check your email...",res)
      navigate({pathname:"/"})
      setShow(true)
    })
    .catch(err=>{
      toast.error("email not found",err)
    })  
  }
  return (
    <div>
      <Button style={{ background: "#fff", color: "#df2349", fontFamily: "Roboto Slab" }} onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Image><img className='App-logo' src={Logo} /></Image>
            {show ? <>Login to continue..</> : <>Reset Your Password</>}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {show ? <>
              <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                {message}
                <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ height: "40px", marginTop: "12px", outline: "none", padding: "4px" }} placeholder='Email Id' />
                <input type={showPassword ? "text" : "password"}
                  value={password} onChange={(e) => setPassword(e.target.value)} style={{ height: "40px", marginTop: "52px", outline: "none", padding: "4px" }} placeholder='Password' />
                <Button onClick={showText} style={{ marginLeft: "210px", marginTop: "-38px" }}> {showPassword ? (
                  <Visibility style={{ color: "black" }} onClick={showText} />
                ) : (
                  <VisibilityOff style={{ color: "black" }} onClick={showText} />
                )}</Button>
                <div onClick={forgotPass} style={{ height: "40px", marginTop: "12px", textAlign: "center", fontFamily: "sans-serif", fontSize: "15px",cursor:"pointer"}}><span>Forgot Password</span></div>
                <button onClick={loginUser} style={{ height: "40px", marginTop: "6px", background: "#df2349", border: "none", color: "white" }}>Login</button>
                <div style={{ height: "40px", marginTop: "12px", textAlign: "center", fontFamily: "sans-serif", fontSize: "15px" }}><span>New on Marriage?</span></div>
                <button onClick={registerNew} style={{ height: "40px", marginTop: "6px", background: "#df2349", border: "none", color: "white" }}>Register Free</button>
              </div>
            </> :
              <>
                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                  {message}
                  <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ height: "40px", marginTop: "12px", outline: "none", padding: "4px" }} placeholder='Enter Your Email Id' />
                  <p></p>
                  <button onClick={sendEmail} style={{ height: "40px", marginTop: "6px", background: "#df2349", border: "none", color: "white" }}>Send Email</button>
                  <p></p>
                  <button onClick={() => setShow(true)} style={{ height: "40px", marginTop: "6px", background: "#df2349", border: "none", color: "white" }}>Login to continue..</button>
                  <p></p>
                  <button onClick={registerNew} style={{ height: "40px", marginTop: "6px", background: "#df2349", border: "none", color: "white" }}>New on Marriage ?</button>
                </div>
              </>
            }
          </Typography>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}

const Image = styled.div`
display: flex;
justify-content: center;
align-items: center;
.App-logo {

width:65px;
margin-bottom: 15px;
}

@media (prefers-reduced-motion: no-preference) {
.App-logo {
  animation: App-logo-spin infinite 1s linear;
}
}
@keyframes App-logo-spin {
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
}`