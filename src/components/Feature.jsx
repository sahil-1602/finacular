import React, {useContext} from 'react';
import { MdMoreHoriz } from "react-icons/md";
import useInputState from '../hooks/useInputState';
import {GrowthRateContext} from '../context/GrowthRate.context';


export default function Feature(props) {
    const {title, input, value, duration, durationValue, icon, color, classes} = props.info;
    const [data, updateData] = useInputState();
    const {updateRate} = useContext(GrowthRateContext);

    const handleClick = (e) => {
        if(e.keyCode === 13){
            updateRate(parseFloat(data))
        }
    }

    if(classes==="growth-rate"){
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
                    <div className="growth-container">
                        <input 
                        value={data} 
                        onChange={updateData} 
                        onKeyDown={(e) => handleClick(e)}
                        className={classes}  
                        placeholder={value}
                    />
                    </div>
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
    }else{
        return(
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
                    <input 
                        value={data} 
                        onChange={updateData} 
                        onKeyDown={(e) => handleClick(e)}
                        className={classes}  
                        placeholder={value}
                        disabled="disabled"
                    />
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
}

