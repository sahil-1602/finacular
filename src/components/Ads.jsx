import React from 'react';
import Card from './Ad';

export default function Ads() {
    const cards = [
        {
            img: "https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg?size=338&ext=jpg",
            text: "Understanding the power of compounding!",
            btn: "Learn now"
        },
        {
            img: "https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg?size=338&ext=jpg",
            text: "Track all your expenses on a daily basis",
            btn: "Track now"
        }
    ]
    return (
        <div className="ads">
            {cards.map((card, i) => {
                return <Card key={i} card={card} />    
            })}
        </div>
    )
}
