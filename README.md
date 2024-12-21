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
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 4145cddf3f9db91b57b9cb596683c8eb420862
│  │  ├─ 0c
│  │  │  └─ 22b235d8b881e9b96ef35f45209f34d728a6d8
│  │  ├─ 11
│  │  │  └─ 0d596690fd160d35577f5f5308422343e25a94
│  │  ├─ 13
│  │  │  └─ 62b8826a5aa4c94cc17fbe1f22cdad10416188
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 45
│  │  │  └─ 6dd93e4f26f6ed923360b9e82023d348e6a7b9
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 56
│  │  │  └─ 7f17b0d7c7fb662c16d4357dd74830caf2dccb
│  │  ├─ 5e
│  │  │  └─ f6a520780202a1d6addd833d800ccb1ecac0bb
│  │  ├─ 6a
│  │  │  └─ 20ef50347228e3eaddb3997b70d9b9f093433f
│  │  ├─ 6b
│  │  │  └─ 717ad346d3dff8914e9545038c799226d59c89
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 77
│  │  │  └─ 053960334e2e34dc584dea8019925c3b4ccca9
│  │  ├─ 90
│  │  │  └─ 07252c56852fbbdfe53e803bbdb45645efafa2
│  │  ├─ b2
│  │  │  └─ b2a44f6ebc70c450043c05a002e7a93ba5d651
│  │  ├─ c8
│  │  │  ├─ 5fb67c463f20d1ee449b0ffee725a61dfb9259
│  │  │  └─ 8f389de09f418da376598c42e8788d4fb6d172
│  │  ├─ d8
│  │  │  ├─ b8aaebf24b124fcd7574690f26f33b42739e81
│  │  │  └─ b93235f205efbea6e8fceb1c9ddb57ddddf28d
│  │  ├─ e2
│  │  │  └─ 15bc4ccf138bbc38ad58ad57e92135484b3c0f
│  │  ├─ e9
│  │  │  └─ ffa3083ad279ecf95fd8eae59cb253e9a539c4
│  │  ├─ f7
│  │  │  └─ fa87eb875260ed98651bc419c8139b5119e554
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ (auth)
│  │  ├─ dashboard
│  │  │  └─ page.tsx
│  │  └─ sign-in
│  │     ├─ magic-link.ts
│  │     └─ page.tsx
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
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

```# next-better-auth
