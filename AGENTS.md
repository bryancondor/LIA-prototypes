# AGENTS.md — LIA Prototype
> Context and guidelines for building the LIA product UI
> Last updated: 2026-05-12

---

## What is this?

This is the initial version of the **LIA product** — not a throwaway prototype. It will be deployed on **GitHub Pages** and used as a working demonstration of the product, evolving over time into the real application.

LIA is a 24/7 clinical companion for family caregivers of chronic disease patients (initial focus: oncology and diabetes) in Peru and LATAM. It operates via **WhatsApp** (zero friction for the caregiver) and a **web backoffice** (for LIA's internal medical team).

**Primary user:** Mariana — a 40–55 year old female caregiver, managing a family member's chronic illness while working. She is the real decision-maker in home care. LIA speaks to her directly, not the patient.

---

## Monorepo Structure

`prototype/` is a **monorepo with two independent Vite projects**. Each project has its own `package.json`, `node_modules`, `vite.config.ts`, and build output. They do NOT share a root `package.json` or npm workspaces.

```
prototype/
├── AGENTS.md
├── reference/              ← approved HTML mockups (read-only)
├── backoffice/             ← independent Vite app (backoffice dashboard)
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── src/
└── whatsapp/               ← independent Vite app (WhatsApp simulator)
    ├── package.json
    ├── vite.config.ts
    └── src/
```

Each project is self-contained. Run `npm install` and `npm run dev` separately inside each directory.

---

## Tech Stack

Both projects use the same stack:

| Layer | Choice | Reason |
|---|---|---|
| Framework | **React 18 + TypeScript** | Component reuse across 10+ screens, type safety |
| Build tool | **Vite** | Fast dev server, trivial GitHub Pages deploy |
| Styling | **Tailwind CSS v3** (backoffice only) | Maps directly to design tokens, no runtime |
| Routing | **React Router v6 (hash mode)** | GitHub Pages doesn't support HTML5 history — use `HashRouter` |
| State | **React Context + useState** | Sufficient for initial version; upgrade to Zustand when needed |
| Deployment | **GitHub Pages** | Static export via `vite build`, push `dist/` |

**No backend in this version.** Each project has its own `src/data/mock.ts` with the same sample data.

---

## Deployment

Each app deploys to a subdirectory of the GitHub Pages site:

- **Backoffice:** `https://<user>.github.io/lia/backoffice/`
- **WhatsApp:** `https://<user>.github.io/lia/whatsapp/`

```bash
# Inside backoffice/
npm run build   # outputs to backoffice/dist/

# Inside whatsapp/
npm run build   # outputs to whatsapp/dist/
```

`vite.config.ts` in each project must set `base` accordingly:
- backoffice: `base: '/lia/backoffice/'`
- whatsapp: `base: '/lia/whatsapp/'`

Use `HashRouter` in both so deep links work without server redirects.

---

## Design System

This project uses a custom design language called **LIA Linear Light** — inspired by Linear.app, adapted for a clinical context.

### Color Tokens

Define in `tailwind.config.ts` under `theme.extend.colors`:

```ts
primary: {
  DEFAULT: '#5E6AD2',   // indigo accent — buttons, active nav, links
  hover:   '#4F5BBD',
  light:   '#EFEFFF',   // active nav background
  muted:   '#EEF0FD',   // primary button secondary variant bg
  border:  '#C7CAF5',   // primary button secondary variant border
},
surface: {
  DEFAULT: '#FFFFFF',
  muted:   '#FAFAFA',   // table header rows, hover states
  subtle:  '#F7F7F8',   // page background
  input:   '#F4F4F6',   // search bars, tab containers
},
border: {
  DEFAULT: '#E8E8EA',
  subtle:  '#F0F0F2',
  strong:  '#EBEBEB',
},
text: {
  primary:   '#1A1A1A',
  secondary: '#5C5C68',
  muted:     '#A0A0A8',
  disabled:  '#C0C0C8',
},
success: { DEFAULT: '#22C55E', bg: '#DCFCE7', fg: '#15803D' },
warning: { DEFAULT: '#F59E0B', bg: '#FEF9C3', fg: '#A16207' },
danger:  { DEFAULT: '#EF4444', bg: '#FEE2E2', fg: '#B91C1C' },
```

### Typography

- Font: **Inter** (Google Fonts) or system font stack `-apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
- Page titles: `text-[13px] font-semibold text-text-primary`
- Section subtitles: `text-[11.5px] text-text-muted`
- Table headers: `text-[10.5px] font-semibold text-text-muted uppercase tracking-[0.5px]`
- Body: `text-[12.5px] text-text-secondary`

### Border Radius

- Small (buttons, badges): `rounded-md` (6px)
- Medium (cards, table): `rounded-[9px]`
- Large (modals): `rounded-xl`

### Shadows

- Card hover: `shadow-[0_2px_12px_rgba(0,0,0,0.06)]`
- Tab active: `shadow-[0_1px_4px_rgba(0,0,0,0.08)]`

### Status Badges

Three semantic states used across all backoffice screens:

| State | Background | Text | Dot |
|---|---|---|---|
| Taken / OK | `#DCFCE7` | `#15803D` | `#22C55E` |
| No response / Warning | `#FEF9C3` | `#A16207` | `#F59E0B` |
| Not taken / Danger | `#FEE2E2` | `#B91C1C` | `#EF4444` |
| Scheduled / Neutral | `#F4F4F6` | `#6C6C78` | — |

---

## Project Structure

Two independent Vite apps inside `prototype/`. Run each separately.

```
prototype/
├── AGENTS.md
├── reference/
│   ├── whatsapp-sp2a.html          ← Approved WhatsApp UI mockup
│   └── backoffice-sp2a.html        ← Approved Backoffice UI mockup
│
├── backoffice/                     ← cd backoffice && npm install && npm run dev
│   ├── package.json
│   ├── vite.config.ts              ← base: '/lia/backoffice/'
│   ├── tailwind.config.ts
│   ├── index.html
│   └── src/
│       ├── components/
│       │   ├── ui/
│       │   │   ├── Badge.tsx
│       │   │   ├── Button.tsx
│       │   │   ├── Avatar.tsx
│       │   │   ├── KpiCard.tsx
│       │   │   └── Tabs.tsx
│       │   └── layout/
│       │       ├── Sidebar.tsx
│       │       ├── Topbar.tsx
│       │       └── PageShell.tsx
│       ├── pages/
│       │   ├── Adherence.tsx       ← SP2a
│       │   ├── Symptoms.tsx        ← SP2b
│       │   ├── Escalations.tsx     ← SP4
│       │   ├── Consultations.tsx   ← SP3
│       │   ├── Patients.tsx        ← SP1
│       │   └── Onboarding.tsx      ← SP1
│       ├── data/mock.ts
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│
└── whatsapp/                       ← cd whatsapp && npm install && npm run dev
    ├── package.json
    ├── vite.config.ts              ← base: '/lia/whatsapp/'
    ├── index.html
    └── src/
        ├── components/
        │   ├── PhoneFrame.tsx
        │   ├── ChatHeader.tsx
        │   ├── Bubble.tsx
        │   ├── QuickReplies.tsx
        │   └── InputBar.tsx
        ├── pages/
        │   ├── SP2aFlow.tsx        ← Medication reminder
        │   ├── SP2bFlow.tsx        ← Symptom questionnaire
        │   ├── SP3Flow.tsx         ← Consultation
        │   └── SP4Flow.tsx         ← Critical escalation
        ├── data/mock.ts            ← same data as backoffice/src/data/mock.ts
        ├── App.tsx
        ├── main.tsx
        └── index.css
```

---

## Surface 1 — WhatsApp UI

### What it is

A pixel-accurate simulation of a WhatsApp conversation, rendered inside a phone portrait frame (375×760px) in the browser. It demonstrates exactly what the caregiver (Mariana) sees on her phone.

### Visual reference

See `reference/whatsapp-sp2a.html` — the approved mockup for SP2a (Medication Reminder). **All WhatsApp screens must match this visual language exactly.**

### WhatsApp design tokens (NOT Tailwind — hardcoded)

```
Header/status bar bg:  #075E54
Chat background:       #ECE5DD (+ subtle SVG pattern)
Incoming bubble bg:    #FFFFFF
Outgoing bubble bg:    #DCF8C6
Quick reply color:     #0A96ED
Mic/send button:       #25D366
Bubble shadow:         0 1px 1px rgba(0,0,0,0.12)
```

### PhoneFrame component

- Fixed size: 375×760px
- Black shell with rounded corners (border-radius 48px, inner screen 38px)
- Contains: StatusBar → ChatHeader → ChatBackground (flex:1, scrollable) → InputBar
- The InputBar is display-only (no real input handling needed)

### Bubble component

Props: `direction: 'incoming' | 'outgoing'`, `time: string`, `children`

- Incoming: white bg, `border-top-left-radius: 2px`
- Outgoing: `#DCF8C6` bg, `border-top-right-radius: 2px`
- Time stamp bottom-right, smaller font

### QuickReplies component

Props: `options: { label: string; selected?: boolean }[]`, `onSelect?: (i: number) => void`

- Each button: white bg, blue text `#0A96ED`, full-width, stacked vertically
- Selected state: light blue bg `#e8f4fd`, blue border `1.5px solid #0A96ED`
- Non-selected after selection: `opacity: 0.45`
- Uses WhatsApp Business API format — max 3 buttons per message

### Tone of voice (LIA messages)

- Address Mariana by name
- Warm, personal — like a knowledgeable friend, not a system
- One idea per message; keep it short
- Never use: "Welcome to LIA", "Your request has been processed", system-like language
- Always confirm with empathy: "Great, thanks Mariana ✅ All noted."
- Use relevant emoji sparingly: 💊 for medication, 🌡️ for symptoms, ⚠️ for alerts

### WhatsApp screens to build (one page component each)

| File | SP | Trigger | Flow |
|---|---|---|---|
| `SP2aFlow.tsx` | SP2a | Scheduled time | Reminder → YES/NO buttons → confirmation |
| `SP2bFlow.tsx` | SP2b | Scheduled cadence | Symptom questions (Likert scale) → AI analysis result |
| `SP3Flow.tsx` | SP3 | Caregiver messages | Free text from caregiver → AI response |
| `SP4Flow.tsx` | SP4 | Critical escalation | Urgent message from LIA + PDF summary notice |

---

## Surface 2 — Backoffice UI

### What it is

A desktop web application used by the **LIA internal team**: Operators (who manage patient onboarding and data) and LIA Doctors (who validate, monitor, and approve critical escalations).

### Visual reference

See `reference/backoffice-sp2a.html` — the approved mockup for SP2a (Adherence dashboard). **All backoffice screens must match this visual language exactly.**

### Layout shell (PageShell)

Every backoffice page uses the same shell:
- Left: `Sidebar` (228px, white, border-right)
- Top: `Topbar` (52px, white, border-bottom) with breadcrumb + search + primary action
- Content: scrollable area, `padding: 20px 24px`, `gap: 16px` between sections, `background: #F7F7F8`

### Sidebar

- Logo block at top with "LIA" + "Production" environment badge
- Two sections: **Monitoring** (Adherence, Symptoms, Escalations, Consultations) and **Management** (Patients, Onboarding, Reports, Settings)
- Active item: `background: #EFEFFF`, `color: #5E6AD2`
- Notification badges: red for critical (Escalations), amber for pending (Consultations)
- User footer at bottom: avatar initials + name + role

### KPI cards (top of each page)

- 4-column grid
- Each card: white bg, border, 9px radius, `padding: 14px 16px`
- Contains: label (uppercase, muted) → large value → thin progress bar → sub-text with trend
- Color the value when it signals a status (amber for warnings, red for danger)

### Data table pattern

- Wrapped in white card with 9px border radius
- **Toolbar row** inside the card (above the `<table>`): title + subtitle on left, filter tabs on right — `justify-content: space-between`, `padding: 14px 16px 12px`, `border-bottom`
- Table headers: `#FAFAFA` bg, uppercase, muted color
- Row states: default white, warning `#FFFDF0`, danger `#FFF8F8`
- Row hover: reveal action buttons (View history, Contact) with `opacity: 0 → 1`
- Patient cell: initials avatar + name + diagnosis stacked

### Backoffice screens to build

| File | Route | SP | Primary actor | Key elements |
|---|---|---|---|---|
| `Adherence.tsx` | `/adherence` | SP2a | LIA Doctor | KPIs, reminders table, status badges |
| `Symptoms.tsx` | `/symptoms` | SP2b | LIA Doctor | KPIs, symptom responses table, score indicators |
| `Escalations.tsx` | `/escalations` | SP4 | LIA Doctor | Alert queue, AI message proposal, approve/edit actions |
| `Consultations.tsx` | `/consultations` | SP3 | LIA Doctor | Incoming questions list, AI draft responses |
| `Patients.tsx` | `/patients` | SP1 | Operator | Patient list with onboarding status |
| `Onboarding.tsx` | `/onboarding` | SP1 | Operator | Multi-step form: personal data → disease → medications → schedule |

---

## BPMN Reference

The source of truth for all screen logic is `04-output/bpmn-sistema-lia.md`. Each subprocess defines exactly what triggers, what the system does, and what the user sees. When building a screen, read its corresponding BPMN subprocess first.

| Subprocess | Description |
|---|---|
| **SP1** | Patient onboarding — Operator loads profile, LIA Doctor approves |
| **SP2a** | Medication reminder — System sends WhatsApp at scheduled time, patient responds YES/NO |
| **SP2b** | Symptom questionnaire — System sends Likert-scale questions, AI scores responses |
| **SP3** | Patient-initiated consultation — Caregiver messages LIA, AI responds or escalates |
| **SP4** | Critical escalation — AI detects critical case, LIA Doctor reviews and approves message |

---

## Coding Standards

- **TypeScript strict mode** — no `any`, proper prop types for all components
- **Component naming** — PascalCase files and exports (`PatientRow.tsx`, not `patient-row.tsx`)
- **No inline styles** — use Tailwind classes; only exception is dynamic values (e.g., `style={{ width: \`${pct}%\` }}`)
- **No commented-out code** — delete it
- **Mock data isolation** — all sample data lives in `src/data/mock.ts`; never hardcode values in components
- **One component per file** — no exceptions for components that will be reused
- **English only** — all UI text, comments, variable names, and copy must be in English

---

## Content Language

**All UI copy must be in English.** This product will be presented to an English-speaking audience. This includes:
- All labels, button text, headings, and placeholders in both surfaces
- All LIA WhatsApp message copy
- All mock patient data (diagnoses, medication names, etc.)
- Code comments

---

## Key Personas (for mock data)

**Primary user — The Caregiver:**
- Name: Mariana
- Age: 45, female
- Role: daughter caring for her father (the patient)
- Channel: WhatsApp

**Internal users — LIA Team:**
- Dr. Ramirez — LIA Doctor (validates escalations, monitors patients)
- Carlos O. — Operator (manages onboarding, patient data)

**Sample patients (use in mock.ts):**
- Carlos Mendoza — Type 2 Diabetes — Metformin 500mg
- Mary Castillo — Breast cancer, post-op — Ondansetron 8mg
- Rose Paredes — Colorectal cancer — Dexamethasone 4mg
- Jorge Torres — Lymphoma, active chemo — Tramadol 50mg
- Patricia Vargas — Type 2 Diabetes — Insulin glargine 20 IU
