# LIA Backoffice

Internal web dashboard for the LIA medical team — Operators and LIA Doctors — to monitor patient adherence, symptoms, escalations, and consultations.

## How to run

```bash
npm install
npm run dev       # http://localhost:5173/lia/backoffice/
npm run build     # outputs to dist/
npm run test:run  # run all tests once
```

## Architecture

```
src/
├── components/
│   ├── ui/           # Reusable primitives: Badge, Button, Avatar, KpiCard, Tabs
│   └── layout/       # Shell: Sidebar, Topbar, PageShell (wraps every page)
├── pages/            # One file per screen, named by subprocess
│   ├── Adherence.tsx     ← SP2a: medication reminder dashboard
│   ├── Symptoms.tsx      ← SP2b: symptom questionnaire results
│   ├── Escalations.tsx   ← SP4: critical escalation review + approve
│   ├── Consultations.tsx ← SP3: caregiver questions + AI responses
│   ├── Patients.tsx      ← SP1: active patient list
│   └── Onboarding.tsx    ← SP1: multi-step new patient form
├── data/
│   └── mock.ts       # All sample data — swap for API calls here
└── App.tsx           # HashRouter with all routes
```

## Design system

Linear Light — indigo accent (`#5E6AD2`), neutral whites. Tokens defined in `tailwind.config.ts`.

## Deployment

GitHub Pages: `npm run build` → push `dist/` to `gh-pages` branch.
`vite.config.ts` sets `base: '/lia/backoffice/'`.

## BPMN reference

Source of truth for screen logic: `../../04-output/bpmn-sistema-lia.md`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
