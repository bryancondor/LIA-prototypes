# LIA Prototypes

Interactive prototype for **LIA** — the 24/7 clinical companion that helps family caregivers of chronic disease patients (oncology, diabetes) navigate daily uncertainty via WhatsApp.

## Live Demo

> Deployed via GitHub Pages — enable in repo Settings → Pages → Source: GitHub Actions

| Surface | URL | Actor |
|---|---|---|
| Landing | `https://bryancondor.github.io/LIA-prototypes/` | Evaluator |
| WhatsApp flows | `https://bryancondor.github.io/LIA-prototypes/whatsapp/` | Caregiver (Mariana) |
| Backoffice dashboard | `https://bryancondor.github.io/LIA-prototypes/backoffice/` | LIA Doctor · Operator |

---

## Structure

```
LIA-prototypes/
├── backoffice/          ← React + Vite + Tailwind (internal dashboard)
├── whatsapp/            ← React + Vite (WhatsApp conversation simulator)
├── reference/           ← Approved HTML mockups used as visual spec
├── index.html           ← Evaluator landing page
└── AGENTS.md            ← Full context and guidelines for AI agents
```

Two independent Vite apps — each has its own `package.json` and runs separately.

## Running locally

```bash
# Backoffice
cd backoffice && npm install && npm run dev
# → http://localhost:5173/LIA-prototypes/backoffice/

# WhatsApp
cd whatsapp && npm install && npm run dev
# → http://localhost:5174/LIA-prototypes/whatsapp/
```

## BPMN coverage

| Subprocess | WhatsApp | Backoffice |
|---|---|---|
| SP1 — Onboarding | — | Patients + Onboarding pages |
| SP2a — Medication Reminder | SP2a flow (3 phone states) | Adherence dashboard |
| SP2b — Symptom Questionnaire | SP2b flow (3 phone states) | Symptoms dashboard |
| SP3 — Patient Consultation | SP3 flow (2 phone states) | Consultations page |
| SP4 — Critical Escalation | SP4 flow + PDF attachment | Escalations page |

## Tech stack

- **React 18 + TypeScript** — component reuse, type safety
- **Vite** — fast dev server, GitHub Pages static build
- **Tailwind CSS v3** — design tokens (backoffice only)
- **React Router v6** — HashRouter (GitHub Pages compatible)
- **Vitest + React Testing Library** — component tests

## Founders

- **Claudia** — Co-founder, Medical Director (oncology clinical expertise)
- **Bryan** — Co-founder, Engineering
