import React from 'react'
import styled from 'styled-components'
const IntroDiv=styled.div`
width:100vw;
height:90vh;
padding: 3rem;
font-family:Roboto,sans-serif;
&>.title{
    width:40%;
    font-size:5.5rem;
    margin-bottom:3.3rem;
    font-weight:500;
    color:rgb(50,50,50);
}
&>.sub{
    width:70%;
    font-size:1.8rem;
    font-weight:lighter;
    color:rgb(100,100,100);
    margin-bottom:2.3rem;
}
&>button{
    color:white;
    background:linear-gradient(-80deg, #01a49e, #005EB8);
    border:none;
    padding:1rem 1.2rem;
    font-size:1.2rem;
    border-radius:100px;
    transition:all .5s ease-in-out;
    &:hover{
        transform:scale(1.05);
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
