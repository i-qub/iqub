import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const InfoDiv=styled.div`
width:100vw;
padding:60px 80px;
font-family:sans-serif;
&>.title{
    font-size:2.9rem;
    font-weight:100;
    letter-spacing:1px;
}
&>div{
    padding:30px 0px;
    &>.message{
        display:flex;
        align-items: center;
        font-size:2rem;
        color:rgb(100,100,100);
        font-weight:100;
        min-height:12vh; 
    }
    &>.circles{
        width:10%; 
        display:flex;
        justify-content:space-evenly;
        margin-top:30px;
        &>.circle{
            width:30px;
            height:30px;
            display:block;
            background:rgb(200,200,200);
            border-radius:50%;
            cursor:pointer;
        }
        &>.circle.active{
            background:rgb(100,100,100);
        }
    }
}
`
export default function Info() {
 const messages=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempore?","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nulla, provident illo vero veniam quas!","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit accusamus omnis earum cum itaque incidunt consequuntur voluptas ratione atque."];
 const [msg,setMsg]=useState(0);
 useEffect(()=>{
   const timer=setInterval(() => {
    setMsg(m=>(m+1)%3);
   }, 3000);
   return ()=>{clearInterval(timer)}
 },[]);
  return (
    <InfoDiv>
      <span className="title">Lorem ipsum dolor sit:</span>
      <div>
        <span className='message'>{messages[msg]}</span>
        <div className="circles">
        <span className={msg==0?"circle active":"circle"} onClick={()=>setMsg(0)}></span>
        <span className={msg==1?"circle active":"circle"}  onClick={()=>setMsg(1)}></span>
        <span className={msg==2?"circle active":"circle"}  onClick={()=>setMsg(2)}></span>
        </div>
      </div>
    </InfoDiv>
  )
}