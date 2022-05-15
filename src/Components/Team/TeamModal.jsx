import React from 'react'
import styled from 'styled-components'
import { icons,closeIcon} from '../../assests/svg-icn'
const ModalDiv=styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color:rgba(0, 0, 0,0.4);
z-index:100;
display:flex;
justify-content:center;
align-items:center;
&>.modal{
    width:60vw;
    height:90vh;
    background:white;
    display:flex;
    &>.left{
      flex:4.5;
      background:black;
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      &>.image{
        height:60%;
        background-size:contain;
        background-repeat:no-repeat;
      }
      &>.handles{
        display:flex;
        width:100%;
        justify-content:space-evenly;
        &>div{
          transition:all .4s ease;
        }
        &>div:hover{
          transform:translateY(-20%) scale(1.2);
        }
      }
    }
    &>.right{
      flex:5.5;
      position:relative;
      padding:2rem;
      &>.top{
        width:100%;
        &>span{
          text-align:center;
          display:block;
        }
        &>span:first-child{
          font-size:3.8rem;
          margin-bottom:.2rem;
          font-weight:100;
        }
        &>span:nth-child(2){
          font-weight:lighter;
          font-size:1.2rem;
          color:rgba(0,0,0,0.6);
        }
        margin-bottom:2rem;
      }
      &>.message{
        padding:1.5rem 2rem;
        border-radius:5px;
        font-weight:lighter;
        height:80%;
        overflow-y:scroll;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
      }
      &>.close{
        position:absolute;
        right:2px;
        top:2px;
        cursor:pointer;
        transform:scale(0.6);
        transition:all .2s ease;
        &:hover #Vector{
          fill:#666666;
        }
        &:hover{
          transform:scale(0.55);
        }
      }
    }
}
`
export default function TeamModal({close}) {
  return (
    <ModalDiv>
        <div className="modal">
        <div className="left">
          <div className="image" style={{backgroundImage:"url(https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg)"}}>
          </div>
          <div className="handles">
          {icons.map((val,idx)=>{
                return <div key={idx} className="pointer">{val}</div>;
            })}
          </div>
        </div>
        <div className="right">
        <div className="top">
          <span>Jon Snow</span>
          <span>Chief Executive Officer</span>
        </div>
        <div className="message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt animi, distinctio ducimus ea quibusdam suscipit, nesciunt incidunt corporis doloremque dolorum libero debitis delectus earum adipisci cum, totam magni sint architecto illum reiciendis saepe ex! Odio magnam, ducimus, ea voluptatum repellat, architecto obcaecati earum nostrum consectetur voluptas itaque esse deleniti voluptate commodi assumenda! Incidunt eligendi ad eum dolorum aut unde vel odit officiis ratione praesentium, blanditiis dolor voluptates obcaecati vitae minus dignissimos consequatur. Corporis delectus dicta impedit voluptatibus dolores sequi, inventore accusantium asperiores recusandae numquam architecto, explicabo dolorem ab consequatur adipisci repudiandae consequuntur deserunt voluptate laudantium harum. Quasi exercitationem nemo ut?
        </div>
        <div className='close' onClick={()=>close()}>{closeIcon}</div>
        </div>
        </div>
    </ModalDiv>
  )
}

