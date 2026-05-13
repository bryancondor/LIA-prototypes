# LIA WhatsApp Flows

Browser-based simulator showing the WhatsApp conversation flows that caregivers (e.g. Mariana) experience when interacting with LIA. Renders pixel-accurate phone frames in portrait mode.

## How to run

```bash
npm install
npm run dev       # http://localhost:5174/lia/whatsapp/
npm run build     # outputs to dist/
npm run test:run  # run all tests once
```

## Architecture

```
src/
├── components/         # WhatsApp UI building blocks
│   ├── PhoneFrame.tsx    # Black phone shell (375×760px) wrapping each flow
│   ├── ChatHeader.tsx    # Green WA header with LIA contact info
│   ├── Bubble.tsx        # Incoming / outgoing chat bubble
│   ├── QuickReplies.tsx  # WhatsApp Business API quick-reply buttons
│   └── InputBar.tsx      # Bottom input bar (display only)
├── pages/              # One file per BPMN subprocess
│   ├── SP2aFlow.tsx      # Medication reminder → YES/NO → confirmation
│   ├── SP2bFlow.tsx      # Symptom questionnaire (Likert scale)
│   ├── SP3Flow.tsx       # Caregiver consultation → AI response
│   └── SP4Flow.tsx       # Critical escalation notification + PDF
├── data/
│   └── mock.ts           # Same sample patients as backoffice
└── App.tsx             # HashRouter + nav bar between flows
```

## Navigation

A top nav bar lets you switch between all 4 flows without reloading. Each flow shows 1–3 phone frames side by side representing the different states of the conversation.

## WhatsApp design tokens (hardcoded — not Tailwind)

| Token | Value |
|---|---|
| Header bg | `#075E54` |
| Chat bg | `#ECE5DD` |
| Incoming bubble | `white` |
| Outgoing bubble | `#DCF8C6` |
| Quick reply color | `#0A96ED` |
| Send button | `#25D366` |

## Deployment

GitHub Pages: `npm run build` → push `dist/`.
`vite.config.ts` sets `base: '/lia/whatsapp/'`.

## BPMN reference

Source of truth for flow logic: `../../04-output/bpmn-sistema-lia.md`

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
