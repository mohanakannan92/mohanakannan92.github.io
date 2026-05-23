<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="./script.js"></script>

new Chart(document.getElementById("decisionChart"), {
  type: "bar",
  data: {
    labels: ["ALLOW", "BLOCK", "REVIEW"],
    datasets: [{
      label: "Decisions",
      data: [0, 1, 0],
      backgroundColor: ["#22c55e", "#00c8ff", "#facc15"]
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "#b7c7dc" } } },
    scales: {
      x: { ticks: { color: "#94a3b8" } },
      y: { ticks: { color: "#94a3b8" } }
    }
  }
});

new Chart(document.getElementById("keywordsChart"), {
  type: "bar",
  data: {
    labels: ["ignore", "reveal", "override", "system", "internal"],
    datasets: [{
      label: "Occurrences",
      data: [1, 1, 1, 1, 1],
      backgroundColor: "#38bdf8"
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "#b7c7dc" } } },
    scales: {
      x: { ticks: { color: "#94a3b8" } },
      y: { ticks: { color: "#94a3b8" } }
    }
  }
});

new Chart(document.getElementById("trendChart"), {
  type: "line",
  data: {
    labels: ["2026-05-20"],
    datasets: [{
      label: "Daily Requests",
      data: [1],
      borderColor: "#00c8ff",
      backgroundColor: "rgba(0, 200, 255, 0.18)",
      tension: 0.35
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "#b7c7dc" } } },
    scales: {
      x: { ticks: { color: "#94a3b8" } },
      y: { ticks: { color: "#94a3b8" } }
    }
  }
});