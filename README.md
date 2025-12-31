# Fitness App

A Next.js App Router application for tracking fitness data.

- OAuth-based authentication using Better Auth
- Local-first SQLite database
- Material UI component library
- Cypress configured for end-to-end testing

This project was originally bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
and has since been customized.

---

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the app by modifying `app/page.tsx`.  
The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load the Geist font.

---

## Authentication

This app uses **OAuth-only authentication** via
[Better Auth](https://www.better-auth.com/).

- No email/password login or registration
- Providers (e.g. Google) are configured via environment variables
- Temporary authentication debug UI may be present during development

**Docs:**

- <https://www.better-auth.com/>
- <https://www.better-auth.com/docs/installation>
- <https://www.better-auth.com/docs/basic-usage>

---

## Database

- SQLite via `better-sqlite3`
- Single `sqlite.db` file located at the project root
- WAL mode enabled for performance and concurrency

**Docs:**

- <https://github.com/WiseLibs/better-sqlite3>
- <https://github.com/WiseLibs/better-sqlite3/blob/master/docs/performance.md>

---

## Testing

- Cypress is configured for end-to-end testing
- Tests are run locally and in CI via GitHub Actions

---

## References

### Next.js

- <https://nextjs.org/docs>
- <https://nextjs.org/learn>
- <https://github.com/vercel/next.js>

### Material UI

- <https://mui.com/material-ui/getting-started/installation/>
- <https://mui.com/material-ui/integrations/nextjs/>
- <https://mui.com/material-ui/api/avatar/>
- <https://mui.com/material-ui/api/button/>
- <https://mui.com/material-ui/react-css-baseline/>

### Testing & Tooling

- <https://nextjs.org/docs/pages/guides/testing>
- <https://nextjs.org/docs/pages/guides/testing/cypress>
- <https://github.com/cypress-io/github-action>
- <https://github.com/googleapis/release-please>
- <https://www.conventionalcommits.org/en/v1.0.0/>

### Cloud

- <https://console.cloud.google.com>
