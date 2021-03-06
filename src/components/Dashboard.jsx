import React from 'react';

import '../sass/_main.scss';

import Sidebar from './Sidebar'
import Navbar from './Navbar';
import Ads from './Ads';
import ChartSection from './ChartSection';

import {GrowthRateProvider} from '../context/GrowthRate.context';

export default function Dashboard() {
    
    return (
        <div className="dashboard">
            <div className='dashboard--sidebar'>
                    <Sidebar />
            </div>
            <div className="dashboard--content" >
                <div className="dashboard--content-nav">
                    <Navbar/>
                </div>
                <div className="dashboard--content-main">
                    <div className="dashboard--content-main-chart">
                        <GrowthRateProvider>
                            <ChartSection/>
                        </GrowthRateProvider>
                    </div>
                    <div className="dashboard--content-main-info">
                        <Ads/>
                    </div>
                </div>
            </div>
        </div>
    )
}
