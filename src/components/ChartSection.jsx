import React from 'react';
import Chart from './Chart';
import Features from './Features';

export default function ChartSection() {
    return (
        <div className="section">
            <div className="section--chart">
                <div className="section--chart--items">
                    <div>

                    </div>
                    <div>
                        <h3>Annual Projection</h3>
                    </div>
                    <div className="section--chart--items-box">
                        <div className="section--chart--items-box-1">10 y</div>
                        <div className="section--chart--items-box-2">20 y</div>
                        <div className="section--chart--items-box-3">30 y</div>
                    </div>
                </div>
                <Chart/>
            </div>
            <div className="section--features">
                <Features/>
            </div>
        </div>
    )
}
