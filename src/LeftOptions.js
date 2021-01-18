import React from 'react'
import './LeftOptions.css'
function LeftOptions({Icon,title}) {
    return (
        <div className="left-options">
            {Icon && <Icon className="headeroption-icon"/>}
            <h3 className="headeroption-title">{title}</h3>
        </div>
    )
}

export default LeftOptions
