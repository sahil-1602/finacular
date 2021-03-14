import React from 'react';
import Card from './Card';

export default function Ads() {
    const cards = [
        {
            img: "https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg?size=338&ext=jpg",
            text: "Understanding the power of compounding!"
        },
        {
            img: "https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg?size=338&ext=jpg",
            text: "Track all your expenses on a daily basis"
        }
    ]
    console.log(cards);
    return (
        <div className="ads">
            {cards.map((card, i) => {
                console.log(card)
                return <Card key={i} card={card} />    
            })}
        </div>
    )
}
