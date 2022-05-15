import React from 'react'
import styled from 'styled-components'
import { icons} from '../../assests/svg-icn'
const Foot=styled.div`
width:100vw;
background-color:rgb(0,0,0);
display:flex;
color:white;
font-family:sans-serif;
& .foot-left{
    flex:1;
    padding:50px 80px;
    & .nav{
        font-size:1.4rem;
        padding:20px 30px;
        background-color:rgb(20,20,20);
        border:none;
        display:block;
        color:white;
        border-radius:50px;
        margin-top:20px;
    }
    & .nav:hover{
        background-color:rgb(5,5,5);
        box-shadow:rgb(100,100,100) 0px 0px 8px 0px;
    }
    & .copyright{
        display:block;
        margin-top:40px;
    }
}
& .foot-right{
    flex:1;
    padding:50px 80px;
    & .social{
        width:60%;
        display:flex;
        justify-content:space-between;
    }
    & .social div{
        padding:2px;
        border-radius:50%;
        background:linear-gradient(90deg, #005D72, #005EB8);
        width:30px;
        height:30px;
        position:relative;
    }
    & .social div span{
        position:absolute;
        top:10%;
        left:10%;
        transition:all 0.3s ease;
        &:hover{
            transform:scale(1.1);
        }
    }
    & .message{
        margin-top:50px;
        font-size:1.9rem;
        font-weight:lighter;
    }
}
`
export default function Footer() {
  return (
    <Foot>
      <div className="foot-left">
          <div className="nav-links">
              <button className="nav">About us</button>
              <button className="nav">Partners</button>
              <button className="nav">Career</button>
              <button className="nav">Privacy Policy</button>
              <button className="nav">Terms & Conditions</button>
          </div>
          <span className="copyright">© Copyright 2021 i-qub Technologies Pvt. Ltd.</span>
      </div>
      <div className="foot-right">
        <div className="social pointer">
            {icons.map((val,idx)=>{
                return <div><span>{val}</span></div>;
            })}
        </div>
        <div className="message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae velit accusantium similique omnis, doloremque error rem culpa ut quo veniam.</div>
      </div>
    </Foot>
  )
}
