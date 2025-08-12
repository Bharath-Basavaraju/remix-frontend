# Remix Micro Frontends

This repo showcases a Remix-based micro-frontend architecture with a shell application (**ScaleShell**) and three child apps (**ProduceScale**, **ColleagueMenu**, and **Notification**).  The shell loads each child at runtime via Vite Module Federation, routes with XState, and shares state through a Zustand store.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the child apps so their federated modules are available to the shell. Run this again whenever you change a child app:
   ```bash
   npm --prefix apps/scale-shell run build:remotes
   ```
3. Start the shell's Remix dev server, which serves the child apps at runtime:
   ```bash
   npm --prefix apps/scale-shell run dev
   ```
4. Open http://localhost:3000 to interact with the shell application.
5. (Optional) run the unit tests:
   ```bash
   npm test
   ```

## Production

### Build all apps

Build the shell. This command also compiles the child applications and copies their `remoteEntry.js` files into the shell's `public` directory:
```bash
npm run build:shell
```

### Run with Docker

The `apps/scale-shell` folder contains a Dockerfile for serving the shell and all child apps in production.  Build and run it from the repo root:
```bash
docker build -t scale-shell -f apps/scale-shell/Dockerfile .
docker run -p 3000:3000 scale-shell
```

The shell is available at http://localhost:3000 and serves the child applications' federated bundles locally.
