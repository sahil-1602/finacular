import React from 'react';

import Feature from './Feature';

import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { BiChart } from "react-icons/bi";
import { HiGlobe } from "react-icons/hi";
import { FaCoins } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";


export default function Features() {
    const colors = ['#cd7f32', '#6f2da8', '#008080', '#e4d00a', '#6699cc'];
    const features = [
        {
            title: "Asset Balance",
            input: "Enter amount",
            value: "₹ 1,25,000",
            duration: "Last updated",
            durationValue: "3 Dec",
            icon: <FaCreativeCommonsSamplingPlus/>,
            color: colors[0]
        },
        {
            title: "Growth Rate",
            input: "Enter Growth Rate",
            value: "9.3%",
            duration: "Inflation",
            durationValue: "6%",
            icon: <BiChart/>,
            color: colors[1]
        },
        {
            title: "Major Investments",
            input: "Return generated per month",
            value: "₹ 1,25,000",
            duration: "",
            durationValue: "",
            icon: <FaCoins/>,
            color: colors[2]
        }, 
        {
            title: "Financial Independence",
            input: "Age",
            value: "45 years",
            duration: "Optimized",
            durationValue: "Yes No",
            icon: <HiGlobe/>,
            color: colors[3]
        },
        {
            title: "Average Expenses",
            input: "Amount",
            value: "₹ 25,000",
            duration: "3 month average",
            durationValue: "₹ 40,000",
            icon: <FaHotdog/>,
            color: colors[4]
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
