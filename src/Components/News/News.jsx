import React from 'react'
import styled from 'styled-components'
const NewsDiv=styled.div`
font-family:sans-serif;
padding:100px;
&>span{
    font-size:2.5rem;
    background:linear-gradient(
        313.98deg,
        #9a4afc -4.51%,
        #600271 5.86%,
        #ad3b96 76.45%,
        #ef8555 95.12%,
        #b73360 100.72%
        );
      -webkit-text-fill-color:transparent;
      -webkit-background-clip:text;
      font-weight:bold;
      display:block;
      margin-bottom:50px;
}
&>.news-div{
    display:flex;
    &>.news{
        margin:0px 90px;
        &>img{
            margin-bottom:30px;
            margin-left:-30px;
        }
        &>.message{
            & .title{
                display:block;
                font-weight:520;
                font-size:1.5rem;
                width:90%;
                margin-bottom:20px;
            }
            & .txt{
                display:block;
                font-weight:100;
                color:rgb(50,50,50);
                margin-bottom:20px;
            }
        }
        &>button{
            border:none;
            background:transparent;
            font-size:1.3rem;
            color:#983bab;
            &>span{
                display:inline-block;
                animation:right .85s infinite alternate;
                margin-left:10px;
            }
        }
        &>button:hover{
            text-decoration:underline;
        }
    }
    @keyframes right{
        0%{
            transform:translateX(0);
        }
        60%{
            transform:translateX(40%);
        }
        100%{
            transform:translateX(40%);
        }
    }
}
`
export default function News() {
  return (
    <NewsDiv>
      <span>Lorem ipsum dolor</span>
      <div className="news-div">
      <div className="news">
          <img src="https://baaz.live/images/homepage/your-story.png" alt="" />
          <div className="message">
              <span className="title">Move over Whatsapp video calls, it's showtime for live shopping.</span>
              <span className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis illum, molestias et, maiores ipsam quisquam voluptatem mollitia praesentium ad dolores cupiditate veniam quod repellat dolorem delectus repudiandae saepe eos voluptate labore vitae totam temporibus. Quam eaque eligendi sunt molestias esse tempore corrupti ullam, consectetur, dignissimos porro dicta sint suscipit error nesciunt laudantium adipisci accusamus culpa illo voluptatem. Eveniet, esse eos.</span>
          </div>
          <button className="pointer">Read article<span> →</span></button>
      </div>
      <div className="news">
      <img src="https://baaz.live/images/homepage/your-story.png" alt="" />
      <div className="message">
        <span className="title">How Bengaluru-based startup baaz aims to be the shopify of video commerce?</span>
        <span className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis illum, molestias et, maiores ipsam quisquam voluptatem mollitia praesentium ad dolores cupiditate veniam quod repellat dolorem delectus repudiandae saepe eos voluptate labore vitae totam temporibus. Quam eaque eligendi sunt molestias esse tempore corrupti ullam, consectetur, dignissimos porro dicta sint suscipit error nesciunt laudantium adipisci accusamus culpa illo voluptatem. Eveniet, esse eos.</span>
      </div>
      <button className="pointer">Read article<span> →</span></button>
      </div>
    </div>
    </NewsDiv>
  )
}
