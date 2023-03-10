import React from 'react'
import{Link} from "react-router-dom"


function backBtn () {
    return(
<div >
    <Link to="/">
        <img className='back' src='./backArrowWhite.png' alt='Back Arrow'></img>
    </Link>
</div>
)}

export default backBtn