import React from 'react'

export default function Card(props) {
    return (
        <div className="ad">
            <div className="ad--img">
                <img src={props.card.img}/>
            </div>
            <div className="ad--text">
                {props.card.text}
            </div>
            <div className="ad--btn">
                <a className="btn" href="#">Learn Now</a>
            </div>
        </div>
    )
}
