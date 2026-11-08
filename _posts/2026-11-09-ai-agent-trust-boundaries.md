---
layout: post
title: "Your AI Agent Has Access. Who Has Control?"
date: 2026-11-09 09:00:00 +0530
permalink: /ai-agent-trust-boundaries/
---

AI agents can reason, retrieve information, invoke tools, write to memory, and initiate actions. That changes the security problem. It is no longer enough to ask whether a user or service has a valid credential. We also need to ask whether **the particular action an agent is about to take is authorized and trustworthy**.

Consider a hypothetical enterprise assistant that summarizes customer support records. It retrieves a document that appears to be ordinary reference material. Embedded inside it is an instruction directing the assistant to export information using a tool it is legitimately allowed to call.

Even if the agent never steals a credential, a compromised decision path can turn **authorized capability into unauthorized behavior**.

## Three trust boundaries to watch

### 1. Data to instructions

Information from websites, retrieved documents, tickets, email, or external tools should be treated as **data**, not as permission to rewrite the agent's goals. Prompt-injection risk appears when untrusted content is promoted into operational authority.

### 2. Agent decisions to tool actions

A model's explanation of why an action is appropriate is not the same thing as authorization. High-impact operations should pass through policy enforcement, scoped identity and access checks, parameter validation, and—when warranted—independent human approval.

### 3. Memory to future decisions

Persistent memory and retrieved context introduce risks that may outlive a single conversation. Validate the provenance and permissions of memory writes, segment sensitive contexts, and design monitoring to spot unexpected state changes.

## Five security controls for production agents

1. **Least privilege:** Give each agent only the tools, data, and permissions required for its role.
2. **Action validation:** Evaluate the requested action against policy independently of the model.
3. **Trust-aware retrieval:** Preserve source provenance and keep untrusted content from overriding instructions.
4. **Memory governance:** Control who or what can write, read, and reuse persistent context.
5. **Continuous assurance:** Maintain audit trails, monitor behavior, and exercise adversarial test cases before and after deployment.

These are engineering patterns, not a guarantee that every agentic system is secure. Threat models differ by tool access, autonomy level, data sensitivity, and operational context.

## A useful question for teams

If your AI agent performs a destructive or data-sensitive operation tomorrow, can your team explain **which identity authorized it, which source influenced the decision, and which control allowed or stopped the action**?

That is the conversation I would start before expanding autonomous capabilities.

## Further reading

- [OWASP — Top 10 for Agentic Applications (2026)](https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/)
- [Australian Signals Directorate — Agentic AI Harnesses (11 September 2026)](https://www.cyber.gov.au/news/asd-releases-new-guidance-on-the-agentic-ai-harnesses)
- [CISA and partners — Careful Adoption of Agentic AI Services (1 May 2026)](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/41544ff)

*Double Crown | AI Security, Attack & Defense Engineering*
