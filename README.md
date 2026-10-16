# Joshua Ajagbe — Portfolio

A responsive personal portfolio for Joshua Tobi Ajagbe. Project details are grounded in public repository evidence, and the work-history section reflects roles and dates listed on Joshua’s LinkedIn profile without adding unsupported outcomes.

## Built with

- React
- Vite
- CSS (custom responsive design; no UI framework dependency)

The site uses semantic sections, keyboard-focus styling, a skip link, a working mobile navigation menu, reduced-motion support, and no externally hosted product screenshots. The AskHR workflow illustration is explicitly labeled conceptual.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

From this directory in PowerShell:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```powershell
npm run build
npm run preview
```

The production files are generated in `dist/`. `npm run preview` serves that build locally for a final check.

## Content and research

- Project and skill content is centralized in [`src/data/portfolio.js`](./src/data/portfolio.js).
- Source notes, verification status, caveats, and open questions are in [`RESEARCH.md`](./RESEARCH.md).
- Update the research report before adding employment, education, certification, volunteer, or project claims that are not already verified.
- No contact form is shown; the contact actions use a publicly listed email address and profile links.

## GitHub

This workspace currently sits inside a different parent Git checkout whose `origin` is `shalomakinade5-hash/Number-Guessing-Game`. Do **not** push this portfolio using that parent remote. To publish the site as its own repository, first create an empty GitHub repository for it, then run these commands from this folder in PowerShell:

```powershell
git init
git add .
git commit -m "Build Joshua Ajagbe portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<portfolio-repository>.git
git push -u origin main
```

Replace the placeholder URL with the new portfolio repository URL. These commands create a separate repository in this folder; they do not change the existing parent repository's remote.

## Vercel

1. Push the portfolio to its own GitHub repository using the instructions above.
2. In Vercel, import that repository.
3. Keep the project root at the repository root.
4. Use `npm run build` as the build command and `dist` as the output directory. Vercel detects Vite automatically in most cases.
5. Deploy. Future pushes to the connected branch trigger new deployments.

Alternatively, install the Vercel CLI and deploy from this directory:

```powershell
npm install --global vercel
vercel
vercel --prod
```
