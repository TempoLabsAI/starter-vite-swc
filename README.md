# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

  ## Inspiration
Eros draws inspiration from the strong spirit of the Greek god of love and desire, standing for not merely romance, but a deep, all-connecting bond that bridges mind, body, environment, and community. It reflects the timeless human longing for balance, healing, and meaningful relationships in an increasingly fragmented world. Drawing from the creative energy of vibe coding and the heartfelt mythology-themed projects like Hebe—embodying forgiveness, empathy, and healing—and Athena, the goddess of wisdom and learning, Eros was born as a sanctuary. It is more than just an app; it is an empathetic companion that listens and understands, helping users nurture their mental well-being, foster sustainable living, embrace lifelong learning, and build authentic connections. Eros is designed to empower every individual to thrive fully in their life journey, healing past wounds and lighting the path toward hope, growth, and belonging. It embodies the belief that through love, wisdom, and care, we can transform ourselves and the world around us.

## What it does
Eros is an AI-powered all-in-one platform delivering mental health support, sustainability tracking, personalized learning, recipe planning, code review, financial advice, volunteering matches, and empathy conversations. Users access 8 adaptive modules from a dark-themed dashboard with doodles, login, and "Return to Dashboard" navigation for seamless, magical well-being.​

## How I built it
Built using vibe coding with Cursor/Claude in Next.js 15, Tailwind CSS, and shadcn/ui. Integrated OpenAI APIs for AI features, Framer Motion for animations (heart particles, doodles), Zustand state management, and Web Speech API for voice. Started with detailed prompt specifying dark indigo/purple theme, homepage doodles, auth pages, and all 8 modules; iterated rapidly for PWA-ready deployment.​

## Challenges I ran into
Balancing 8 complex AI modules in one app risked scope creep; API rate limits during vibe coding iterations slowed prototyping. Dark theme consistency across responsive designs and smooth "Return to Dashboard" integration required multiple refinements. Mocking real-time data (Plaid, carbon calcs) for demo without live keys proved tricky.

## Accomplishments that I am proud of
Created a production-ready, fully functional app in hours via vibe coding, featuring animated doodle homepage, voice-enabled empathy chatbot, and interconnected modules like carbon tracking to volunteering. Achieved magical UX with heart particles, onboarding tour, and offline support. Personalized for user's hackathon style with mythology branding and Steve Jobs-level polish.

## What I learned
Vibe coding excels for rapid holistic prototypes but needs structured prompts for complex integrations. AI APIs shine for personalization (emotion detection, recipe gen) yet require fallback mocks. User-centric design (e.g., empathy focus from Hebe inspiration) drives engagement; dark themes boost immersion in wellness apps.

## What's next for Eros
Native mobile apps via React Native, live integrations (Plaid banking, Google Maps volunteering), multiplayer community challenges, and advanced ML for cross-module insights (e.g., mood-linked sustainability goals). Monetize via premium AI coaching; expand to enterprise wellness for TCS-like deployments.

