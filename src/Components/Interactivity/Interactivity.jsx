import React, { useState } from 'react'
import styled from 'styled-components'
const InteractivityDiv=styled.div`
background:linear-gradient(312.1deg,#9a4afc -11.86%,#600271 -0.71%,#ad3b96 49.5%,#ef8555 106.42%,#b73360 108.91%);
width:100%;
height:100vh;
font-family:sans-serif;
padding:80px 40px;
display:flex;
flex-direction:column;
align-items:center;
&>span{
    color:white;
    font-size:3rem;
    font-weight:500;
    letter-spacing:2px;
}
& .message{
    font-size:1.2rem;
    width:40%;
    text-align:center;
    margin-top:50px;
}
.button-div{
    display:flex;
    width:90%;
    margin-left:auto;
    margin-top:30px;
    &>button{
        width:30%;
        padding:30px 20px;
        font-size:1.7rem;
        border:none;
        background-color:rgba(0,0,0,0.2);
        color:rgb(200,200,200);
        cursor:pointer;
    }
    & .active{
        background-color:rgba(0,0,0,0.6);
        color:white;
    }
    &>button:first-child{
        border-radius:20px 0px 0px 20px;
    }
    &>button:last-child{
        border-radius:0px 20px 20px 0px;
    }
}
`
export default function Interactivity() {
    const [buttons,setButtons]=useState([true,false,false])
  return (
    <InteractivityDiv>
        <span>Lorem Ipsum Dolor Sit</span>
        <div className="button-div">
            <button className={buttons[0] && 'active'} onClick={()=>setButtons([true,false,false])}>Lorem, ipsum dolor</button>
            <button className={buttons[1] && 'active'} onClick={()=>setButtons([false,true,false])}>Lorem, ipsum dolor</button>
            <button className={buttons[2] && 'active'} onClick={()=>setButtons([false,false,true])}>Lorem, ipsum dolor dol</button>
        </div>
        <span className='message'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eligendi debitis cupiditate ad enim neque.</span>
    </InteractivityDiv>
  )
}
