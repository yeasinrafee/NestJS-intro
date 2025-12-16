<!-- GitHub Copilot / AI agent instructions for this repo -->
# Copilot instructions — nestjs-intro

Short, actionable guidance to help AI coding agents be productive in this repository.

- **Project type:** Minimal NestJS TypeScript starter using modules/controllers/providers. See [src/app.module.ts](src/app.module.ts#L1-L12) and [src/main.ts](src/main.ts#L1-L10).

- **Entry point / runtime:** `src/main.ts` bootstraps `AppModule`; production runtime uses `dist/main` (created by `npm run build` / `nest build`). See `npm run start:prod`.

- **Build / Run / Debug commands:**
  - Development: `npm run start` or `npm run start:dev` (watch)
  - Production: `npm run start:prod` (runs `node dist/main`)
  - Build: `npm run build` (uses `nest build`, relies on `tsconfig.build.json`)
  - Tests: `npm run test` (unit), `npm run test:e2e` (e2e), `npm run test:cov` (coverage)
  - Debug tests: `npm run test:debug` (uses `ts-node` + `tsconfig-paths` to attach debugger)

- **Key patterns & conventions (specific to this repo):**
  - Keep features inside Nest modules; register controllers in the `controllers` array and providers in `providers` of the module, e.g. [src/app.module.ts](src/app.module.ts#L1-L12).
  - Controllers return simple responses and delegate business logic to services (see [src/app.controller.ts](src/app.controller.ts#L1-L20) & [src/app.service.ts](src/app.service.ts#L1-L20)).
  - Unit tests live next to source files (`src/**/*.spec.ts`) and use Jest + `ts-jest` (root jest config in `package.json` with `rootDir: "src"`).
  - End-to-end tests live in `test/` and use `supertest` (see `test/jest-e2e.json` and `npm run test:e2e`).

- **Tooling & style:**
  - Linting: `npm run lint` uses ESLint with the repo config.
  - Formatting: `npm run format` uses Prettier (runs on `src` and `test`).

- **TypeScript / module system:** `tsconfig.json` uses `module: nodenext` and `moduleResolution: nodenext`. Be cautious when adding ESM/CJS interop — tests and builds are configured for ts-jest + Nest CLI.

- **When changing architecture:**
  - New features should introduce a module (e.g., `items.module.ts`) and register controllers/providers there; then import the module into `AppModule` if it should load by default.
  - For shared utilities, create provider modules and export providers explicitly.

- **Testing guidance (concrete):**
  - Unit tests should use `@nestjs/testing` to create a `Test.createTestingModule(...)` and compile the module; mock external providers via `useValue`/`useClass`.
  - E2E tests should boot the Nest app and use `supertest` against `app.getHttpServer()` (pattern expected by the existing `test/` setup).

- **Search & references:** Look at these files for examples:
  - [src/app.module.ts](src/app.module.ts#L1-L12)
  - [src/app.controller.ts](src/app.controller.ts#L1-L20)
  - [src/app.service.ts](src/app.service.ts#L1-L20)
  - [src/main.ts](src/main.ts#L1-L10)
  - [package.json](package.json#L1-L80) (scripts, deps, jest config)

If this file already exists, preserve any project-specific notes and merge only clarifications above. If anything here is unclear or you'd like more detail (example test scaffolding, module templates, or CI step examples), tell me where to expand.
