import React from 'react'
import styled from 'styled-components'
const TypicalDay=styled.div`
width:100vw;
padding:50px 20px;
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
        width:80%;
        height:4px;
        background:linear-gradient(-80deg, #01a49e, #005EB8);
    }
}
&>.types{
    width:94%;
    margin:0px auto;
    margin-top:40px;
    display:flex;
    flex-wrap:wrap;
    &>.box{
        width:30%;
        padding:30px;
        border-radius:10px;
        margin:30px 50px;
        position:relative;
        overflow:hidden;
        box-shadow: rgba(0, 0, 105, 0.2) 0px 8px 24px;
        transition:all .3s ease-in-out;
        &>.title{
            font-size:2rem;
            font-weight:300;
            display:block;
        }
        &>.sub-title {
            margin-bottom:15px;
            display: inline-block;
            color:rgba(0,0,0,0.6);
            transition:all .4s ease-in-out;
        }
        &>.message{
            display:block;
            color: rgba(0,0,0,0.8);
            transition:all .4s ease-in-out;
        }
    }
    &>.box::after{
        content:"";
        position:absolute;
        z-index:-1;
        width:10px;
        height:10px;
        top:-5px;
        right:-5px;
        border-radius:50%;
        background:linear-gradient(-80deg, #01a49e, #005EB8);
        transition:all .5s ease-in-out;
    }
    &>.box:hover::after{
        transform:scale(120);
    }
    &>.box:hover{
        color:white;
    }
    &>.box:hover .message{
        color: rgba(255,255,255,0.8)
    }
    &>.box:hover .sub-title{
        color:rgba(255,255,255,0.6);
    }
}
`
export default function Typical() {
  return (
    <TypicalDay>
      <span className="top"><span className="title">A typical day in the life of an i-qub`ian</span> <span className="line"></span></span>
      <div className="types">
        <div className="box">
            <span className="title">Lorem</span><span className="sub-title">Senior</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span><span className="sub-title">Senior</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span><span className="sub-title">Senior</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span><span className="sub-title">Senior</span>
            <span className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolores velit repudiandae, commodi soluta at recusandae atque! Earum, placeat quasi?</span>
        </div>
      </div>
    </TypicalDay>
  )
}
