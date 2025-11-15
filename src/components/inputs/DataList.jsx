import React from 'react';
import { useData } from '../contexts/DataContext'
import { calculateBaseGrams, calculateMealDistribution, calculatePercentageDistribution } from "../../statistics/grams-dataset";
import { weeklyRawData, weeklyRawData_set1, weeklyRawData_set2, weeklyRawData_set3, weeklyRawData_set4, weeklyRawData_set5 } from "../../mock/weeklyRawData";
import { calculateMealTimes } from '../../statistics/time-dataset';
import { calculateBehavioralAdjustment } from '../../statistics/adjustment';
import {toTimeString} from '../../utils'

const raw = [weeklyRawData, weeklyRawData_set1, weeklyRawData_set2, weeklyRawData_set3, weeklyRawData_set4, weeklyRawData_set5];
const rawData = raw[2];


const  DataList = ({ setModalVisible }) => {
    
    const [dayIndex, setDayIndex] = React.useState(0);
    const [isAdvance, setIsAdvance] = React.useState(true);
    const { profile, factors, setCalculatedData } = useData();
    const [isLoading, setIsLoading] = React.useState(false);

    function performCalculations(isAdvancedMode) {
    const servingSize = profile.servingSize;
    const dogProfile = {
        age: profile.age,
        activity: profile.activityLevel,
        health: profile.healthStatus,
        temperature: factors.temperature,
        social: factors.socialSituation,
        ownerPresence: factors.ownerPresence
    };

    let distribution;
    if (isAdvancedMode) {
        distribution = calculatePercentageDistribution(rawData, servingSize);
    } else {
        distribution = [33.33, 33.33, 33.34];
    }

    const bGrams = calculateBaseGrams(rawData, servingSize);
    const mealTimes = calculateMealTimes(rawData, 15, 30);
    const adjustment = calculateBehavioralAdjustment(dogProfile);
    const adjustedTotalGrams = Math.round(bGrams * adjustment.score);
    const partition = calculateMealDistribution(distribution, adjustedTotalGrams);

    return {
        adjustment,
        mealTimes,
        partition,
        bGrams,
        distribution
    };
}

    const handleGenerateData = () => {

         if (isLoading) return;
          
         setIsLoading(true);
          
         setTimeout(() => {
           const data = performCalculations(isAdvance);
           setCalculatedData(data);
           setIsLoading(false);
           setModalVisible(true);

         }, 2000) 
         
    }

    return (
        <div>
           <div className="list-box grid grid-cols-7 bg-secondary rounded-full">
               {
                rawData.map((_, index) => <p onClick={() => setDayIndex(index)} className={`${index == dayIndex && "lg:bg-primary lg:text-white lg:rounded-full"} transition-all duration-300 cursor-pointer my-2 mx-2 text-center py-2 px-2 text-sm whitespace-nowrap lg:text-base`} key={index}>Day {index + 1}</p>)
               }
           </div>

           <div className="border list-box border-[#D9D9D9] mt-10 p-7 rounded-2xl">
              <div className="flex justify-between items-center">
                  <h3 className="text-dark text-2xl font-semibold">Day {dayIndex + 1}</h3>

                  <p className="text-dark bg-[#D9D9D9] rounded-full px-4 text-sm font-semibold py-2">{raw[2][dayIndex].length} total servings</p>
              </div>

              <div className="grid grid-cols-7 text-dark mt-8 py-4 border-b border-b-[#D9D9D9]">
                <p className="col-span-5">#</p>
                <p>Time</p>
                <p>Servings</p>
              </div>

              {
                    raw[2][dayIndex].map((data, index) => {
                        return <div key={index} className="grid text-primary grid-cols-7 py-4 border-b border-b-[#D9D9D9]">
                          <p className="col-span-5">{index + 1}</p>
                          <p>{toTimeString(data.time)}</p>
                          <p>{data.servings}</p>
                        </div>
                          
                    })
                }

           </div>
           
           <div className="list-box flex flex-col gap-10 items-center mt-10 justify-between lg:flex-row">
             <button onClick={handleGenerateData} className={`${isLoading ? "cursor-not-allowed" : "cursor-pointer"} bg-primary flex justify-center items-center text-white py-3 px-6 relative rounded-lg`}>
                <span className={isLoading && "opacity-0"}>Generate Schedule</span>
                <div className={`${!isLoading && "opacity-0"} lds-roller scale-[.4] absolute`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                 
            </button>

           <div className="flex items-center text-dark gap-5">
            <p>{isAdvance ? "Advanced Data-Driven" : "Safety Default"}</p>
                               <div onClick={() => setIsAdvance(prev => !prev)} className="cursor-pointer relative bg-primary w-[3.5em] rounded-full p-1">
                                 <div className={`bg-white rounded-full w-5 pa aspect-square transition-all duration-300 ${isAdvance && "ml-7"}`}></div>
                               </div>
                               
                              </div>
           </div>
           
        </div>
    )
}

export default DataList;