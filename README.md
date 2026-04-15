This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

This project uses environment variables for the `/api/chat` route.

- **Create local env**: copy `.env.example` to `.env.local` and fill in values
- **Never commit secrets**: keep `.env.local` out of git (already ignored via `.gitignore`)

Required (at least one provider):

- **XAI**:
  - `XAI_API_KEY`
  - `XAI_MODEL` (optional, defaults to `grok-4-mini`)
- **OpenAI (fallback if XAI not set)**:
  - `OPENAI_API_KEY`
  - `OPENAI_MODEL` (optional, defaults to `gpt-4o-mini`)

## Scripts

For this Next.js project, these are the main scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Vercel (recommended)

- **Import** the GitHub repo into Vercel
- **Framework preset**: Next.js (auto-detected)
- **Build command**: `npm run build`
- **Output**: default (leave empty)
- **Environment variables**: add the vars from the “Environment Variables” section (Vercel → Project → Settings → Environment Variables)
- **Deploy**

If you recently exposed any API keys locally, **rotate them** before deploying and use the rotated values in Vercel.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
