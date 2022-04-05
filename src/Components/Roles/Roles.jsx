import React, { useState } from 'react'
import styled from 'styled-components'
const RolesDiv=styled.div`
font-family:sans-serif;
width:100%;
padding:30px;
& span{
    display:block;
}
&>.title{
    font-size:2.8rem;
    font-weight:500;
    width:100%;
    text-align:center;
    margin-bottom:20px;
}
&>.message{
width:75%;
font-size:1.5rem;
font-weight:200;
text-align:center;
margin:15px auto 50px auto;
color:rgb(120,120,120);
}
&>.role{
    width:75%;
    margin:30px auto;
    padding:30px 50px;
    border:1px solid rgb(150,150,150);
    border-radius:20px;
    &>.title{
        font-size:1.5rem;
        font-weight:500;
    }
    &>.message{
        margin-top:20px;
        color:rgb(100,100,100)
    }
}
&>button{
    padding:10px 16px;
    font-size:1.4rem;
    border:none;
    border-radius:20px;
    font-weight:400;
    display:block;
    margin:0px auto;
    background:linear-gradient(90deg, #002D72, #005EB8);
    color:white;
}
}
&>button:hover{
background:linear-gradient(-80deg, #001D72, #005EB8);
}
}
`
export default function Roles() {
 const [msg,setMsg]=useState([true,false,false]);
 const msgSet=(idx)=>{
    var newMsg=[false,false,false];
    newMsg[idx]=true;
    setMsg(newMsg);
 }
  return (
    <RolesDiv>
      <span className="title">Open Roles</span>
      <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus aliquid magni? Quaerat tenetur possimus animi ipsam corporis vel est?</span>
      <div className="role pointer" onClick={()=>msgSet(0)}>
          <span className="title">Lorem ipsum dolor</span>
          {msg[0] && <span className="message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo esse a libero neque minima omnis provident, repellat cum reiciendis odit doloribus qui. Iusto dicta recusandae omnis obcaecati. Doloremque, ut aperiam excepturi illum ab aspernatur odio quae architecto libero sit asperiores tempore culpa nulla optio sapiente quisquam, quas omnis similique error.</span>}
      </div>
      <div className="role pointer"  onClick={()=>msgSet(1)}>
          <span className="title">Lorem ipsum</span>
          {msg[1] && <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio molestiae facere voluptatum illum ab vitae cupiditate deserunt unde ea.</span>}
      </div>
      <div className="role pointer"  onClick={()=>msgSet(2)}>
          <span className="title">Lorem ipsum</span>
          {msg[2] && <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio molestiae facere voluptatum illum ab vitae cupiditate deserunt unde ea.</span>}
      </div>
      <button className='pointer'>Apply</button>
    </RolesDiv>
  )
}
