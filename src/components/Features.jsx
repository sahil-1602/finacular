import React from 'react';
import Feature from './Feature';

export default function Features() {
    const features = [
        {
            title: "Asset Balance",
            input: "Enter amount",
            value: "₹ 1,25,000",
            duration: "Last updated",
            durationValue: "3 Dec"
        },
        {
            title: "Growth Rate",
            input: "Enter Growth Rate",
            value: "9.3%",
            duration: "Inflation",
            durationValue: "6%"
        },
        {
            title: "Major Investments",
            input: "Return generated per month",
            value: "₹ 1,25,000",
            duration: "",
            durationValue: ""
        }, 
        {
            title: "Financial Independence",
            input: "Age",
            value: "45 years",
            duration: "Optimized",
            durationValue: "Yes No"
        },
        {
            title: "Average Expenses",
            input: "Amount",
            value: "₹ 25,000",
            duration: "3 month average",
            durationValue: "₹ 40,000"
        },       
    ]
    return (
        <div className="features">
            {features.map((feature, i) => {
                return <div key={i} className={`features--${++i}`}><Feature info={feature}/></div>
            })}
        </div>
    )
}
