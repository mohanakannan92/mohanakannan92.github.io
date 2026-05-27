function formatModuleName(name) {
    return name
        .replaceAll("_", " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}

function getThreatClass(level) {
    if (!level) return "medium";

    const value = level.toLowerCase();

    if (value === "high") return "high";
    if (value === "low") return "low";

    return "medium";
}

function metricCard(title, value, subtitle = "") {
    return `
        <div class="card">
            <h3>${title}</h3>
            <div class="value">${value}</div>
            ${subtitle ? `<p class="muted">${subtitle}</p>` : ""}
        </div>
    `;
}

function tableRows(items) {
    return Object.entries(items)
        .map(([key, value]) => `
            <tr>
                <td>${formatModuleName(key)}</td>
                <td>${value}</td>
            </tr>
        `)
        .join("");
}

function renderExecutive(data) {
    const metrics = data.executive_metrics;

    document.getElementById("executive").innerHTML = `
        <div class="grid">
            ${metricCard(
                "Overall Threat Level",
                `<span class="badge ${getThreatClass(metrics.overall_threat_level)}">${metrics.overall_threat_level}</span>`,
                "Unified AI SOC posture"
            )}

            ${metricCard(
                "Overall Threat Score",
                metrics.overall_threat_score,
                "Calculated across all modules"
            )}

            ${metricCard(
                "Defense Success",
                metrics.defense_success_rate + "%",
                "Blocked + review events"
            )}

            ${metricCard(
                "Riskiest Module",
                formatModuleName(metrics.riskiest_module),
                "Highest threat score"
            )}
        </div>

        <h2 class="section-title">Executive Summary</h2>

        <table class="table">
            <tr>
                <th>Metric</th>
                <th>Value</th>
            </tr>
            <tr><td>Modules Active</td><td>${metrics.modules_active}</td></tr>
            <tr><td>Healthy Modules</td><td>${metrics.healthy_modules}</td></tr>
            <tr><td>Error Modules</td><td>${metrics.error_modules}</td></tr>
            <tr><td>Total Security Events</td><td>${metrics.total_events}</td></tr>
            <tr><td>Total Blocked</td><td>${metrics.total_blocked}</td></tr>
            <tr><td>Total Review</td><td>${metrics.total_review}</td></tr>
            <tr><td>Total Allowed</td><td>${metrics.total_allowed}</td></tr>
            <tr><td>Attack Success Rate</td><td>${metrics.attack_success_rate}%</td></tr>
        </table>

        <h2 class="section-title">Module Threat Scores</h2>

        <table class="table">
            <tr>
                <th>Module</th>
                <th>Threat Score</th>
            </tr>
            ${tableRows(metrics.module_threat_scores)}
        </table>
    `;
}

function renderAgent(module) {
    const summary = module.summary;

    document.getElementById("agent").innerHTML = `
        <div class="grid">
            ${metricCard(
                "Threat Level",
                `<span class="badge ${getThreatClass(module.threat_level)}">${module.threat_level}</span>`
            )}
            ${metricCard("Threat Score", module.threat_score)}
            ${metricCard("Total Requests", summary.total_requests)}
            ${metricCard("Blocked Requests", summary.blocked_requests)}
        </div>

        <h2 class="section-title">Agent Security Summary</h2>

        <table class="table">
            <tr><th>Metric</th><th>Value</th></tr>
            <tr><td>Allowed Requests</td><td>${summary.allowed_requests}</td></tr>
            <tr><td>Review Requests</td><td>${summary.review_requests}</td></tr>
            <tr><td>Blocked Requests</td><td>${summary.blocked_requests}</td></tr>
            <tr><td>Top Blocking Component</td><td>${Object.keys(module.top_blocking_components)[0] || "N/A"}</td></tr>
        </table>

        <h2 class="section-title">Monitoring Panels</h2>

        <table class="table">
            <tr><th>Control</th><th>Status</th><th>Purpose</th></tr>
            ${module.monitoring_panels.map(panel => `
                <tr>
                    <td>${panel.name}</td>
                    <td><span class="badge low">${panel.status}</span></td>
                    <td>${panel.purpose}</td>
                </tr>
            `).join("")}
        </table>
    `;
}

function renderRag(module) {
    const m = module.metrics;

    document.getElementById("rag").innerHTML = `
        <div class="grid">
            ${metricCard("Total Requests", m.total_requests)}
            ${metricCard("Blocked Requests", m.blocked_requests)}
            ${metricCard("Review Requests", m.review_requests)}
            ${metricCard("Total Documents", m.total_documents)}
        </div>

        <h2 class="section-title">RAG Security Metrics</h2>

        <table class="table">
            <tr><th>Metric</th><th>Value</th></tr>
            <tr><td>Trusted Documents</td><td>${m.trusted_documents}</td></tr>
            <tr><td>Suspicious Documents</td><td>${m.suspicious_documents}</td></tr>
            <tr><td>Malicious Documents</td><td>${m.malicious_documents}</td></tr>
            <tr><td>Blocked Documents</td><td>${m.blocked_documents}</td></tr>
            <tr><td>Allowed Documents</td><td>${m.allowed_documents}</td></tr>
            <tr><td>Validation Pass</td><td>${m.validation_pass}</td></tr>
            <tr><td>Validation Fail</td><td>${m.validation_fail}</td></tr>
            <tr><td>Gateway Allow</td><td>${m.gateway_allow}</td></tr>
            <tr><td>Gateway Block</td><td>${m.gateway_block}</td></tr>
        </table>
    `;
}

function renderMcp(module) {
    const summary = module.summary;

    document.getElementById("mcp").innerHTML = `
        <div class="grid">
            ${metricCard(
                "Threat Level",
                `<span class="badge ${getThreatClass(module.threat_level)}">${module.threat_level}</span>`
            )}
            ${metricCard("Threat Score", module.threat_score)}
            ${metricCard("Total Requests", summary.total_requests)}
            ${metricCard("Blocked Requests", summary.blocked_requests)}
        </div>

        <h2 class="section-title">MCP Security Summary</h2>

        <table class="table">
            <tr><th>Metric</th><th>Value</th></tr>
            <tr><td>Allowed Requests</td><td>${summary.allowed_requests}</td></tr>
            <tr><td>Review Requests</td><td>${summary.review_requests}</td></tr>
            <tr><td>Blocked Requests</td><td>${summary.blocked_requests}</td></tr>
            <tr><td>Top Agent</td><td>${Object.keys(module.top_agents)[0] || "N/A"}</td></tr>
            <tr><td>Top Tool</td><td>${Object.keys(module.top_tools)[0] || "N/A"}</td></tr>
        </table>

        <h2 class="section-title">Monitoring Panels</h2>

        <table class="table">
            <tr><th>Control</th><th>Status</th><th>Purpose</th></tr>
            ${module.monitoring_panels.map(panel => `
                <tr>
                    <td>${panel.name}</td>
                    <td><span class="badge low">${panel.status}</span></td>
                    <td>${panel.purpose}</td>
                </tr>
            `).join("")}
        </table>
    `;
}

function renderMultiAgent(module) {
    const r = module.red_team_panel;

    document.getElementById("multi-agent").innerHTML = `
        <div class="grid">
            ${metricCard(
                "Threat Level",
                `<span class="badge ${getThreatClass(module.threat_level)}">${module.threat_level}</span>`
            )}
            ${metricCard("Threat Score", module.threat_score)}
            ${metricCard("Defense Success", r.defense_success_rate + "%")}
            ${metricCard("Attack Success", r.attack_success_rate + "%")}
        </div>

        <h2 class="section-title">Multi-Agent Red Team Results</h2>

        <table class="table">
            <tr><th>Metric</th><th>Value</th></tr>
            <tr><td>Total Attacks</td><td>${r.total_attacks}</td></tr>
            <tr><td>Blocked</td><td>${r.blocked}</td></tr>
            <tr><td>Review</td><td>${r.review}</td></tr>
            <tr><td>Allowed</td><td>${r.allowed}</td></tr>
        </table>

        <h2 class="section-title">Top Blocking Components</h2>

        <table class="table">
            <tr><th>Component</th><th>Count</th></tr>
            ${tableRows(r.top_blocking_components)}
        </table>

        <h2 class="section-title">Monitoring Panels</h2>

        <table class="table">
            <tr><th>Control</th><th>Status</th><th>Purpose</th></tr>
            ${module.monitoring_panels.map(panel => `
                <tr>
                    <td>${panel.name}</td>
                    <td><span class="badge low">${panel.status}</span></td>
                    <td>${panel.purpose}</td>
                </tr>
            `).join("")}
        </table>
    `;
}

function setupTabs() {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(item => item.classList.remove("active"));
            contents.forEach(item => item.classList.remove("active"));

            tab.classList.add("active");

            document
                .getElementById(tab.dataset.tab)
                .classList.add("active");
        });
    });
}

