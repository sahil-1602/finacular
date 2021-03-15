import React from 'react'

export default function Card(props) {
    return (
        <div className="ad">
            <div className="ad--img">
                <img alt="ad" src={props.card.img}/>
            </div>
            <div className="ad--text">
                {props.card.text}
            </div>
            <div className="ad--btn">
                <a className="btn" href="www.google.com">Learn Now</a>
            </div>
        </div>
    )
}
