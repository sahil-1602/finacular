import React from 'react';
import { BiChart } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";


export default function Feature(props) {
    const {title, input, value, duration, durationValue} = props.info;
    return (
        <div className="feature">
            <div className="feature--head">
                <h3 className="feature--head-title">{title}</h3>
                <div className="feature--head--icon">
                    <MdMoreHoriz/>
                </div>
            </div>
            <div className="feature--content">
                <div className="feature--content--input">
                    <h3 className="feature--content--input-text">{input}</h3>
                    <h3 className="feature--content--input-amt">{value}</h3>
                    <h4 className="feature--content--input-time">{duration} <span>{durationValue}</span></h4>
                </div>
                <div className="feature--content--icon">
                    <BiChart/>
                </div>
            </div>
        </div>
    )
}
