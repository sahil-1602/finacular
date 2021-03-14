import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { BiRightTopArrowCircle } from 'react-icons/bi';

export default function Chart() {
    const chartData = {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
            {
                labels: ['Asset Balance (in Lakhs)'],
                data: [
                    130,
                    180,
                    230,
                    380,
                    430,
                    580,
                    630,
                    780,
                    830,
                    980
                ],
                backgroundColor: '#000080'
            }
        ],

    }
    return (
        <div className="chart">
            <h3>Annual Projection</h3>
            <Bar
                data={chartData}
                width={50}
                height={13}
                options={{ 
                    legend: {
                        display: false,
                        position: 'right',
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: 0.6
                        }]
                    }   
                 }}
            />
            <h3>No of Years</h3>
        </div>
    )
}
