import React, { useState } from 'react'
import styled from 'styled-components'
const DashDiv=styled.div`
width:100vw;
height:auto;
display:flex;
background-color:rgba(0,0,0,0.9);
& .left{
    flex:3;
    font-family:sans-serif;
    color:white;
    padding:100px 150px;
    & .title{
        background:linear-gradient(-80deg, #01a49e, #005EB8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size:3.5rem;
        display:inline-block;
        font-weight:500;
    }
    &>p{
        width:90%;
        line-height:1.6;
        font-size:1.4rem;
        margin-top:25px;
        margin-bottom:3rem;
    }
    & .infos .info{
        padding: 2rem;
        border-radius:30px;
        background:transparent;
        margin-top:1rem;
        color:rgb(230,230,230);
        & svg{
            transform:scale(2.6);
            margin-right:0.5rem;
            margin-bottom:0.2rem;
        }
        & .info-title{
            display:block;
            font-size:1.8rem;
            white-space:nowrap;
        }
        & .info-title.active{
            color:white;
            font-weight:560;
        }
        & .hidden-msg{
            padding-top: 1.5rem;
            display:block;
            padding-left: 2rem;
            text-align: justify;
        }
        &.active{
            background-color:rgb(40,40,40);
        }
        &:hover{
            background-color:rgb(60,60,60);
        }
    }
}
& .right{
    flex:7;
}
`
const icons=[<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>]
export default function Dash() {
    const [dash,setdash]=useState([false,false,false])
  return (
    <DashDiv>
      <div className="left">
          <div className="title">Dash</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque autem iste commodi adipisci ab illo aliquam officia doloribus minima?</p>
          <div className="infos">
              <div className={dash[0]?"info active pointer":"info pointer"} onClick={()=>setdash([true,false,false])}>
                  <span className={dash[0]?"info-title active":"info-title"}>{dash[0]?icons[0]:icons[1]} Lorem ipsum dolor sit.</span>
                  {dash[0] && <span className="hidden-msg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa asperiores suscipit ut numquam quibusdam repellendus omnis, et sed veniam iure expedita obcaecati quos dolor eius? Alias, adipisci laborum!.</span>}
              </div>
              <div className={dash[1]?"info active pointer":"info pointer"} onClick={()=>setdash([false,true,false])}>
                  <span className={dash[1]?"info-title active":"info-title"}>{dash[1]?icons[0]:icons[1]} Lorem, ipsum dolor.</span>
                  {dash[1] && <span className="hidden-msg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis non incidunt, cum distinctio autem quis quibusdam, eos itaque odit sunt, iusto velit vitae accusamus consequuntur nobis sapiente!</span>}
              </div>
              <div className={dash[2]?"info active pointer":"info pointer"} onClick={()=>setdash([false,false,true])}>
                  <span className={dash[2]?"info-title active":"info-title"}>{dash[2]?icons[0]:icons[1]} Lorem ipsum dolor sit.</span>
                  {dash[2] && <span className="hidden-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat porro velit, a magnam expedita odio repellat optio quidem, sequi, nihil consequatur. Nemo quis harum dolor ea ab officiis asperiores dolorum.</span>}
              </div>
          </div>
      </div>
      <div className="right"></div>
    </DashDiv>
  )
}
