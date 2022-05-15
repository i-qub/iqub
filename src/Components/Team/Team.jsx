import React, { useState } from 'react'
import styled from 'styled-components'
import TeamModal from './TeamModal'
const info=<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons8-info 1">
<path id="Vector" d="M44 24C44 35.045 35.045 44 24 44C12.955 44 4 35.045 4 24C4 12.955 12.955 4 24 4C35.045 4 44 12.955 44 24Z" fill="#005EB8"/>
<path id="Vector_2" d="M22 22H26V33H22V22ZM26.5 16.5C26.5 17.879 25.379 19 24 19C22.621 19 21.5 17.879 21.5 16.5C21.5 15.121 22.621 14 24 14C25.379 14 26.5 15.121 26.5 16.5Z" fill="white"/>
</g>
</svg>;
const TeamDiv=styled.div`
width:100vw;
padding:30px 20px;
font-family:sans-serif;
&>.top{
    width:90%;
    margin:0px auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    &>.title{
        font-size:3.5rem;
        width:50%;
        font-weight:300;
    }
    &>.line{
        width:90%;
        height:4px;
        background:linear-gradient(-80deg, #01a49e, #005EB8);
    }
}
&>.cards{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    &>.outer{
        position:relative;
        width:300px;
        height:300px;
        margin:1.5rem 1rem;
        &>.image{
            width:300px;
            height:300px;
            background-size:contain;
            background-repeat:no-repeat;
            clip-path: circle(25% at 50% 50%);
            transition:all 0.6s ease;              
        }
        & span{
            display:block;
        }
        &>.info{
            position:absolute;
            transition:all 0.3s ease;
            &>span:first-child{
                font-size:1.1rem;
            }
            &>span:nth-child(2){
                font-size:1rem;
                font-weight:lighter;
                color:rgba(0,0,0,0.7);
                margin-top:.2rem;
            }
        }
        &>svg{
            position:absolute;
            right:23%;
            top:60%;
            transition:all .3s ease;
            pointer-events:none;
        }
        &>.info>span{
            width:300px;
            text-align:center;
        }
        &>.image:hover{
            clip-path: circle(100% at 50% 50%);
        }
        &>.image:hover~.info{
            transform:translateY(-130%);
            filter:invert(1);
        }
        &>.image:hover~svg{
            right:2px;
            top:2px;
            transform:scale(0.7);
        }
    }
}
}`
export default function Team() {
  const [modal,setModal]=useState(false);
  return (
    <TeamDiv>
      <span className="top"><span className="title">Meet our team</span> <span className="line"></span></span>
      <div className="cards">
      <div className="pointer outer">
            <div className="image" style={{background:'black'}} onClick={()=>setModal(true)}>
            </div>
            <span className="info">
            <span>John Doe</span>
            <span>Chief Executive Officer</span>
            </span>
            {info}
      </div>
      <div className="pointer outer">
            <div className="image" style={{background:'black'}} onClick={()=>setModal(true)}>
            </div>
            <span className="info">
            <span>John Doe</span>
            <span>Chief Executive Officer</span>
            </span>
            {info}
      </div>
      <div className="pointer outer">
            <div className="image" style={{backgroundImage:"url(https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg)"}} onClick={()=>setModal(true)}>
            </div>
            <span className="info">
            <span>John Doe</span>
            <span>Chief Executive Officer</span>
            </span>
            {info}
      </div>
    </div>
    {modal && <TeamModal close={setModal}/>}
    </TeamDiv>
  )
}
