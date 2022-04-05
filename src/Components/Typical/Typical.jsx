import React from 'react'
import styled from 'styled-components'
const TypicalDay=styled.div`
width:100vw;
padding:20px;
font-family:sans-serif;
&>.top{
    width:90%;
    margin:0px auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    &>.title{
        font-size:3.2rem;
        width:40%;
        font-weight:600;
    }
    &>.line{
        width:70%;
        height:6px;
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
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        &>.title{
            font-size:2rem;
            font-weight:500;
            display:block;
        }
        &>.sub-title {
            margin-bottom:15px;
            display: inline-block;
            color: rgb(150, 150, 150)
        }
        &>.message{
            display:block;
        }
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
            <span className="title">Lorem</span>
            <span className="sub-title">Senior</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
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
