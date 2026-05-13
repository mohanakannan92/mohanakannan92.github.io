console.log("API version script loaded");

document.addEventListener("DOMContentLoaded", function () {
  const analyzeBtn = document.getElementById("analyzeBtn");
  analyzeBtn.addEventListener("click", analyzeInput);
});

async function analyzeInput() {
  const input = document.getElementById("userInput").value;
  const resultBox = document.getElementById("result");

  resultBox.className = "result-box warning";
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = "Analyzing via FastAPI backend...";

  try {
    const response = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input: input })
    });

    const data = await response.json();

    let cssClass = "safe";
    if (data.decision === "BLOCK") cssClass = "danger";
    else if (data.decision === "REVIEW") cssClass = "warning";

    resultBox.className = `result-box ${cssClass}`;

    resultBox.innerHTML = `
      <h3>Analysis Result</h3>
      <p><strong>Intent:</strong> ${data.intent}</p>
      <p><strong>Pattern Score:</strong> ${data.pattern_score}</p>
      <p><strong>Intent Score:</strong> ${data.intent_score}</p>
      <p><strong>Final Risk:</strong> ${data.final_risk}</p>
      <p><strong>Detected Patterns:</strong> ${data.detected_patterns.length ? data.detected_patterns.join(", ") : "None"}</p>
      <p><strong>Decision:</strong> ${data.decision}</p>
      <p><strong>Reason:</strong> ${data.reason}</p>
    `;

  } catch (error) {
    resultBox.className = "result-box danger";
    resultBox.innerHTML = "❌ Error connecting to backend API.";
    console.error(error);
  }
}