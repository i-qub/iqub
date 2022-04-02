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
    font-size:2.2rem;
    width:100%;
    text-align:center;
    margin-bottom:30px;
}
&>.message{
width:75%;
font-size:1.5rem;
font-weight:300;
text-align:center;
margin:20px auto;
}
&>.role{
    width:75%;
    margin:30px auto;
    padding:30px 50px;
    border: 1px solid black;
    border-radius:20px;
    &>.title{
        font-size:1.5rem;
        font-weight:600;
    }
    &>.message{
        margin-top:20px;
    }
}
&>button{
    padding:10px 16px;
    font-size:1.4rem;
    border:none;
    border-radius:20px;
    font-weight:400;
    background:black;
    color:white;
    display:block;
    margin:0px auto;
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
      <div className="role" onClick={()=>msgSet(0)}>
          <span className="title">Lorem ipsum dolor</span>
          {msg[0] && <span className="message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo esse a libero neque minima omnis provident, repellat cum reiciendis odit doloribus qui. Iusto dicta recusandae omnis obcaecati. Doloremque, ut aperiam excepturi illum ab aspernatur odio quae architecto libero sit asperiores tempore culpa nulla optio sapiente quisquam, quas omnis similique error.</span>}
      </div>
      <div className="role"  onClick={()=>msgSet(1)}>
          <span className="title">Lorem ipsum</span>
          {msg[1] && <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio molestiae facere voluptatum illum ab vitae cupiditate deserunt unde ea.</span>}
      </div>
      <div className="role"  onClick={()=>msgSet(2)}>
          <span className="title">Lorem ipsum</span>
          {msg[2] && <span className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio molestiae facere voluptatum illum ab vitae cupiditate deserunt unde ea.</span>}
      </div>
      <button>Apply</button>
    </RolesDiv>
  )
}
