import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../image/bg-border.png";
import { db } from '../../firebase';

AOS.init();

const Story = () => {

    const [data, setData] = useState([])
   
    useEffect(() => {
        db.collection("success").onSnapshot((snapshot)=>{
            setData(snapshot.docs.map((doc)=>({
                id : doc.id,
                data : doc.data()
            })))
        })
    }, [])

    return (
        <>
            <Title>
                <h2>Matrimony Service with Millions of Success Stories</h2>
                {/* <div className="fancy"><img src={images}/></div> */}
            </Title>
            <StorySection className='container'>
                {data.map((ele,i) => {
                    return (
                        <React.Fragment key={i}>
                            <StoryDiv>
                                <StoryImage >
                                    <span>
                                    </span>
                                    <img alt='img'  src={ele.data.image} />
                                   
                                </StoryImage>
                                
                                <StoryDetails data-aos="flip-up" data-aos-duration="1800">
                                    <p></p>
                                <h3>{ele.data.name}</h3>
                                    <div className="descrip"><p>{ele.data.desc?.substr(0,70)}</p></div>
                                    <p>
                                        {" "}<Link to={`/couple/${ele.id}`}>Read More</Link>
                                    </p>

                                </StoryDetails>
                            </StoryDiv>

                        </React.Fragment>
                    )
                })}
            </StorySection>

        </>
    )


}
const Title = styled.div`
>h2 {
    font-size: 35px;
    text-align:center;
    margin-top:70px;
    margin-bottom:70px;
    color:#FFA500;

}
>.fancy {
    display: flex;
    justify-content: center;
}
`
const StorySection = styled.div`
   display:flex;
   justify-content:space-around;
   flex-wrap:wrap;`

const StoryDiv = styled.div`
   width:320px;
   height:430px;
   margin: 24px;
   border-radius:15px;
   padding:4px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   
   `

const StoryImage = styled.div`
   > img {
       
       width: 312px;
       height:285px;
       position: relative;
       border-radius:15px;
       overflow: hidden !important;
       
   }

   span{
       content: '';
       position: absolute;
       width: 286px;
       height:260px;
       margin: 12px;
       background: #0008;
       z-index: 1;
       opacity: 0;
       transition: 0.5s;
       border-radius: 13px;
   }


   span:hover{
     opacity: 100%;
     transform: scale(1.1);
   }

   

`

const StoryDetails = styled.div`
  width:330;
  height:250px;
  
  >h3{
    margin-top: 15px;
    font-size: 22px;
    line-height: 22px;
    text-align:center;
    color:#FFA500;
  }
   >p{
    font-size: 15px;
    font-weight:500;
    color: #72727d;
    text-align:center;
    margin:4px;
   }
   
   >p >a {
       text-decoration:none;
       text-align:center;
       color: #FFA500;
       border:1px solid #FFA500;
       padding:7px;
       border-radius:10px;    
   }
   >p >a:hover{
    
    background-color:#FFA500;
    color:#fff;
   }`


export default Story;