function renderExecutiveKpiBar(data) {
    const metrics = data.executive_metrics;

    document.getElementById("kpi-threat-level").innerHTML =
        `<span class="badge ${getThreatClass(metrics.overall_threat_level)}">
            ${metrics.overall_threat_level}
        </span>`;

    document.getElementById("kpi-threat-score").innerText =
        metrics.overall_threat_score;

    document.getElementById("kpi-defense-rate").innerText =
        metrics.defense_success_rate + "%";

    document.getElementById("kpi-riskiest-module").innerText =
        formatModuleName(metrics.riskiest_module);
}

function renderModuleHealthCenter(data) {

    const metrics =
        data.executive_metrics;

    const threatScores =
        metrics.module_threat_scores;

    let html = `
        <h2 class="section-header">
            Module Health Center
        </h2>

        <div class="module-health-grid">
    `;

    for (const [module, score]
        of Object.entries(threatScores)) {

        let riskClass = "health-low";

        if (score >= 70)
            riskClass = "health-high";

        else if (score >= 30)
            riskClass = "health-medium";

        html += `
            <div class="health-card">

                <div class="health-header">

                    <div class="health-title">
                        ${formatModuleName(module)}
                    </div>

                    <div class="health-status">
                        ACTIVE
                    </div>

                </div>

                <div class="health-threat ${riskClass}">
                    ${score}
                </div>

                <div class="health-label">
                    Threat Score
                </div>

            </div>
        `;
    }

    html += `</div>`;

    document.getElementById(
        "module-health-center"
    ).innerHTML = html;
}

