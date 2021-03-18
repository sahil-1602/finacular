import React, { createContext, useState} from 'react';

export const GrowthRateContext = createContext();

export function GrowthRateProvider(props){

    const [growthRate, setRate] = useState(9.3);
    
    function updateRate(newRate){
        setRate((growthRate) => {
            return newRate;
        })
    }

    return(
        <GrowthRateContext.Provider value={{growthRate, updateRate}}>
            {props.children}
        </GrowthRateContext.Provider>
    )
}