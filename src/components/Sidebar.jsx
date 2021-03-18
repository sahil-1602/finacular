import React from 'react';

import { FaAudible } from "react-icons/fa";
import {MdAssessment} from "react-icons/md";
import {MdReceipt} from "react-icons/md";
import {MdTimeline} from "react-icons/md";
import {MdBook} from "react-icons/md";
import {MdAccountCircle} from "react-icons/md";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar--head">
                <h1>
                     Finacular
                </h1>
            </div>
            <div className="sidebar--content">
                <div className="sidebar--items">
                    <div className="sidebar--items-item sidebar--items-item-active"><MdAssessment/> Dashboard</div>
                    <div className="sidebar--items-item"><MdReceipt/> Assets</div>
                    <div className="sidebar--items-item"><MdTimeline/> Tracker</div>
                    <div className="sidebar--items-item"><MdBook/> Planning & Advisory</div>
                </div>
                <div className="sidebar--footer">
                    <div><MdAccountCircle/> Vandana M</div>
                </div>
            </div>
        </div>
    )
}
