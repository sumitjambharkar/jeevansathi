import React from 'react'
import styled from 'styled-components';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { useState } from 'react';
import useAuth from '../../useContext/useAuth';
import { db } from '../../../firebase';


const CriticalFields = ({birth,status}) => {
    
    const {user} = useAuth()
    
    const [show,setShow] = useState(true)
    const [date,setDate] = useState("")
    const [marital,setMarital] = useState("")
    const handleEdit = (birth,status) =>{
        setShow(false)
        setDate(birth)
        setMarital(status)
    }
    const handleSave = () => {
        setShow(true)
        db.collection("users").doc(user.uid).update({
            birth:date,
            maritalStatus:marital
        })
    }

    function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);
    
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  return (
    <Container className='container'>
        <div className='row'>
        <div className='col-1'>
        </div>
        <div className='bg_color col-10'>
        <div className='edit_click '>
        <div className='title'><PersonOutlineSharpIcon/><span>Critical Fields - Can be edited only once in lifetime</span></div>
        <div className='title'>{show? <span onClick={()=>handleEdit(birth,status)}>Edit</span>:null}</div>
        </div>
        {show? <div className='row'>
        <div className='col-5'>
           <ul>
           <li>Age</li>
            <li><span>{calculate_age(new Date(birth))} Year</span></li>
           </ul>
        </div>
        <div className='col-5'>
           <ul>
           <li>Marital Status</li>
            <li><span>{status}</span></li>
           </ul>
        </div>
        </div>
        :
        <div className='row'>
        <div className='col-5'>
           <ul>
           <li>Age</li>
            <li><input value={date} onChange={(e)=>setDate(e.target.value)} type="date"/></li>
           </ul>
        </div>
        <div className='col-5'>
           <ul>
           <li>Marital Status</li>
           <li><select value={marital} onChange={(e)=>setMarital(e.target.value)}>
            <option>Never Married</option>
            <option>Awaiting Divorce</option>
            <option>Divorce</option>
            <option>Widowed</option>
            <option>Annuald</option>
            </select></li>
           </ul>
        </div>
        <div className='btn'>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleSave}>Cancel</button>
        </div>
        </div>}
        </div>
        <div className='col-1'>
        </div>
        </div>
    </Container>
  )
}

export default CriticalFields;

const Container = styled.div`
.bg_color {
    background-color: white;
    padding: 8px;
    margin:1px;
}
.edit_click {
    display: flex;
    justify-content: space-between;
    padding:18px;
}
ul {
    padding:0 24px;
    
}
li {
    font-family: "Roboto","sans-serif";
    font-weight: 300;
    color: #999;
    word-wrap: break-word;
}
li input {
    width: 100%;
    padding: 12px;
    height:40px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
}
li input,select:focus {
    outline: none;
}
li select {
    width: 100%;
    height:40px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
}

li span {
    font-family: "Roboto","sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
}
.title {
    color:#d9475c;
    font-size: 16px;
    font-family: "Roboto","sans-serif";
    font-weight: 300;
    
}
.title span {
    color:#d9475c;
    font-size: 16px;
    font-family: "Roboto","sans-serif";
    font-weight: 300;
    cursor: pointer;
}
.detail {
    display: flex;
    justify-content: space-around;
}
.btn {
    display: flex;
    justify-content: center;
    margin-top:4%;
}
.btn button {
    background-color:#df2349;
    width:120px;
    height:100%;
    padding:4px;
    margin: 4px;
    font-size: larger;
    color:white;
    border: none;
}
@media (max-width:600px) {
    li {
      width: 120px;
    }
  }
`