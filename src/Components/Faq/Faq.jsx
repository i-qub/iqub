import React, { useState } from 'react'
import styled from 'styled-components'
const FAQ=styled.div`
padding:80px 0px;
width:100vw;
background-color:#151515;
color:white;
display:flex;
flex-direction:column;
font-family:sans-serif;
&>.qn-div{
    width:50%;
    margin:15px auto;
    padding:30px 50px;
    border-radius:30px;
    border:1px solid rgb(70,70,70);
    &>.ans{
        display:block;
        margin-top:20px;
        margin-left:8%;
        color:rgb(180,180,180);
    }
}
& .title{
    background:linear-gradient(
        313.98deg,
        #9a4afc -4.51%,
        #600271 5.86%,
        #ad3b96 25.4%,
        #ef8555 86.75%,
        #b73360 100.72%
        );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-family:'Gilroy', sans-serif;
    font-size:3.5rem;
    font-weight:600;
    margin:0px auto;
    margin-bottom:20px;
}
& .qn{
    font-size:1.5rem;
    font-weight:100;
    &>.inner{
        display:inline-block;
        background:linear-gradient(
            313.98deg,
            #9a4afc -4.51%,
            #600271 5.86%,
            #ad3b96 25.4%,
            #ef8555 86.75%,
            #b73360 100.72%
            );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        font-size:2.5rem;
        margin-right:30px;
    }
}
`
export default function Faq() {
  const [qn,setQn]=useState([false,false,false,false,false,false,false,false,false])
  return (
    <FAQ className="pointer">
      <span className="title">Have a Question? Look here</span>
      <div className="qn-div" onClick={()=>setQn([true,false,false,false,false,false,false,false,false])}><span className="qn"><span className="inner">{qn[0]?"-":"+"}</span> Lorem ipsum dolor sit amet?</span>
      {qn[0]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}
      </div>
      <div className="qn-div" onClick={()=>setQn([false,true,false,false,false,false,false,false,false])}><span className="qn"><span className="inner">{qn[1]?"-":"+"}</span> Lorem ipsum dolor sit amet consectetur?</span>
      {qn[1]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}
      </div>
      <div className="qn-div" onClick={()=>setQn([false,false,true,false,false,false,false,false,false])}><span className="qn"><span className="inner">{qn[2]?"-":"+"}</span> Lorem ipsum dolor sit amet?</span>
      {qn[2]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}
      </div>
      <div className="qn-div" onClick={()=>setQn([false,false,false,true,false,false,false,false,false])}><span className="qn"><span className="inner">{qn[3]?"-":"+"}</span> Lorem ipsum dolor sit amet?</span>
      {qn[3]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}
      </div>
      <div className="qn-div" onClick={()=>setQn([false,false,false,false,true,false,false,false,false])}><span className="qn"><span className="inner">{qn[4]?"-":"+"}</span> Lorem ipsum dolor sit amet consectetur?</span>
      {qn[4]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}
      </div>
      <div className="qn-div" onClick={()=>setQn([false,false,false,false,false,true,false,false,false])}><span className="qn"><span className="inner">{qn[5]?"-":"+"}</span> Lorem ipsumipsumipsumipsumipsum dolor sit amet?</span>
      {qn[5]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}
      </div>
      <div className="qn-div" onClick={()=>setQn([false,false,false,false,false,false,true,false,false])}><span className="qn"><span className="inner">{qn[6]?"-":"+"}</span> Lorem ipsum dolor sit amet?</span>
      {qn[6]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}</div>
      <div className="qn-div" onClick={()=>setQn([false,false,false,false,false,false,false,true,false])}><span className="qn"><span className="inner">{qn[7]?"-":"+"}</span> Lorem ipsum dolor sit amet consectetur?</span>
      {qn[7]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}
      </div>
      <div className="qn-div" onClick={()=>setQn([false,false,false,false,false,false,false,false,true])}><span className="qn"><span className="inner">{qn[8]?"-":"+"}</span> Lorem ipsum dolor sit amet?</span>
      {qn[8]?<span className="ans">Lorem ipsum dolor sit amet.</span>:null}
      </div>
    </FAQ>
  )
}
