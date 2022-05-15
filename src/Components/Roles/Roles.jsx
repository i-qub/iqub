import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
const RolesDiv = styled.div`
font-family:sans-serif;
width:100%;
padding:30px;
background-color:rgba(0,0,0,0.9);
color:white;
& span{
    display:block;
}
&>.title{
    font-size:2.4rem;
    font-weight:100;
    width:100%;
    color:rgba(255,255,255,0.8);
    text-align:center;
    margin-bottom:20px;
}
&>.message{
width:75%;
font-size:1.5rem;
font-weight:200;
text-align:center;
margin:15px auto 50px auto;
color:rgb(200,200,200);
}
&>.role{
    width:75%;
    margin:30px auto;
    padding:30px 50px;
    border-radius:20px;
    background-color:rgba(160,160,160,0.05);
    &>.title{
        font-size:1.3rem;
        font-weight:200;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:rgba(255,255,255,0.8);
        &>svg {
            transform: scale(1.5);
            filter: invert();
            transition:all .2s linear;
        }
        &>svg.active{
            transform: scale(1.5) rotate(180deg);
        }
    }
    &>.message{
        color:rgba(255,255,255,0.5);
        display:none;
        transform-origin:top center;
    }
    &>.message.active{
      margin-top:20px;
      display:block;
  }
}
&>.apply{
    padding:15px 25px;
    font-size:1.4rem;
    border:none;
    border-radius:10px;
    font-weight:400;
    display:block;
    margin:0px auto;
    background:linear-gradient(70deg, #01a49e, #005EB8);
    color:white;
    transition: all 0.5s;
}
}
&>.apply:hover{
background:linear-gradient(-80deg, #01a49e, #005EB8);
}
}
`;
export default function Roles() {
  const [msg, setMsg] = useState([true, false, false]);
  const [mod,setModal]=useState(false);
  const msgSet = (idx) => {
    var newMsg = [false, false, false];
    if(msg[idx]===false)newMsg[idx] = true;
    setMsg(newMsg);
  };
  return (
    <RolesDiv>
      <span className="title">Open Roles</span>
      <span className="message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        delectus aliquid magni? Quaerat tenetur possimus animi ipsam corporis
        vel est?
      </span>
      <div className="role pointer" onClick={() => msgSet(0)}>
        <span className="title">
          Lorem ipsum dolor{" "}
          <svg
           className={msg[0]?"active":""}
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.97625 2.394L4.5375 6.02C5.07375 6.566 5.94 6.566 6.47625 6.02L10.0375 2.394C10.9037 1.512 10.285 0 9.06125 0H1.93875C0.715 0 0.11 1.512 0.97625 2.394Z"
                fill="#1D1D1D"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="11" height="7" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        
          <span className={msg[0]?"message active":"message"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo esse
            a libero neque minima omnis provident, repellat cum reiciendis odit
            doloribus qui. Iusto dicta recusandae omnis obcaecati. Doloremque,
            ut aperiam excepturi illum ab aspernatur odio quae architecto libero
            sit asperiores tempore culpa nulla optio sapiente quisquam, quas
            omnis similique error.
          </span>
      </div>
      <div className="role pointer" onClick={() => msgSet(1)}>
        <span className="title">
          Lorem ipsum{" "}
          <svg
           className={msg[1]?"active":""}
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.97625 2.394L4.5375 6.02C5.07375 6.566 5.94 6.566 6.47625 6.02L10.0375 2.394C10.9037 1.512 10.285 0 9.06125 0H1.93875C0.715 0 0.11 1.512 0.97625 2.394Z"
                fill="#1D1D1D"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="11" height="7" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className={msg[1]?"message active":"message"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            distinctio molestiae facere voluptatum illum ab vitae cupiditate
            deserunt unde ea.
          </span>
      </div>
      <div className="role pointer" onClick={() => msgSet(2)}>
        <span className="title">
          Lorem ipsum{" "}
          <svg
           className={msg[2]?"active":""}
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.97625 2.394L4.5375 6.02C5.07375 6.566 5.94 6.566 6.47625 6.02L10.0375 2.394C10.9037 1.512 10.285 0 9.06125 0H1.93875C0.715 0 0.11 1.512 0.97625 2.394Z"
                fill="#1D1D1D"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="11" height="7" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className={msg[2]?"message active":"message"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            distinctio molestiae facere voluptatum illum ab vitae cupiditate
            deserunt unde ea.
          </span>
      </div>
      <button className="apply pointer" onClick={()=>setModal(true)}>Apply</button>
      {mod && <Modal close={()=>setModal(false)}></Modal>}
    </RolesDiv>
  );
}