function renderThreatDistributionChart(data) {
    const scores =
        data.executive_metrics.module_threat_scores;

    let html = `
        <section class="threat-chart">
            <h2 class="section-header">
                Threat Distribution by Module
            </h2>
    `;

    for (const [module, score] of Object.entries(scores)) {
        html += `
            <div class="chart-row">
                <div class="chart-label">
                    ${formatModuleName(module)}
                </div>

                <div class="chart-bar-bg">
                    <div
                        class="chart-bar"
                        style="width: ${score}%"
                    ></div>
                </div>

                <div class="chart-score">
                    ${score}
                </div>
            </div>
        `;
    }

    html += `
            <p class="chart-note">
                Higher score indicates higher security attention required.
            </p>
        </section>
    `;

    document.getElementById(
        "threat-distribution-chart"
    ).innerHTML = html;
}

async function loadDashboard() {
    const response = await fetch("ai_soc_dashboard_data.json");
    const data = await response.json();

    renderExecutiveKpiBar(data);
    renderModuleHealthCenter(data);
    renderThreatDistributionChart(data);
    renderExecutive(data);
    renderAgent(data.modules.agent_security);
    renderRag(data.modules.rag_security);
    renderMcp(data.modules.mcp_security);
    renderMultiAgent(data.modules.multi_agent_security);

    setupTabs();
}

loadDashboard();