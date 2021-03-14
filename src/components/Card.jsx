import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--img">
                <img src={props.card.img}/>
            </div>
            <div className="card--text">
                {props.card.text}
            </div>
            <div className="card--btn">
                <a className="btn" href="#">Learn Now</a>
            </div>
        </div>
    )
}
