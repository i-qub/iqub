import React from 'react'
import styled from 'styled-components'
const IntegrationsDiv=styled.div`
width:100%;
height:40vh;
font-family:sans-serif;
padding:90px 80px;
&>span{
  font-size:2.9rem;
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
