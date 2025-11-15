import { windows } from "../mock/weeklyRawData.js";

function normalizeDayGrams(events, servingSize) {
    let dailyTotals =
    {
        breakfast: 0,
        lunch: 0,
        dinner: 0
    }

    for (const event of events) {
        if (event.time >= windows.breakfast.start && event.time <= windows.breakfast.end) {
            dailyTotals.breakfast += event.servings * servingSize;
        } else if (event.time >= windows.lunch.start && event.time <= windows.lunch.end) {
            dailyTotals.lunch += event.servings * servingSize;
        } else if (event.time >= windows.dinner.start && event.time <= windows.dinner.end) {
            dailyTotals.dinner += event.servings * servingSize;
        }
    }
    
    const grams = [dailyTotals.breakfast, dailyTotals.lunch, dailyTotals.dinner];

    return grams;
}

function calculateBaseGrams(raw, servingSize) {
    const weeklyData = raw.map(day => normalizeDayGrams(day, servingSize));
    const totalPerDay = weeklyData.map(day => day.reduce((sum, amount) => sum + amount, 0));
    return Math.floor(totalPerDay.reduce((sum, amount) => sum + amount, 0) / totalPerDay.length);
}

function toPercentage(gramsData) {
    const percentage = gramsData.map(day => {

        const total = day.reduce((sum, amount) => sum + amount, 0);
        if (total === 0) return [0, 0, 0];
        
        return day.map(gramsPerMeal => {
            return (gramsPerMeal / total) * 100;
        })

    });

    return percentage;
}

function calculatePercentageDistribution(raw, servingSize) {
    const weeklyGramsData = raw.map(day => normalizeDayGrams(day, servingSize));
    const weeklyPercentages = toPercentage(weeklyGramsData);
    

    let avgBreakfast = 0;
    let avgLunch = 0;
    let avgDinner = 0;

    weeklyPercentages.forEach(dayPercentages => {
        avgBreakfast += dayPercentages[0]
        avgLunch += dayPercentages[1]
        avgDinner += dayPercentages[2]
    })
     
    const numberofDays = weeklyPercentages.length;
    avgBreakfast /= numberofDays;
    avgLunch /= numberofDays;
    avgDinner /= numberofDays;

    return [avgBreakfast, avgLunch, avgDinner];
}

function calculateMealDistribution(percentage, totalGrams) {
    const arr = percentage.map(p => Math.floor((p / 100) * totalGrams));
    const partition = { breakfast: arr[0], lunch: arr[1], dinner: arr[2] };

    return partition;
}

function setSafeDefault(raw, servingSize) {
    const percentageDistribution = [33, 33, 33];
    const totalGrams = calculateBaseGrams(raw, servingSize);
    const mealDistribution = percentageDistribution.map(percentage => Math.floor((percentage / 100) * totalGrams));

    //     console.log(`
    // Safe Default Mode

    // Computed grams limit: ${avgGrams}g
    // Partition: ${gramsPerMeal.map(grams => grams + "g").join(" | ")}
    //         `)

    return mealDistribution;
}

export { calculateMealDistribution, calculatePercentageDistribution, setSafeDefault, calculateBaseGrams }