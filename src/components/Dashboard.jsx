import React from 'react';
import Sidebar from './Sidebar'
import '../sass/_main.scss';
import useToggleState from '../hooks/useToggleState'

export default function Dashboard() {
    // const [isOpen, toggleChange] = useToggleState(true);
    // const styles = {
    //     content: !isOpen ? {width:'100%'}: null,
    // }
    
    return (
        <div className="dashboard">
            <div className={'dashboard--sidebar'}>
                    <Sidebar />
            </div>
            <div className="dashboard--content" >
                <div className="dashboard--content-nav">
                    Navbar goes here
                </div>
                <div className="dashboard--content-main">
                    <div className="dashboard--content-main-chart">
                        Main content goes
                    </div>
                    <div className="dashboard--content-main-info">
                        More info....
                    </div>
                </div>
            </div>
        </div>
    )
}
