import React from 'react';

import Feature from './Feature';

import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { BiChart } from "react-icons/bi";
import { HiGlobe } from "react-icons/hi";
import { FaCoins } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";


export default function Features() {
    const navyBlue = "#000080";
    const skyblue = "#31aaf5";

    const features = [
        {
            title: "Asset Balance",
            input: "Enter amount",
            value: "₹ 1,25,000",
            duration: "Last updated",
            durationValue: "3 Dec",
            icon: <FaCreativeCommonsSamplingPlus/>,
            color: navyBlue,
            classes: "asset-balance"
        },
        {
            title: "Growth Rate",
            input: "Enter Growth Rate",
            value: "9.3%",
            duration: "Inflation",
            durationValue: "6%",
            icon: <BiChart/>,
            color: skyblue,
            classes: "growth-rate"
        },
        {
            title: "Major Investments",
            input: "Return generated per month",
            value: "₹ 1,25,000",
            duration: "",
            durationValue: "",
            icon: <FaCoins/>,
            color: navyBlue,
            classes: "major-investments"
        }, 
        {
            title: "Financial Independence",
            input: "Age",
            value: "45 years",
            duration: "Optimized",
            durationValue: "Yes No",
            icon: <HiGlobe/>,
            color: navyBlue,
            classes: "financial-ind"
        },
        {
            title: "Average Expenses",
            input: "Amount",
            value: "₹ 25,000",
            duration: "3 month average",
            durationValue: "₹ 40,000",
            icon: <FaHotdog/>,
            color: skyblue,
            classes: "avg-exp"
        },       
    ]
    return (
        <div className="features">
            {features.map((feature, i) => {
                return <div key={i} className={`features--${++i} features--item`}><Feature info={feature}/></div>
            })}
        </div>
    )
}
