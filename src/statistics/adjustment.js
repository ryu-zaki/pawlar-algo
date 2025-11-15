const adjustmentFactors = {
    age: { puppy: 1.20, adult: 1.0, senior: 0.9 }, // Puppies need ~20% more, seniors ~10% less
    activity: { low: 0.85, moderate: 1.0, high: 1.25 }, // High activity needs ~25% more
    health: { healthy: 1.0, overweight: 0.80, underweight: 1.15, special: 1.05 },
    temperature: { cold: 1.10, moderate: 1.0, hot: 0.90 }, // Cold weather requires more energy
    social: { calm: 1.0, stress: 1.05, other_dogs: 1.10 }, // Stress and social interaction can increase energy needs
    ownerPresence: { present: 1.05, absent: 1.0 }
};

function calculateBehavioralAdjustment(profile) {
    let score = 1.0;
    let explanations = [];

    score *= adjustmentFactors.age[profile.age];
    if (profile.age !== 'adult') explanations.push(`Age (${profile.age})`);

    score *= adjustmentFactors.activity[profile.activity];
    if (profile.activity !== 'moderate') explanations.push(`Activity (${profile.activity})`);

    score *= adjustmentFactors.health[profile.health];
    if (profile.health !== 'healthy') explanations.push(`Health (${profile.health})`);

    score *= adjustmentFactors.temperature[profile.temperature];
    if (profile.temperature !== 'moderate') explanations.push(`Temp (${profile.temperature})`);

    score *= adjustmentFactors.social[profile.social];
    if (profile.social !== 'calm') explanations.push(`Social (${profile.social})`);

    score *= adjustmentFactors.ownerPresence[profile.ownerPresence];
    if (profile.ownerPresence !== 'absent') explanations.push(`Social Facilitation (${profile.ownerPresence})`);

    const percentageChange = Math.round((score - 1) * 100);
    const explanationText = percentageChange !== 0 ? `Factors considered: ${explanations.join(', ')}.` : "Dog's needs are at a stable baseline.";

    return { score, percentageChange, explanationText };
}

export { calculateBehavioralAdjustment }