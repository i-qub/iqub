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
        font-size:3rem;
        width:35%;
        font-weight:600;
    }
    &>.line{
        width:65%;
        height:6px;
        background-color:black;
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
        border-radius:20px;
        margin:30px 50px;
        background:rgb(200,200,200);
        &>.title{
            font-size:2rem;
            font-weight:500;
            display:block;
            margin-bottom:15px;
        }
    }
}
`
export default function Typical() {
  return (
    <TypicalDay>
      <span className="top"><span className="title">A typical day in the life of an asdf`ian</span> <span className="line"></span></span>
      <div className="types">
        <div className="box">
            <span className="title">Lorem</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span>
            <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
        <div className="box">
            <span className="title">Lorem</span>
            <span className="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo animi qui magnam voluptatem saepe minus nesciunt recusandae in accusamus eum, quasi dolorem a nostrum doloribus facilis iusto. Labore, tenetur velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus ipsam quisquam sunt obcaecati magni accusantium eveniet temporibus, vel neque numquam eum dolorem, aperiam reprehenderit laborum velit, autem voluptate sint.</span>
        </div>
      </div>
    </TypicalDay>
  )
}
