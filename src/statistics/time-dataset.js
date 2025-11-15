import { windows } from "../mock/weeklyRawData.js";
import { getOffset, setTime } from "./schedule.js";

function normalizeDayByTime(events) {
    const dailyTimeBuckets = {
        breakfast: [],
        lunch: [],
        dinner: []
    };

    for (const event of events) {
        if (event.time >= windows.breakfast.start && event.time <= windows.breakfast.end) {
            dailyTimeBuckets.breakfast.push(event.time);
        } else if (event.time >= windows.lunch.start && event.time <= windows.lunch.end) {
            dailyTimeBuckets.lunch.push(event.time);
        } else if (event.time >= windows.dinner.start && event.time <= windows.dinner.end) {
            dailyTimeBuckets.dinner.push(event.time);
        }
    }

    const window = {
        breakfast: null,
        lunch: null,
        dinner: null
    };

    for (const meal in dailyTimeBuckets) {
        const timeFrames = dailyTimeBuckets[meal]; // timeframes = dailyTimeBucket[breakfast]
        if (timeFrames.length > 0) {
            const sum = timeFrames.reduce((total, time) => total + time, 0);
            const average = sum / timeFrames.length;
            window[meal] = Math.round(average);
        }
    }
    return window;
}

function sortAscending(sample) {
    return sample.sort((a, b) => a - b);
}

function calculateMedian(sample) {
    const sampleSize = sample.length;
    let median = 0;
    if (sampleSize % 2 === 1) {
        median = sample[Math.floor(sampleSize / 2)];
    } else {
        median = (sample[sampleSize / 2 - 1] + sample[sampleSize / 2]) / 2;
    }
    return median;
}

function calculateQ1(sample, median) {
    const data = [];
    sample.forEach(d => {
        if (d < median) {
            data.push(d);
        }
    });
//[505, 470, 478, 538]
    let dataSize = data.length;
    let Q1 = 0;
    if (dataSize % 2 === 1) {
        Q1 = data[Math.floor(dataSize / 2)]
    } else {
        Q1 = (data[dataSize / 2 - 1] + data[dataSize / 2]) / 2
    }

    return Q1;
}

function calculateQ3(sample, median) {
    const data = [];
    sample.forEach(d => {
        if (d > median) {
            data.push(d);
        }
    })

    let dataSize = data.length;
    let Q3 = 0;
    if (dataSize % 2 === 1) {
        Q3 = data[Math.floor(dataSize / 2)];
    } else {
        Q3 = (data[dataSize / 2 - 1] + data[dataSize / 2]) / 2
    }

    return Q3;
}

function calculateIQR(q1, q3) {
    return q3 - q1;
}

function calculateHalfWidth(value, min, max) {
    const halfValue = value / 2;
    let width = 0;
    if (halfValue < 60) {
        width = min;
    } else {
        width = max;
    }
    return width;
}

function calculateMealTimes(raw, min, max) {

    const sortedSample = sortAscending(raw);
    
    const weeklyData = sortedSample.map(day => normalizeDayByTime(day));
    
    
    const mealSchedule = { breakfast: [], lunch: [], dinner: [] };

    weeklyData.forEach(day => {
        if (day.breakfast) mealSchedule.breakfast.push(day.breakfast);
        if (day.lunch) mealSchedule.lunch.push(day.lunch);
        if (day.dinner) mealSchedule.dinner.push(day.dinner);
    });

    const avgMealTimes = {};
    
    //Hindi naka sort ing mealSchedule[meal] na array boi: [505, 470, 478, 538, 530, 448, 470] 
    for (const meal in mealSchedule) {
        if (mealSchedule[meal].length > 0) {
            const median = calculateMedian(mealSchedule[meal]);
            const centerMealTime = setTime(median);
            const Q1 = calculateQ1(mealSchedule[meal], centerMealTime);
            const Q3 = calculateQ3(mealSchedule[meal], centerMealTime);
            const IQR = calculateIQR(Q1, Q3);
            console.log(IQR);
            const halfWidth = calculateHalfWidth(IQR, min, max);
             
            
            avgMealTimes[meal] = halfWidth <= 59 ? getOffset(centerMealTime, min) : getOffset(centerMealTime, max);
        } else {
            avgMealTimes[meal] = 0;
        }
    }

    // console.log(avgMealTimes);

    // console.log(`

    //     ${window} time(in minutes): ${sample}
    //     Median or Q2 = ${median}
    //     Quartile 1(Q1) = ${Q1}
    //     Quartile 3(Q3) = ${Q3}
    //     IQR = ${IQR}
    //     Half-Width or Range = ${halfWidth}
    //     ${minutes} minutes is equivalent to ${timeFormat}

    //     Schedule: ${schedule}
    //     `);

    return avgMealTimes;
}

export { calculateMedian, sortAscending, calculateQ1, calculateQ3, calculateIQR, calculateHalfWidth, calculateMealTimes, normalizeDayByTime }