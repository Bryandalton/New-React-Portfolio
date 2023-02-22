import React from 'react';


export default function Project(props) {
  return (
    <div className='project'>
      <a href={props.link}>
        <img src={props.img} alt={props.name}/>
        <p>{props.name}</p>
     </a>
     <a href={props.github}>Github</a>
    </div>
  )
}