# Nafizur Portfolio

Single-page Next.js portfolio for Nafizur Rahman.

## Run locally

```bash
npm install
npm run dev
```

## Build check

```bash
npm run build
```

## Where to update content

Most editable content now lives in:

- `data/site-content.ts`

That file contains:

- navigation links
- hero copy
- about text
- skills
- highlights
- project cards
- chatbot interview answers
- contact links

## How to add a new project

1. Add the project image to `public/`
2. Open `data/site-content.ts`
3. Add a new item to the `projects` array

Project shape:

```ts
{
  title: 'Project Name',
  subtitle: 'Short label',
  description: 'What it does and why it matters.',
  stack: ['Next.js', 'TypeScript'],
  image: '/project-image.png',
  imageAlt: 'Accessible description of the screenshot',
  liveUrl: 'https://example.com',
  statusLabel: 'Private Project'
}
```

Notes:

- `liveUrl` is optional
- `statusLabel` is optional
- use `statusLabel: 'Private Project'` if you do not want to show a live link

## How to change the headshot

Replace:

- `public/nafizur-headshot.png`

If you want to use a different filename, update `profile.headshot` in `data/site-content.ts`.

## How to update the resume

Replace:

- `public/nafizur-rahman-resume.pdf`

If the filename changes, update `profile.resumeFile` in `data/site-content.ts`.

## How to update chatbot answers

Open `data/site-content.ts` and edit the `interviewQas` array.

Each item looks like:

```ts
{
  question: 'Tell me about Nafizur.',
  answer: 'Short interview-ready response.'
}
```

## Deploy

The site is already linked to Vercel.

To deploy manually:

```bash
npx vercel deploy --prod
```

## Suggested workflow for updates

```bash
git add .
git commit -m "Update portfolio content"
npm run build
npx vercel deploy --prod
```
