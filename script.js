async function checkSymptoms() {
    const input = document.getElementById("symptoms").value;
    const symptoms = input.split(",").map(s => s.trim().toLowerCase());

    const response = await fetch("http://localhost:5000/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ symptoms })
    });

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <h3>Top Prediction: ${data.topPrediction.disease}</h3>
        <p>Confidence: ${(data.topPrediction.score * 100).toFixed(2)}%</p>
    `;
}