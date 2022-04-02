import React from 'react'
import styled from 'styled-components'
const SolveDiv=styled.div`
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
        font-size:4rem;
        width:25%;
        font-weight:600;
    }
    &>.line{
        width:75%;
        height:6px;
        background-color:black;
    }
}
&>.bulletin{
    width:100%;
    display:flex;
    justify-content:flex-end;
    &>.card{
        width:25%;
        padding:30px;
        margin:30px 20px;
        &>span{
            display:block;
            font-size:1.2rem;
        }
        &>.title{
            font-weight:600;
            margin-bottom:20px;
        }
        &>.message{
            font-size:1.1rem;
            font-weight:200;
        }
    }
}
`
export default function Solve() {
  return (
    <SolveDiv>
      <span className="top"><span className="title">What are we solving?</span> <span className="line"></span></span>
      <div className="bulletin">
          <div className="card">
              <span className="title">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti debitis inventore vitae.</span>
              <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti optio debitis quasi amet doloribus incidunt. Numquam doloribus dolorem illo aperiam atque nesciunt quam eos animi natus eaque! Dignissimos, excepturi sit iste veniam maiores harum, suscipit non facere, quos exercitationem at? Error possimus sint doloribus consequuntur temporibus exercitationem, libero ipsam?.</span>
          </div>
          <div className="card">
              <span className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto quaerat. Explicabo!</span>
              <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi voluptas beatae quod ut inventore facilis voluptatem omnis earum reiciendis voluptate culpa, ab cupiditate ipsa ratione labore pariatur nesciunt quaerat accusantium dolorum! Cumque deserunt, doloribus accusamus possimus dolor ducimus ipsam vitae sed amet asperiores laudantium quo? Sapiente iure odio totam.</span>
          </div>
      </div>
    </SolveDiv>
  )
}
