import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
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
    background: linear-gradient(to top right, #9a4afc -2.43%, #ad3b96 -2.08%, #600271 1.42%, #b73360 100.72%, #ef8555 100.72%);
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
    background: linear-gradient(to top right, #9a4afc -2.43%, #ad3b96 -2.08%, #600271 1.42%, #b73360 100.72%, #ef8555 100.72%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
& .logo{
    font-size:2rem;
    font-weight:bolder;
}
& button{
    padding:20px 16px;
    font-size:1.1rem;
    border:none;
    border-radius:20px;
    background:linear-gradient(to top right, #9a4afc -2.43%, #ad3b96 -2.08%, #600271 1.42%, #b73360 100.72%, #ef8555 100.72%);
    color:white;
}
& button:hover{
    background:linear-gradient(292.95deg,#9a4afc -17.22%,#ad3b96 -16.76%,#600271 -12.25%,#b73360 10.42%,#ef8555 107.4%);
}
`
export default function NavBar() {
  const [route,setRoute]=useState("");
  return (
    <Nav>
      <span className="logo">Logo</span>
      <div className="nav-links">
      <Link to="/" style={{textDecoration:"none"}} onClick={()=>setRoute("")}><span className={'pointer'+(route===""?' active':null)}>Home</span></Link>
      <Link to="/about" style={{textDecoration:"none"}}  onClick={()=>setRoute("about")}><span className={'pointer'+(route==="about"?' active':'')}>About</span></Link>
      <Link to="/career" style={{textDecoration:"none"}} onClick={()=>setRoute("career")}><span className={'pointer'+(route==="career"?' active':'')}>Carrer</span></Link>
      </div>
      <button className='pointer'>Book a Demo</button>
    </Nav>
  )
}
