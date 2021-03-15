import React from 'react'

export default function Card(props) {

    const {img, text} = props.card; 

    return (
        <div className="ad">
            <div className="ad--img">
                <img alt="ad" src={img}/>
            </div>
            <div className="ad--text">
                {text}
            </div>
            <div className="ad--btn">
                <a className="btn" href="www.google.com">Learn Now</a>
            </div>
        </div>
    )
}
