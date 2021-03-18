import React, {useState, useContext, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import {GrowthRateContext} from '../context/GrowthRate.context';

export default function Chart() {

    const [data, setData] = useState([]);
    const {growthRate} = useContext(GrowthRateContext);

    useEffect(() => {
        let results = [];
        for(let i=1; i<=10; i++){
            let assetBalance = 1.25*((Math.pow(1 + (growthRate/100), i))) ;
            results.push(assetBalance*100);
        }
        setData((data) => {
            return results;
        })
    }, [growthRate])

    

    const chartData = (canvas) => {
        return {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [
                {
                    labels: ['Asset Balance (in Lakhs)'],
                    data: data,
                    backgroundColor: setGradientColor(canvas, "#000080")
                }
            ],
        }
    }

    const setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0.3, color);
        gradient.addColorStop(0.9, "#31aaf5");
        return gradient;
    }
    return (
        <div className="chart">
            <Bar
                data={chartData}
                width={50}
                height={15}
                options={{ 
                    legend: {
                        display: false,
                        position: 'right',
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: 0.5,
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true
                            }
                        }],
                    }   
                 }}
            />
            <h3>No of Years</h3>
        </div>
    )
}
