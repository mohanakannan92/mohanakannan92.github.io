---
layout: default
title: Home
---

<style>
:root {
  --bg: #0b1120;
  --card: #111827;
  --card-2: #0f172a;
  --text: #e5e7eb;
  --muted: #94a3b8;
  --accent: #38bdf8;
  --green: #a3e635;
  --border: #334155;
}

body {
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), transparent 30%),
    radial-gradient(circle at top right, rgba(163, 230, 53, 0.10), transparent 25%),
    var(--bg);
  color: var(--text);
}

/* Hide Minima default title */
.post-title,
.page-heading {
  display: none;
}

/* Remove default extra spacing */
.post-content {
  margin-top: 0;
}

/* 👑 Hero */
.hero {
  text-align: center;
  padding: 80px 20px 50px;
}

/* 👑 Brand Logo */
.brand-logo {
  display: block;
  max-width: 600px;
  width: 90%;
  height: auto;
  margin: 0 auto 20px;
  filter: drop-shadow(0 0 22px rgba(56, 189, 248, 0.28));
  animation: logoGlow 3s ease-in-out infinite alternate;
}

@keyframes logoGlow {
  from {
    filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.22));
  }
  to {
    filter: drop-shadow(0 0 28px rgba(163, 230, 53, 0.32));
  }
}

.hero h1 {
  font-size: 48px;
  margin: 10px 0 8px;
  color: var(--green);
  text-shadow: 0 0 18px rgba(163, 230, 53, 0.25);
}

.hero p {
  color: var(--muted);
  font-size: 18px;
  max-width: 720px;
  margin: 10px auto;
}

.hero .credential {
  color: var(--text);
  font-size: 20px;
  margin-top: 6px;
  margin-bottom: 10px;
}

.hero .focus {
  color: var(--accent);
  font-size: 20px;
  margin-bottom: 14px;
}

.badge {
  display: inline-block;
  padding: 7px 13px;
  margin: 7px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--accent);
  background: rgba(15, 23, 42, 0.7);
  font-size: 14px;
  transition: all 0.25s ease;
}

.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.25);
}

.button {
  display: inline-block;
  padding: 10px 16px;
  background: var(--accent);
  color: #020617 !important;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 6px 0 0;
  transition: all 0.25s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.35);
}

.secondary {
  background: transparent;
  color: var(--accent) !important;
  border: 1px solid var(--accent);
}

.section {
  margin: 45px 0;
}

.section h2 {
  color: var(--green);
}

