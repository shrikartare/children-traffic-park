# Children Traffic Park

Interactive website for a children's traffic park built in collaboration with traffic police authorities — promoting traffic safety education and awareness.

## Live URL

**[https://shrikartare.github.io/children-traffic-park/](https://shrikartare.github.io/children-traffic-park/)**

## Tech Stack

- React 18 + TypeScript
- Create React App
- CSS Modules
- react-slick carousel

## Local Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

Output is written to the `build/` folder.

## Deployment (GitHub Pages)

| Trigger | How |
|---------|-----|
| **Automatic** | Push to `main` |
| **Manual** | **Actions → Deploy to GitHub Pages → Run workflow** |

### GitHub settings (once per repo)

1. **Settings → Actions → General → Workflow permissions** → **Read and write permissions**
2. **Settings → Pages → Source** → **Deploy from a branch** → `gh-pages` / **(root)**
3. Run workflow once to create `gh-pages`

Public repos work with GitHub Pages on the free plan.

### Manual deploy only

Remove the `push:` section from `.github/workflows/deploy.yml`; keep only `workflow_dispatch:`.

### Live site

`https://<your-github-username>.github.io/children-traffic-park/`
