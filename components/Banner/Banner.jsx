import React from 'react'

export default function Banner({title, type, children}) {
    let imageSrc;
    switch(type){
        case "success":
            imageSrc = "../../images/check-circle.svg"
            break;
        case "warning":
            imageSrc = "../../images/exclamation.svg"
            break;
        case "error":
            imageSrc = "../../images/x-circle.svg"
            break;
        case "neutral":
            imageSrc = "../../images/icon.svg"
            break;
    }

    return (
        <div className={`banner banner-${type}`}>
            <img src={imageSrc} className="banner-icon"/>
            <div className="banner-text-wrapper">
                <p className="banner-title">{title}</p>
                {children && <p className="banner-text">{children}</p>}
            </div>
        </div>
    )
}