.card {
  background: linear-gradient(145deg, var(--card), var(--card-2));
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  margin: 18px 0;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

ul li {
  margin-bottom: 8px;
}

a {
  color: var(--accent);
}

/* 📱 Mobile */
@media (max-width: 600px) {
  .hero {
    padding: 60px 15px 40px;
  }

  .brand-logo {
    max-width: 320px;
    width: 95%;
    margin-bottom: 16px;
  }

  .hero h1 {
    font-size: 34px;
    margin-top: 6px;
  }

  .hero p {
    font-size: 16px;
  }

  .hero .credential,
  .hero .focus {
    font-size: 17px;
  }

  .button {
    display: block;
    width: fit-content;
    margin: 10px auto;
  }
}
</style>

<!-- 🔥 HERO -->

<div class="hero">

  <img 
    src="{{ site.logo | relative_url }}" 
    alt="Double Crown Logo"
    class="brand-logo"
  />

  <h1>Mohanakannan</h1>

  <p class="credential">
    <strong>MSc Cyber Forensics & Information Security | CISSP</strong>
  </p>

  <p class="focus">
    <strong>Cloud & AI Security | Offence & Defense Engineering</strong>
  </p>

  <p>
    Building secure AI systems with an attacker mindset —
    preventing prompt injection, data leakage, and unsafe behavior.
  </p>

  <div>
    <span class="badge">Prompt Injection Defense</span>
    <span class="badge">RAG Security</span>
    <span class="badge">AI Guardrails</span>
    <span class="badge">Adaptive Defense</span>
  </div>

  <p>
    <a class="button" href="https://github.com/mohanakannan92">View GitHub</a>
    <a class="button secondary" href="#projects">Explore Projects</a>
  </p>

</div>

<!-- 👋 ABOUT -->

<div class="section" id="about">
  <h2>👋 About</h2>
  <div class="card">
    <p>
      I am building a hands-on AI Security portfolio focused on attacking and defending
      real-world AI systems including prompt injection, intent-aware defense, sequential
      attack detection, adaptive learning, and output sanitization.
    </p>
  </div>
</div>

<!-- 👑 BRAND -->

<div class="section">
  <h2>👑 What is Double Crown?</h2>

  <div class="card">
    <p><strong>Double Crown</strong> represents mastery of both sides of AI security:</p>

    <ul>
      <li><strong>Offensive AI Security</strong> — understanding attacks</li>
      <li><strong>Defensive AI Engineering</strong> — building resilience</li>
    </ul>

    <p>
      This enables designing AI systems that are secure against real-world adversarial behavior.
    </p>
  </div>
</div>

<!-- 🔐 CORE PLATFORM -->

<div class="section" id="projects">
  <h2>🔐 Core Platform</h2>

  <div class="card">
    <h3>AI Security Lab</h3>

    <p>
      Practical lab for building, attacking, and securing AI systems using layered defenses.
    </p>

    <div class="grid">
      <div>
        <h4>Attack Coverage</h4>
        <ul>
          <li>Prompt injection</li>
          <li>Role override</li>
          <li>System prompt extraction</li>
          <li>Multi-step attacks</li>
        </ul>
      </div>

      <div>
        <h4>Defense Layers</h4>
        <ul>
          <li>Intent-aware detection</li>
          <li>Sequential defense</li>
          <li>Adaptive learning</li>
          <li>Output sanitization</li>
        </ul>
      </div>
    </div>

    <a class="button" href="https://github.com/mohanakannan92/ai-security-lab">View Project</a>
  </div>
</div>

<!-- 📊 DASHBOARD -->

<div class="section">
  <h2>🛡️ AI Security Operations Center</h2>

<p>
Real-time AI threat analytics,
attack intelligence,
adaptive learning,
and security monitoring for LLM applications.
</p>

<p>
Visualizes prompt injection attacks,
risk escalation,
blocked requests,
threat trends,
and defense effectiveness.
</p>

<a href="#">
View Operations Center
</a>

<!-- 🧪 TOOLS -->

<div class="section">
  <h2>🧪 Free AI Security Tools</h2>

  <div class="card">
    <h3>Prompt Injection Detector</h3>
    <p>Analyze prompts for injection risk and leakage indicators.</p>
    <a class="button" href="/ai-prompt-detector/">Open Tool</a>
  </div>
</div>

<!-- 🧠 FOCUS -->

<div class="section">
  <h2>🧠 System Focus Areas</h2>

  <div class="grid">
    <div class="card">
      <h3>Input Defense</h3>
      <p>Detect malicious prompts before reaching the model.</p>
    </div>

    <div class="card">
      <h3>Decision Intelligence</h3>
      <p>Risk scoring and adaptive decisions.</p>
    </div>

    <div class="card">
      <h3>Output Protection</h3>
      <p>Prevent system prompt leakage.</p>
    </div>
  </div>
</div>

<!-- ✍️ BLOG -->

<div class="section">
  <h2>✍️ Latest Posts</h2>

  <div class="card">
    <ul>
      {% for post in site.posts limit:5 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date_to_string }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<!-- 📫 CONTACT -->

<div class="section">
  <h2>📫 Connect</h2>

  <div class="card">
    <ul>
      <li><a href="https://github.com/mohanakannan92">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/mohanakannancissp">LinkedIn</a></li>
    </ul>
  </div>
</div>
