import React from 'react'
import './Header.css';
function HeaderOption({Icon}) {
    return (
        <div >
            {Icon && <Icon  className="headerIcon"/>}
        </div>
    )
}

export default HeaderOption
