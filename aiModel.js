const diseaseDB = [
    {
        name: "Common Cold",
        symptoms: ["cough", "sneezing", "runny nose"]
    },
    {
        name: "Flu",
        symptoms: ["fever", "body ache", "chills", "fatigue"]
    },
    {
        name: "COVID-19",
        symptoms: ["fever", "cough", "loss of smell", "breathing difficulty"]
    },
    {
        name: "Malaria",
        symptoms: ["fever", "chills", "sweating", "headache"]
    }
];
pythoS
function predictDisease(userSymptoms) {
    let scores = [];

    diseaseDB.forEach(disease => {
        let matchCount = disease.symptoms.filter(symptom =>
            userSymptoms.includes(symptom)
        ).length;

        scores.push({
            disease: disease.name,
            score: matchCount / disease.symptoms.length
        });
    });

    scores.sort((a, b) => b.score - a.score);

    return {
        topPrediction: scores[0],
        allPredictions: scores
    };
}

module.exports = { predictDisease };