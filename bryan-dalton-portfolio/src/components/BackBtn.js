import React from 'react'
import{Link} from "react-router-dom"


function backBtn () {
    return(
<div className='back'>
    <Link to="/">
        <img src='./backArrowWhite' alt='Back Arrow'></img>
    </Link>
</div>
)}

export default backBtn