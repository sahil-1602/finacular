import React from 'react'
import { MdSettings } from "react-icons/md";
import { MdAddAlert } from "react-icons/md";
import {MdTimeline} from "react-icons/md";

export default function Navbar() {
    return (
        <div className="nav">
            <div className="nav--settings"><MdSettings/></div>
            <div className="nav--notify"><MdAddAlert/></div>
            <div className="nav-btn"><a className="btn" href="#"><MdTimeline/>Actions</a></div>
        </div>
    )
}
