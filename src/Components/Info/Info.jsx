import React, { useState } from 'react'
import styled from 'styled-components'
const InfoDiv=styled.div`
width:100vw;
padding:60px 80px;
font-family:sans-serif;
&>.title{
    font-size:2.8rem;
    font-weight:100;
    letter-spacing:1px;
}
&>div{
    padding:30px 0px; 
    &>.message{
        font-size:2.9rem;
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
        }
        &>.circle.active{
            background:rgb(100,100,100);
        }
    }
}
`
export default function Info() {
 const messages=["Hello","Hi","Hey"];
 const [msg,setMsg]=useState(0);
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
