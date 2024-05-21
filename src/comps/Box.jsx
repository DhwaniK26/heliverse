import React from 'react';
import './Box.css';
import mybox from './images/motionarteffect-img11.png'

export default function Box(props) {
  return (
    <div>
      <div className='outbox p-4'>
        <h2 style={{color:"white", lineHeight:""}} className='ms-2'>{props.title}</h2>
        <p style={{color:"grey"}} className='ms-2'>{props.body}</p>
        <img src={props.myimg}></img>
      </div>
    </div>
  )
}
