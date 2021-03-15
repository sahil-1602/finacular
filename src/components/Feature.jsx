import React from 'react';
import { MdMoreHoriz } from "react-icons/md";


export default function Feature(props) {
    const {title, input, value, duration, durationValue, icon, color} = props.info;
    return (
        <div  className="feature">
            <div style={{color: color}} className="feature--head">
                <h3 className="feature--head-title">{title}</h3>
                <div className="feature--head--icon">
                    <MdMoreHoriz/>
                </div>
            </div>
            <div className="feature--content">
                <div className="feature--content--input">
                    <h3 className="feature--content--input-text">{input}</h3>
                    <h3 className="feature--content--input-amt">{value}</h3>
                    <h4 className="feature--content--input-time">
                        {duration} 
                        <span>{durationValue}</span>
                    </h4>
                </div>
                <div style={{color: color}} className="feature--content--icon">
                    {icon}
                </div>
            </div>
        </div>
    )
}
