import React from 'react';
import {Helmet} from "react-helmet";
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import Footer from '../firstPage/Footer';
import {age,cit,hei,rel,cas,mot} from '../firstPage/data'
import { db } from '../../firebase';
import Navbar from '../Nav/Navbar';
import Head from '../Head';

const Search = () => {

 
  const [card, setCard] = useState([])

  useEffect(() => {
    db.collection("card").onSnapshot(snapshot=>(
      setCard(snapshot.docs.map((doc)=>(
        {data:doc.data()}
      )))
    ))
  }, [])

  return (
    <>
    <Helmet>
      
      </Helmet>
      <Head/>
   <Navbar/>
  <Section>
  <div className='container se mt-5'>
    <div className='row mt-3'>
      <div className='label col-md-3 sm-12'>
        <label>age</label>
      </div>
      <div className='col-md-7'>
        <div className='searr'>
        <select>
          {age.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        <select>
        {age.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Height</label>
      </div>
      <div className='col-md-7'>
        <div className='searr'>
        <select>
          {hei.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        <select>
          {hei.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        
        <label>Marital Status</label> 
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
             <option >Select</option>
                 <option>Married</option>
                 <option>Never Married</option>
                 <option>Divorce</option>
             </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Religion</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
             <option >Select</option>
                 {rel.map((ele)=>{
                     return <option >{ele}</option>
                 })}
             </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Caste</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
        {cas.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>Mother Tongue</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
        {mot.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <label>City</label>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
        <select>
        {cit.map((ele)=>(
            <option>{ele}</option>
          ))}
        </select>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='label col-md-3 sm-12'>
        <span>Photo Settings</span>
      </div>
      <div className='col-md-7'>
        <div className='ser'>
       <input type="checkbox"/>
         <span>  Only with photo</span>
        </div>
      </div>
    </div>

    <div className='row mt-3 mb-5'>
      <div className='col-md-3 sm-12'>
        <label></label>
      </div>
      <div className='col-md-7'>
      <Link to="/"><button type="submit" class="btn" name="btnSearch"><i class="fa fa-search mr-2"></i> Search Profile</button></Link>
      </div>
    </div>
  
  </div>
  <div className='container'>
    <div className='row mt-5 mb-5'>
    {card.map((ele)=>(
    <>
     <div className='col-md-3'>
     <div className='pic'>
     <img src={ele.data.image} alt=''/>
      <div className='pic1'>
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
  <Footer/>
  </>
  )
}
export default Search;

const Section = styled.div`

.ser select{
  width: 100%;
  margin-top: 15px;
  outline: none;
}

.btn{
  background-color: #ffa500;
}

.searr select{
  width: 50%;
}

input[type=checkbox], input[type=radio] {
  box-sizing: border-box;
  padding: 0;
  margin-top: 19px;
 
}

.se{
  background-color: #eee;
  padding: 5px;
  margin-bottom: 20px;
}

.label{
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

select{
  width: 100%;
  height: 40px;
  margin-top: 15px;
  outline: none;
}
img {
    vertical-align: middle;
    border-style: none;
    width: 100%;
}

`