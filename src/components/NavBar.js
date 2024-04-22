import React from 'react'
import {Link} from 'react-router-dom'

function navBar () {
    return(
        <div>
            <ul className='navBar'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
                <li><Link to='/carousel'>Carousel</Link></li>

            </ul>
        </div>
    )
}

export default navBar