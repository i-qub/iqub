import React from 'react'
import styled from 'styled-components'
const IntegrationsDiv=styled.div`
width:100%;
height:40vh;
font-family:sans-serif;
padding:90px 80px;
&>span{
  font-size:2.9rem;
  background:linear-gradient(-80deg, #01a49e, #005EB8);
  -webkit-text-fill-color:transparent;
  -webkit-background-clip:text;
  font-weight:500;
  letter-spacing:2px;
}
& .slider{
  width:100%;
  height:100%;
}
& .slider-in{
  width:100%;
  height:100%;
  margin-right:auto;
  display:flex;
  align-items:center;
  overflow-y:scroll;
  & .logo{
    margin:0px 30px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
`
export default function Integrations() {
  return (
    <IntegrationsDiv>
      <span>Integrations</span>
      <div className="slider">
        <div className="slider-in">
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Opencart.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Prestashop.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Woocommerce.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Opencart.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Prestashop.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Woocommerce.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Opencart.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Prestashop.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Woocommerce.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Opencart.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Prestashop.png" alt="" />
          </div>
          <div className="logo">
          <img src="https://baaz.live/images/homepage/Woocommerce.png" alt="" />
          </div>
        </div>
      </div>
    </IntegrationsDiv>
  )
}
