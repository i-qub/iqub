import React from 'react'
import styled from 'styled-components'
const ModalDiv=styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color:rgba(0,0,0,0.5);
z-index:100;
display:flex;
justify-content:center;
align-items:center;
&>.modal{
    width:40vw;
    height:80vh;
    font-family:Roboto;
    background:linear-gradient(-80deg, #01a49e, #005EB8);
    border-radius:10px;
    position:relative;
    padding:3rem 2rem;
    &>.title{
        font-size:2rem;
        font-weight:400;
        color:white;
        text-align:center;
        letter-spacing:0.3rem;
        margin-bottom:2rem;
    }
    &>input,label{
        display:block;
        width:100%;
    }
    &>label{
        margin-bottom:1rem;
    }
    &>input{
        margin-bottom:1rem;
        padding:.5rem 1rem;
        border-radius:5px;
        border:none;
    }
    &>input:focus{
        outline:none;
    }
    &>.wb{
        outline:dotted;
        border:1px solid white;
        border-radius:10px;
    }
    &>.close{
        background:white;
        width:70px;
        height:70px;
        border-radius:50%;
        position:absolute;
        top:30px;
        right:30px;
        &>span{
            position:absolute;
            top:8%;
            left:8%;
            transform:scale(0.9);
            & path{
                fill:#45bed9;
            }
        }
    }
    &>button{
        width:100%;
        margin-top:1.2rem;
        padding:.8rem .3rem;
        border-radius:10px;
        color:white;
        background: linear-gradient(90deg, #002D72, #005EB8);;
        border:none;
        font-weight:light;
        font-size:1.1rem;
        letter-spacing:0.rem;
        transition:all 320ms ease-in-out;
        &:hover{
            transform:scale(0.95);
            opacity:0.8;
        } 
    }
}
`
export default function Modal({close}) {
  return (
    <ModalDiv>
        <div className="modal">
        <p className="title">APPLY NOW</p>
        <label htmlFor="fname">FIRST NAME</label>
        <input type="text" />
        <label htmlFor="fname">LAST NAME</label>
        <input type="text" />
        <label htmlFor="role">ROLE</label>
        <input type="text" />
        <label htmlFor="email">MAIL</label>
        <input type="text" />
        <label htmlFor="contact">CONTACT NUMBER</label>
        <input type="text" />
        <label htmlFor="cv">RESUME UPLOAD</label>
        <input type="file" className='wb'/>
        <div className="close">
        <span className='pointer' onClick={()=>close()}><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons8-close 1">
<path id="Vector" d="M14 8C13.4882 8 12.9759 8.19494 12.5859 8.58594L8.58594 12.5859C7.80394 13.3679 7.80394 14.6341 8.58594 15.4141L23.1719 30L8.58594 44.5859C7.80394 45.3679 7.80394 46.6341 8.58594 47.4141L12.5859 51.4141C13.3679 52.1961 14.6341 52.1961 15.4141 51.4141L30 36.8281L44.5859 51.4141C45.3659 52.1961 46.6341 52.1961 47.4141 51.4141L51.4141 47.4141C52.1961 46.6321 52.1961 45.3659 51.4141 44.5859L36.8281 30L51.4141 15.4141C52.1961 14.6341 52.1961 13.3659 51.4141 12.5859L47.4141 8.58594C46.6321 7.80394 45.3659 7.80394 44.5859 8.58594L30 23.1719L15.4141 8.58594C15.0231 8.19494 14.5117 8 14 8Z" fill="#4285F4"/>
</g>
</svg>
</span>
        </div>
        <button>
            SUBMIT
        </button>
        </div>
    </ModalDiv>
  )
}
