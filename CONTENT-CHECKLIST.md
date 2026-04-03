# Content Update Checklist

Use this when you want to update the portfolio quickly.

## Add a new project

1. Add the screenshot to `public/`
2. Open `data/site-content.ts`
3. Add a new item to the `projects` array
4. Run `npm run build`
5. Run:

```bash
git add .
git commit -m "Add new project"
git push
```

## Change the headshot

1. Replace `public/nafizur-headshot.png`
2. If the file name changes, update `profile.headshot` in `data/site-content.ts`
3. Run `npm run build`
4. Commit and push

## Update the resume

1. Replace `public/nafizur-rahman-resume.pdf`
2. If the file name changes, update `profile.resumeFile` in `data/site-content.ts`
3. Run `npm run build`
4. Commit and push

## Update text or chatbot answers

1. Open `data/site-content.ts`
2. Edit the hero text, about section, contact info, projects, or `interviewQas`
3. Run `npm run build`
4. Commit and push

## Main files to remember

- `data/site-content.ts`
- `public/nafizur-headshot.png`
- `public/nafizur-rahman-resume.pdf`
- `README.md`

## Normal update workflow

```bash
git checkout main
git pull
npm run build
git add .
git commit -m "Update portfolio"
git push
```

Pushing to `main` should trigger Vercel auto-deploy.
