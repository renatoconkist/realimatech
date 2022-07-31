import React from 'react'
import * as BootIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

function DiceyNavMenu() {
    return(
        <nav id="Dicey-menu" className="navmenu">
            <Link to="#" className='menu-toggler'>
                <BootIcons.BsDice1/>
            </Link>
        </nav>
    )
}

export default DiceyNavMenu