import React from 'react'
import styled from 'styled-components'
const IntroDiv=styled.div`
width:100vw;
height:90vh;
padding: 3rem 5rem;
font-family:Roboto,sans-serif;
&>.title{
    width:40%;
    font-size:5rem;
    margin-bottom:3.3rem;
    font-weight:300;
    color:rgb(50,50,50);
}
&>.sub{
    width:70%;
    font-size:1.7rem;
    font-weight:lighter;
    color:rgba(0,0,0,0.6);
    margin-bottom:2.3rem;
}
&>button{
    color:white;
    background:linear-gradient(-80deg, #01a49e, #005EB8);
    border:none;
    padding:.9rem 1.1rem;
    font-size:1.2rem;
    border-radius:100px;
    transition:all .5s ease-in-out;
    &:hover{
        transform:scale(1.02);
        opacity:0.86;
    }
}

`
export default function Intro() {
  return (
    <IntroDiv>
      <p className="title">Lorem ipsum dolor sit amet</p>
      <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat.</p>
      <button>Learn More</button>
    </IntroDiv>
  )
}
