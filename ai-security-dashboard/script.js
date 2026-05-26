const API_URL = "./dashboard-data.json";

async function loadDashboardData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log("Dashboard Data:", data);

    document.getElementById("totalRequests").innerText = data.total_requests;
    document.getElementById("blockedRequests").innerText = data.blocked_documents;
    document.getElementById("reviewRequests").innerText = data.suspicious_documents;

    const threatScore =
      data.blocked_documents * 20 +
      data.malicious_documents * 25 +
      data.suspicious_documents * 10;

    document.getElementById("threatScore").innerText = threatScore;

    let threatLevel = "LOW";

    if (threatScore >= 50) {
      threatLevel = "HIGH";
    } else if (threatScore >= 20) {
      threatLevel = "MEDIUM";
    }

    document.getElementById("threatLevel").innerText = threatLevel;
    document.getElementById("threatLevelPill").innerText = threatLevel;

    renderCharts(data);

  } catch (error) {
    console.error("Dashboard loading failed:", error);
  }
}

function renderCharts(data) {
  new Chart(document.getElementById("decisionChart"), {
    type: "bar",
    data: {
      labels: ["ALLOW", "ALLOW + BLOCKED", "BLOCK"],
      datasets: [{
        label: "Gateway Decisions",
        data: [
          data.gateway_allow,
          data.gateway_allow_with_blocked_context,
          data.gateway_block
        ],
        backgroundColor: ["#22c55e", "#38bdf8", "#fb7185"]
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#b7c7dc"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#94a3b8"
          }
        },
        y: {
          ticks: {
            color: "#94a3b8"
          }
        }
      }
    }
  });

  new Chart(document.getElementById("keywordsChart"), {
    type: "bar",
    data: {
      labels: ["trusted", "suspicious", "malicious", "blocked"],
      datasets: [{
        label: "Document Signals",
        data: [
          data.trusted_documents,
          data.suspicious_documents,
          data.malicious_documents,
          data.blocked_documents
        ],
        backgroundColor: "#38bdf8"
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#b7c7dc"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#94a3b8"
          }
        },
        y: {
          ticks: {
            color: "#94a3b8"
          }
        }
      }
    }
  });

  new Chart(document.getElementById("trendChart"), {
    type: "line",
    data: {
      labels: ["Current"],
      datasets: [{
        label: "Total Requests",
        data: [data.total_requests],
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56, 189, 248, 0.18)",
        tension: 0.35
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#b7c7dc"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#94a3b8"
          }
        },
        y: {
          ticks: {
            color: "#94a3b8"
          }
        }
      }
    }
  });
}

function showTab(tabId, clickedButton) {
  document.querySelectorAll(".tab-content").forEach(section => {
    section.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach(button => {
    button.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
  clickedButton.classList.add("active");
}

loadDashboardData();