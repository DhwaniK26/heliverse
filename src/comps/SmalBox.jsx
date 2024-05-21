import React from 'react'
import './Box.css'
import spark from './images/motionarteffect-img9.png'

export default function SmalBox(props) {
  return (
    <div>

        <div className='p-4 smallbox'>
            <img src={props.imgs} height={200} width={200} />
            <br></br><br></br>
            <h3 style={{color:"white"}}>{props.title}</h3>
            <br></br>
            <h5 style={{color:"grey"}}>{props.body}</h5>

        </div>
      
    </div>
  )
}
