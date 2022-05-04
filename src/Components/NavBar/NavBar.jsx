import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../../assests/logo.png'
const Nav=styled.div`
width:77vw;
height:12vh;
display:flex;
align-items:center;
justify-content:space-between;
margin:0px auto;
font-family:sans-serif;
& .nav-links{
    width:60%;
    display:flex;
    justify-content:space-evenly;
}
& .nav-links span{
    position:relative;
    font-size:1.4rem;
    font-weight:bolder;
    color:black;
}
& .nav-links span::after{
    content: "";
    background: linear-gradient(90deg, #002D72, #005EB8);
    display: block;
    position:absolute;
    height:3px;
    width:0;
    left:0;
    right:0;
    bottom:-5px;
    margin: auto;
    transition: all 0.4s
}
& .nav-links span:hover::after,& .nav-links span.active::after{
    width:100%;
}
& .nav-links span:hover,& .nav-links span.active{
    background: linear-gradient(90deg, #002D72, #005EB8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
& .logo{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    &>img {
      height: 80%;
    }
}
& button{
    padding:20px 16px;
    font-size:1.1rem;
    border:none;
    border-radius:100px;
    background:linear-gradient(-80deg, #01a49e, #005EB8);
    color:white;
    min-width:14%;
    &>span:nth-child(2){
      display:none;
    }
    &:hover>span:first-child{
      display:none;
    }
    &:hover>span:nth-child(2){
      display:block;
    }
}
& button:hover{
    background:linear-gradient(90deg, #01a49e, #005EB8);
}
`
export default function NavBar() {
  const [route,setRoute]=useState("");
  return (
    <Nav>
      <span className="logo"><img src={logo} /></span>
      <div className="nav-links">
      <Link to="/iqub/" style={{textDecoration:"none"}} onClick={()=>setRoute("")}><span className={'pointer'+(route===""?' active':null)}>Home</span></Link>
      <Link to="/iqub/about" style={{textDecoration:"none"}}  onClick={()=>setRoute("about")}><span className={'pointer'+(route==="about"?' active':'')}>About</span></Link>
      <Link to="/iqub/team" style={{textDecoration:"none"}} onClick={()=>setRoute("team")}><span className={'pointer'+(route==="team"?' active':'')}>Team</span></Link>
      <Link to="/iqub/career" style={{textDecoration:"none"}} onClick={()=>setRoute("career")}><span className={'pointer'+(route==="career"?' active':'')}>Career</span></Link>
      </div>
      <button className='pointer' onClick={()=>{
        navigator.clipboard.writeText("+91-8838398332");
      }}>
      <span>Contact us</span>
      <span>+91-8838398332</span>
      </button>
    </Nav>
  )
}
