import React from 'react';


export default function Project(props) {
  return (
    <div className='project'>
      <a className='projectLinks' href={props.link}>
        <img src={props.img} alt={props.name}/>
        <p>{props.name}</p>
     </a>
     <a className='projectLinks' href={props.github}>
        <img id='git' alt='github white' src='/github-white.png'></img>
      </a>
    </div>
  )
}