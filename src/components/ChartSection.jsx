import Chart from './Chart';
import React from 'react';
import Features from './Features';

export default function ChartSection() {
    return (
        <div className="section">
            <div className="section--chart">
                <Chart/>
            </div>
            <div className="section--features">
                <Features/>
            </div>
        </div>
    )
}
