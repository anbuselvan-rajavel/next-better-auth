This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
better-auth-nextjs
├─ .git
├─ .gitignore
├─ app
│  ├─ (auth)
│  │  ├─ dashboard
│  │  │  └─ page.tsx
│  │  └─ sign-in
│  │     ├─ magic-link.ts
│  │     ├─ page.tsx
│  │     └─ verify
│  │        └─ page.tsx
│  ├─ api
│  │  └─ auth
│  │     └─ [...better-auth]
│  │        └─ route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components
│  ├─ navbar.tsx
│  └─ ui
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ checkbox.tsx
│     ├─ input.tsx
│     └─ label.tsx
├─ components.json
├─ eslint.config.mjs
├─ lib
│  ├─ auth-client.ts
│  ├─ auth.ts
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ prisma
│  ├─ migrations
│  │  ├─ 20241221072743_fix_verification_model
│  │  │  └─ migration.sql
│  │  ├─ 20241221095833_init
│  │  │  └─ migration.sql
│  │  ├─ 20241221130001_init
│  │  │  └─ migration.sql
│  │  ├─ 20241221131229_add_verification_model
│  │  │  └─ migration.sql
│  │  ├─ 20241221132335_verification_model_added
│  │  │  └─ migration.sql
│  │  ├─ 20241221132932_updated_schema
│  │  │  └─ migration.sql
│  │  ├─ 20241221134953_updated_schema
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  └─ homepage.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

```