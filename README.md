# StellarDock

An open-source toolkit of focused developer utilities for the Stellar network — address validation, balance inspection, transaction lookup, Soroban contracts and more. Read-only by design. No secret key required.

## Quick start

```bash
git clone https://github.com/YOUR_USERNAME/stellardock.git
cd stellardock
npm install
npm run dev
```

## Tech stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS · `@stellar/stellar-sdk` · Vitest · MSW

## Key commands

```bash
npm run dev              # dev server
npm run test             # run all tests
npm run new:feature      # scaffold a new tool slice
npm run build            # production build
```

## Contributing

Each tool is a self-contained directory under `features/`. Adding a tool means creating one new directory — nothing else needs to change.

```bash
npm run new:feature -- <slug> "<Title>" <category>
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide.
