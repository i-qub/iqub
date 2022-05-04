import React from 'react'
import styled from 'styled-components'
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
        font-size:1.7rem;
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
    }
    & .message{
        margin-top:50px;
        font-size:2rem;
        font-weight:200;
    }
    & .down{
        font-size:1.8rem;
        margin-top:50px;
        font-weight:600;
    }
    & .down-button{
        margin-top:50px;
        display:flex;
    }
    & .down-button button{
        padding:10px 40px 10px 30px;
        border:none;
        background:linear-gradient(-80deg, #01a49e, #005EB8);
        color:white;
        margin-right:30px;
        width:300px;
        border-radius:20px;
    }
    & .down-button button:hover{
        background:linear-gradient(90deg, #01a49e, #005EB8);
    }
    & .down-button button svg{
        margin-right:100%;
        margin-bottom:3px;
    }
    & .down-button button span{
        display:block;
        font-size:1.5rem;
        text-align:start;
    }
}
`
const icons=[<svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons8-facebook 1">
<path id="Vector" d="M15 3C8.373 3 3 8.373 3 15C3 21.016 7.432 25.984 13.206 26.852V18.18H10.237V15.026H13.206V12.927C13.206 9.452 14.899 7.927 17.787 7.927C19.17 7.927 19.902 8.03 20.248 8.076V10.829H18.278C17.052 10.829 16.624 11.992 16.624 13.302V15.026H20.217L19.73 18.18H16.624V26.877C22.481 26.083 27 21.075 27 15C27 8.373 21.627 3 15 3Z" fill="white"/>
</g>
</svg>,
<svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons8-twitter 1">
<path id="Vector" d="M28 6.937C27.043 7.362 26.015 7.648 24.936 7.777C26.038 7.117 26.883 6.07201 27.281 4.826C26.251 5.437 25.109 5.881 23.893 6.121C22.92 5.084 21.534 4.436 20 4.436C17.054 4.436 14.666 6.82501 14.666 9.77001C14.666 10.188 14.714 10.596 14.804 10.985C10.371 10.763 6.441 8.639 3.809 5.411C3.351 6.199 3.088 7.115 3.088 8.094C3.088 9.944 4.029 11.577 5.46 12.533C4.586 12.505 3.763 12.265 3.044 11.866C3.044 11.889 3.044 11.91 3.044 11.933C3.044 14.518 4.882 16.674 7.323 17.163C6.876 17.285 6.404 17.35 5.917 17.35C5.574 17.35 5.239 17.316 4.914 17.255C5.593 19.374 7.563 20.917 9.897 20.96C8.072 22.391 5.772 23.244 3.272 23.244C2.842 23.244 2.417 23.219 1.999 23.169C4.36 24.682 7.163 25.565 10.176 25.565C19.988 25.565 25.352 17.437 25.352 10.388C25.352 10.157 25.347 9.927 25.337 9.698C26.38 8.945 27.285 8.006 28 6.937Z" fill="white"/>
</g>
</svg>,
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons8-instagram 1">
<path id="Vector" d="M8 3C5.243 3 3 5.243 3 8V16C3 18.757 5.243 21 8 21H16C18.757 21 21 18.757 21 16V8C21 5.243 18.757 3 16 3H8ZM8 5H16C17.654 5 19 6.346 19 8V16C19 17.654 17.654 19 16 19H8C6.346 19 5 17.654 5 16V8C5 6.346 6.346 5 8 5ZM17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9Z" fill="white"/>
</g>
</svg>,
<svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons8-linkedin 1">
<path id="Vector" d="M24 4H6C4.895 4 4 4.895 4 6V24C4 25.105 4.895 26 6 26H24C25.105 26 26 25.105 26 24V6C26 4.895 25.105 4 24 4ZM10.954 22H8.004V12.508H10.954V22ZM9.449 11.151C8.498 11.151 7.729 10.38 7.729 9.431C7.729 8.482 8.499 7.712 9.449 7.712C10.397 7.712 11.168 8.483 11.168 9.431C11.168 10.38 10.397 11.151 9.449 11.151ZM22.004 22H19.056V17.384C19.056 16.283 19.036 14.867 17.523 14.867C15.988 14.867 15.752 16.066 15.752 17.304V22H12.804V12.508H15.634V13.805H15.674C16.068 13.059 17.03 12.272 18.465 12.272C21.452 12.272 22.004 14.238 22.004 16.794V22V22Z" fill="white"/>
</g>
</svg>,
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons8-youtube 1">
<path id="Vector" d="M21.582 6.186C21.352 5.326 20.674 4.648 19.814 4.418C18.254 4 12 4 12 4C12 4 5.746 4 4.186 4.418C3.326 4.648 2.648 5.326 2.418 6.186C2 7.746 2 12 2 12C2 12 2 16.254 2.418 17.814C2.648 18.674 3.326 19.352 4.186 19.582C5.746 20 12 20 12 20C12 20 18.254 20 19.814 19.582C20.675 19.352 21.352 18.674 21.582 17.814C22 16.254 22 12 22 12C22 12 22 7.746 21.582 6.186ZM10 14.598V9.402C10 9.017 10.417 8.777 10.75 8.969L15.25 11.567C15.583 11.759 15.583 12.241 15.25 12.433L10.75 15.031C10.417 15.224 10 14.983 10 14.598Z" fill="white"/>
</g>
</svg>,
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons8-whatsapp 1">
<path id="Vector" d="M12.0117 2C6.50572 2 2.02348 6.47837 2.02148 11.9844C2.02048 13.7444 2.48147 15.4626 3.35547 16.9766L2 22L7.23242 20.7637C8.69142 21.5597 10.3339 21.9775 12.0059 21.9785H12.0098C17.5148 21.9785 21.995 17.4991 21.998 11.9941C22 9.32514 20.9622 6.81573 19.0762 4.92773C17.1902 3.04073 14.6837 2.001 12.0117 2ZM12.0098 4C14.1458 4.001 16.1531 4.8338 17.6621 6.3418C19.1711 7.8518 20 9.85819 19.998 11.9922C19.996 16.3962 16.4138 19.9785 12.0078 19.9785C10.6748 19.9775 9.35441 19.6428 8.19141 19.0078L7.51758 18.6406L6.77344 18.8164L4.80469 19.2812L5.28516 17.4961L5.50195 16.6953L5.08789 15.9766C4.38989 14.7686 4.02048 13.3874 4.02148 11.9844C4.02348 7.58238 7.60677 4 12.0098 4ZM8.47656 7.375C8.30956 7.375 8.03955 7.4375 7.81055 7.6875C7.58155 7.9365 6.93555 8.53958 6.93555 9.76758C6.93555 10.9956 7.83008 12.1826 7.95508 12.3496C8.07908 12.5156 9.68175 15.1152 12.2188 16.1152C14.3268 16.9462 14.7549 16.7822 15.2129 16.7402C15.6709 16.6992 16.6904 16.1377 16.8984 15.5547C17.1064 14.9717 17.1069 14.4702 17.0449 14.3672C16.9829 14.2632 16.8164 14.2012 16.5664 14.0762C16.3174 13.9512 15.0903 13.3486 14.8613 13.2656C14.6323 13.1826 14.4648 13.1406 14.2988 13.3906C14.1328 13.6406 13.6558 14.2012 13.5098 14.3672C13.3638 14.5342 13.2188 14.5566 12.9688 14.4316C12.7188 14.3056 11.9149 14.0414 10.9609 13.1914C10.2189 12.5304 9.71827 11.7148 9.57227 11.4648C9.42727 11.2158 9.55859 11.0791 9.68359 10.9551C9.79559 10.8431 9.93164 10.6636 10.0566 10.5176C10.1806 10.3716 10.2236 10.2676 10.3066 10.1016C10.3896 9.93556 10.3472 9.78906 10.2852 9.66406C10.2232 9.53906 9.73763 8.3065 9.51562 7.8125C9.32862 7.3975 9.13113 7.38786 8.95312 7.38086C8.80813 7.37486 8.64256 7.375 8.47656 7.375Z" fill="white"/>
</g>
</svg>
]
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
